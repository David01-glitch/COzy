import SectionHeading from '../components/SectionHeading'
import { community } from '../data/content'

export default function Community() {
  return (
    <div className="section">
      <div className="container-cozy">
        <SectionHeading eyebrow="Together" title="Our Community" subtitle="Readers from across the country share what they’re making, learning, and loving." />
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {community.map((s, i) => (
            <div key={i} className="card p-6">
              <img src={s.image} alt={s.name} className="w-24 h-24 rounded-full object-cover mb-4" loading="lazy" />
              <p className="text-ink/85 italic mb-4 font-serif text-lg">“{s.quote}”</p>
              <p className="font-semibold text-brownDark">{s.name}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto bg-beige/50 rounded-3xl p-8">
          <h3 className="font-serif text-2xl text-brownDark mb-3">Share Your Project</h3>
          <p className="text-ink/80 mb-4">
            We love featuring readers in our weekly newsletter. Send a photo of what you’re working on along with a sentence or two
            about your hobby. Email us at <strong>cozyhobbycorner@gmail.com</strong>.
          </p>
          <p className="text-ink/70 text-sm">
            By submitting, you allow us to share your photo and first name on our blog and newsletter.
          </p>
        </div>
      </div>
    </div>
  )
}
