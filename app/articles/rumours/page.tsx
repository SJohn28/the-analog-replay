import Link from "next/link";
import Header from "../../../components/layout/Header";

export default function RumoursArticle() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-zinc-950 text-white">
        <article className="mx-auto max-w-4xl px-6 py-20">
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300"
          >
            ← Back to Home
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.35em] text-blue-400">
            Featured Story
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
            Fleetwood Mac&apos;s <em>Rumours</em>: The Album That Turned Chaos
            Into Gold
          </h1>

          <p className="mt-6 text-lg text-zinc-400">
            By The Analog Replay Staff • 1977 Album Feature
          </p>

          <div className="mt-12 rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-blue-950 to-black p-10">
            <p className="text-2xl font-bold leading-relaxed text-white">
              Heartbreak, tension, and studio perfection collided to create one
              of the defining albums of the 1970s.
            </p>
          </div>

          <div className="prose prose-invert prose-lg mt-12 max-w-none prose-headings:text-white prose-a:text-blue-400">
            <p>
              When <em>Rumours</em> arrived in 1977, Fleetwood Mac was already a
              successful band. But no one could have predicted that an album born
              from personal turmoil would become one of rock&apos;s most enduring
              landmarks.
            </p>

            <h2>Chaos Behind the Console</h2>

            <p>
              The band was dealing with breakups, pressure, exhaustion, and
              creative tension. Instead of falling apart, they turned that tension
              into tightly crafted songs filled with emotion, melody, and
              unforgettable hooks.
            </p>

            <h2>Why It Still Resonates</h2>

            <p>
              The power of <em>Rumours</em> comes from its balance: polished
              enough for radio, personal enough to feel intimate, and timeless
              enough to keep finding new listeners decade after decade.
            </p>

            <blockquote>
              Great albums do more than capture a sound. They capture a moment.
            </blockquote>

            <h2>The Analog Replay Take</h2>

            <p>
              More than four decades later, <em>Rumours</em> still feels alive.
              It is not just a classic rock record. It is a document of artists
              turning heartbreak into harmony.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}