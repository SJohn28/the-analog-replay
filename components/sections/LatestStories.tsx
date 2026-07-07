import Link from "next/link";
import Image from "next/image";
import { articles } from "../../data/articles";


export default function LatestStories() {
  return (
    <section className="bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-400">
          Latest Stories
        </p>

       <h2 className="mt-4 text-3xl font-black md:text-5xl">
          From the Archive
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((story) => (
            <Link
              key={story.id}
              href={story.href}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]"
            >
           <div className="relative mb-6 h-56 overflow-hidden rounded-2xl bg-zinc-900">
  {story.image ? (
    <Image
      src={story.image}
      alt={story.title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  ) : (
    <div className="flex h-full items-end bg-gradient-to-br from-blue-950 via-zinc-900 to-black p-6">
      <span className="text-3xl font-black uppercase leading-tight text-white">
        {story.title}
      </span>
    </div>
  )}

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
</div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                {story.category}
              </p>

              <h3 className="mt-4 text-2xl font-black">{story.title}</h3>

              <p className="mt-4 leading-7 text-zinc-300">
                {story.excerpt}
              </p>

              <p className="mt-6 text-sm font-bold uppercase tracking-wider text-blue-400 group-hover:text-blue-300">
                Read Article →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}