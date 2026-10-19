import { articles } from "@/data/articles";
import ArticlePage from "@/components/article/ArticlePage";
import ReadingProgress from "@/components/layout/ReadingProgress";
import type { Metadata } from "next";

const article = articles.find((a) => a.id === "rumours")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.excerpt,
};

export default function RumoursArticle() {
  return (
    <main>
      <ReadingProgress />
      <ArticlePage
        category={article.category}
        title={article.title}
        subtitle={article.subtitle}
        author={article.author}
        date={article.date}
        hero={article.image}
        caption={article.caption}
      >
          <p className="article-intro">Listen to <em>Rumours</em> and you hear a band working beautifully together. Look at what was happening during its creation, and that musical connection becomes remarkable.</p>

          <p>When Fleetwood Mac began recording in 1976, relationships within the group were coming apart. Christine and John McVie were separating, while Stevie Nicks and Lindsey Buckingham’s long romance was ending. Mick Fleetwood was also facing turmoil in his marriage. Making an album meant continuing to work closely with people connected to their deepest hurts.</p>

          <p>Those experiences found their way into the songs. Buckingham’s “Go Your Own Way” brought frustration to the surface. Written at a rented house in Florida between stretches of touring, the track opens with a painful contradiction: “Loving you isn’t the right thing to do.” Its driving rhythm carries the anger of someone struggling to let go.</p>

          <p>For Nicks, however, one lyric felt particularly unfair: “Packing up, shacking up is all you want to do.” She said it misrepresented her behavior and asked Buckingham to remove it. He refused. Singing harmonies on a song that presented his version of their breakup became a recurring source of anger; she later recalled wanting to “go over and kill him” when performing it.</p>

          <p>Nicks gave her own account of their relationship in “Silver Springs,” a song that moves from tenderness toward a fierce determination to remain in a former lover’s memory. Left off the original <em>Rumours</em> album, it became the B-side to “Go Your Own Way”—pairing two painfully different perspectives on the same broken relationship.</p>

          <p>“Dreams” approached heartbreak with a quieter, more reflective mood. The story of its creation is almost as memorable as the song itself. During a break from the main studio, Nicks slipped into an adjoining room reportedly designed for Sly Stone, complete with a sunken pit, red-and-black decor, and a large black-velvet bed. Sitting on the bed with a Fender Rhodes electric piano, she recorded her ideas on a cassette player and, by her account, wrote the song in about 10 minutes.</p>

          <p>The early version didn’t immediately impress everyone. Christine McVie later recalled finding its simple chord progression unexciting, but Buckingham helped shape the arrangement into the spacious, hypnotic recording, anchored by Mick Fleetwood’s restrained drumming. Despite their fractured relationship, Buckingham and Nicks could still bring out something extraordinary in each other’s music.</p>

          <p>Elsewhere on the album, Christine offered moments of renewal. “Don’t Stop” looked toward a future beyond disappointment, while “You Make Loving Fun” celebrated the happiness of a new relationship. Together, these songs gave <em>Rumours</em> an emotional range that extended beyond the bitterness of a breakup.</p>

          <p>Recording demanded patience and extraordinary attention to detail. Beginning at the Record Plant in Sausalito, California, the musicians and production team spent months shaping performances, arrangements and harmonies. Beneath the apparent ease of the finished music lay painstaking work. Personal tension supplied much of the subject matter, but turning those experiences into a cohesive album required skill, discipline and collaboration.</p>

          <p>Released on February 4, 1977, <em>Rumours</em> became a worldwide success and went on to win the Grammy for Album of the Year. Its songs invited listeners into the band’s private struggles while leaving room for them to recognize their own.</p>

          <p>That connection helps explain the album’s lasting power. You don’t need to know who inspired each lyric to understand its anger, longing or hope. The band members could hear their relationships unraveling in the songs, but they still helped one another make those songs extraordinary. Decades later, listeners continue to find pieces of their own lives in the result.</p>
      </ArticlePage>
    </main>
  );
}
