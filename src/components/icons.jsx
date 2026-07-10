// Icônes simples, dessinées à la main, en art-ligne (style schématique, pas des captures
// d'écran réelles). Elles servent de repère visuel à côté d'une étape pour aider les
// stagiaires les moins à l'aise avec le texte à se représenter l'action demandée.

const common = { width: 40, height: 40, viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function PowerIcon() {
  return (
    <svg {...common}><circle cx="20" cy="21" r="12" /><line x1="20" y1="9" x2="20" y2="19" /></svg>
  )
}

export function SettingsIcon() {
  return (
    <svg {...common}>
      <circle cx="20" cy="20" r="5" />
      <path d="M20 6v4M20 30v4M6 20h4M30 20h4M10.5 10.5l2.8 2.8M26.7 26.7l2.8 2.8M10.5 29.5l2.8-2.8M26.7 13.3l2.8-2.8" />
    </svg>
  )
}

export function WifiIcon() {
  return (
    <svg {...common}>
      <path d="M8 17a17 17 0 0124 0" />
      <path d="M13 22a10 10 0 0114 0" />
      <path d="M18 27a4 4 0 014 0" />
      <circle cx="20" cy="31" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MouseIcon() {
  return (
    <svg {...common}>
      <rect x="13" y="6" width="14" height="28" rx="7" />
      <line x1="20" y1="6" x2="20" y2="16" />
    </svg>
  )
}

export function KeyboardIcon() {
  return (
    <svg {...common}>
      <rect x="5" y="12" width="30" height="18" rx="2" />
      <line x1="10" y1="18" x2="10" y2="18.1" /><line x1="16" y1="18" x2="16" y2="18.1" /><line x1="22" y1="18" x2="22" y2="18.1" /><line x1="28" y1="18" x2="28" y2="18.1" />
      <line x1="13" y1="24" x2="27" y2="24" />
    </svg>
  )
}

export function DocumentIcon() {
  return (
    <svg {...common}>
      <path d="M12 5h11l5 5v25H12z" /><path d="M23 5v5h5" /><line x1="16" y1="20" x2="24" y2="20" /><line x1="16" y1="26" x2="24" y2="26" />
    </svg>
  )
}

export function PhoneIcon() {
  return (
    <svg {...common}><rect x="12" y="4" width="16" height="32" rx="3" /><line x1="18" y1="31" x2="22" y2="31" /></svg>
  )
}

export function MailIcon() {
  return (
    <svg {...common}><rect x="5" y="10" width="30" height="20" rx="2" /><path d="M6 12l14 10 14-10" /></svg>
  )
}

export function CalendarIcon() {
  return (
    <svg {...common}><rect x="6" y="8" width="28" height="26" rx="2" /><line x1="6" y1="16" x2="34" y2="16" /><line x1="13" y1="4" x2="13" y2="11" /><line x1="27" y1="4" x2="27" y2="11" /></svg>
  )
}

export function IdCardIcon() {
  return (
    <svg {...common}><rect x="4" y="10" width="32" height="20" rx="2" /><circle cx="13" cy="20" r="3.5" /><line x1="21" y1="17" x2="30" y2="17" /><line x1="21" y1="22" x2="30" y2="22" /></svg>
  )
}

export function HouseIcon() {
  return (
    <svg {...common}><path d="M6 19l14-12 14 12" /><path d="M10 17v16h20V17" /></svg>
  )
}

export function BusIcon() {
  return (
    <svg {...common}><rect x="6" y="10" width="28" height="18" rx="3" /><line x1="6" y1="20" x2="34" y2="20" /><circle cx="13" cy="31" r="2.2" /><circle cx="27" cy="31" r="2.2" /></svg>
  )
}

export function LockIcon() {
  return (
    <svg {...common}><rect x="10" y="18" width="20" height="16" rx="2" /><path d="M14 18v-5a6 6 0 0112 0v5" /></svg>
  )
}

export const ICON_MAP = {
  power: PowerIcon,
  settings: SettingsIcon,
  wifi: WifiIcon,
  mouse: MouseIcon,
  keyboard: KeyboardIcon,
  document: DocumentIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  calendar: CalendarIcon,
  idcard: IdCardIcon,
  house: HouseIcon,
  bus: BusIcon,
  lock: LockIcon
}
