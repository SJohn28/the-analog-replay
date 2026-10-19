import type { Metadata } from "next";
import Link from "next/link";
import NewsFeed from "@/components/NewsFeed";
import { newsReviewedOn } from "@/data/news";
import "./news.css";

export const metadata: Metadata = {
  title: "News & Notes",
  description: "Selected news from classic artists: tour announcements, releases, and music on screen and stage. Original summaries with links to official sources.",
};

export default function NewsPage() {
  return (
    <main className="news-page">
      <header className="news-heading"><div><p className="eyebrow">The music keeps moving.</p><h1>News <em>&</em> Notes<span>.</span></h1><p className="news-intro">New chapters from the artists who gave us the classics. The releases, shows, and stories worth keeping an ear on.</p></div><div className="news-edition"><span className="news-edition-dot" aria-hidden="true" /><span>Last reviewed<br /><time dateTime={newsReviewedOn}>October 19, 2026</time></span></div></header>
      <div className="news-layout">
        <section aria-label="Selected artist news"><NewsFeed /></section>
        <aside className="news-sidebar"><p className="eyebrow">A little context</p><h2>Still making noise.</h2><p>The records may be classics. The story is still unfolding.</p><p>We select announcements from official artist sources and write a short summary, so you can follow the news back to where it started.</p><div className="news-editor-note"><h3>About these updates</h3><p>This is a curated news page, not a live feed. The review date above shows when this selection was checked. Follow the source for the latest schedules and release details.</p></div><div className="news-sidebar-links"><p className="eyebrow">Stay a little longer</p><Link href="/archive">Back to the long play <span aria-hidden="true">↗</span></Link><Link href="/artists">The artists behind it all <span aria-hidden="true">↗</span></Link></div></aside>
      </div>
    </main>
  );
}
