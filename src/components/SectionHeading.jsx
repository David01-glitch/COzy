export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-10 ${center ? 'text-center max-w-2xl mx-auto' : ''}`}>
      {eyebrow && <p className="text-sage font-semibold uppercase tracking-wider text-xs mb-2">{eyebrow}</p>}
      <h2 className="font-serif text-3xl sm:text-4xl text-brownDark mb-3">{title}</h2>
      {subtitle && <p className="text-ink/75 text-lg">{subtitle}</p>}
    </div>
  )
}
