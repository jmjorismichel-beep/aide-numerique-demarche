import { ICON_MAP } from './icons'

export default function StepIllustration({ visual }) {
  const Icon = ICON_MAP[visual]
  if (!Icon) return null
  return (
    <div className="step-illustration" aria-hidden="true">
      <Icon />
    </div>
  )
}
