import painting from '../assets/images/hobbies/painting.jpg'
import knitting from '../assets/images/hobbies/knitting.jpg'
import woodworking from '../assets/images/hobbies/woodworking.jpg'
import puzzles from '../assets/images/hobbies/puzzles.jpg'
import crafts from '../assets/images/hobbies/crafts.jpg'
import creative from '../assets/images/hobbies/creative.jpg'
import b1 from '../assets/images/blog/b1.jpg'
import b2 from '../assets/images/blog/b2.jpg'
import b3 from '../assets/images/blog/b3.jpg'
import c1 from '../assets/images/community/c1.jpg'
import c2 from '../assets/images/community/c2.jpg'
import c3 from '../assets/images/community/c3.jpg'

export const categories = [
  { slug: 'painting', title: 'Painting Ideas', image: painting, blurb: 'Watercolors, acrylics, and gentle techniques that bring color into quiet afternoons.' },
  { slug: 'knitting', title: 'Knitting & Crochet', image: knitting, blurb: 'Cozy scarves, blankets, and beginner-friendly stitches you can pick up anytime.' },
  { slug: 'woodworking', title: 'Woodworking Projects', image: woodworking, blurb: 'Small workshop builds — birdhouses, shelves, and keepsake boxes for the home.' },
  { slug: 'puzzles', title: 'Puzzle & Brain Games', image: puzzles, blurb: 'Jigsaws, crosswords, and gentle puzzles that keep the mind happy and sharp.' },
  { slug: 'crafts', title: 'DIY Crafts', image: crafts, blurb: 'Card making, paper crafts, and decorative ideas using simple supplies.' },
  { slug: 'creative', title: 'Creative Hobbies', image: creative, blurb: 'Journaling, photography, gardening — calm new pastimes to try this season.' },
]

export const articles = [
  {
    id: 'watercolor-beginners',
    title: 'A Gentle Start to Watercolor Painting',
    image: b1,
    excerpt: 'Begin with three colors, one brush, and a quiet hour. Watercolor rewards patience more than skill.',
    body: `Watercolor is a forgiving medium — perfect for beginners. Start with a small set of student-grade paints in red, yellow, and blue. Use thick cold-pressed paper (140 lb works well), one round brush (size 8), and a jar of clean water.\n\nWarm up by painting simple shapes. Let the paint puddle, watch it dry, and observe how colors mix on the page. Don’t try to control everything — the magic is in the bloom.\n\nKeep your first sessions short, around 20 minutes. Frame your favorite practice piece and hang it where you’ll see it every day.`,
    category: 'Painting',
  },
  {
    id: 'easy-scarf-knit',
    title: 'The Easiest Scarf You Will Ever Knit',
    image: b2,
    excerpt: 'A simple garter-stitch scarf using chunky yarn — finished in a weekend and lovely as a gift.',
    body: `Choose chunky yarn (worsted or bulky) in a color you love, and a pair of US size 10 needles. Cast on 20 stitches. Knit every row. That’s it — that’s the whole pattern.\n\nKnit each evening for about 30 minutes. After a few sessions, you’ll see the scarf forming. Once it reaches about 60 inches, cast off and weave in the ends.\n\nThis pattern is perfect for relaxing in your favorite chair while watching a quiet show. Mistakes become character — keep going.`,
    category: 'Knitting',
  },
  {
    id: 'birdhouse-weekend',
    title: 'Build a Simple Birdhouse This Weekend',
    image: b3,
    excerpt: 'A classic woodworking project with five boards, a few nails, and an afternoon in the garage.',
    body: `You only need a small piece of cedar or pine, a handsaw, a hammer, and exterior wood glue. Cut six pieces: two sides, a front, a back, a floor, and a slanted roof.\n\nDrill a 1.25-inch entrance hole on the front. Assemble with glue and finishing nails, leaving small gaps near the bottom for drainage. Skip paint inside — birds prefer natural wood.\n\nHang it on a quiet tree branch facing east. With luck, you’ll have a chickadee family by spring.`,
    category: 'Woodworking',
  },
]

export const community = [
  { name: 'Margaret, 68', image: c1, quote: 'I started painting again after 40 years. Cozy Hobby Corner gave me the gentle nudge I needed.' },
  { name: 'Frank, 72', image: c2, quote: 'The woodworking guides reminded me how much I love working with my hands. My grandkids love the birdhouses.' },
  { name: 'Eleanor, 65', image: c3, quote: 'Knitting in the evening with a cup of tea has become my favorite hour of the day.' },
]

export const faqs = [
  { q: 'Is this site really for seniors?', a: 'Yes — every guide is written with clear instructions, larger text, and a relaxed pace. Beginners of any age are welcome too.' },
  { q: 'Do I need expensive supplies to start?', a: 'Not at all. Most of our projects use simple, inexpensive materials you can find at a local craft or hardware store.' },
  { q: 'How often do you publish new articles?', a: 'We share two to three new hobby guides each week, plus community stories and seasonal craft ideas.' },
  { q: 'Can I share my own projects?', a: 'Absolutely. Visit our Community page to send in photos and stories — we love featuring readers.' },
  { q: 'Is the newsletter free?', a: 'Yes, our weekly newsletter is free and arrives every Sunday morning with a warm cup of inspiration.' },
]
