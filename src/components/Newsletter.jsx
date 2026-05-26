import { useState } from 'react'
import { trackEvent } from '../utils/analytics'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    trackEvent('newsletter_signup', { email_domain: email.split('@')[1] || '' })
    setSent(true)
    setEmail('')
  }
  return (
    <section className="section bg-beige/60">
      <div className="container-cozy text-center max-w-2xl">
        <h2 className="font-serif text-3xl sm:text-4xl text-brownDark mb-3">Sunday Mornings, A Quiet Letter</h2>
        <p className="text-ink/75 mb-7 text-lg">
          Join our gentle weekly newsletter — one new hobby idea, a reader story, and a project for the week. Free, no clutter.
        </p>
        {sent ? (
          <p className="text-sageDark font-semibold">Thank you — please check your inbox.</p>
        ) : (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full border border-sand bg-white focus:outline-none focus:border-sage"
            />
            <button type="submit" className="btn-primary justify-center">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  )
}
