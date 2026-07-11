import { useState } from 'react'

export default function PasswordInput({ value, onChange, id = 'password', label = 'Mot de passe', showHint = false }) {
  const [visible, setVisible] = useState(false)
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <div className="password-wrap">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          value={value}
          onChange={e => onChange(e.target.value)}
          required
          minLength={6}
          autoComplete="new-password"
        />
        <button
          type="button"
          onClick={() => setVisible(v => !v)}
          aria-label={visible ? 'Masquer le mot de passe' : 'Voir le mot de passe'}
          title={visible ? 'Masquer le mot de passe' : 'Voir le mot de passe'}
        >
          {visible ? '🙈' : '👁️'}
        </button>
      </div>
      {showHint && <small className="field-hint">Au moins 6 caractères.</small>}
    </div>
  )
}
