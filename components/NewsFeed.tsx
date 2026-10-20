"use client";

import Image from "next/image";
import { useState } from "react";
import { news, type NewsCategory } from "@/data/news";

const categories: ("All updates" | NewsCategory)[] = ["All updates", "Tours", "Releases", "Screen & Stage"];

export default function NewsFeed() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All updates");
  const filtered = news.filter((item) => category === "All updates" || item.category === category);

  return (
    <>
      <div className="news-filters" role="group" aria-label="Filter news by topic">
        {categories.map((topic) => <button key={topic} type="button" aria-pressed={category === topic} onClick={() => setCategory(topic)}>{topic}</button>)}
      </div>
      <p className="news-result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "update" : "updates"}{category !== "All updates" ? ` · ${category}` : " · newest updates first"}</p>
      <div className="news-entries">
        {filtered.map((item) => (
          <article className="news-entry" key={item.id} id={item.id}>
            <div className="news-date"><span>{item.dateLabel ?? "Announced"}</span><time dateTime={item.announcedOn}>{new Date(`${item.announcedOn}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</time></div>
            <div className="news-entry-copy">{item.photo && <figure className="news-photo"><Image src={item.photo.src} width={item.photo.width} height={item.photo.height} alt={item.photo.alt} sizes="(max-width: 800px) 100vw, 700px" /><figcaption>{item.photo.caption} {item.photo.credit && <span>Photo: <a href={item.photo.url}>{item.photo.credit} {item.photo.url?.includes("commons.wikimedia.org") ? " / Wikimedia Commons" : ""}</a> · <a href={item.photo.licenseUrl}>{item.photo.license}</a>{item.id === "tommy-north-american-theatre-tour" ? " · Resized for display." : ""}</span>}</figcaption></figure>}<p className="eyebrow">{item.artist} <span aria-hidden="true">/</span> {item.category}</p><h2>{item.title}</h2><p className="news-summary">{item.summary}</p>{item.tourDates && <section className="news-tour" aria-label={`${item.artist} announced 2027 tour dates`}><h3>2027 concert dates</h3><ol>{item.tourDates.map((show) => <li key={show.date}><time dateTime={show.date}>{new Date(`${show.date}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</time><div><strong>{show.city}</strong><span>{show.venue}</span></div></li>)}</ol><p>Announced dates as of October 20, 2026. <a href={item.tourUrl}>Check the band’s tour page for updates and ticket information ↗</a></p></section>}<a className="news-source" href={item.source.url}>Read the full story <span aria-hidden="true">↗</span><span className="news-source-name">{item.source.name}</span></a></div>
          </article>
        ))}
      </div>
    </>
  );
}
