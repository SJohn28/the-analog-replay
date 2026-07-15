import Image from "next/image";
import Link from "next/link";

type ArticlePageProps = {
  category: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  hero: string;
  caption: string;
  children: React.ReactNode;
};

export default function ArticlePage({
  category,
  title,
  subtitle,
  author,
  date,
  hero,
  caption,
  children,
}: ArticlePageProps) {
  return (
    <article className="mx-auto max-w-5xl px-6 py-20 text-white">

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

      <div className="mt-12 overflow-hidden rounded-3xl">
        <Image
          src={hero}
          alt={title}
          width={1600}
          height={900}
          className="w-full h-auto"
        />
      </div>

      <p className="mt-3 text-center text-sm italic text-zinc-500">
        {caption}
      </p>

      <Link
        href="/"
        className="mt-8 inline-block text-sm font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300"
      >
        ← Back to Home
      </Link>

      <div className="prose prose-invert prose-lg mt-12 max-w-none">
        {children}
      </div>

    </article>
  );
}