import ReadingProgress from "@/components/layout/ReadingProgress";
import Image from "next/image";
import ArticleHeader from "@/components/article/ArticleHeader";
import Link from "next/link";
import Header from "../../../components/layout/Header";

export default function RumoursArticle() {
  return (
    <>
     <ReadingProgress />
      <Header />

      <main className="min-h-screen bg-zinc-950 text-white">
        <article className="mx-auto max-w-5xl px-6 py-20">
         <ArticleHeader
  category="Feature Story"
  title="How Heartbreak Created Fleetwood Mac's Greatest Album"
  subtitle="Five musicians. Five broken relationships. One masterpiece."
  author="The Analog Replay Editorial Team"
  date="July 2026"
/> 
<Link
            href="/"
            className="text-sm font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300"
          >
            ← Back to Home
          </Link>

<div className="mt-12 overflow-hidden rounded-3xl">
  <Image
    src="/images/stories/fleetwood-mac-rumours.jpg"
    alt="Fleetwood Mac during the Rumours era"
    width={1600}
    height={900}
    className="w-full h-auto object-cover"
  />
</div>

<p className="mt-3 text-center text-sm italic text-zinc-500">
  Fleetwood Mac during the <em>Rumours</em> era, 1977.
</p>



          
            <p className="text-2xl font-bold leading-relaxed text-white">
              Heartbreak, tension, and studio perfection collided to create one
              of the defining albums of the 1970s.
            </p>

          <div className="prose prose-invert prose-lg mt-12 max-w-none prose-headings:text-white prose-a:text-blue-400">
            <p className="mb-8">
  <span className="float-left mr-3 text-8xl font-black leading-none text-blue-400">
    W
  </span>

  hen <em>Rumours</em>{" "}arrived in 1977, Fleetwood Mac was already a successful
  band. But no one could have predicted that an album born from personal
  turmoil would become one of rock&apos;s most enduring landmarks.
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
  “Great albums do more than capture a sound.
  <br />
  They capture a moment.”
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
celebrated albums ever recorded. Its combination of unforgettable songwriting,
studio craftsmanship, and emotional honesty continues to inspire musicians and
listeners around the world.
</p>

          </div>
        </article>
      </main>
    </>
  );
}