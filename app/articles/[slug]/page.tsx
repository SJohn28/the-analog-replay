import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { features } from "@/data/features";
import ArticlePage from "@/components/article/ArticlePage";
import ReadingProgress from "@/components/layout/ReadingProgress";
import Link from "next/link";
export function generateStaticParams(){return Object.keys(features).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=articles.find(a=>a.id===slug);return {title:a?.title,description:a?.excerpt};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const article=articles.find(a=>a.id===slug);const body=features[slug];if(!article||!body)notFound();return <main><ReadingProgress/><ArticlePage category={article.category} title={article.title} subtitle={article.subtitle} author={article.author} date={article.date} hero={article.image} caption={article.caption}><p className="article-intro">{body.intro}</p>{body.sections.map(section=><section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}<aside className="related"><h2>Keep the record spinning</h2>{articles.filter(a=>a.id!==slug).map(a=><p key={a.id}><Link href={a.href}>{a.title} →</Link></p>)}</aside></ArticlePage></main>;}
