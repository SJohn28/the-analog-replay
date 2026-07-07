export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-black px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,102,255,0.25),_transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-zinc-950" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-400">
          The Soundtrack of the '70s & '80s
        </p>

        <h2 className="max-w-5xl text-5xl font-black uppercase leading-none tracking-tight text-white md:text-7xl">
          Relive the Music.
          <br />
          Rediscover the Memories.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
          Explore classic rock, pop, albums, movies, MTV, chart history,
          and the stories behind the songs that defined two unforgettable decades.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a className="rounded-full bg-blue-600 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-blue-500">
            Explore the Archive
          </a>

          <a className="rounded-full border border-zinc-600 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white hover:border-blue-400 hover:text-blue-400">
            Screen & Sound
          </a>
        </div> <p className="mt-16 text-xs font-bold uppercase tracking-[0.35em] text-zinc-500">
  Scroll to explore ↓
</p>
      </div>
    </section>
  );
}