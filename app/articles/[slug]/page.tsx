import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { features } from "@/data/features";
import ArticlePage from "@/components/article/ArticlePage";
import ReadingProgress from "@/components/layout/ReadingProgress";
import Link from "next/link";

function InlineText({ text }: { text: string }) {
  return text.split(/(\*[^*]+\*)/g).map((part, index) =>
    part.startsWith("*") && part.endsWith("*")
      ? <em key={index}>{part.slice(1, -1)}</em>
      : part
  );
}

export function generateStaticParams() {
  return Object.keys(features).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((article) => article.id === slug);
  return { title: article?.title, description: article?.excerpt };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((article) => article.id === slug);
  const body = features[slug];
  if (!article || !body) notFound();

  return (
    <main>
      <ReadingProgress />
      <ArticlePage category={article.category} title={article.title} subtitle={article.subtitle} author={article.author} date={article.date} hero={article.image} caption={article.caption}>
        {body.intro.split("\n\n").map((paragraph, index) => (
          <p key={index} className={index === 0 ? "article-intro" : undefined}><InlineText text={paragraph} /></p>
        ))}
        {body.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.text.split("\n\n").map((paragraph, index) => <p key={index}><InlineText text={paragraph} /></p>)}
          </section>
        ))}
        <aside className="related">
          <h2>Keep the record spinning</h2>
          {articles.filter((article) => article.id !== slug).map((article) => <p key={article.id}><Link href={article.href}>{article.title} →</Link></p>)}
        </aside>
      </ArticlePage>
    </main>
  );
}
