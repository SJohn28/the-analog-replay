import { articles } from "../../data/articles";
import Image from "next/image";
const albumOfTheWeek = articles.find((article) => article.id === "escape")!;
export default function AlbumOfTheWeek() {
  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-400">
          Album of the Week
        </p>

        <div className="mt-6 grid gap-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:grid-cols-[320px_1fr]">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
  <Image
    src="/images/albums/escape-cover.jpg"
    alt="Journey Escape Album Cover"
    fill
    className="object-cover"
  />
</div>


          <div>
            <h2 className="text-4xl font-black">{albumOfTheWeek.title}</h2>

            <p className="mt-4 text-zinc-400">Released: 1981</p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
  {albumOfTheWeek.excerpt}
</p>

            <a href={albumOfTheWeek.href} className="mt-8 inline-block rounded-full border border-blue-500 px-7 py-3 text-sm font-bold uppercase tracking-wider text-blue-400 hover:bg-blue-500 hover:text-white">
              Read Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}