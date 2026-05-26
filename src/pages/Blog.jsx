import SectionHeading from '../components/SectionHeading'
import ExpandableCard from '../components/ExpandableCard'
import { articles, categories } from '../data/content'

export default function Blog() {
  const more = [
    { id: 'jigsaw-zen', title: 'Why Jigsaw Puzzles Soothe The Mind', image: categories[3].image, category: 'Puzzles',
      excerpt: 'A puzzle is a meditation in pieces — here is how to choose one that suits a quiet evening.',
      body: 'Look for 500-piece puzzles with bold imagery and clear color blocks. Set up on a card table you can leave out for days. Sort edges first, then group by color. Work in 20-minute sessions with a cup of tea. The goal is not to finish — it is to enjoy the process.' },
    { id: 'card-making', title: 'Hand-Stamped Greeting Cards', image: categories[4].image, category: 'DIY Crafts',
      excerpt: 'A small craft that turns into a thoughtful gift for every birthday, holiday, and thinking-of-you moment.',
      body: 'You will need plain folded cards, a few rubber stamps, an ink pad, and a thin ribbon. Press the stamp gently and lift straight up to avoid smudges. Add a small handwritten note inside. Keep a box of finished cards in a drawer — you will always have one ready when you need it.' },
    { id: 'garden-journal', title: 'Starting A Garden Journal', image: categories[5].image, category: 'Creative',
      excerpt: 'Notes, sketches, and pressed leaves — a journal becomes a quiet record of seasons.',
      body: 'Choose a hardcover blank notebook with thick pages. Each week, write the date, the weather, and one thing blooming. Press a leaf or petal between waxed paper and tape it in. Over a year, the journal becomes a beautiful keepsake — and a reason to step outside daily.' },
  ]
  return (
    <div className="section">
      <div className="container-cozy">
        <SectionHeading eyebrow="The Blog" title="Stories, Guides, And Slow Projects" subtitle="Articles you can read in five minutes — and projects you can finish over a quiet weekend." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...articles, ...more].map(a => (
            <ExpandableCard key={a.id} {...a} />
          ))}
        </div>
      </div>
    </div>
  )
}
