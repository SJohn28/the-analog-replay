type ArticleHeaderProps = {
  category: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
};

export default function ArticleHeader({
  category,
  title,
  subtitle,
  author,
  date,
}: ArticleHeaderProps) {
  return (
    <header className="mx-auto max-w-4xl px-6 pt-20 pb-12 text-white">
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-400">
        {category}
      </p>

      <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        {title}
      </h1>

      <p className="mt-6 max-w-2xl text-2xl leading-relaxed text-zinc-300">
        {subtitle}
      </p>

      <div className="mt-10 border-t border-zinc-800 pt-6 text-sm uppercase tracking-wider text-zinc-500">
        <p>{author}</p>
        <p className="mt-2">{date}</p>
      </div>
    </header>
  );
}