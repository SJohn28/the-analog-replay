import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner"><div><p className="eyebrow">Keep the record spinning.</p><Link href="/" className="footer-title">analog replay<span>.</span></Link><p>Classic Music. Real Stories. Timeless Sound.</p></div><nav aria-label="Footer"><Link href="/news">News &amp; Notes ↗</Link><Link href="/archive">The archive ↗</Link><Link href="/about">Behind the Replay ↗</Link></nav></div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} The Analog Replay</p><p>Made for people who listen.</p></div>
    </footer>
  );
}
