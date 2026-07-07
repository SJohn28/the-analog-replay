import Link from "next/link";
import { articles } from "../../data/articles";

const featuredArticle = articles[0];
export default function FeaturedStory() {
  return (
    <section className="bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-400">
            Featured Story
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            {featuredArticle.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            {featuredArticle.excerpt}
          </p>

          <Link
  href={featuredArticle.href}
  className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-blue-500"
>
  Read the Story
</Link>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-blue-950 via-zinc-900 to-black p-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-400">
            Coming Soon
          </p>

          <h3 className="mt-4 text-3xl font-black">
            More featured stories from the vault.
          </h3>

          <ul className="mt-6 space-y-4 text-zinc-300">
            <li>• The rise of MTV</li>
            <li>• The making of Purple Rain</li>
            <li>• Top Gun and the soundtrack that soared</li>
            <li>• The week classic rock ruled the charts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}