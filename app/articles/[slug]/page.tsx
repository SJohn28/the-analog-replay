import Image from "next/image";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { features } from "@/data/features";
import ArticlePage from "@/components/article/ArticlePage";
import ReadingProgress from "@/components/layout/ReadingProgress";
import Link from "next/link";

function InlineText({ text }: { text: string }) {
  return text.split(/(\[[^\]]+\]\(https?:\/\/[^\s)]+\)|\*[^*]+\*)/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    if (link) return <a key={index} href={link[2]}>{link[1]}</a>;
    if (part.startsWith("*") && part.endsWith("*")) return <em key={index}>{part.slice(1, -1)}</em>;
    return part;
  });
}

const purpleRainPhotos: Record<number, { src: string; alt: string; width: number; height: number; maxWidth: number; caption?: string }> = {
  3: { src: "/images/stories/prince-wendy-live.jpg", alt: "Prince singing beside Wendy Melvoin playing guitar on a purple-lit stage", width: 594, height: 451, maxWidth: 594 },
  4: { src: "/images/stories/first-avenue-exterior.jpg", alt: "Black-and-white exterior photograph of the First Avenue and 7th St Entry music venue", width: 4800, height: 3200, maxWidth: 690 },
  6: { src: "/images/stories/prince-when-doves-cry.jpg", alt: "Prince leaning over the edge of a bathtub in the When Doves Cry music video", width: 600, height: 450, maxWidth: 600 },
  9: { src: "/images/stories/prince-dean-merritt.jpg", alt: "Color drawing of Prince in purple clothing holding a yellow guitar against a purple background", width: 2550, height: 3300, maxWidth: 500, caption: "Drawing by Dean Merritt" },
};

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
        {body.intro.split("\n\n").map((paragraph, index) => {
          const photo = slug === "purple-rain" ? purpleRainPhotos[index] : undefined;
          return (
            <Fragment key={index}>
              <p className={index === 0 ? "article-intro" : undefined}><InlineText text={paragraph} /></p>
              {photo && <figure style={{ margin: "44px auto", maxWidth: photo.maxWidth }}>
                <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={`(max-width: ${photo.maxWidth + 48}px) calc(100vw - 48px), ${photo.maxWidth}px`} style={{ display: "block", width: "100%", height: "auto" }} />
                {photo.caption && <figcaption style={{ marginTop: 12, fontFamily: "var(--font-geist-sans), sans-serif", fontSize: 13, lineHeight: 1.6, color: "var(--muted)", textAlign: "center" }}>{photo.caption}</figcaption>}
              </figure>}
            </Fragment>
          );
        })}
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
