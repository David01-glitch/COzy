import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (!localStorage.getItem('cozy-cookies-ok')) setShow(true)
  }, [])
  if (!show) return null
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 bg-white border border-beige rounded-2xl shadow-cozy p-5">
      <p className="text-sm text-ink mb-3">
        We use cookies to keep this site working smoothly and to understand which articles are most loved. By continuing, you agree to our cookie use.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => { localStorage.setItem('cozy-cookies-ok', '1'); setShow(false) }}
          className="bg-sage hover:bg-sageDark text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
        >
          Accept
        </button>
        <button
          onClick={() => setShow(false)}
          className="text-sm font-semibold px-4 py-2 rounded-full text-brown hover:bg-beige transition-colors"
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}
