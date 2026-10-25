import Image from "next/image";
import Link from "next/link";
import { articles, featuredArticleId } from "@/data/articles";

export default function Hero() {
  const feature = articles.find((article) => article.id === featuredArticleId)!;

  return (
    <section className="cover-story cover-story-synchronicity" aria-labelledby="cover-title">
      <div className="edition-line"><p>Classic music. Real stories. Timeless sound.</p><span>For the love of the record.</span></div>
      <div className="cover-grid">
        <div className="cover-copy">
          <p className="eyebrow"><span className="issue-marker" /> The cover story / The Police</p>
          <h1 id="cover-title">One last<br />triumph.<br /><em>Synchronicity.</em></h1>
          <p className="cover-deck">Three musicians. A worldwide triumph. The album and tour that pushed a remarkable partnership to its limits.</p>
          <Link href={feature.href} className="primary-link">Inside the story <span aria-hidden="true">↗</span></Link>
          <p className="cover-footnote">An album worth coming back to. Again and again.</p>
        </div>
        <Link href={feature.href} className="cover-art" aria-label={feature.title}>
          <Image src={feature.image} alt="The Police’s Synchronicity album artwork with yellow, blue, and red photographic strips" fill sizes="(max-width: 800px) 100vw, 55vw" priority />
          <div className="art-label"><span>The essential listen</span><strong>The Police <span>—</span> 1983</strong><span className="art-arrow" aria-hidden="true">↗</span></div>
        </Link>
      </div>
      <div className="cover-bottom"><span>Great music never fades. <em>It just deserves another spin.</em></span><Link href="/archive">Explore the archive <span aria-hidden="true">↓</span></Link></div>
    </section>
  );
}
