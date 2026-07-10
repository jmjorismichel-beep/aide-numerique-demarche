import { useState } from 'react'

export default function PasswordInput({ value, onChange, id = 'password', label = 'Mot de passe' }) {
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
        <button type="button" onClick={() => setVisible(v => !v)}>
          {visible ? 'Masquer' : 'Voir'}
        </button>
      </div>
    </div>
  )
}
