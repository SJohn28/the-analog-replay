import Hero from "@/components/home/Hero";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";

export default function Home() {
  const stories = articles.filter((article) => article.id !== "rumours");

  return (
    <main className="magazine-home">
      <Hero />

      <section className="journal-section" aria-labelledby="in-the-grooves">
        <div className="section-heading">
          <div><p className="eyebrow">Good records. Better stories.</p><h2 id="in-the-grooves">In the grooves.</h2></div>
          <Link className="text-link" href="/archive">All stories <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="editorial-grid">
          <div className="story-rows">
            {stories.map((story, index) => (
              <Link className="editorial-story" key={story.id} href={story.href}>
                <div className="story-art"><Image src={story.image} alt="" fill sizes="(max-width: 600px) 36vw, 180px" /></div>
                <div className="story-details"><p className="eyebrow">0{index + 1} / {story.category}</p><h3>{story.title}</h3><p className="story-description">{story.excerpt}</p><span className="text-link">Read the story <span aria-hidden="true">↗</span></span></div>
              </Link>
            ))}
          </div>
          <aside className="turntable" aria-labelledby="on-the-turntable">
            <p className="eyebrow" id="on-the-turntable"><span className="live-dot" /> On the turntable</p>
            <div className="record-stage"><div className="vinyl-record" aria-hidden="true"><span>THE<br />ANALOG<br />REPLAY</span></div><Image src="/images/albums/escape-cover.jpg" alt="Journey’s Escape album cover" width={300} height={300} className="record-sleeve" /></div>
            <p className="record-caption">Journey · 1981</p><h3>Escape, on repeat.</h3><p>Big melodies. Open roads. Some records were made to be played all the way through.</p><Link className="text-link" href="/articles/escape">Take another listen <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>
      </section>

      <section className="replay-banner" aria-labelledby="replay-five">
        <div className="banner-number" aria-hidden="true">05</div>
        <div className="banner-copy"><p className="eyebrow">The Replay Five</p><h2 id="replay-five">Your next great<br /><em>listening session.</em></h2><p>Five songs from our featured records. No algorithms. Just a little inspiration for what to put on next.</p></div>
        <Link className="light-button" href="/charts">Find your next spin <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="journal-section explore-section" aria-labelledby="find-your-frequency">
        <div className="section-heading"><div><p className="eyebrow">Follow your curiosity</p><h2 id="find-your-frequency">Find your frequency.</h2></div></div>
        <div className="frequency-grid">
          {[
            { number: "01", title: "The artists", text: "The voices. The vision. The people behind the sound.", href: "/artists" },
            { number: "02", title: "The albums", text: "Familiar favorites, heard with fresh ears.", href: "/albums" },
            { number: "03", title: "Screen & sound", text: "When the music becomes part of the picture.", href: "/screen-and-sound" },
          ].map((item) => <Link key={item.href} href={item.href} className="frequency-link"><span className="frequency-number">{item.number}</span><h3>{item.title}<span aria-hidden="true">↗</span></h3><p>{item.text}</p></Link>)}
        </div>
      </section>
    </main>
  );
}
