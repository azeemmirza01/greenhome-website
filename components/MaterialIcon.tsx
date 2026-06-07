const iconFontFamily = '"Material Symbols Outlined", sans-serif'

const baseVariation = "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
const filledVariation = "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"

export default function MaterialIcon({
  name,
  className = '',
  filled = false,
}: {
  name: string
  className?: string
  filled?: boolean
}) {
  return (
    <span
      className={`material-symbols-outlined not-italic normal-case ${className}`}
      style={{
        fontFamily: iconFontFamily,
        fontVariationSettings: filled ? filledVariation : baseVariation,
      }}
      aria-hidden
    >
      {name}
    </span>
  )
}
