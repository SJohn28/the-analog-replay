import Archive from "@/components/Archive";
export const metadata={title:'The Artists',description:'The voices, personalities, and creative partnerships behind the records.'};
export default function Page(){return <main className="collection"><p className="eyebrow">The Analog Replay</p><h1>The Artists</h1><p className="collection-intro">The voices, personalities, and creative partnerships behind the records.</p><Archive topic='artists'/></main>;}
