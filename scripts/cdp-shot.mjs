// Screenshot einer Sektion via Chrome DevTools Protocol.
// node cdp-shot.mjs <url> <out.png> <width> <selector> [mobile]
import fs from 'node:fs';

const [,, url, out, widthArg, selector, mobileArg] = process.argv;
const width = parseInt(widthArg || '1440', 10);
const mobile = mobileArg === 'mobile';
const height = mobile ? 844 : 1100;

let _id = 1;
function rpc(ws, method, params = {}) {
  const id = _id++;
  return new Promise((resolve, reject) => {
    const to = setTimeout(() => { ws.removeEventListener('message', onMsg); reject(new Error('timeout ' + method)); }, 20000);
    const onMsg = (ev) => {
      let m; try { m = JSON.parse(ev.data); } catch { return; }
      if (m.id === id) { clearTimeout(to); ws.removeEventListener('message', onMsg); m.error ? reject(new Error(method + ': ' + JSON.stringify(m.error))) : resolve(m.result); }
    };
    ws.addEventListener('message', onMsg);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

const res = await fetch(`http://localhost:9222/json/new?${encodeURIComponent(url)}`, { method: 'PUT' });
const tab = await res.json();
const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener('open', r, { once: true }));

try {
  await rpc(ws, 'Page.enable');
  await rpc(ws, 'Runtime.enable');
  await rpc(ws, 'Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: mobile ? 2 : 1, mobile });
  await rpc(ws, 'Page.navigate', { url });
  await new Promise(r => setTimeout(r, 5500));
  if (selector && selector !== '-') {
    await rpc(ws, 'Runtime.evaluate', {
      expression: `(()=>{const e=document.querySelector(${JSON.stringify(selector)});if(e){e.scrollIntoView({block:'start'});window.scrollBy(0,-20);return e.getBoundingClientRect().top;}return 'no-el';})()`,
      returnByValue: true,
    });
    await new Promise(r => setTimeout(r, 1200));
  }
  const { data } = await rpc(ws, 'Page.captureScreenshot', { format: 'png', fromSurface: true });
  fs.writeFileSync(out, Buffer.from(data, 'base64'));
  console.log('OK', out, width + 'px', mobile ? 'mobile' : 'desktop');
} catch (e) {
  console.error('FEHLER', e.message);
} finally {
  ws.close();
  process.exit(0);
}
