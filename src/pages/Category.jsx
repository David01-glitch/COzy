import { useParams, Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ExpandableCard from '../components/ExpandableCard'
import { categories } from '../data/content'

const projects = {
  painting: [
    { id: 'p-wash', title: 'The Wet-On-Wet Wash', excerpt: 'A relaxing warm-up where water meets color and lets the brush wander.', body: 'Wet a sheet of watercolor paper with clear water. Drop in a generous amount of one color — watch it spread. Add a second color and let them touch. Let dry without touching. Try with sky blues, sunset oranges, and forest greens.' },
    { id: 'p-fruit', title: 'Painting A Simple Lemon', excerpt: 'A single piece of fruit is the perfect first subject — easy shape, lovely color.', body: 'Sketch a soft oval. Mix lemon yellow with a touch of orange. Paint the shaded side first while wet. Let dry, then add a thin line of leaf green at the base. Sign your work — your first still life is finished.' },
    { id: 'p-leaves', title: 'Pressed-Leaf Watercolor Cards', excerpt: 'Combine a walk outdoors with a quiet hour of painting.', body: 'Collect three small leaves. Press them between books overnight. The next morning, trace each leaf onto card stock and paint inside the outline with watercolor. Add a handwritten message. Mail to a friend.' },
  ],
  knitting: [
    { id: 'k-dish', title: 'Cotton Dishcloth (1 Evening)', excerpt: 'A perfect first project — finished in one evening with leftover cotton yarn.', body: 'Cast on 30 stitches with cotton yarn and size 7 needles. Knit every row for 8 inches. Cast off. You now have a soft, useful dishcloth. Make six — they make wonderful housewarming gifts in a small basket.' },
    { id: 'k-cowl', title: 'Beginner Cowl In Bulky Yarn', excerpt: 'Like a scarf, but joined in a circle — warm and elegant.', body: 'Use a circular needle (size 10) and a single skein of bulky yarn. Cast on 60 stitches and join in a round. Knit every round until the cowl measures 10 inches. Cast off loosely. Block gently with cool water.' },
  ],
  woodworking: [
    { id: 'w-shelf', title: 'A Small Wall Shelf', excerpt: 'One board, two brackets, an afternoon — a shelf for picture frames or plants.', body: 'Buy a 24-inch pine board and two simple metal brackets. Sand smooth. Apply a single coat of natural wax. Mount brackets to studs. Set the board on top. Style with a small framed photo and a trailing pothos plant.' },
    { id: 'w-box', title: 'Hinged Keepsake Box', excerpt: 'A small wooden box for letters, recipe cards, or grandchild treasures.', body: 'Cut six pieces of thin pine to 6"x4". Glue four pieces into a box. Add a base. Use two small hinges to attach a top. Sand smooth, wipe with linseed oil. Line the inside with felt for a soft finish.' },
  ],
  puzzles: [
    { id: 'pz-set', title: 'Setting Up A Puzzle Station', excerpt: 'How to make puzzles a daily ritual without dominating the dining table.', body: 'Use a foldable puzzle board with a cover. Choose a corner near natural light. Sort pieces into shallow trays by color. Work for 20-minute sessions. Keep a small notebook to log puzzles you’ve completed — surprisingly satisfying.' },
    { id: 'pz-crossword', title: 'Daily Crosswords For The Mind', excerpt: 'A simple ritual that keeps the brain happy and the morning slow.', body: 'Pick one puzzle a day from a senior-friendly book or the newspaper. Work in pencil. Don’t time yourself. Look up answers when stuck — that’s how words enter your memory. Make this part of your morning coffee routine.' },
  ],
  crafts: [
    { id: 'cr-card', title: 'Pressed Flower Cards', excerpt: 'A craft that connects gardening, memory, and gift-giving.', body: 'Press small flowers (pansies and forget-me-nots work well) between heavy books for two weeks. Glue onto folded blank cards using a tiny dab of craft glue. Cover with clear contact paper for protection. Write a note inside.' },
    { id: 'cr-wreath', title: 'Simple Seasonal Wreath', excerpt: 'A grapevine wreath you can re-style four times a year.', body: 'Start with a plain 12-inch grapevine wreath. Tie on a ribbon in the season’s color. Tuck in three small accents — pinecones in winter, dried lavender in spring, faux leaves in fall. Switch out as the seasons change.' },
  ],
  creative: [
    { id: 'cv-walk', title: 'The Photo-A-Day Walk', excerpt: 'A gentle creative habit that pairs movement with noticing.', body: 'Take a short walk each morning. Use your phone to capture one photograph — a flower, a shadow, a doorway. Save them in a single album. After a month, you have a quiet diary of your neighborhood.' },
    { id: 'cv-journal', title: 'Five-Line Gratitude Journal', excerpt: 'Five lines a day, no more — a hobby that fits in any morning.', body: 'Each morning, write five short lines: the date, weather, one thing you saw, one person you thought of, one tiny gratitude. After 30 days, you will have a small treasure to read back through.' },
  ],
}

export default function Category() {
  const { slug } = useParams()
  const cat = categories.find(c => c.slug === slug)
  if (!cat) {
    return (
      <div className="container-cozy section text-center">
        <h1 className="font-serif text-3xl text-brownDark mb-3">Category Not Found</h1>
        <Link to="/" className="btn-primary">Back Home</Link>
      </div>
    )
  }
  const items = projects[slug] || []
  return (
    <div>
      <div className="bg-beige/50">
        <div className="container-cozy py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sage font-semibold uppercase tracking-wider text-xs mb-2">Category</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-brownDark mb-4">{cat.title}</h1>
            <p className="text-ink/80 text-lg">{cat.blurb}</p>
          </div>
          <img src={cat.image} alt={cat.title} className="rounded-3xl shadow-cozy h-72 w-full object-cover" />
        </div>
      </div>
      <div className="section">
        <div className="container-cozy">
          <SectionHeading eyebrow="Projects To Try" title={`${cat.title} Projects`} subtitle="Tap Read More on any project to expand the full instructions on this page." />
          <div className="grid md:grid-cols-2 gap-6">
            {items.map(p => <ExpandableCard key={p.id} {...p} category={cat.title} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
