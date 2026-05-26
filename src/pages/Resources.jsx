import SectionHeading from '../components/SectionHeading'
import ExpandableCard from '../components/ExpandableCard'

const resources = [
  { id: 'r1', title: 'Beginner Supply Checklist', category: 'Getting Started',
    excerpt: 'A simple printable list of inexpensive supplies for your first six hobby projects.',
    body: 'Painting: watercolor paper, three primary tubes, one round brush, jar, paper towel.\nKnitting: chunky yarn, size 10 needles, scissors, yarn needle.\nWoodworking: pine 1x6 board, hand saw, hammer, wood glue, sandpaper.\nCrafting: cardstock, scissors, glue stick, washi tape, ruler.\nPuzzles: a 500-piece jigsaw, a card table, good lamp.\nJournaling: hardcover notebook, fine-tip pen, washi tape.' },
  { id: 'r2', title: 'Workspace Tips For Comfort', category: 'Home Setup',
    excerpt: 'How to arrange a small craft corner that is easy on the back, eyes, and hands.',
    body: 'Choose a chair with a firm back. Position a daylight lamp on the left if you are right-handed (and the reverse if left-handed). Keep tools within an arm’s reach. Use a rolling cart or a single basket — anything bigger becomes clutter. Take a five-minute stretch break every 30 minutes.' },
  { id: 'r3', title: 'Where To Buy Supplies', category: 'Shopping',
    excerpt: 'Honest places to find affordable craft and hobby supplies — online and in person.',
    body: 'Local dollar stores carry surprisingly good basics: glue, paper, ribbon, simple paints. For yarn and fabric, JOANN often has senior-discount Tuesdays. For woodworking, ask your local lumberyard for cut-offs — many give them away. Online, look at Dick Blick (art), Lion Brand (yarn), and Rockler (woodworking).' },
  { id: 'r4', title: 'Printable Patterns And Templates', category: 'Downloads',
    excerpt: 'Simple, large-print patterns you can print at home and follow with ease.',
    body: 'We are building a free library of senior-friendly patterns. Each PDF uses 14-point text, clear diagrams, and step numbers. Coming soon: scarf patterns, birdhouse plans, watercolor reference sheets, and card-making templates. Subscribe to the newsletter to get them first.' },
]

export default function Resources() {
  return (
    <div className="section">
      <div className="container-cozy">
        <SectionHeading eyebrow="Helpful Things" title="Resources & Guides" subtitle="Little extras that make starting and continuing your hobby easier." />
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map(r => <ExpandableCard key={r.id} {...r} />)}
        </div>
      </div>
    </div>
  )
}
