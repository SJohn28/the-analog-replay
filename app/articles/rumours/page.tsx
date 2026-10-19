import { articles } from "@/data/articles";
import ArticlePage from "@/components/article/ArticlePage";
import ReadingProgress from "@/components/layout/ReadingProgress";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "How Heartbreak Created Fleetwood Mac’s Greatest Album", description: "How Fleetwood Mac turned heartbreak into the enduring songs of Rumours." };

export default function RumoursArticle() {
  const article = articles.find((a) => a.id === "rumours");

  if (!article) return null;

  return (
    <>
      <ReadingProgress />


      <main className="min-h-screen bg-zinc-950 text-white">
        <ArticlePage
          category={article.category}
          title={article.title}
          subtitle={article.subtitle}
          author={article.author}
          date={article.date}
          hero={article.image}
          caption={article.caption}
        >
          <p className="text-2xl font-bold leading-relaxed text-white">
            Heartbreak, tension, and studio perfection collided to create one
            of the defining albums of the 1970s.
          </p>

          <p className="mb-8">
            <span className="float-left mr-3 text-8xl font-black leading-none text-blue-400">
              W
            </span>
            hen <em>Rumours</em> arrived in 1977, Fleetwood Mac was already a
            successful band. But no one could have predicted that an album born
            from personal turmoil would become one of rock&apos;s most enduring
            landmarks.
          </p>

          <h2 className="mt-20 mb-8 text-4xl font-black tracking-tight text-white">
            Chaos Behind the Console
          </h2>

          <p className="mb-8">
            The band was dealing with breakups, pressure, exhaustion, and
            creative tension. Instead of falling apart, they turned that tension
            into tightly crafted songs filled with emotion, melody, and
            unforgettable hooks.
          </p>

          <h2 className="mt-20 mb-8 text-4xl font-black tracking-tight text-white">
            Why It Still Resonates
          </h2>

          <p className="mb-8">
            The power of <em>Rumours</em> comes from its balance: polished
            enough for radio, personal enough to feel intimate, and timeless
            enough to keep finding new listeners decade after decade.
          </p>

          <blockquote className="my-16 border-l-4 border-blue-400 pl-8 text-2xl italic font-light text-white">
            “Great albums do more than capture a sound.”
            <br />
            They capture a moment.
          </blockquote>

          <p className="mt-4 text-right text-sm uppercase tracking-[0.3em] text-zinc-500">
            — The Analog Replay
          </p>

          <h2>The Analog Replay Take</h2>

          <p className="mb-8">
            More than four decades later, <em>Rumours</em> still feels alive.
            It is not just a classic rock record. It is a document of artists
            turning heartbreak into harmony.
          </p>

          <h2>Why <em>Rumours</em> Still Matters</h2>

          <p className="mb-8">
            Nearly fifty years later, <em>Rumours</em> remains one of the most
            celebrated albums ever recorded. Its combination of unforgettable
            songwriting, studio craftsmanship, and emotional honesty continues
            to inspire musicians and listeners around the world.
          </p>
        </ArticlePage>
      </main>
    </>
  );
}