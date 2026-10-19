export const newsReviewedOn = "2026-10-19";

export type NewsCategory = "Tours" | "Releases" | "Screen & Stage";
export type NewsItem = {
  id: string;
  artist: string;
  category: NewsCategory;
  announcedOn: string;
  title: string;
  summary: string;
  photo: { src: string; width: number; height: number; alt: string; caption: string; credit: string; url: string; license: string; licenseUrl: string };
  source: { name: string; url: string };
};

// Original editorial summaries. Dates refer to the linked announcement,
// not the date of the performance or release. Keep newest announcements first.
export const news: NewsItem[] = [
  {
    id: "iron-maiden-north-america-2027",
    photo: {"src": "/images/news/iron-maiden-2025.jpg", "width": 1920, "height": 1255, "alt": "Blue-lit Iron Maiden stage and audience on the Run For Your Lives tour", "caption": "Iron Maiden at La Défense Arena, July 2025.", "credit": "Chris93", "url": "https://commons.wikimedia.org/wiki/File:Concert_Iron_Maiden_200725_Seventh_Son.jpg", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"},
    artist: "Iron Maiden",
    category: "Tours",
    announcedOn: "2026-10-16",
    title: "One more run: Iron Maiden announce North American dates for 2027",
    summary: "Iron Maiden have announced 16 North American shows for the final leg of Run For Your Lives, scheduled for April and May 2027. The itinerary includes Tacoma, Vancouver, Atlanta, and two festival appearances. The band’s announcement includes the full dates and ticket details.",
    source: { name: "Iron Maiden · Official announcement", url: "https://www.ironmaiden.com/rfyl-north-america-2027/" },
  },
  {
    id: "tommy-north-american-theatre-tour",
    photo: {"src": "/images/news/the-who-2020.jpg", "width": 1600, "height": 898, "alt": "Pete Townshend playing an acoustic guitar under blue stage lights", "caption": "Pete Townshend performing in February 2020. Archive photo; not the touring musical cast.", "credit": "Raph_PH", "url": "https://commons.wikimedia.org/wiki/File:WhoPryzm140220_(49647757532).jpg", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0/"},
    artist: "The Who",
    category: "Screen & Stage",
    announcedOn: "2026-10-14",
    title: "Tommy takes the stage on a North American theatre tour",
    summary: "The Who’s Tommy musical is touring North America, with performances scheduled through June 2027. Based on the band’s 1969 concept album, the production brings Pete Townshend’s songs to the stage under director Des McAnuff. This is a theatre production, rather than a concert tour by The Who.",
    source: { name: "The Who · Official announcement", url: "https://www.thewho.com/the-whos-tommy-the-musical-returns-to-u-s-theatres/" },
  },
  {
    id: "motley-crue-take-me-to-the-top",
    photo: {"src": "/images/news/motley-crue-2012.jpg", "width": 1021, "height": 681, "alt": "Mötley Crüe gathered around a piano on a smoky concert stage", "caption": "Mötley Crüe at Sweden Rock, 2012. Archive photo.", "credit": "Bjorn Olsson (Bjornsphoto)", "url": "https://commons.wikimedia.org/wiki/File:M%C3%B6tley_Cr%C3%BCe,_Sweden_Rock_2012.jpg", "license": "CC BY 3.0", "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"},
    artist: "Mötley Crüe",
    category: "Releases",
    announcedOn: "2026-10-09",
    title: "Mötley Crüe revisit their beginnings with a Leathür-era recording",
    summary: "The band have shared the Leathür Records version of “Take Me To The Top” as part of the Too Fast For Love 45th-anniversary campaign. Their official post links to the lyric video, offering another way into the sound of the band’s debut era.",
    source: { name: "Mötley Crüe · Official announcement", url: "https://www.motley.com/news/2026/10/9/take-me-to-the-top-leathr-records-version-is-out-now" },
  },
];
