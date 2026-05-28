import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { trackEvent } from '../utils/analytics'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    trackEvent('contact_submit')
    setSent(true)
  }
  return (
    <div className="section">
      <div className="container-cozy">
        <SectionHeading eyebrow="Get In Touch" title="Contact Us" subtitle="We read every message. Expect a friendly reply within a day or two." />
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-5">
            <div className="card p-6">
              <h3 className="font-serif text-xl text-brownDark mb-2">Email</h3>
              <p className="text-ink/80">cozyhobbycorner@gmail.com</p>
            </div>
            <div className="card p-6">
              <h3 className="font-serif text-xl text-brownDark mb-2">Phone</h3>
              <p className="text-ink/80">+1 (617) 529-7741</p>
            </div>
            <div className="card p-6">
              <h3 className="font-serif text-xl text-brownDark mb-2">Address</h3>
              <p className="text-ink/80">311 Maple Creek Rd<br/>Portland, OR 97205</p>
            </div>
          </div>
          <div className="card p-7">
            {sent ? (
              <div className="text-center py-10">
                <h3 className="font-serif text-2xl text-brownDark mb-2">Thank you!</h3>
                <p className="text-ink/75">Your message has arrived in our inbox. We will reply soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-sand bg-cream focus:outline-none focus:border-sage" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-sand bg-cream focus:outline-none focus:border-sage" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea required rows="5" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-sand bg-cream focus:outline-none focus:border-sage" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
