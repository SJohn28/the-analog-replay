import type { Metadata } from "next";
import Link from "next/link";
import NewsFeed from "@/components/NewsFeed";
import { newsReviewedOn } from "@/data/news";
import "./news/news.css";

export const metadata: Metadata = {
  title: "Classic Rock News Today",
  alternates: { canonical: "https://www.theanalogreplay.com" },
  description: "Classic rock news today: tour announcements, new releases, artist updates and music on screen and stage. Verified reporting with links to original sources.",
};

export default function Home() {
  return (
    <main className="news-page">
      <header className="news-heading"><div><p className="eyebrow">The music keeps moving.</p><h1>Classic Rock<br />News <em>Today</em><span>.</span></h1><p className="news-intro">The latest tour announcements, new releases and updates from classic rock artists.</p></div><div className="news-edition"><span className="news-edition-dot" aria-hidden="true" /><span>Last reviewed<br /><time dateTime={newsReviewedOn}>{new Date(`${newsReviewedOn}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</time></span></div></header>
      <div className="news-layout">
        <section aria-label="Selected artist news"><NewsFeed /></section>
        <aside className="news-sidebar"><p className="eyebrow">A little context</p><h2>Still making noise.</h2><p>The records may be classics. The story is still unfolding.</p><p>We select stories from official artist sources and established music publications and write a short summary, so you can follow the news back to where it started.</p><div className="news-editor-note"><h3>About these updates</h3><p>This is a curated news page, not a live feed. The review date above shows when this selection was checked. Follow the source for the latest schedules and release details.</p></div><div className="news-sidebar-links"><p className="eyebrow">Stay a little longer</p><Link href="/archive">Back to the long play <span aria-hidden="true">↗</span></Link><Link href="/artists">The artists behind it all <span aria-hidden="true">↗</span></Link></div></aside>
      </div>
    </main>
  );
}
