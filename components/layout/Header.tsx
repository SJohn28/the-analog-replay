import Image from "next/image";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <div className="flex items-center">
  <Image
    src="/images/logo/analog-replay-logo.png"
    alt="The Analog Replay"
    width={340}
    height={90}
    priority
  />
</div>

        <nav>
          <ul className="flex gap-8 text-sm font-medium uppercase tracking-wider text-zinc-300">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">Artists</a></li>
            <li><a href="#" className="hover:text-blue-400">Albums</a></li>
            <li><a href="#" className="hover:text-blue-400">Screen &amp; Sound</a></li>
            <li><a href="#" className="hover:text-blue-400">Charts</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}