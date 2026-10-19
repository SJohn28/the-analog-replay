import Link from "next/link";
export default function NotFound(){return <main className="collection empty-state"><p className="eyebrow">404 · A missing track</p><h1>This record isn’t in the collection.</h1><p>Let’s find you something worth another spin.</p><Link className="action" href="/archive">Explore the archive</Link></main>}
