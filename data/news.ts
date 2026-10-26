export const newsReviewedOn = "2026-10-26";

export type NewsCategory = "Tours" | "Releases" | "Screen & Stage";
export type NewsItem = {
  id: string;
  artist: string;
  category: NewsCategory;
  announcedOn: string;
  dateLabel?: string;
  title: string;
  summary: string;
  tourDates?: { date: string; city: string; venue: string }[];
  tourUrl?: string;
  tourHeading?: string;
  tourCheckedOn?: string;
  photo?: { src: string; width: number; height: number; alt: string; caption: string; credit?: string; url?: string; license?: string; licenseUrl?: string };
  additionalPhotos?: NonNullable<NewsItem["photo"]>[];
  source: { name: string; url: string };
};

// Original editorial summaries. Dates refer to the linked announcement,
// not the date of the performance or release. Keep newest announcements first.
export const news: NewsItem[] = [
{
  "id": "deep-purple-splat-video-2026",
  "artist": "Deep Purple",
  "category": "Releases",
  "announcedOn": "2026-10-23",
  "dateLabel": "Reported",
  "title": "Deep Purple release performance video for “Splat!”",
  "summary": "Deep Purple have released a performance video for “Splat!,” the title track of their July 2026 studio album. The song follows singles “Arrogant Boy,” “Diablo,” and “Guilt Trippin’.”\n\nThe video arrives during the band’s European tour, ahead of November concerts in the United Kingdom. The UK run includes Newcastle, Glasgow, Birmingham, Manchester, and two London shows. Classic Rock’s report includes the official video and the tour itinerary.",
  "photo": {
    "src": "/images/news/deep-purple-hellfest-2017.jpg",
    "width": 1280,
    "height": 720,
    "alt": "Deep Purple performing together on a festival stage",
    "caption": "Deep Purple at Hellfest, June 16, 2017, including Steve Morse. Archive photo; not a still from the new video. Wikimedia thumbnail resized from the original.",
    "credit": "Selbymay",
    "url": "https://commons.wikimedia.org/wiki/File:Hellfest2017DeepPurple_07.jpg",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "source": {
    "name": "Classic Rock · October 23, 2026",
    "url": "https://www.loudersound.com/bands-artists/deep-purple-splat-video"
  }
},
{
  "id": "fleetwood-mac-the-chain-documentary",
  "artist": "Fleetwood Mac",
  "category": "Screen & Stage",
  "announcedOn": "2026-10-22",
  "title": "Fleetwood Mac’s story comes to Apple TV in The Chain",
  "summary": "Fleetwood Mac’s music has outlasted the arguments, separations, and changing relationships that helped shape it. A new documentary will look at how those connections held together—and how five very different musicians kept finding a shared sound.\n\nFleetwood Mac: The Chain premieres globally on Apple TV on Friday, January 29, 2027. Directed by Frank Marshall, the fully authorized film brings together the voices and perspectives of Mick Fleetwood, John McVie, Christine McVie, Lindsey Buckingham, and Stevie Nicks. Apple says it includes previously unseen footage and exclusive new interviews.\n\nThe title is a fitting choice. “The Chain” is the only song on Rumours credited to all five members, making it a natural thread for a film about their complicated musical bond. The release also arrives as Rumours approaches its fiftieth anniversary.\n\nFor listeners who know the records by heart, the appeal is the opportunity to hear more about the people behind them: what each brought to the music, what pulled them apart, and what kept drawing them together.",
  "photo": {
    "src": "/images/stories/fleetwood-mac-group.webp",
    "width": 696,
    "height": 392,
    "alt": "Fleetwood Mac posing together in a black-and-white band portrait",
    "caption": "Fleetwood Mac. Archive photograph; not a still from the forthcoming documentary."
  },
  "source": {
    "name": "Apple Original Films · Official October 22 announcement",
    "url": "https://www.apple.com/tv-pr/news/2026/10/apple-original-films-unveils-title-and-release-date-for-first-ever-fully-authorized-fleetwood-mac-documentary-fleetwood-mac-the-chain/"
  }
},
{
  "id": "b52s-hollywood-star-2026",
  "artist": "The B-52s",
  "category": "Screen & Stage",
  "announcedOn": "2026-10-21",
  "dateLabel": "Reported",
  "title": "The B-52s to receive Hollywood Walk of Fame star on October 29",
  "summary": "The B-52s will receive a star on the Hollywood Walk of Fame on Thursday, October 29, 2026. The ceremony begins at 11:30 a.m. Pacific / 2:30 p.m. Eastern at 6212 Hollywood Boulevard, outside Amoeba Music.\n\nRichard Blade will host, with Fred Armisen and the Go-Go’s appearing as guest speakers. The band will receive the Walk of Fame’s 2,861st star, in the Recording category. Fans can watch the ceremony live on the official Walk of Fame website.\n\nThe honor recognizes a catalog that includes “Love Shack” and “Roam,” both from 1989’s Cosmic Thing. The Hollywood Chamber of Commerce’s announcement provides the ceremony details and a history of the band.",
  "photo": {
    "src": "/images/news/b52s-athens-2011.jpg",
    "width": 2048,
    "height": 1047,
    "alt": "Concert collage featuring Fred Schneider, Kate Pierson, Cindy Wilson, and Keith Strickland of the B-52s",
    "caption": "The B-52s in Athens, Georgia, February 18, 2011. Clockwise from top left: Fred Schneider, Kate Pierson, Keith Strickland, and Cindy Wilson. Archive concert collage; not the Hollywood ceremony.",
    "credit": "KevinPatrickLaw",
    "url": "https://commons.wikimedia.org/wiki/File:BsLiveCollage.jpg",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  "source": {
    "name": "Hollywood Chamber of Commerce · Official ceremony announcement",
    "url": "https://walkoffame.com/press_releases/good-stuff-the-b-52s-to-be-honored-by-hollywood-chamber-of-commerce-with-star-on-the-hollywood-walk-of-fame/"
  }
},
{
  "id": "rolling-stones-who-you-callin-crazy",
  "artist": "The Rolling Stones",
  "category": "Releases",
  "announcedOn": "2026-10-20",
  "title": "The Rolling Stones share “Who You Callin’ Crazy” ahead of expanded album",
  "summary": "The Rolling Stones have released “Who You Callin’ Crazy,” a new single featuring saxophonist Courtney Pine. Released on October 20, the track offers a preview of Foreign Tongues, Loose Lips, arriving November 27, 2026.\n\nThe expanded collection brings together five recordings from the creative period surrounding Foreign Tongues. Alongside the new single are “Where There’s A Will,” featuring Steve Winwood on organ, “Human Tide,” “Bad Luck Hideaway,” and “She Still Comes Around.” The release will be available on vinyl, two CDs, and digitally.\n\nWritten by Mick Jagger and Keith Richards and produced by Andrew Watt, the single pairs the band’s guitar lineup with Pine’s saxophone, Steve Jordan on drums, and Matt Clifford on keyboards. The label’s announcement includes a link to hear the track.",
  "photo": {
    "src": "/images/news/stones-band-2018.jpg",
    "width": 5647,
    "height": 3194,
    "alt": "The Rolling Stones taking a bow together after a London concert",
    "caption": "The Rolling Stones in London, May 22, 2018, including Charlie Watts. Archive photo.",
    "credit": "Raph_PH",
    "url": "https://commons.wikimedia.org/wiki/File:Rolling_Stones_bow_post-show,_London,_22_May_2018_(41437870545).jpg",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/"
  },
  "additionalPhotos": [
    {
      "src": "/images/news/stones-jagger-2018.jpg",
      "width": 5738,
      "height": 3228,
      "alt": "Mick Jagger singing onstage in front of a stadium audience",
      "caption": "Mick Jagger performing in London, May 22, 2018. Archive photo.",
      "credit": "Raph_PH",
      "url": "https://commons.wikimedia.org/wiki/File:Mick_Jagger_onstage_in_London,_22_May_2018_(40532922060).jpg",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/"
    }
  ],
  "source": {
    "name": "Universal Music Canada · Official October 20 announcement",
    "url": "https://www.universalmusic.ca/2026/10/20/the-rolling-stones-announce-new-single-who-you-callin-crazy-from-forthcoming-deluxe-edition-foreign-tongues-loose-lips/"
  }
},
{
  "id": "u2-thanksgiving-eve-2026",
  "artist": "U2",
  "category": "Screen & Stage",
  "announcedOn": "2026-10-20",
  "title": "U2 to headline Thanksgiving Eve halftime show on Netflix",
  "summary": "U2 will perform at halftime during the Green Bay Packers–Los Angeles Rams game at SoFi Stadium in Inglewood, California, on November 25, 2026. Kickoff is scheduled for 8 p.m. Eastern; the performance will follow during halftime. The appearance comes as the band celebrates 50 years together, bringing their stadium sound to Netflix’s holiday football broadcast.",
  "photo": {
    "src": "/images/news/u2-twickenham-2017.jpg",
    "width": 4899,
    "height": 2763,
    "alt": "U2 performing on a stadium stage surrounded by fans at Twickenham",
    "caption": "U2 at Twickenham Stadium, July 9, 2017. Archive photo.",
    "credit": "Raph_PH",
    "url": "https://commons.wikimedia.org/wiki/File:U2_-_Twickenham_Stadium_-_Sunday_9th_July_2017_U2Twick090717-14_(35946845695).jpg",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/"
  },
  "source": {
    "name": "U2 · Official October 20 announcement",
    "url": "https://www.u2.com/blogs/news/halftime-headline-for-nfls-thanksgiving-eve-live-on-netflix"
  }
},
{
  "id": "eagles-sphere-january-2027",
  "artist": "Eagles",
  "category": "Tours",
  "announcedOn": "2026-10-20",
  "title": "Eagles add January shows to their Sphere residency",
  "summary": "The Eagles have added January 8 and 9, 2027, to their Sphere residency in Las Vegas. The October 20 announcement brings the residency to 74 shows in total, extending a run that began in September 2024. Fourteen announced performances remain as of October 21, spanning November and December 2026 and January 2027. General ticket sales for the two newly added shows begin October 30 at 10 a.m. Pacific.",
  "tourHeading": "Remaining Sphere residency dates",
  "tourCheckedOn": "October 21, 2026",
  "tourDates": [
    {
      "date": "2026-11-13",
      "city": "Las Vegas, Nevada",
      "venue": "Sphere"
    },
    {
      "date": "2026-11-14",
      "city": "Las Vegas, Nevada",
      "venue": "Sphere"
    },
    {
      "date": "2026-11-27",
      "city": "Las Vegas, Nevada",
      "venue": "Sphere"
    },
    {
      "date": "2026-11-28",
      "city": "Las Vegas, Nevada",
      "venue": "Sphere"
    },
    {
      "date": "2026-12-04",
      "city": "Las Vegas, Nevada",
      "venue": "Sphere"
    },
    {
      "date": "2026-12-05",
      "city": "Las Vegas, Nevada",
      "venue": "Sphere"
    },
    {
      "date": "2026-12-11",
      "city": "Las Vegas, Nevada",
      "venue": "Sphere"
    },
    {
      "date": "2026-12-12",
      "city": "Las Vegas, Nevada",
      "venue": "Sphere"
    },
    {
      "date": "2027-01-08",
      "city": "Las Vegas, Nevada",
      "venue": "Sphere · Newly added"
    },
    {
      "date": "2027-01-09",
      "city": "Las Vegas, Nevada",
      "venue": "Sphere · Newly added"
    },
    {
      "date": "2027-01-15",
      "city": "Las Vegas, Nevada",
      "venue": "Sphere"
    },
    {
      "date": "2027-01-16",
      "city": "Las Vegas, Nevada",
      "venue": "Sphere"
    },
    {
      "date": "2027-01-22",
      "city": "Las Vegas, Nevada",
      "venue": "Sphere"
    },
    {
      "date": "2027-01-23",
      "city": "Las Vegas, Nevada",
      "venue": "Sphere"
    }
  ],
  "tourUrl": "https://eagles.com/",
  "photo": {
    "src": "/images/news/eagles-2008.jpg",
    "width": 1000,
    "height": 667,
    "alt": "The Eagles performing onstage with guitars during their 2008 tour",
    "caption": "The Eagles on their Long Road Out of Eden tour in 2008, including Glenn Frey. Archive photo; not the current Sphere lineup.",
    "credit": "Steve Alexander",
    "url": "https://commons.wikimedia.org/wiki/File:The_Eagles_in_performance,_2008.jpg",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/"
  },
  "source": {
    "name": "Eagles · Official October 20 announcement",
    "url": "https://eagles.com/blogs/news/eagles-at-sphere-january-8"
  }
},
  {
    id: "blondie-high-noon-2027",
    artist: "Blondie",
    category: "Releases",
    announcedOn: "2026-10-20",
    dateLabel: "Reported",
    title: "Blondie announce High Noon, with new single “Spectral Eyes”",
    summary: "Blondie’s twelfth studio album, High Noon, is scheduled for February 26, 2027, through BMG. “Spectral Eyes” is available now, and the album features contributions from Johnny Marr, Glen Matlock, and members of Lucius. The band’s official website includes the track listing and links to hear the single.",
    photo: { src: "/images/news/blondie-roundhouse-2017.jpg", width: 4026, height: 2264, alt: "Debbie Harry singing with Blondie against colorful stage lights at the Roundhouse", caption: "Blondie at London’s Roundhouse, May 3, 2017. Archive photo.", credit: "Raph_PH", url: "https://commons.wikimedia.org/wiki/File:Blondie_-_Roundhouse_-_Wednesday_3rd_May_2017_BlondieRoundhouse030517-9_(33633922913).jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/" },
    source: { name: "Blondie · Official album announcement", url: "https://blondie.net/" },
  },
  {
    id: "bon-jovi-forever-tour-2027",
    photo: { src: "/images/news/bon-jovi-live.jpg", width: 1500, height: 2000, alt: "Bon Jovi performing onstage with guitars and drums", caption: "Bon Jovi onstage." },
    artist: "Bon Jovi",
    category: "Tours",
    announcedOn: "2026-10-19",
    title: "Bon Jovi extend the Forever Tour into 2027",
    summary: "Bon Jovi have announced seven stadium and outdoor shows across Australia, the United Kingdom, the United States, and Canada. The 2027 run follows their 2026 return to major stages, including multiple nights at Madison Square Garden and Wembley Stadium. Melbourne opens the itinerary in March, with Toronto closing the announced dates in August.",
    tourDates: [
      { date: "2027-03-04", city: "Melbourne, Australia", venue: "Marvel Stadium" },
      { date: "2027-03-11", city: "Sydney Olympic Park, Australia", venue: "Accor Stadium" },
      { date: "2027-06-24", city: "London, United Kingdom", venue: "BST Hyde Park" },
      { date: "2027-07-15", city: "East Rutherford, New Jersey", venue: "MetLife Stadium" },
      { date: "2027-07-21", city: "Chicago, Illinois", venue: "Soldier Field" },
      { date: "2027-07-28", city: "Foxborough, Massachusetts", venue: "Gillette Stadium" },
      { date: "2027-08-04", city: "Toronto, Canada", venue: "Rogers Stadium" },
    ],
    tourUrl: "https://www.bonjovi.com/live.php",
    source: { name: "Loudwire · October 19, 2026", url: "https://loudwire.com/bon-jovi-2027-tour/" },
  },
  {
    id: "govt-mule-irving-guests-2026",
    artist: "Gov’t Mule",
    category: "Tours",
    announcedOn: "2026-10-19",
    dateLabel: "Reported",
    title: "Gov’t Mule celebrate rock classics with Ziggy Marley and Yola",
    summary: "Gov’t Mule closed their joint tour in Irving, Texas, on October 17 with guest appearances and songs associated with Bob Marley, Led Zeppelin, and the Grateful Dead. Yola joined for “Black Dog,” while Ziggy Marley contributed to “Lively Up Yourself.” Relix’s report recounts the collaborations from the final evening.",
    source: { name: "Relix · Concert report", url: "https://relix.com/news/detail/govt-mule-welcome-ziggy-marley-adam-zimmon-damon-grant-and-yola-in-texas-for-led-zeppelin-grateful-dead-and-bob-marley-covers" },
  },
  {
    id: "bob-dylan-oslo-autumn-2026",
    artist: "Bob Dylan",
    category: "Tours",
    announcedOn: "2026-10-18",
    dateLabel: "Reported",
    title: "Bob Dylan brings surprises to his autumn tour opener",
    summary: "At Oslo Spektrum on October 17, Bob Dylan revisited “Tangled Up in Blue” and performed covers of Randy Newman’s “Louisiana 1927” and Guy Clark’s “Dublin Blues.” The varied set offered a fresh start to his European tour. Relix’s report includes the full setlist from the opening night.",
    source: { name: "Relix · Concert report", url: "https://relix.com/news/detail/bob-dylan-debuts-new-covers-revisits-old-originals-and-welcomes-another-guitarist-in-oslo" },
  },
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
