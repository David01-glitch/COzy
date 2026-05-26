import { useState } from 'react'

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {items.map((item, i) => (
        <div key={i} className="card">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex justify-between items-center text-left p-5 font-serif text-lg text-brownDark hover:bg-cream transition-colors"
          >
            {item.q}
            <span className={`text-sage text-2xl transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <p className="px-5 pb-5 text-ink/80">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
