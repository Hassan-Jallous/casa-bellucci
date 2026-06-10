'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './admin.module.css';

// ── Konfiguration ──
// Lokal laeuft das PHP-Backend cross-port (z.B. http://localhost:8080),
// in Prod same-origin (leer).
const API_BASE = process.env.NEXT_PUBLIC_MENU_API_BASE ?? '';
const TOKEN_KEY = 'casa_bellucci_token';

type MenuKey = 'fruehstueck' | 'lunch' | 'dinner' | 'weine';

const CARDS: { key: MenuKey; title: string; sub: string }[] = [
  { key: 'fruehstueck', title: 'Frühstück', sub: 'Frühstück & Brunch' },
  { key: 'lunch', title: 'Lunch', sub: 'Mittagskarte · Pranzo' },
  { key: 'dinner', title: 'Dinner', sub: 'Abendkarte · Cena' },
  { key: 'weine', title: 'Weinkarte', sub: 'Weine, Aperitivo & Spirituosen' },
];

interface MenuStatus {
  exists: boolean;
  url?: string;
  size?: number;
  uploadedAt?: string;
}
type StatusMap = Partial<Record<MenuKey, MenuStatus | null>>;

// ── Helpers ──
function fmtDate(iso: string): string {
  const d = new Date(iso);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()} um ${p(
    d.getHours()
  )}:${p(d.getMinutes())} Uhr`;
}

// ── Alert-Icons ──
function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg
      className={styles.fileRowIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
      />
    </svg>
  );
}

type Alert = { type: 'success' | 'error'; text: string } | null;

function AlertBox({ alert }: { alert: Alert }) {
  if (!alert) return null;
  const cls =
    alert.type === 'success'
      ? `${styles.alert} ${styles.alertSuccess}`
      : `${styles.alert} ${styles.alertError}`;
  const live = alert.type === 'error' ? 'assertive' : 'polite';
  return (
    <div
      aria-live={live}
      className={cls}
      role={alert.type === 'error' ? 'alert' : 'status'}
    >
      {alert.type === 'success' ? <CheckIcon /> : <ErrorIcon />}
      {alert.text}
    </div>
  );
}

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [view, setView] = useState<'login' | 'dash'>('login');

  // Login state
  const [pw, setPw] = useState('');
  const [loginBusy, setLoginBusy] = useState(false);
  const [loginMsg, setLoginMsg] = useState<Alert>(null);

  // Status of all menus
  const [status, setStatus] = useState<StatusMap>({});

  // Per-card upload state
  const [files, setFiles] = useState<Partial<Record<MenuKey, File | null>>>({});
  const [uploadBusy, setUploadBusy] = useState<Partial<Record<MenuKey, boolean>>>(
    {}
  );
  const [uploadMsg, setUploadMsg] = useState<Partial<Record<MenuKey, Alert>>>({});
  const fileInputs = useRef<Partial<Record<MenuKey, HTMLInputElement | null>>>(
    {}
  );

  // Password change
  const [pwOpen, setPwOpen] = useState(false);
  const [pwCurrent, setPwCurrent] = useState('');
  const [pwNew, setPwNew] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [pwBusy, setPwBusy] = useState(false);
  const [pwMsg, setPwMsg] = useState<Alert>(null);

  // Keep a live ref to token for use inside fetch handlers without re-binding.
  const tokenRef = useRef<string | null>(null);
  tokenRef.current = token;

  const logout = useCallback(() => {
    setToken(null);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(TOKEN_KEY);
    }
    setView('login');
    setPw('');
  }, []);

  const loadStatus = useCallback(async () => {
    const t = tokenRef.current;
    if (!t) return;
    try {
      const res = await fetch(`${API_BASE}/api/status.php`, {
        headers: { Authorization: `Bearer ${t}` },
      });
      if (res.status === 401) {
        logout();
        return;
      }
      const data = (await res.json()) as StatusMap;
      setStatus(data);
    } catch {
      // silent
    }
  }, [logout]);

  // Restore session on mount.
  useEffect(() => {
    const stored = sessionStorage.getItem(TOKEN_KEY);
    if (stored) {
      setToken(stored);
      setView('dash');
    } else {
      setView('login');
    }
  }, []);

  // Load status whenever we have a token and are on the dashboard.
  useEffect(() => {
    if (token && view === 'dash') {
      loadStatus();
    }
  }, [token, view, loadStatus]);

  // ── Login ──
  async function login() {
    const value = pw.trim();
    if (!value) return;
    setLoginBusy(true);
    setLoginMsg(null);
    try {
      const res = await fetch(`${API_BASE}/api/login.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: value }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Falsches Passwort');
      sessionStorage.setItem(TOKEN_KEY, data.token);
      setToken(data.token);
      setView('dash');
    } catch (e) {
      setLoginMsg({ type: 'error', text: (e as Error).message });
    } finally {
      setLoginBusy(false);
    }
  }

  // ── File selection ──
  function onFileChange(key: MenuKey, fileList: FileList | null) {
    setFiles((prev) => ({ ...prev, [key]: fileList?.[0] ?? null }));
  }

  // ── Upload ──
  async function upload(key: MenuKey) {
    const file = files[key];
    if (!file) {
      setUploadMsg((prev) => ({
        ...prev,
        [key]: { type: 'error', text: 'Bitte zuerst eine PDF auswählen' },
      }));
      return;
    }

    setUploadBusy((prev) => ({ ...prev, [key]: true }));
    setUploadMsg((prev) => ({ ...prev, [key]: null }));

    const fd = new FormData();
    fd.append('file', file);
    fd.append('menuType', key);

    try {
      const res = await fetch(`${API_BASE}/api/upload.php`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${tokenRef.current ?? ''}` },
        body: fd,
      });
      if (res.status === 401) {
        logout();
        return;
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload fehlgeschlagen');
      setUploadMsg((prev) => ({
        ...prev,
        [key]: { type: 'success', text: 'Erfolgreich aktualisiert' },
      }));
      // Reset file selection
      setFiles((prev) => ({ ...prev, [key]: null }));
      const input = fileInputs.current[key];
      if (input) input.value = '';
      // Status nach kurzem Delay neu laden.
      setTimeout(() => {
        loadStatus();
      }, 1200);
      // Erfolgsmeldung nach 4s wieder ausblenden.
      setTimeout(() => {
        setUploadMsg((prev) => {
          if (prev[key]?.type === 'success') {
            return { ...prev, [key]: null };
          }
          return prev;
        });
      }, 4000);
    } catch (e) {
      setUploadMsg((prev) => ({
        ...prev,
        [key]: { type: 'error', text: (e as Error).message },
      }));
    } finally {
      setUploadBusy((prev) => ({ ...prev, [key]: false }));
    }
  }

  // ── Password Change ──
  async function changePassword() {
    const current = pwCurrent.trim();
    const newPw = pwNew.trim();
    const confirm = pwConfirm.trim();

    if (!current || !newPw || !confirm) {
      setPwMsg({ type: 'error', text: 'Bitte alle Felder ausfüllen' });
      return;
    }
    if (newPw !== confirm) {
      setPwMsg({ type: 'error', text: 'Passwörter stimmen nicht überein' });
      return;
    }
    if (newPw.length < 12) {
      setPwMsg({ type: 'error', text: 'Mindestens 12 Zeichen' });
      return;
    }

    setPwBusy(true);
    setPwMsg(null);

    try {
      const res = await fetch(`${API_BASE}/api/change-password.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenRef.current ?? ''}`,
        },
        body: JSON.stringify({
          currentPassword: current,
          newPassword: newPw,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Fehler');
      sessionStorage.setItem(TOKEN_KEY, data.token);
      setToken(data.token);
      setPwMsg({ type: 'success', text: 'Passwort geändert' });
      setPwCurrent('');
      setPwNew('');
      setPwConfirm('');
      setTimeout(() => {
        setPwMsg(null);
        setPwOpen(false);
      }, 3000);
    } catch (e) {
      setPwMsg({ type: 'error', text: (e as Error).message });
    } finally {
      setPwBusy(false);
    }
  }

  const dashboard = useMemo(() => view === 'dash', [view]);

  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <h1>Casa Bellucci</h1>
          <p>Speisekarten verwalten</p>
        </div>

        {/* ════ LOGIN ════ */}
        {!dashboard && (
          <div>
            <div className={styles.loginCard}>
              <label htmlFor="pw">Passwort</label>
              <input
                type="password"
                id="pw"
                placeholder="Passwort eingeben"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') login();
                }}
              />
              <button
                className={styles.btnGold}
                onClick={login}
                disabled={loginBusy}
              >
                {loginBusy ? <span className={styles.spinner} /> : 'Anmelden'}
              </button>
              <AlertBox alert={loginMsg ?? null} />
            </div>
          </div>
        )}

        {/* ════ DASHBOARD ════ */}
        {dashboard && (
          <div>
            {CARDS.map((card) => {
              const s = status[card.key];
              const active = !!(s && s.exists);
              const metaParts: string[] = [];
              if (active && s) {
                if (s.uploadedAt) metaParts.push(fmtDate(s.uploadedAt));
                if (s.size) metaParts.push(`${Math.round(s.size / 1024)} KB`);
              }
              const file = files[card.key] ?? null;
              const busy = !!uploadBusy[card.key];

              return (
                <div className={styles.menuItem} key={card.key}>
                  <div className={styles.menuItemTop}>
                    <div className={styles.menuItemInfo}>
                      <h3>{card.title}</h3>
                      <p>{card.sub}</p>
                      <div className={styles.menuMeta}>
                        {metaParts.join(' · ')}
                      </div>
                    </div>
                    <span
                      className={`${styles.badge} ${
                        active ? styles.badgeActive : styles.badgeEmpty
                      }`}
                    >
                      <span className={styles.badgeDot} />{' '}
                      {active ? 'Aktiv' : 'Leer'}
                    </span>
                  </div>
                  <label
                    aria-label={`${card.title} PDF-Datei auswählen`}
                    className={styles.fileRow}
                  >
                    <UploadIcon />
                    <span
                      className={`${styles.fileRowText} ${
                        file ? styles.hasFile : ''
                      }`}
                    >
                      {file ? file.name : 'PDF-Datei auswählen...'}
                    </span>
                    <span className={styles.fileRowHint}>max 10 MB</span>
                    <input
                      type="file"
                      accept=".pdf,application/pdf"
                      ref={(el) => {
                        fileInputs.current[card.key] = el;
                      }}
                      onChange={(e) => onFileChange(card.key, e.target.files)}
                    />
                  </label>
                  <button
                    className={`${styles.btnGold} ${styles.btnUpload}`}
                    onClick={() => upload(card.key)}
                    disabled={busy}
                  >
                    {busy ? (
                      <>
                        <span className={styles.spinner} /> Hochladen...
                      </>
                    ) : (
                      'Hochladen'
                    )}
                  </button>
                  <AlertBox alert={uploadMsg[card.key] ?? null} />
                </div>
              );
            })}

            {/* Password Change Section */}
            <div className={`${styles.menuItem} ${styles.pwCard}`}>
              <div className={`${styles.menuItemTop} ${styles.pwCardTop}`}>
                <div className={styles.menuItemInfo}>
                  <h3>Passwort</h3>
                  <p>Admin-Zugang verwalten</p>
                </div>
                <button
                  aria-controls="admin-password-form"
                  aria-expanded={pwOpen}
                  className={`${styles.badge} ${styles.badgeEmpty} ${styles.pwToggle}`}
                  onClick={() => setPwOpen((o) => !o)}
                  type="button"
                >
                  <span className={styles.badgeDot} /> Ändern
                </button>
              </div>
              {pwOpen && (
                <div className={styles.pwForm} id="admin-password-form">
                  <div className={styles.pwFields}>
                    <div className={styles.pwField}>
                      <label htmlFor="admin-current-password">
                        Aktuelles Passwort
                      </label>
                      <input
                        className={styles.pwInput}
                        id="admin-current-password"
                        type="password"
                        value={pwCurrent}
                        onChange={(e) => setPwCurrent(e.target.value)}
                      />
                    </div>
                    <div className={styles.pwField}>
                      <label htmlFor="admin-new-password">
                        Neues Passwort
                      </label>
                      <input
                        className={styles.pwInput}
                        id="admin-new-password"
                        type="password"
                        value={pwNew}
                        onChange={(e) => setPwNew(e.target.value)}
                      />
                    </div>
                    <div className={styles.pwField}>
                      <label htmlFor="admin-confirm-password">
                        Neues Passwort bestätigen
                      </label>
                      <input
                        className={styles.pwInput}
                        id="admin-confirm-password"
                        type="password"
                        value={pwConfirm}
                        onChange={(e) => setPwConfirm(e.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    className={`${styles.btnGold} ${styles.btnUpload}`}
                    onClick={changePassword}
                    disabled={pwBusy}
                    type="button"
                  >
                    {pwBusy ? (
                      <>
                        <span className={styles.spinner} /> Speichern...
                      </>
                    ) : (
                      'Passwort ändern'
                    )}
                  </button>
                  <AlertBox alert={pwMsg ?? null} />
                </div>
              )}
            </div>

            <button className={styles.btnLogout} onClick={logout} type="button">
              Abmelden
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
