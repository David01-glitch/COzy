import { Link } from 'react-router-dom'
import heroImg from '../assets/images/hero/hero.jpg'
import SectionHeading from '../components/SectionHeading'
import ExpandableCard from '../components/ExpandableCard'
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'
import { categories, articles, community, faqs } from '../data/content'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cream">
        <div className="container-cozy py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sage font-semibold uppercase tracking-wider text-xs mb-3">Welcome To Our Corner</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brownDark leading-tight mb-5">
              Slow Down. Make Something Lovely.
            </h1>
            <p className="text-lg text-ink/80 mb-8 max-w-xl">
              A warm, unhurried home for hobbies in retirement — painting, knitting, woodworking, puzzles, and small daily crafts that fill an afternoon with quiet joy.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/blog" className="btn-primary">Read The Blog</Link>
              <Link to="/community" className="btn-outline">Join The Community</Link>
            </div>
          </div>
          <div className="relative">
            <img src={heroImg} alt="A cozy hobby workshop with painting supplies" className="rounded-3xl shadow-cozy w-full h-80 sm:h-[440px] object-cover" />
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-cozy p-5 max-w-xs">
              <p className="font-serif text-brownDark text-lg">“Every craft begins with a single quiet hour.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section">
        <div className="container-cozy">
          <SectionHeading
            eyebrow="Browse By Hobby"
            title="Featured Hobby Categories"
            subtitle="Pick a craft that calls to you today — every guide is gentle, clear, and made for taking your time."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(c => (
              <Link to={`/category/${c.slug}`} key={c.slug} className="card group">
                <img src={c.image} alt={c.title} loading="lazy" className="h-52 w-full object-cover group-hover:scale-[1.02] transition-transform" />
                <div className="p-6">
                  <h3 className="font-serif text-xl text-brownDark mb-2">{c.title}</h3>
                  <p className="text-ink/75">{c.blurb}</p>
                  <span className="inline-block mt-4 text-sageDark font-semibold">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Articles */}
      <section className="section bg-beige/40">
        <div className="container-cozy">
          <SectionHeading eyebrow="From The Blog" title="Trending Articles" subtitle="Slow projects readers loved this month." />
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map(a => (
              <ExpandableCard key={a.id} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* DIY Showcase */}
      <section className="section">
        <div className="container-cozy grid lg:grid-cols-2 gap-12 items-center">
          <img src={categories[4].image} alt="DIY Crafts" className="rounded-3xl shadow-cozy w-full h-80 object-cover" loading="lazy" />
          <div>
            <p className="text-sage font-semibold uppercase tracking-wider text-xs mb-2">DIY Showcase</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-brownDark mb-4">Little Projects, Big Smiles</h2>
            <p className="text-ink/80 text-lg mb-5">
              From dried-flower bookmarks to hand-stamped greeting cards, our DIY guides use simple materials and a relaxed pace.
              Each project ends with something you can gift, keep, or display proudly in the kitchen.
            </p>
            <ul className="space-y-2 text-ink/80 mb-6">
              <li>• 30–60 minute weekend crafts</li>
              <li>• Senior-friendly large print instructions</li>
              <li>• Inexpensive supplies from the dollar store</li>
            </ul>
            <Link to="/category/crafts" className="btn-primary">See DIY Crafts</Link>
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="section bg-cream">
        <div className="container-cozy">
          <SectionHeading eyebrow="Reader Stories" title="From Our Community" subtitle="Real notes from readers who picked up a craft this season." />
          <div className="grid md:grid-cols-3 gap-6">
            {community.map((s, i) => (
              <div key={i} className="card p-6">
                <img src={s.image} alt={s.name} className="w-20 h-20 rounded-full object-cover mb-4" loading="lazy" />
                <p className="text-ink/85 italic mb-4">“{s.quote}”</p>
                <p className="font-semibold text-brownDark">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-sage/15">
        <div className="container-cozy">
          <SectionHeading eyebrow="Kind Words" title="What Readers Are Saying" />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Helen R.', quote: 'The instructions feel like a kind friend explaining things slowly. I’ve started three new hobbies this year.' },
              { name: 'George T.', quote: 'I look forward to every Sunday newsletter. It’s the gentlest part of my week.' },
              { name: 'Diane M.', quote: 'Finally a hobby site that doesn’t shout at me. Big text, calm pictures, and honest advice.' },
              { name: 'Walter K.', quote: 'I built my first bookshelf in 30 years using one of their woodworking guides. My wife was thrilled.' },
            ].map((t, i) => (
              <div key={i} className="card p-7">
                <p className="text-ink/85 mb-4 font-serif text-lg italic">“{t.quote}”</p>
                <p className="font-semibold text-brownDark">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />

      {/* FAQ */}
      <section className="section">
        <div className="container-cozy">
          <SectionHeading eyebrow="Helpful Notes" title="Frequently Asked Questions" />
          <FAQ items={faqs} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-brownDark text-cream">
        <div className="container-cozy grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">Come Say Hello</h2>
            <p className="text-cream/85 text-lg mb-6">
              Have a project to share, a question about a guide, or just want to chat about your latest creation? We’d love to hear from you.
            </p>
            <Link to="/contact" className="inline-flex bg-sage hover:bg-sageDark text-white font-semibold px-6 py-3 rounded-full transition-colors">Contact Us</Link>
          </div>
          <div className="bg-cream/10 rounded-2xl p-6 space-y-2">
            <p><strong>Email:</strong> cozyhobbycorner@gmail.com</p>
            <p><strong>Phone:</strong> +1 (617) 529-7741</p>
            <p><strong>Address:</strong> 311 Maple Creek Rd, Portland, OR 97205</p>
          </div>
        </div>
      </section>
    </>
  )
}
