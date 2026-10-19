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

export default function ArticlePage({ category, title, subtitle, author, date, hero, caption, children }: ArticlePageProps) {
  return (
    <article className="editorial-article">
      <Link href="/archive" className="article-back">← The archive</Link>
      <header className="article-heading"><p className="eyebrow">{category}</p><h1>{title}</h1><p className="article-subtitle">{subtitle}</p><div className="article-byline"><span>{author}</span><span>{date}</span></div></header>
      <figure className="article-figure"><div className="article-image-stage"><Image src={hero} alt={title} width={1500} height={1500} sizes="(max-width: 760px) 100vw, 660px" priority /></div><figcaption>{caption}</figcaption></figure>
      <div className="article-body">{children}</div>
      <div className="article-end"><span className="brand-record" aria-hidden="true" /><p>There’s always another story in the grooves.</p><Link className="text-link" href="/archive">Back to the archive ↗</Link></div>
    </article>
  );
}
