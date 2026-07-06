export default function AlbumOfTheWeek() {
  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-400">
          Album of the Week
        </p>

        <div className="mt-6 grid gap-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:grid-cols-[320px_1fr]">
          <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 via-zinc-800 to-black text-center">
            <span className="text-4xl font-black">ESCAPE</span>
          </div>

          <div>
            <h2 className="text-4xl font-black">Journey — Escape</h2>

            <p className="mt-4 text-zinc-400">Released: 1981</p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              A defining arena rock album of the early ’80s, packed with soaring
              vocals, polished production, and unforgettable hooks.
            </p>

            <a className="mt-8 inline-block rounded-full border border-blue-500 px-7 py-3 text-sm font-bold uppercase tracking-wider text-blue-400 hover:bg-blue-500 hover:text-white">
              Read Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}