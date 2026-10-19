"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [["/", "Home"], ["/artists", "Artists"], ["/albums", "Albums"], ["/screen-and-sound", "Screen & Sound"], ["/charts", "Charts"], ["/archive", "Archive"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="The Analog Replay home" onClick={() => setOpen(false)}><span className="brand-record" aria-hidden="true" /><span><small>The</small>analog replay<span className="brand-period">.</span></span></Link>
        <button className="menu-button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? "Close −" : "Menu +"}</button>
        <nav id="main-navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"}>
          {links.map(([href, label]) => <Link key={href} href={href} aria-current={path === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
