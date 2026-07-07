import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import FeaturedStory from "../components/sections/FeaturedStory";
import LatestStories from "../components/sections/LatestStories";
import AlbumOfTheWeek from "../components/sections/AlbumOfTheWeek";
export default function Home() {
  return (
    <>
      <main className="bg-zinc-950 text-white">
  <Hero />
  <FeaturedStory />
  <AlbumOfTheWeek />
</main>
    </>
  );
}