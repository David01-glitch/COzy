import { useState } from 'react'

export default function ExpandableCard({ image, category, title, excerpt, body }) {
  const [open, setOpen] = useState(false)
  return (
    <article className="card flex flex-col h-full">
      {image && (
        <img src={image} alt={title} loading="lazy" className="h-52 w-full object-cover" />
      )}
      <div className="p-6 flex flex-col flex-1">
        {category && <span className="text-xs font-semibold uppercase tracking-wider text-sageDark mb-2">{category}</span>}
        <h3 className="font-serif text-xl text-brownDark mb-2">{title}</h3>
        <p className="text-ink/75 text-base">{excerpt}</p>
        <div
          className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-beige pt-4 text-ink/85 whitespace-pre-line">
              {body}
            </div>
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="mt-5 self-start text-sageDark font-semibold hover:text-sage transition-colors"
        >
          {open ? 'Show Less ↑' : 'Read More →'}
        </button>
      </div>
    </article>
  )
}
