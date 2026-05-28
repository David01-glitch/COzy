import SectionHeading from '../components/SectionHeading'

export function Privacy() {
  return (
    <div className="container-cozy section">
      <SectionHeading eyebrow="Legal" title="Privacy Policy" />
      <div className="max-w-3xl mx-auto space-y-4 text-ink/85">
        <p>Last updated: January 2026.</p>
        <p>Cozy Hobby Corner respects your privacy. This page explains what information we collect, how we use it, and the choices you have.</p>
        <h3 className="font-serif text-xl text-brownDark pt-2">Information We Collect</h3>
        <p>We collect your email if you subscribe to our newsletter. We collect anonymous analytics through Google Analytics to understand which articles are most loved. We do not sell or share your personal data.</p>
        <h3 className="font-serif text-xl text-brownDark pt-2">Cookies</h3>
        <p>We use cookies to remember your preferences and to power analytics. You can decline non-essential cookies via the banner shown on your first visit.</p>
        <h3 className="font-serif text-xl text-brownDark pt-2">Your Rights</h3>
        <p>You may request access to, correction of, or deletion of your personal data at any time by emailing cozyhobbycorner@gmail.com.</p>
        <h3 className="font-serif text-xl text-brownDark pt-2">Third-Party Services</h3>
        <p>This site uses Google Analytics and may display Google Ads. These services have their own privacy policies, available on their websites.</p>
        <h3 className="font-serif text-xl text-brownDark pt-2">Contact</h3>
        <p>Questions about this policy? Email cozyhobbycorner@gmail.com or write to 311 Maple Creek Rd, Portland, OR 97205.</p>
      </div>
    </div>
  )
}

export function Terms() {
  return (
    <div className="container-cozy section">
      <SectionHeading eyebrow="Legal" title="Terms & Conditions" />
      <div className="max-w-3xl mx-auto space-y-4 text-ink/85">
        <p>Last updated: January 2026.</p>
        <p>By using Cozy Hobby Corner, you agree to these terms.</p>
        <h3 className="font-serif text-xl text-brownDark pt-2">Use Of Content</h3>
        <p>Our articles, photos, and patterns are for personal, non-commercial use. Please don’t republish without permission, but feel free to share links.</p>
        <h3 className="font-serif text-xl text-brownDark pt-2">Reader Submissions</h3>
        <p>If you send us a photo or story, you grant us permission to share it on our blog, newsletter, and social channels with your first name.</p>
        <h3 className="font-serif text-xl text-brownDark pt-2">No Warranties</h3>
        <p>Hobby instructions are shared in good faith. Please use common sense and proper safety equipment for any craft that involves sharp tools, heat, or chemicals.</p>
        <h3 className="font-serif text-xl text-brownDark pt-2">Changes</h3>
        <p>We may update these terms occasionally. We will post the new date at the top of this page.</p>
      </div>
    </div>
  )
}

export function Refund() {
  return (
    <div className="container-cozy section">
      <SectionHeading eyebrow="Legal" title="Refund Policy" />
      <div className="max-w-3xl mx-auto space-y-4 text-ink/85">
        <p>Last updated: January 2026.</p>
        <p>Most of what Cozy Hobby Corner offers is free — blog posts, the newsletter, and community features have no charge.</p>
        <h3 className="font-serif text-xl text-brownDark pt-2">Paid Items</h3>
        <p>If we offer paid downloads (such as printable pattern bundles), you may request a full refund within 14 days of purchase by emailing cozyhobbycorner@gmail.com with your order number.</p>
        <h3 className="font-serif text-xl text-brownDark pt-2">How Refunds Work</h3>
        <p>Approved refunds are processed to your original payment method within 5–10 business days. We do not charge any restocking or processing fees.</p>
        <h3 className="font-serif text-xl text-brownDark pt-2">Questions</h3>
        <p>Email cozyhobbycorner@gmail.com or call +1 (617) 529-7741 during normal business hours, Monday through Friday.</p>
      </div>
    </div>
  )
}
