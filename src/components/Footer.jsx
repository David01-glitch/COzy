import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brownDark text-cream mt-16">
      <div className="container-cozy py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-9 h-9 rounded-full bg-sage flex items-center justify-center text-cream font-serif text-lg">C</span>
            <span className="font-serif text-xl">Cozy Hobby Corner</span>
          </div>
          <p className="text-sm text-cream/80 leading-relaxed">
            A warm hobby blog for seniors — painting, knitting, woodworking, puzzles, and more.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link to="/category/painting" className="hover:text-sage">Painting Ideas</Link></li>
            <li><Link to="/category/knitting" className="hover:text-sage">Knitting & Crochet</Link></li>
            <li><Link to="/category/woodworking" className="hover:text-sage">Woodworking</Link></li>
            <li><Link to="/category/puzzles" className="hover:text-sage">Puzzles</Link></li>
            <li><Link to="/category/crafts" className="hover:text-sage">DIY Crafts</Link></li>
            <li><Link to="/category/creative" className="hover:text-sage">Creative Hobbies</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>cozyhobbycorner@gmail.com</li>
            <li>(503) 555-1876</li>
            <li>311 Maple Creek Rd</li>
            <li>Portland, OR 97205</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link to="/privacy" className="hover:text-sage">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-sage">Terms</Link></li>
            <li><Link to="/refund" className="hover:text-sage">Refund</Link></li>
            <li><Link to="/about" className="hover:text-sage">About</Link></li>
            <li><Link to="/contact" className="hover:text-sage">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15 py-5 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Cozy Hobby Corner. Made with care in Portland, OR.
      </div>
    </footer>
  )
}
