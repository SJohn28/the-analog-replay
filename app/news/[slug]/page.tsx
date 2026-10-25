import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewsFeed from "@/components/NewsFeed";
import { news } from "@/data/news";
import "../news.css";

type Props = { params: Promise<{ slug: string }> };
const site = "https://www.theanalogreplay.com";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((story) => story.id === slug);
  if (!item) notFound();
  const url = `${site}/news/${item.id}`;
  const description = item.summary.split("\n\n")[0];
  const images = item.photo ? [{ url: `${site}${item.photo.src}`, width: item.photo.width, height: item.photo.height, alt: item.photo.alt }] : [];
  return {
    title: item.title,
    description,
    alternates: { canonical: url },
    openGraph: { title: item.title, description, url, siteName: "The Analog Replay", type: "article", publishedTime: item.announcedOn, images },
    twitter: { card: "summary_large_image", title: item.title, description, images: images.map((image) => image.url) },
  };
}

export default async function NewsStory({ params }: Props) {
  const { slug } = await params;
  const item = news.find((story) => story.id === slug);
  if (!item) notFound();
  return <main className="news-page news-story"><Link className="news-back" href="/news">← All News & Notes</Link><NewsFeed items={[item]} standalone /></main>;
}
