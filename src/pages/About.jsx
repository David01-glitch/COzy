import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <div className="container-cozy section">
      <SectionHeading eyebrow="Our Story" title="About Cozy Hobby Corner" subtitle="Born from a love of slow afternoons and the quiet satisfaction of making something with your hands." />
      <div className="max-w-3xl mx-auto space-y-6 text-ink/85 text-lg">
        <p>
          Cozy Hobby Corner began in a small Portland workshop where neighbors gathered on Saturday mornings to share crafts, recipes, and stories. Over coffee and quilt squares, we realized how few hobby resources spoke kindly to seniors — most assumed speed, gadgets, or skills we didn’t need.
        </p>
        <p>
          So we built our own corner of the internet. A calm place where the instructions are easy to read, the projects don’t require fancy tools, and the pace is always set by you. Whether you’re returning to a hobby from decades ago or trying something brand new, you’re welcome here.
        </p>
        <h3 className="font-serif text-2xl text-brownDark pt-4">What We Believe</h3>
        <ul className="space-y-3">
          <li>• Hobbies are for everyone, at every age and every skill level.</li>
          <li>• Good instructions use clear words, larger text, and no rush.</li>
          <li>• A finished project is a small celebration, no matter how simple.</li>
          <li>• Community matters — we love hearing what you’re making.</li>
        </ul>
        <h3 className="font-serif text-2xl text-brownDark pt-4">Our Team</h3>
        <p>
          Our small team includes a retired art teacher, a lifelong knitter, a hobby woodworker, and a community gardener — all of us writing from experience, not theory. Every guide is tested in our own homes before it reaches yours.
        </p>
      </div>
    </div>
  )
}
