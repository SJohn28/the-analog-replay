"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { news, type NewsItem, type NewsCategory } from "@/data/news";

const categories: ("All updates" | NewsCategory)[] = ["All updates", "Tours", "Releases", "Screen & Stage"];

export default function NewsFeed({ items = news, standalone = false }: { items?: NewsItem[]; standalone?: boolean }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("All updates");
  const filtered = items.filter((item) => category === "All updates" || item.category === category);

  return (
    <>
      {!standalone && <><div className="news-filters" role="group" aria-label="Filter news by topic">
        {categories.map((topic) => <button key={topic} type="button" aria-pressed={category === topic} onClick={() => setCategory(topic)}>{topic}</button>)}
      </div>
      <p className="news-result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "update" : "updates"}{category !== "All updates" ? ` · ${category}` : " · newest updates first"}</p></>}
      <div className="news-entries">
        {filtered.map((item) => (
          <article className="news-entry" key={item.id} id={item.id}>
            <div className="news-date"><span>{item.dateLabel ?? "Announced"}</span><time dateTime={item.announcedOn}>{new Date(`${item.announcedOn}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</time></div>
            <div className="news-entry-copy">{item.photo && <NewsPhoto photo={item.photo} itemId={item.id} /> }<p className="eyebrow">{item.artist} <span aria-hidden="true">/</span> {item.category}</p>{standalone ? <h1>{item.title}</h1> : <h2><Link href={`/news/${item.id}`}>{item.title}</Link></h2>}{item.summary.split("\n\n").map((paragraph, index) => <p className="news-summary" key={index}>{paragraph}</p>)}{item.tourDates && <section className="news-tour" aria-label={`${item.artist} concert dates`}><h3>{item.tourHeading ?? "2027 concert dates"}</h3><ol>{item.tourDates.map((show) => <li key={show.date}><time dateTime={show.date}>{new Date(`${show.date}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</time><div><strong>{show.city}</strong><span>{show.venue}</span></div></li>)}</ol><p>Announced dates as of {item.tourCheckedOn ?? "October 20, 2026"}. <a href={item.tourUrl}>Check the band’s tour page for updates and ticket information ↗</a></p></section>}{item.additionalPhotos?.map((photo) => <NewsPhoto key={photo.src} photo={photo} itemId={item.id} />)}{!standalone && <Link className="news-permalink" href={`/news/${item.id}`}>Open this story & share ↗</Link>}<a className="news-source" href={item.source.url}>Read the full story <span aria-hidden="true">↗</span><span className="news-source-name">{item.source.name}</span></a></div>
          </article>
        ))}
      </div>
    </>
  );
}

function NewsPhoto({ photo, itemId }: { photo: NonNullable<NewsItem["photo"]>; itemId: string }) { return (<figure className="news-photo"><Image src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} sizes="(max-width: 800px) 100vw, 700px" /><figcaption>{photo.caption} {photo.credit && <span>Photo: <a href={photo.url}>{photo.credit} {photo.url?.includes("commons.wikimedia.org") ? " / Wikimedia Commons" : ""}</a> · <a href={photo.licenseUrl}>{photo.license}</a>{itemId === "tommy-north-american-theatre-tour" ? " · Resized for display." : ""}</span>}</figcaption></figure>); }
