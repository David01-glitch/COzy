import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-cozy section text-center py-24">
      <p className="text-sage font-semibold uppercase tracking-wider text-xs mb-3">404</p>
      <h1 className="font-serif text-5xl text-brownDark mb-4">This Corner Is Quiet</h1>
      <p className="text-ink/75 text-lg mb-8 max-w-md mx-auto">
        The page you’re looking for has wandered off. Let’s head back to something cozier.
      </p>
      <Link to="/" className="btn-primary">Return Home</Link>
    </div>
  )
}
