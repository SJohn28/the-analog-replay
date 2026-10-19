import Archive from "@/components/Archive";
export const metadata={title:'The Albums',description:'From familiar favorites to the details you hear only on another listen.'};
export default function Page(){return <main className="collection"><p className="eyebrow">The Analog Replay</p><h1>The Albums</h1><p className="collection-intro">From familiar favorites to the details you hear only on another listen.</p><Archive topic='albums'/></main>;}
