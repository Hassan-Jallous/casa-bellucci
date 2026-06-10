'use client';

import { useState, type CSSProperties, type FormEvent } from 'react';
import { useDict } from '@/lib/i18n/LanguageProvider';

// Schlichtes, vorhandenes Form-Styling: es gibt im Custom-CSS keine eigenen
// Form-Klassen, daher minimale, semantische Inline-Styles auf Basis der
// bestehenden CSS-Variablen (--surface, --line, --ink, --radius). Der Submit
// nutzt die vorhandene Klasse .btn.btn-solid (Gold-Button) aus vivid.css.
const fieldsetStyle: CSSProperties = {
  border: 0,
  margin: 0,
  padding: 0,
  display: 'grid',
  gap: 18,
};

const rowStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: 18,
};

const labelStyle: CSSProperties = {
  display: 'block',
  fontSize: 13,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  color: 'var(--ink-muted)',
  marginBottom: 8,
};

const optionalStyle: CSSProperties = {
  textTransform: 'none',
  letterSpacing: 0,
  fontStyle: 'italic',
};

const controlStyle: CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '13px 16px',
  fontSize: 16,
  fontFamily: 'inherit',
  color: 'var(--ink)',
  background: 'var(--surface)',
  border: '1px solid var(--line, rgba(43, 31, 18, 0.18))',
  borderRadius: 'var(--radius, 10px)',
  outline: 'none',
};

const textareaStyle: CSSProperties = {
  ...controlStyle,
  minHeight: 140,
  resize: 'vertical',
};

// Honeypot off-screen, NICHT display:none (Bots fuellen display:none-Felder
// teils trotzdem; off-screen plus aria-hidden ist robuster).
const honeypotStyle: CSSProperties = {
  position: 'absolute',
  left: '-9999px',
  top: 'auto',
  width: 1,
  height: 1,
  overflow: 'hidden',
};

const successStyle: CSSProperties = {
  background: 'var(--surface)',
  border: '1px solid var(--line, rgba(43, 31, 18, 0.18))',
  borderRadius: 'var(--radius, 10px)',
  padding: '28px 26px',
};

const errorStyle: CSSProperties = {
  color: 'var(--ink)',
  background: 'var(--accent-soft, #FFF4C9)',
  border: '1px solid var(--accent, #E0B92E)',
  borderRadius: 'var(--radius, 10px)',
  padding: '12px 16px',
  fontSize: 15,
};

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EventInquiryForm() {
  const d = useDict();
  const f = d.landingEvents.form;

  const [state, setState] = useState<SubmitState>('idle');
  const [validationMsg, setValidationMsg] = useState<string>('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState(''); // Honeypot

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === 'submitting') return;

    setValidationMsg('');

    // Client-seitige Pflichtfeld-Validierung
    if (!name.trim() || !email.trim() || !message.trim()) {
      setValidationMsg(f.validation.required);
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setValidationMsg(f.validation.email);
      return;
    }

    setState('submitting');

    try {
      const res = await fetch('/api/event-request.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          date,
          guests,
          occasion,
          message: message.trim(),
          // Seitensprache fuer die lokalisierte Bestaetigungsmail (de/en/it).
          lang:
            typeof document !== 'undefined'
              ? document.documentElement.lang || 'de'
              : 'de',
          company, // Honeypot: muss leer bleiben
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (res.ok && data?.ok) {
        setState('success');
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div style={successStyle} role="status" aria-live="polite">
        <h3 style={{ marginTop: 0 }}>{f.success.title}</h3>
        <p style={{ marginBottom: 0 }}>{f.success.body}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-describedby="event-form-intro">
      <p id="event-form-intro" className="lede" style={{ marginTop: 0 }}>
        {f.intro}
      </p>

      <fieldset style={fieldsetStyle} disabled={state === 'submitting'}>
        <div style={rowStyle}>
          <div>
            <label style={labelStyle} htmlFor="ev-name">
              {f.labels.name}
            </label>
            <input
              id="ev-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={f.placeholders.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={controlStyle}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="ev-email">
              {f.labels.email}
            </label>
            <input
              id="ev-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={f.placeholders.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={controlStyle}
            />
          </div>
        </div>

        <div style={rowStyle}>
          <div>
            <label style={labelStyle} htmlFor="ev-phone">
              {f.labels.phone} <span style={optionalStyle}>({f.optional})</span>
            </label>
            <input
              id="ev-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={f.placeholders.phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={controlStyle}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="ev-date">
              {f.labels.date} <span style={optionalStyle}>({f.optional})</span>
            </label>
            <input
              id="ev-date"
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={controlStyle}
            />
          </div>
        </div>

        <div style={rowStyle}>
          <div>
            <label style={labelStyle} htmlFor="ev-guests">
              {f.labels.guests} <span style={optionalStyle}>({f.optional})</span>
            </label>
            <input
              id="ev-guests"
              name="guests"
              type="number"
              min={1}
              inputMode="numeric"
              placeholder={f.placeholders.guests}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              style={controlStyle}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="ev-occasion">
              {f.labels.occasion} <span style={optionalStyle}>({f.optional})</span>
            </label>
            <select
              id="ev-occasion"
              name="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              style={controlStyle}
            >
              <option value="">{f.occasionOptions.placeholder}</option>
              <option value="firmenfeier">{f.occasionOptions.firmenfeier}</option>
              <option value="geburtstag">{f.occasionOptions.geburtstag}</option>
              <option value="weihnachtsfeier">{f.occasionOptions.weihnachtsfeier}</option>
              <option value="private">{f.occasionOptions.private}</option>
              <option value="sonstiges">{f.occasionOptions.sonstiges}</option>
            </select>
          </div>
        </div>

        <div>
          <label style={labelStyle} htmlFor="ev-message">
            {f.labels.message}
          </label>
          <textarea
            id="ev-message"
            name="message"
            required
            placeholder={f.placeholders.message}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={textareaStyle}
          />
        </div>

        {/* Honeypot, off-screen statt display:none */}
        <div style={honeypotStyle} aria-hidden="true">
          <label htmlFor="ev-company">Company</label>
          <input
            id="ev-company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        {validationMsg ? (
          <p style={errorStyle} role="alert">
            {validationMsg}
          </p>
        ) : null}

        {state === 'error' ? (
          <p style={errorStyle} role="alert">
            {f.error}
          </p>
        ) : null}

        <div className="contact-actions">
          <button type="submit" className="btn btn-solid" disabled={state === 'submitting'}>
            {state === 'submitting' ? f.submitting : f.submit}
          </button>
        </div>
      </fieldset>
    </form>
  );
}
