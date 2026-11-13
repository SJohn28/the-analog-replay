export const newsReviewedOn = "2026-11-13";

export type NewsCategory = "Tours" | "Releases" | "Screen & Stage" | "Remembering";
export type NewsItem = {
  id: string;
  artist: string;
  category: NewsCategory;
  announcedOn: string;
  dateLabel?: string;
  title: string;
  summary: string;
  setlist?: { song: string; performer: string }[];
  setlistNote?: string;
  setlistHeading?: string;
  references?: { name: string; url: string }[];
  tourDates?: { date: string; dateLabel?: string; city: string; venue: string }[];
  tourUrl?: string;
  tourHeading?: string;
  tourCheckedOn?: string;
  photo?: { src: string; width: number; height: number; alt: string; caption: string; credit?: string; url?: string; license?: string; licenseUrl?: string };
  companionPhoto?: NonNullable<NewsItem["photo"]>;
  additionalPhotos?: NonNullable<NewsItem["photo"]>[];
  source: { name: string; url: string };
};

// Original editorial summaries. Dates refer to the linked announcement,
// not the date of the performance or release. Keep newest announcements first.
export const news: NewsItem[] = [
{
  "id": "u2-carnaval-de-luz-release-2026",
  "artist": "U2",
  "category": "Releases",
  "announcedOn": "2026-11-13",
  "dateLabel": "Released",
  "title": "U2 release Carnaval De Luz, featuring a duet with Dolly Parton",
  "summary": "U2 released Carnaval De Luz on November 13 through Island Records. First announced September 24, it is the band’s 16th studio album and their first album of new material in nine years.\n\nThe closing song, “Torn,” is a duet between Bono and Dolly Parton. U2 says Parton recorded her vocal in Nashville in June 2026 and describes it as her final recorded vocal performance. U2, Parton and Johnny McDaid co-wrote the song. Daniel Lanois plays pedal steel on the album track.\n\nA country version of “Torn,” credited to Kent Wells, was also released this week. Brian Eno contributed songwriting and synthesizers to three other songs on the album.",
  "photo": {
    "src": "/images/news/u2-brussels-2017.jpg",
    "width": 1280,
    "height": 673,
    "alt": "Larry Mullen Jr., The Edge, Bono and Adam Clayton performing together onstage",
    "caption": "U2 on the Joshua Tree tour in Brussels on August 1, 2017. Archive photograph resized for display.",
    "credit": "Remy",
    "url": "https://commons.wikimedia.org/wiki/File:U2_on_Joshua_Tree_Tour_2017_Brussels_8-1-17.jpg",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  "references": [
    {
      "name": "U2 · September 24 album announcement and credits",
      "url": "https://www.u2.com/blogs/news/carnaval-de-luz-new-album-coming-in-november"
    }
  ],
  "source": {
    "name": "U2 · November 13 release announcement",
    "url": "https://www.u2.com/blogs/news/out-now-1"
  }
},
{
  "id": "ann-wilson-in-my-voice-digital-2026",
  "artist": "Ann Wilson",
  "category": "Screen & Stage",
  "announcedOn": "2026-11-11",
  "dateLabel": "Reported",
  "title": "Ann Wilson’s In My Voice documentary heads to digital platforms November 25",
  "summary": "Heart singer Ann Wilson’s documentary In My Voice is due on Amazon and Apple on November 25, 2026, according to Classic Rock’s November 11 interview. The film premiered in Seattle in May.\n\nDirected by Barbara Hall and narrated by Wilson, the film follows her from childhood through her career with Heart. It draws on home movies, journals, photographs and previously unseen band footage. Paul Stanley and Chappell Roan are among the artists featured.\n\nWilson told Classic Rock that she invited her sister and Heart bandmate Nancy to be interviewed. According to Ann, Nancy wanted to save her account for a documentary of her own.",
  "photo": {
    "src": "/images/news/ann-wilson-walk-of-fame-2012.jpg",
    "width": 631,
    "height": 794,
    "alt": "Ann Wilson at Heart’s Hollywood Walk of Fame ceremony",
    "caption": "Ann Wilson at Heart’s Hollywood Walk of Fame ceremony on September 25, 2012. Archive photograph.",
    "credit": "Angela George",
    "url": "https://commons.wikimedia.org/wiki/File:AnnWilsonHWOFSept2012.jpg",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  "additionalPhotos": [
    {
      "src": "/images/news/heart-canary-foundation-2007.jpg",
      "width": 876,
      "height": 584,
      "alt": "Nancy and Ann Wilson performing with Heart",
      "caption": "Nancy and Ann Wilson performing at a Canary Foundation benefit on July 28, 2007. Archive photograph.",
      "credit": "Michael Sierra (Fatcat125)",
      "url": "https://commons.wikimedia.org/wiki/File:Heart-07-28-07.jpg",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
    }
  ],
  "references": [
    {
      "name": "Apple TV · Film listing",
      "url": "https://tv.apple.com/us/movie/ann-wilson-in-my-voice/umc.cmc.cn9wf4h9psjzs0y80ozvkxfn"
    }
  ],
  "source": {
    "name": "Classic Rock · November 11 Ann Wilson interview",
    "url": "https://www.loudersound.com/bands-artists/ann-wilson-why-sister-nancy-doesnt-appear-in-her-film"
  }
},
{
  "id": "mccartney-starr-vetsaid-2027",
  "artist": "Joe Walsh, Paul McCartney & Ringo Starr",
  "category": "Tours",
  "announcedOn": "2026-11-09",
  "title": "Paul McCartney and Ringo Starr to join Joe Walsh at VetsAid",
  "summary": "Paul McCartney and Ringo Starr will join Joe Walsh onstage at the tenth VetsAid benefit on January 29, 2027, at MGM Grand Garden Arena in Las Vegas. Walsh announced the lineup on November 9.\n\nThe two Beatles will appear during Walsh’s set. The Killers, The War on Drugs, St. Vincent and Lucius are each scheduled to play full sets. The concert will raise money to support veterans and their families.\n\nPublic ticket sales open through AXS on November 13 at 10 a.m. Pacific. The artist presale runs from November 11 at 10 a.m. Pacific through November 12 at 10 p.m. Pacific.",
  "tourDates": [
    {
      "date": "2027-01-29",
      "city": "Las Vegas, NV",
      "venue": "MGM Grand Garden Arena"
    }
  ],
  "tourHeading": "VetsAid 2027 benefit concert",
  "tourCheckedOn": "November 11, 2026",
  "tourUrl": "https://joewalsh.com/blogs/vetsaid-news/joe-walsh-friends-hit-the-jackpot-vetsaid-2027-lands-in-las-vegas-for-its-biggest-show-ever-hosting-the-10th-benefit-at-mgm-grand-garden-arena-friday-jan-29-2027",
  "source": {
    "name": "Joe Walsh · Official VetsAid announcement",
    "url": "https://joewalsh.com/blogs/vetsaid-news/joe-walsh-friends-hit-the-jackpot-vetsaid-2027-lands-in-las-vegas-for-its-biggest-show-ever-hosting-the-10th-benefit-at-mgm-grand-garden-arena-friday-jan-29-2027"
  },
  "references": [
    {
      "name": "AXS · Artist presale details",
      "url": "https://www.axs.com/events/1664475/joe-walsh-friends-present-vetsaid-tickets/promos/1226589"
    }
  ],
  "photo": {
    "src": "/images/news/mccartney-starr-2009.jpg",
    "width": 1400,
    "height": 1050,
    "alt": "Paul McCartney and Ringo Starr onstage with other musicians in 2009",
    "caption": "Paul McCartney, Ringo Starr and fellow performers on April 4, 2009. Archive photo resized for display.",
    "credit": "audreylynne",
    "url": "https://commons.wikimedia.org/wiki/File:Paul_mc_cartney,_ringo_starr_%26_friends.jpg",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/"
  },
  "additionalPhotos": [
    {
      "src": "/images/news/joe-walsh-2019.jpg",
      "width": 628,
      "height": 767,
      "alt": "Joe Walsh at a microphone",
      "caption": "VetsAid founder Joe Walsh in a 2019 archive photo.",
      "credit": "drbaseball95",
      "url": "https://commons.wikimedia.org/wiki/File:Joe_Walsh_2019.jpg",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/"
    }
  ]
},
{
  "id": "phil-collins-solo-rock-hall-2026",
  "artist": "Phil Collins",
  "category": "Screen & Stage",
  "announcedOn": "2026-11-09",
  "dateLabel": "Interview coverage",
  "title": "Phil Collins reflects on his solo Rock Hall induction",
  "summary": "Phil Collins said he was surprised to learn he was being considered for the Rock & Roll Hall of Fame as a solo artist. In a New York Times interview covered by Louder on November 9, he looked back on making Face Value, his 1981 solo debut, and how working without a clear sense of the rules gave him room to experiment.\n\nThe Hall announced Collins as a 2026 inductee in April. The solo honor follows his 2010 induction with Genesis and recognizes the career he began with Face Value, the album that introduced “In the Air Tonight.”\n\nThe induction ceremony is scheduled for November 14 at the Peacock Theater in Los Angeles. The Hall says the ceremony will debut on ABC and Disney+ in December.",
  "references": [
    {
      "name": "Rock & Roll Hall of Fame · Class of 2026 and ceremony details",
      "url": "https://rockhall.com/press-release/the-rock-roll-hall-of-fame-reveals-2026-inductees/"
    }
  ],
  "source": {
    "name": "Louder · November 9 interview coverage",
    "url": "https://www.loudersound.com/bands-artists/iphil-collins-on-rock-and-roll-hall-of-fame-induction-i-got-used-to-being-overlooked"
  },
  "photo": {
    "src": "/images/news/phil-collins-genesis-2007.jpg",
    "width": 1050,
    "height": 1400,
    "alt": "Phil Collins singing onstage with Genesis",
    "caption": "Phil Collins performing “In the Cage” with Genesis at Washington, D.C.’s Verizon Center on September 23, 2007. Archive photo resized for display.",
    "credit": "Andrew Bossi",
    "url": "https://commons.wikimedia.org/wiki/File:2433_-_Washington_DC_-_Verizon_Center_-_Genesis_-_In_the_Cage.JPG",
    "license": "CC BY-SA 2.5",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  "additionalPhotos": [
    {
      "src": "/images/news/phil-collins-drum-duet-2007.jpg",
      "width": 1400,
      "height": 1050,
      "alt": "Phil Collins and Chester Thompson playing a drum duet",
      "caption": "Collins and Chester Thompson performing a drum duet at the same Genesis concert. Archive photo resized for display.",
      "credit": "Andrew Bossi",
      "url": "https://commons.wikimedia.org/wiki/File:2494_-_Washington_DC_-_Verizon_Center_-_Genesis_-_Drum_Duet.JPG",
      "license": "CC BY-SA 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5/"
    }
  ]
},
{
  "id": "tom-petty-origins-1971-1978",
  "artist": "Tom Petty & the Heartbreakers",
  "category": "Releases",
  "announcedOn": "2026-11-06",
  "dateLabel": "Released",
  "title": "Tom Petty’s Origins traces the road from Mudcrutch to the Heartbreakers",
  "summary": "Origins 1971–1978, released November 6 through UMe, follows Tom Petty’s early recordings through the formation of the Heartbreakers and their first two albums. The estate first announced the collection on September 16 as part of the band’s 50th anniversary.\n\nThe 51-track set opens with No Sleep Til L.A., a 12-track collection that starts with Mudcrutch. The box also includes the Heartbreakers’ self-titled debut, You’re Gonna Get It!, a 1977 Record Plant performance and a disc of rarities. Ryan Ulyate mixed the recordings from the original multitrack tapes.\n\nThe five-LP edition includes Blu-ray Audio and a DVD of the band’s 1978 appearance on the BBC’s Old Grey Whistle Test. No Sleep Til L.A. is also available separately.",
  "source": {
    "name": "Tom Petty Official · Box set contents and track listing",
    "url": "https://store.tompetty.com/products/tom-petty-and-the-heartbreakers-origins-1971-1978-5lp-deluxe"
  }
},
{
  "id": "pink-floyd-animals-50",
  "artist": "Pink Floyd",
  "category": "Releases",
  "announcedOn": "2026-11-05",
  "title": "Pink Floyd’s Animals turns 50 with rarities and a 1977 Oakland concert",
  "summary": "Pink Floyd announced Animals 50 on November 5. The anniversary edition arrives January 22, 2027, with a deluxe box that brings together the original 1977 album, James Guthrie’s 2018 remix and recordings from the band’s archive.\n\nThe rarities include early takes of “Sheep” and “Dogs” and a previously unheard Roger Waters track, “Young Nicholas Jon.” A separate pair of CDs in the deluxe box contains Reinhard Hohlwein’s audience recording of the May 9, 1977 concert at the Oakland Coliseum Arena. The Oakland recording is also included in the digital edition.\n\nA radio edit of “Sheep,” originally distributed for promotion in 1977, became commercially available with the announcement. The deluxe box also includes a book with previously unpublished photographs and accounts of the album artwork and tour.",
  "source": {
    "name": "Pink Floyd · Official Animals 50 announcement",
    "url": "https://www.pinkfloyd.com/pink-floyd-announce-animals-50/"
  }
},
{
  "id": "rush-sphere-elevate-from-norm-2027",
  "artist": "Rush",
  "category": "Tours",
  "announcedOn": "2026-11-05",
  "title": "Rush add five June concerts to their Las Vegas Sphere residency",
  "summary": "Rush have expanded their Elevate From The Norm residency at Sphere in Las Vegas to ten shows. The five additional dates, reported November 11, are June 15, 17, 19, 24 and 26, 2027. They join the five May concerts announced November 5.\n\nGeddy Lee said Rush plans to perform 2112 and Moving Pictures in full alongside other songs. The residency celebrates the band’s catalog and the late drummer and lyricist Neil Peart.\n\nGeneral ticket sales are scheduled to begin November 13 at 10 a.m. Pacific. See the venue and ticket listings for availability.",
  "tourDates": [
    {
      "date": "2027-05-21",
      "city": "Las Vegas, NV",
      "venue": "Sphere"
    },
    {
      "date": "2027-05-23",
      "city": "Las Vegas, NV",
      "venue": "Sphere"
    },
    {
      "date": "2027-05-26",
      "city": "Las Vegas, NV",
      "venue": "Sphere"
    },
    {
      "date": "2027-05-28",
      "city": "Las Vegas, NV",
      "venue": "Sphere"
    },
    {
      "date": "2027-05-30",
      "city": "Las Vegas, NV",
      "venue": "Sphere"
    },
    {
      "date": "2027-06-15",
      "city": "Las Vegas, NV",
      "venue": "Sphere"
    },
    {
      "date": "2027-06-17",
      "city": "Las Vegas, NV",
      "venue": "Sphere"
    },
    {
      "date": "2027-06-19",
      "city": "Las Vegas, NV",
      "venue": "Sphere"
    },
    {
      "date": "2027-06-24",
      "city": "Las Vegas, NV",
      "venue": "Sphere"
    },
    {
      "date": "2027-06-26",
      "city": "Las Vegas, NV",
      "venue": "Sphere"
    }
  ],
  "tourUrl": "https://thesphere.com/shows/rush",
  "tourHeading": "Elevate From The Norm · announced Sphere dates",
  "tourCheckedOn": "November 13, 2026",
  "photo": {
    "src": "/images/news/rush-sphere-2027.jpeg",
    "width": 631,
    "height": 721,
    "alt": "Rush Elevate From The Norm Sphere Las Vegas announcement graphic listing May 21, 23, 26, 28 and 30",
    "caption": "The original announcement graphic lists the five May 2027 shows. The complete schedule below includes the June additions. Graphic supplied by Scott Johnson."
  },
  "references": [
    {
      "name": "Rush · Official dates and ticket-sale schedule",
      "url": "https://www.rush.com/sphere/"
    },
    {
      "name": "Ticketmaster · May and June concert listings",
      "url": "https://www.ticketmaster.com/rush-tickets/artist/807344?venueId=189524"
    },
    {
      "name": "Louder · November 11 residency expansion",
      "url": "https://www.loudersound.com/bands-artists/rush-las-vegas-sphere"
    }
  ],
  "source": {
    "name": "Sphere Entertainment · November 5 announcement",
    "url": "https://www.sphereentertainmentco.com/rush-announces-five-date-elevate-from-the-norm-residency-at-sphere/"
  },
  "additionalPhotos": [
    {
      "src": "/images/news/rush-toronto-2010.jpg",
      "width": 1400,
      "height": 1050,
      "alt": "Alex Lifeson and Geddy Lee performing beside Neil Peart at his drum kit",
      "caption": "Rush at Toronto’s Air Canada Centre, July 17, 2010. Archive photograph featuring Neil Peart; not the 2027 performing lineup. Resized for display.",
      "credit": "Clalansingh",
      "url": "https://commons.wikimedia.org/wiki/File:Rush_all.JPG",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
    }
  ]
},
{
  "id": "ozzfest-three-countries-2027",
  "artist": "Ozzfest",
  "category": "Tours",
  "announcedOn": "2026-11-05",
  "title": "Ozzfest returns in 2027 with dates in Britain, California and Mexico",
  "summary": "Ozzfest has announced three festival dates for 2027, beginning July 10 at the National Bowl in Milton Keynes, England. The November 5 announcement also confirms September 11 at Glen Helen Amphitheater in San Bernardino, California, and September 18 at Estadio GNP Seguros in Mexico City.\n\nSharon Osbourne will curate the lineups, which have not yet been announced. The festival says artist announcements will follow in the coming months. No headliner or participating band should be treated as confirmed at this stage.\n\nThe return follows the death of co-founder Ozzy Osbourne in 2025. Sharon describes the festival as part of his continuing legacy. The Mexico City event will be Ozzfest’s first edition in that city.\n\nEarly Bat tickets are scheduled to go on sale November 6 at 10 a.m. in each event’s local time zone. The official Ozzfest announcement provides separate ticket links for Britain, the United States and Mexico.",
  "tourDates": [
    {
      "date": "2027-07-10",
      "city": "Milton Keynes, England",
      "venue": "The National Bowl"
    },
    {
      "date": "2027-09-11",
      "city": "San Bernardino, CA",
      "venue": "Glen Helen Amphitheater"
    },
    {
      "date": "2027-09-18",
      "city": "Mexico City, Mexico",
      "venue": "Estadio GNP Seguros"
    }
  ],
  "tourHeading": "Ozzfest 2027 · announced festival dates",
  "tourCheckedOn": "November 6, 2026",
  "tourUrl": "https://www.ozzfest.com/",
  "photo": {
    "src": "/images/news/ozzy-2007.jpg",
    "width": 1400,
    "height": 1047,
    "alt": "Ozzy Osbourne singing on a concert stage with his band behind him",
    "caption": "Ozzfest co-founder Ozzy Osbourne performing in Spain in 2007. Archive photograph; resized for display.",
    "credit": "joxeankoret",
    "url": "https://commons.wikimedia.org/wiki/File:Ozzy_Osbourne.jpg",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/"
  },
  "source": {
    "name": "Ozzfest · Official November 5 announcement",
    "url": "https://www.ozzfest.com/news.html%3Fn_id=805.html"
  }
},
{
  "id": "songwriters-hall-of-fame-2027-nominees",
  "artist": "Blondie, America & ZZ Top",
  "category": "Screen & Stage",
  "announcedOn": "2026-11-05",
  "title": "Blondie, America and ZZ Top songwriters nominated for Songwriters Hall of Fame",
  "summary": "Debbie Harry and Chris Stein of Blondie, Gerry Beckley and Dewey Bunnell of America, and Billy Gibbons, Dusty Hill and Frank Beard of ZZ Top are on the Songwriters Hall of Fame’s 2027 ballot. The Hall announced the nominees on November 5, 2026. All three entries are in the performing songwriters category.\n\nThe Hall highlights “Heart of Glass” and “Rapture” from Blondie’s catalog, “A Horse with No Name” and “Sister Golden Hair” from America’s, and “La Grange” and “Sharp Dressed Man” from ZZ Top’s. The ballot also includes Jack White and a group nomination for WAR’s songwriters.\n\nEligible members have until December 14, 2026, to cast ballots. They can vote for up to three entries in each of the songwriter and performing songwriter categories. The Hall will honor the selected inductees at its 2027 gala in New York City.",
  "source": {
    "name": "Songwriters Hall of Fame · Official 2027 nominee list",
    "url": "https://www.songhall.org/news/songwriters-hall-of-fame-2027-nominees-for-induction-announced"
  }
},
{
  "id": "blackmores-night-30th-anniversary-2027",
  "artist": "Blackmore’s Night",
  "category": "Tours",
  "announcedOn": "2026-11-03",
  "title": "Blackmore’s Night announce six concerts for their 30th anniversary",
  "summary": "Ritchie Blackmore and Candice Night have announced a limited Blackmore’s Night tour for March 2027, marking 30 years since the folk-rock project began. The six-show itinerary covers New Jersey, New York and Connecticut.\n\nThe announcement follows the interruption of the band’s 2025 touring plans because of Blackmore’s health. In a statement at the time, the former Deep Purple and Rainbow guitarist described an episode of severe vertigo. The new dates announce a return to Blackmore’s Night concerts; they do not establish that his underlying health issues have resolved.\n\nThe announced run opens March 6 in Newton, New Jersey, and ends March 27 in Englewood. Stops include Port Washington, Norwalk, Woodstock and Riverhead. The Englewood ticket listing confirms March 27, 2027, at Bergen Performing Arts Center.\n\nThe schedule below follows the March 2027 itinerary reported with the anniversary announcement. The band’s current tour page contains inconsistent year, month and ticket-sale labels. Fans should open the individual ticket links and confirm details with the venue before purchasing or making travel plans.",
  "tourHeading": "Announced March 2027 anniversary dates",
  "tourCheckedOn": "November 5, 2026",
  "tourUrl": "https://www.blackmoresnight.com/tour",
  "tourDates": [
    {
      "date": "2027-03-06",
      "city": "Newton, NJ",
      "venue": "Newton Theatre"
    },
    {
      "date": "2027-03-11",
      "city": "Port Washington, NY",
      "venue": "Landmark on Main Street"
    },
    {
      "date": "2027-03-13",
      "city": "Norwalk, CT",
      "venue": "District Music Hall"
    },
    {
      "date": "2027-03-19",
      "city": "Woodstock, NY",
      "venue": "Bearsville Theater"
    },
    {
      "date": "2027-03-21",
      "city": "Riverhead, NY",
      "venue": "Suffolk Theater"
    },
    {
      "date": "2027-03-27",
      "city": "Englewood, NJ",
      "venue": "Bergen Performing Arts Center"
    }
  ],
  "photo": {
    "src": "/images/news/blackmores-night-tarrytown-2012.jpg",
    "width": 1400,
    "height": 933,
    "alt": "Candice Night singing beside Ritchie Blackmore and other Blackmore’s Night musicians on a blue-lit stage",
    "caption": "Blackmore’s Night at Tarrytown Music Hall, October 25, 2012. Archive photograph; resized for display.",
    "credit": "Nsoveiko",
    "url": "https://commons.wikimedia.org/wiki/File:Blackmore%27s_Night_in_2012.jpg",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  "references": [
    {
      "name": "Blackmore’s Night · Official tour and ticket links",
      "url": "https://www.blackmoresnight.com/tour"
    },
    {
      "name": "Ticketmaster · Bergen Performing Arts Center, March 27, 2027",
      "url": "https://www.ticketmaster.com/event/00006561A74C6256"
    }
  ],
  "source": {
    "name": "Guitar Player · Anniversary announcement and itinerary",
    "url": "https://www.guitarplayer.com/guitarists/ritchie-blackmore-s-night-tour-2027"
  }
},
{
  "id": "scorpions-love-peace-rock-roll-2027",
  "artist": "Scorpions",
  "category": "Tours",
  "announcedOn": "2026-11-02",
  "title": "Scorpions announce 2027 Love, Peace & Rock ’N’ Roll tour",
  "summary": "Scorpions have announced their Love, Peace & Rock ’N’ Roll tour for 2027, with a European run from April 29 through July 18. The schedule includes four concerts in Ireland and the United Kingdom, alongside dates across mainland Europe.\n\nThe band’s November 2 announcement gives Rock Zone Community members early ticket access beginning Wednesday, November 4, at 11 a.m. Central European Time. General sales for the newly announced shows begin November 6, but local times and arrangements differ. Fans should use the ticket links on the band’s official tour page for their chosen concert.\n\nThe European dates follow the planned German cinema release of the band’s biographical film Wind of Change on January 28, 2027. An international release date has not been formally announced.\n\nThe schedule below covers the European run. The official calendar also lists Mexico concerts and a Las Vegas residency later in 2027; those appear separately from this April–July itinerary.",
  "tourHeading": "2027 European concert dates",
  "tourCheckedOn": "November 4, 2026",
  "tourUrl": "https://www.the-scorpions.com/tour/",
  "tourDates": [
    {
      "date": "2027-04-29",
      "city": "Barcelona, Spain",
      "venue": "Palau Sant Jordi"
    },
    {
      "date": "2027-05-02",
      "city": "Coruña, Spain",
      "venue": "Coliseum"
    },
    {
      "date": "2027-05-05",
      "city": "Bilbao, Spain",
      "venue": "Bizkaia Arena"
    },
    {
      "date": "2027-05-08",
      "city": "Madrid, Spain",
      "venue": "Movistar Arena"
    },
    {
      "date": "2027-05-12",
      "city": "Stuttgart, Germany",
      "venue": "Schleyer-Halle"
    },
    {
      "date": "2027-05-15",
      "city": "Dortmund, Germany",
      "venue": "Westfalenhalle"
    },
    {
      "date": "2027-05-19",
      "city": "Frankfurt, Germany",
      "venue": "Festhalle"
    },
    {
      "date": "2027-05-22",
      "city": "Munich, Germany",
      "venue": "Olympiahalle"
    },
    {
      "date": "2027-06-03",
      "city": "Kraków, Poland",
      "venue": "Tauron Arena"
    },
    {
      "date": "2027-06-06",
      "city": "Vilnius, Lithuania",
      "venue": "Arena Vilnius"
    },
    {
      "date": "2027-06-09",
      "city": "Prague, Czech Republic",
      "venue": "O2 Arena"
    },
    {
      "date": "2027-06-12",
      "city": "Zagreb, Croatia",
      "venue": "Arena Zagreb"
    },
    {
      "date": "2027-06-15",
      "city": "Vienna, Austria",
      "venue": "Stadthalle"
    },
    {
      "date": "2027-06-17",
      "city": "Zürich, Switzerland",
      "venue": "Hallenstadion"
    },
    {
      "date": "2027-06-20",
      "city": "Rotterdam, Netherlands",
      "venue": "Ahoy"
    },
    {
      "date": "2027-06-23",
      "city": "Rättvik, Sweden",
      "venue": "Dalhalla"
    },
    {
      "date": "2027-06-26",
      "city": "Oslo, Norway",
      "venue": "Tons of Rock"
    },
    {
      "date": "2027-06-30",
      "city": "Dublin, Ireland",
      "venue": "3Arena"
    },
    {
      "date": "2027-07-03",
      "city": "Glasgow, UK",
      "venue": "OVO Hydro"
    },
    {
      "date": "2027-07-06",
      "city": "London, UK",
      "venue": "The O2"
    },
    {
      "date": "2027-07-09",
      "city": "Manchester, UK",
      "venue": "Co-op Live"
    },
    {
      "date": "2027-07-12",
      "city": "Paris, France",
      "venue": "Accor Arena"
    },
    {
      "date": "2027-07-15",
      "city": "Nîmes, France",
      "venue": "Arènes de Nîmes"
    },
    {
      "date": "2027-07-18",
      "city": "Milano, Italy",
      "venue": "Unipol Arena"
    }
  ],
  "photo": {
    "src": "/images/news/scorpions-barcelona-2015.jpg",
    "width": 934,
    "height": 494,
    "alt": "Scorpions performing together on a red-lit concert stage",
    "caption": "Scorpions at Rock Fest Barcelona, July 23, 2015. Archive photograph featuring the lineup of that period; image unchanged.",
    "credit": "dr_zoidberg",
    "url": "https://commons.wikimedia.org/wiki/File:Scorpions_2015.jpg",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/"
  },
  "references": [
    {
      "name": "Scorpions · Official tour calendar",
      "url": "https://www.the-scorpions.com/tour/"
    },
    {
      "name": "Classic Rock · Tour and film release reporting",
      "url": "https://www.loudersound.com/bands-artists/concerts-shows/scorpions-love-peace-and-rocknroll-european-tour"
    }
  ],
  "source": {
    "name": "Scorpions · Official November 2 announcement",
    "url": "https://www.the-scorpions.com/love-peace-rock-n-roll-tour-2027/"
  }
},
{
  "id": "deep-purple-europe-uk-postponement-november-2026",
  "artist": "Deep Purple",
  "category": "Tours",
  "announcedOn": "2026-11-02",
  "title": "Deep Purple postpone the rest of their European and UK tour",
  "summary": "Deep Purple have postponed the remainder of their European and UK tour after Ian Gillan’s recent medical emergency. In a November 2 statement, the singer said doctors and management had advised against continuing because of serious medical risks.\n\nGillan said the problem arose while he was in Leipzig and required urgent hospital attention. He had hoped to receive clearance to finish the tour, but said that was no longer possible. The statement does not identify his diagnosis or give a return date.\n\nThe band and its team are working to reschedule the affected concerts. Tickets already purchased will remain valid for replacement dates. No revised schedule was included in the announcement.\n\nThis expands the October 31 postponement of the Leipzig and Hamburg shows. The new statement covers the remaining European and UK run; it does not announce the cancellation of every future Deep Purple concert. Fans should follow their venue and the band for rescheduling information.",
  "photo": {
    "src": "/images/news/ian-gillan-lieder-am-see-2022.jpg",
    "width": 1280,
    "height": 853,
    "alt": "Ian Gillan singing into a microphone during an outdoor concert",
    "caption": "Ian Gillan at Lieder am See, July 16, 2022. Archive concert photograph; unrelated to the current medical emergency. Resized Wikimedia thumbnail.",
    "credit": "Stefan Brending (2eight)",
    "url": "https://commons.wikimedia.org/wiki/File:2022_Lieder_am_See_-_Deep_Purple_-_Ian_Gillan_-_by_2eight_-_9SC6654.jpg",
    "license": "CC BY-SA 3.0 DE",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en"
  },
  "source": {
    "name": "Deep Purple · November 2 official statement",
    "url": "https://deep-purple.com/important-message-from-ian-gillan-and-deep-purple/"
  }
},
{
  "id": "aerosmith-hollywood-bowl-november-1-2026",
  "artist": "Aerosmith",
  "category": "Screen & Stage",
  "announcedOn": "2026-11-02",
  "dateLabel": "Reported · show November 1",
  "title": "Aerosmith reunite with Run-DMC at their second Hollywood Bowl show",
  "summary": "Aerosmith completed their second California, Dream On concert at the Hollywood Bowl on November 1, 2026, with Run-DMC joining them for “Walk This Way.” Joey Kramer returned for that performance, alongside drummer John Douglas.\n\nDouglas played the main Aerosmith set, which added “Come Together” to the selections heard on October 29. The band opened with “Toys in the Attic” and finished with “Train Kept A-Rollin’.”\n\nThe guest performances also changed. Marcus King, Jerry Cantrell, Mike Inez, Richie Kotzen, Tom Morello, Lzzy Hale, Grace Potter and Pat Monahan appeared during the tribute portion. Heart, Billy Idol and Steve Stevens returned, as did the Black Crowes and Guns N’ Roses.\n\nGuns N’ Roses performed “Mama Kin,” “S.O.S. (Too Bad),” “Rats in the Cellar” and “Sick as a Dog,” followed by “Sweet Child O’ Mine” and “Nightrain.” Heart included “Janie’s Got a Gun” and “Barracuda.”\n\nSteven Tyler’s remarks left the possibility of further appearances open. The two Hollywood Bowl shows do not, however, confirm another Aerosmith tour. The running order below covers Aerosmith’s own seven-song set, rather than every guest performance.",
  "photo": {
    "src": "/images/news/aerosmith-hollywood-bowl-2026.jpg",
    "width": 1280,
    "height": 720,
    "alt": "Aerosmith’s winged logo above the Hollywood Bowl stage, illuminated with colorful projections and concert lights",
    "caption": "Hollywood Bowl photograph supplied by Scott Johnson for our October 29 coverage. Archive image from the earlier show, not the November 1 performance."
  },
  "setlistHeading": "November 1 · Aerosmith’s main set",
  "setlistNote": "Reported by Guitar World and Classic Rock. John Douglas played drums throughout; Joey Kramer and Run-DMC also joined Walk This Way. Guest tribute sets are excluded from this table.",
  "setlist": [
    {
      "song": "Toys in the Attic",
      "performer": "Aerosmith, with John Douglas on drums"
    },
    {
      "song": "Back in the Saddle",
      "performer": "Aerosmith, with John Douglas on drums"
    },
    {
      "song": "Sweet Emotion",
      "performer": "Aerosmith, with John Douglas on drums"
    },
    {
      "song": "Dream On",
      "performer": "Aerosmith, with John Douglas on drums"
    },
    {
      "song": "Come Together",
      "performer": "Aerosmith, with John Douglas on drums"
    },
    {
      "song": "Walk This Way",
      "performer": "Aerosmith + Run-DMC; Joey Kramer and John Douglas on drums"
    },
    {
      "song": "Train Kept A-Rollin’",
      "performer": "Aerosmith, with John Douglas on drums"
    }
  ],
  "references": [
    {
      "name": "Classic Rock · Second-night report and full guest running order",
      "url": "https://www.loudersound.com/bands-artists/aerosmith-dream-on-hollywood-bowl-night-two"
    },
    {
      "name": "Hollywood Bowl · November 1 event",
      "url": "https://www.hollywoodbowl.com/events/instances/5fzv6ejs/2026-11-01/aerosmith-and-friends"
    }
  ],
  "source": {
    "name": "Guitar World · November 1 concert report",
    "url": "https://www.guitarworld.com/artists/concerts-gigs-tours/aerosmith-and-friends-california-dream-on-night-two"
  }
},
{
  "id": "journey-neal-schon-long-goodbye-2026",
  "artist": "Journey",
  "category": "Tours",
  "announcedOn": "2026-11-02",
  "dateLabel": "Reported",
  "title": "Neal Schon says Journey’s farewell feels more like “The Long Goodbye”",
  "summary": "Neal Schon says Journey’s time on the road has brought the band closer together and left him open about what comes next. In a Facebook message to fans, the guitarist described the group’s Final Frontier farewell as increasingly feeling like “The Long Goodbye.”\n\nSchon said the band had completed 110 shows in 2026 and had been playing two-and-a-half-hour Evening with Journey performances, which he described as their longest shows. He credited the audiences’ support with strengthening the musicians’ relationships, both personally and musically. Those show totals and performance lengths are Schon’s account in the message.\n\nThe post thanks fans for continuing to attend and sing along, and says the band will let its connection with those audiences help guide its next steps. It does not specify new concert dates, announce a formal tour-name change or set a revised retirement date.\n\nSchon had already raised the possibility of an extended farewell in a CNN interview broadcast in October. Discussing the Final Frontier name, he said he would not be surprised if the tour became a long goodbye.\n\nJourney previously added 40 North American dates to the tour in a May 12 announcement. That announcement scheduled the fall run from September 12 in Los Angeles through November 28 at San Francisco’s Chase Center. The current lineup comprises Schon, Jonathan Cain, Arnel Pineda, Deen Castronovo, Todd Jensen and Jason Derlatka.\n\nFor now, Schon’s message expresses a willingness to keep the future open. Fans should look to Journey’s official channels for any confirmed additions or changes.",
  "photo": {
    "src": "/images/news/journey-its-not-over.jpg",
    "width": 1258,
    "height": 1600,
    "alt": "Journey graphic reading It’s Not Over, with a winged scarab and the names of the six band members",
    "caption": "Journey “It’s Not Over” graphic supplied by Scott Johnson. The wording on the image is not a confirmed announcement of additional tour dates."
  },
  "references": [
    {
      "name": "CNN · October interview with Journey",
      "url": "https://transcripts.cnn.com/show/cnr/date/2026-10-26/segment/17"
    },
    {
      "name": "Prudential Center · May 12 tour extension announcement",
      "url": "https://www.prucenter.com/news/journey-extends-the-final-frontier-tour-40-additional-north-american-dates-announced-for-fall-2026"
    }
  ],
  "source": {
    "name": "Journey · Official website",
    "url": "https://www.journeymusic.com/"
  }
},
{
  "id": "robert-plant-root-branch-2027",
  "artist": "Robert Plant & Saving Grace",
  "category": "Tours",
  "announcedOn": "2026-11-02",
  "title": "Robert Plant and Saving Grace announce summer 2027 Root & Branch shows",
  "summary": "Robert Plant and Saving Grace have announced an England and Ireland run for June 2027. The Root & Branch tour follows the group’s 2025 album Saving Grace and the recent digital release of the All That Glitters… EP.\n\nPlant performs with vocalist Suzi Dian and a band working in folk, blues and roots music. Lincoln Castle has confirmed a June 24 show with Kate Rusby and Seth Lakeman as special guests. General ticket sales for the new run begin Friday, November 6, at 10 a.m. local time; presale arrangements vary by event.\n\nThe schedule below lists four dates supported by venue, promoter or Ticketmaster listings. Scarborough is also included in the tour announcement, but published sources disagree over its date. Its date is omitted here pending clarification. Ticketmaster lists Halifax’s Piece Hall concert on June 27.",
  "tourHeading": "2027 dates checked against event listings",
  "tourCheckedOn": "November 2, 2026",
  "tourUrl": "https://www.robertplant.com/",
  "tourDates": [
    {
      "date": "2027-06-19",
      "city": "London, England",
      "venue": "Hampton Court Palace Festival"
    },
    {
      "date": "2027-06-24",
      "city": "Lincoln, England",
      "venue": "Lincoln Castle"
    },
    {
      "date": "2027-06-27",
      "city": "Halifax, England",
      "venue": "The Piece Hall"
    },
    {
      "date": "2027-06-29",
      "city": "Dublin, Ireland",
      "venue": "Trinity College Summer Series"
    }
  ],
  "source": {
    "name": "Lincolnshire County Council · Official show announcement",
    "url": "https://www.lincolnshire.gov.uk/news/article/3013/robert-plant-saving-grace-announce-summer-2027-root-branch-tour"
  },
  "references": [
    {
      "name": "Ticketmaster · Halifax, June 27",
      "url": "https://www.ticketmaster.co.uk/robert-plant-halifax-27-06-2027/event/35006548A0AE3FE6"
    },
    {
      "name": "MCD · Dublin and tour announcement",
      "url": "https://www.mcd.ie/artists/robert-plant"
    }
  ],
  "photo": {
    "src": "/images/news/plant-saving-grace.jpg",
    "width": 1400,
    "height": 787,
    "alt": "Robert Plant singing into a microphone onstage",
    "caption": "Robert Plant performing with Saving Grace at Leas Cliff Hall, Folkestone, April 10, 2022. Archive photograph; resized for display.",
    "credit": "Raph_PH",
    "url": "https://commons.wikimedia.org/wiki/File:Robert_Plant_(2022).jpg",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/"
  }
},
{
  "id": "ozzy-sabbath-back-beginning-home-release-2026",
  "artist": "Ozzy Osbourne & Black Sabbath",
  "category": "Screen & Stage",
  "announcedOn": "2026-10-28",
  "title": "Ozzy Osbourne and Black Sabbath farewell film and soundtrack arrive December 11",
  "summary": "Ozzy Osbourne & Black Sabbath: Back to the Beginning will receive home-video and soundtrack releases on December 11, 2026, following its October 28 cinema release. The announcement lists 4K Ultra HD, Blu-ray, CD, vinyl and digital formats, with different combinations available by edition.\n\nThe film documents the July 5, 2025 concert at Villa Park in Birmingham. Osbourne performed with his solo band and reunited with Tony Iommi, Geezer Butler and Bill Ward for Black Sabbath’s farewell. It was Osbourne’s final performance; he died 17 days later.\n\nThe concert film runs approximately three and a half hours and includes selected performances and collaborations from the event. Buyers should check the contents of their chosen edition rather than assume every package contains the entire day’s music.\n\nAn expanded deluxe box is scheduled for April 2027, separately from the December releases. Its announced extras include a bonus Blu-ray collecting 35 Osbourne and Black Sabbath songs and covers performed by special guests. An advance performance of “Mr. Crowley” was released with the October 28 announcement.",
  "source": {
    "name": "Ozzy Osbourne · Official release announcement",
    "url": "https://www.ozzy.com/archives/news/ozzy-osbourne-black-sabbath-back-to-the-beginning"
  },
  "photo": {
    "src": "/images/news/ozzy-2007.jpg",
    "width": 1400,
    "height": 1047,
    "alt": "Ozzy Osbourne singing on a concert stage with his band behind him",
    "caption": "Ozzy Osbourne performing in Spain in 2007. Archive photograph, not the 2025 farewell concert. Resized for display.",
    "credit": "joxeankoret",
    "url": "https://commons.wikimedia.org/wiki/File:Ozzy_Osbourne.jpg",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/"
  }
},
{
  "id": "duran-duran-halloween-o2-2026",
  "artist": "Duran Duran",
  "category": "Screen & Stage",
  "announcedOn": "2026-11-01",
  "dateLabel": "Show: October 31, 2026",
  "title": "Duran Duran bring Danse Macabre to London for a Halloween night of hits and covers",
  "summary": "Duran Duran brought their Danse Macabre Halloween Party to The O2 in London on October 31, 2026, combining familiar singles with darker selections and covers. It was the first London edition of the themed show and the final British date of their autumn arena tour.\n\nThe tradition began with a Halloween concert at the Wynn Theatre in Las Vegas in 2022. That performance inspired the 2023 album Danse Macabre, and subsequent Halloween shows took the concept to Madison Square Garden and Manchester’s Co-op Live. For London, the band had encouraged fans to arrive in costume and promised a set extending beyond the usual hits.\n\nThe fan-maintained setlist.fm report lists 24 live numbers, opening with “Friends of Mine” and ending with an encore of “The Wild Boys” and “Rio.” It records first Duran Duran performances of “Pet Sematary” and “Heads Will Roll,” with Rachael O’Connor taking the lead vocal on the Ramones song alongside Anna Ross.\n\nThe reported running order is below. It is a community-submitted account rather than an official band-issued setlist; performance details may be revised as further reports become available.",
  "setlistHeading": "October 31, 2026 · reported London setlist",
  "setlistNote": "Duran Duran throughout; cover credits and featured vocals are noted. Playback introductions are excluded. The final two songs form the encore. Checked November 1 against setlist.fm.",
  "setlist": [
    {
      "song": "Friends of Mine",
      "performer": "Duran Duran"
    },
    {
      "song": "A View to a Kill",
      "performer": "Duran Duran"
    },
    {
      "song": "Hungry Like the Wolf",
      "performer": "Duran Duran"
    },
    {
      "song": "Danse Macabre",
      "performer": "Duran Duran"
    },
    {
      "song": "Union of the Snake",
      "performer": "Duran Duran"
    },
    {
      "song": "Evil Woman",
      "performer": "ELO cover"
    },
    {
      "song": "Lonely in Your Nightmare / Super Freak",
      "performer": "Duran Duran"
    },
    {
      "song": "The Reflex",
      "performer": "Duran Duran"
    },
    {
      "song": "Spellbound",
      "performer": "Siouxsie and the Banshees cover"
    },
    {
      "song": "Pet Sematary",
      "performer": "Ramones cover; Rachael O’Connor lead vocal, with Anna Ross"
    },
    {
      "song": "Only in Dreams",
      "performer": "Duran Duran"
    },
    {
      "song": "Winter Marches On",
      "performer": "Duran Duran"
    },
    {
      "song": "Confession in the Afterlife",
      "performer": "Duran Duran"
    },
    {
      "song": "New Moon on Monday",
      "performer": "Duran Duran"
    },
    {
      "song": "Paint It Black",
      "performer": "Rolling Stones cover"
    },
    {
      "song": "Supernature",
      "performer": "Cerrone cover"
    },
    {
      "song": "Notorious",
      "performer": "Duran Duran"
    },
    {
      "song": "Free to Love",
      "performer": "Duran Duran"
    },
    {
      "song": "Heads Will Roll",
      "performer": "Yeah Yeah Yeahs cover"
    },
    {
      "song": "Planet Earth",
      "performer": "Duran Duran"
    },
    {
      "song": "White Lines (Don’t Don’t Do It)",
      "performer": "Grandmaster Melle Mel cover"
    },
    {
      "song": "Girls on Film / Psycho Killer",
      "performer": "Duran Duran"
    },
    {
      "song": "The Wild Boys",
      "performer": "Encore"
    },
    {
      "song": "Rio",
      "performer": "Encore"
    }
  ],
  "references": [
    {
      "name": "Duran Duran · Official Halloween show announcement (July 6, 2026)",
      "url": "https://duranduran.com/2026/duran-duran-announce-exclusive-halloween-show-for-uk-arena-tour-2026/"
    },
    {
      "name": "setlist.fm · The O2, October 31, 2026 (fan-maintained)",
      "url": "https://www.setlist.fm/setlist/duran-duran/2026/the-o2-arena-london-england-2b739452.html"
    }
  ],
  "source": {
    "name": "Duran Duran · Official show background",
    "url": "https://duranduran.com/2026/duran-duran-announce-exclusive-halloween-show-for-uk-arena-tour-2026/"
  },
  "photo": {
    "src": "/images/news/duran-duran-halloween-band.jpg",
    "width": 1600,
    "height": 1194,
    "alt": "Duran Duran performing in theatrical costumes in front of a large video backdrop",
    "caption": "Duran Duran onstage in Halloween costumes."
  },
  "additionalPhotos": [
    {
      "src": "/images/news/duran-duran-halloween-singer.jpg",
      "width": 1600,
      "height": 1194,
      "alt": "A singer in gold face paint and an ornate coat amid stage smoke",
      "caption": "Gold face paint and theatrical stage effects."
    },
    {
      "src": "/images/news/duran-duran-halloween-keyboards.jpg",
      "width": 1600,
      "height": 1188,
      "alt": "A costumed keyboard player surrounded by keyboards covered in decorative cobwebs",
      "caption": "Cobweb-covered keyboards add to the Halloween setting."
    },
    {
      "src": "/images/news/duran-duran-halloween-portrait.jpg",
      "width": 1600,
      "height": 1261,
      "alt": "Black-and-white group portrait of Duran Duran in Halloween costumes",
      "caption": "Duran Duran in a Halloween group portrait."
    },
    {
      "src": "/images/news/duran-duran-halloween-stage.jpg",
      "width": 1600,
      "height": 1143,
      "alt": "Duran Duran performing in pale costumes beneath a large horror-themed stage image",
      "caption": "Halloween imagery fills the stage backdrop."
    }
  ]
},
{
  "id": "deep-purple-gillan-german-shows-2026",
  "artist": "Deep Purple",
  "category": "Tours",
  "announcedOn": "2026-10-31",
  "title": "Deep Purple postpone German shows after Ian Gillan is hospitalized",
  "summary": "Update, November 2: Deep Purple have since postponed the rest of their European and UK tour on medical advice. See the band’s November 2 statement for the expanded postponement. Tickets remain valid for rescheduled dates.\n\nDeep Purple have postponed two German concerts after a medical emergency involving singer Ian Gillan led to his hospitalization. The band announced the news on October 31, 2026, ahead of that evening’s scheduled performance in Leipzig.\n\nThe affected concerts are October 31 at the QI Arena in Leipzig and November 1 at the Sporthalle in Hamburg. In its official statement, the group said it was unable to perform those shows as scheduled and acknowledged the short notice for fans.\n\nThe band and its team are working to find replacement dates for both concerts. Tickets already purchased will remain valid for the rescheduled performances. No replacement dates were included in the announcement.",
  "photo": {
    "src": "/images/news/ian-gillan-lieder-am-see-2022.jpg",
    "width": 1280,
    "height": 853,
    "alt": "Ian Gillan singing into a microphone during an outdoor concert",
    "caption": "Ian Gillan at Lieder am See, July 16, 2022. Archive concert photograph; unrelated to the current medical emergency. Resized Wikimedia thumbnail.",
    "credit": "Stefan Brending (2eight)",
    "url": "https://commons.wikimedia.org/wiki/File:2022_Lieder_am_See_-_Deep_Purple_-_Ian_Gillan_-_by_2eight_-_9SC6654.jpg",
    "license": "CC BY-SA 3.0 DE",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en"
  },
  "additionalPhotos": [
    {
      "src": "/images/news/deep-purple-hellfest-2017.jpg",
      "width": 1280,
      "height": 720,
      "alt": "Deep Purple performing together on a festival stage",
      "caption": "Deep Purple at Hellfest on June 16, 2017, including Steve Morse. Archive photograph featuring an earlier lineup. Resized Wikimedia thumbnail.",
      "credit": "Selbymay",
      "url": "https://commons.wikimedia.org/wiki/File:Hellfest2017DeepPurple_07.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
    }
  ],
  "source": {
    "name": "Deep Purple · Official October 31 statement",
    "url": "https://deep-purple.com/announcement-october-31-2026/"
  },
  "references": [
    {
      "name": "November 2 · Expanded European and UK postponement",
      "url": "https://deep-purple.com/important-message-from-ian-gillan-and-deep-purple/"
    }
  ]
},
{
  "id": "u2-europe-2027-tour",
  "artist": "U2",
  "category": "Tours",
  "announcedOn": "2026-10-29",
  "title": "U2 add 12 UK and European stadium shows for 2027",
  "summary": "U2 have announced the UK and European leg of The Greatest Show on Earth World Tour, with Wolf Alice supporting all 12 concerts. The run opens April 26, 2027, in Stockholm and concludes July 6 in Milan.\n\nBono, The Edge, Adam Clayton and Larry Mullen Jr. will perform material from across the band’s catalog. The concerts accompany Carnaval De Luz, due November 13, 2026, and follow the previously announced Latin American dates.\n\nU2.com subscriber presales begin November 2 at 10 a.m. local time. The separate artist presale starts November 5, with registration closing November 1 at 10:59 p.m. GMT. Lisbon is excluded from that artist presale. General sales begin November 6 at 10 a.m. local time.\n\nThe schedule below lists the newly announced UK and European shows. Additional North American dates are expected, but were not included in this announcement.",
  "tourDates": [
    {
      "date": "2027-04-26",
      "city": "Stockholm, Sweden",
      "venue": "Strawberry Arena"
    },
    {
      "date": "2027-04-28",
      "city": "Stockholm, Sweden",
      "venue": "Strawberry Arena"
    },
    {
      "date": "2027-05-05",
      "city": "Paris, France",
      "venue": "Stade de France"
    },
    {
      "date": "2027-05-08",
      "city": "Paris, France",
      "venue": "Stade de France"
    },
    {
      "date": "2027-05-27",
      "city": "Lisbon, Portugal",
      "venue": "Estadio da Luz"
    },
    {
      "date": "2027-06-05",
      "city": "Amsterdam, Netherlands",
      "venue": "Johan Cruijff ArenA"
    },
    {
      "date": "2027-06-06",
      "city": "Amsterdam, Netherlands",
      "venue": "Johan Cruijff ArenA"
    },
    {
      "date": "2027-06-18",
      "city": "London, United Kingdom",
      "venue": "Tottenham Hotspur Stadium"
    },
    {
      "date": "2027-06-19",
      "city": "London, United Kingdom",
      "venue": "Tottenham Hotspur Stadium"
    },
    {
      "date": "2027-06-30",
      "city": "Berlin, Germany",
      "venue": "Olympiastadion"
    },
    {
      "date": "2027-07-05",
      "city": "Milan, Italy",
      "venue": "Stadio San Siro"
    },
    {
      "date": "2027-07-06",
      "city": "Milan, Italy",
      "venue": "Stadio San Siro"
    }
  ],
  "tourHeading": "UK and Europe · announced 2027 concerts",
  "tourUrl": "https://www.u2.com/pages/tours",
  "tourCheckedOn": "October 31, 2026",
  "photo": {
    "src": "/images/news/u2-brussels-2017.jpg",
    "width": 1280,
    "height": 673,
    "alt": "Larry Mullen Jr., The Edge, Bono and Adam Clayton performing together onstage",
    "caption": "U2 in Brussels, August 1, 2017, on the Joshua Tree tour. Archive photo; not a 2027 tour image. Resized Wikimedia thumbnail.",
    "credit": "Remy",
    "url": "https://commons.wikimedia.org/wiki/File:U2_on_Joshua_Tree_Tour_2017_Brussels_8-1-17.jpg",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  "additionalPhotos": [
    {
      "src": "/images/news/u2-arlington-2017.jpg",
      "width": 1280,
      "height": 853,
      "alt": "U2’s illuminated Joshua Tree stage and a packed stadium audience",
      "caption": "U2 at AT&T Stadium in Arlington, Texas, May 26, 2017. Archive stadium view; not the staging for the forthcoming tour. Resized Wikimedia thumbnail.",
      "credit": "Francois Mulder",
      "url": "https://commons.wikimedia.org/wiki/File:U2_Joshua_Tree_Tour_2017_in_Dallas_on_May_26,_2017.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
    }
  ],
  "source": {
    "name": "Live Nation · Official October 29 announcement",
    "url": "https://news.livenationentertainment.com/news/u2-announces-u-k-europe-tour-dates-for-carnaval-de-luz-presents-the-greatest-show-on-earth-world-tour-2027"
  }
},
{
  "id": "triumph-cancel-remaining-2026-tour",
  "artist": "Triumph",
  "category": "Tours",
  "announcedOn": "2026-10-30",
  "title": "Triumph cancel remaining 2026 Reloaded tour dates over medical circumstances",
  "summary": "Triumph have canceled the remaining 2026 dates of their Rock & Roll Machine Reloaded tour, interrupting the second leg of the band’s 50th-anniversary return to the road. The announcement came October 30, less than three weeks before the concerts were due to begin November 17 in Grand Rapids, Michigan.\n\nIn a statement shared through the band’s social media accounts, Triumph cited “sudden and unexpected medical circumstances affecting the band.” The group said the situation prevents rehearsals and means the shows cannot go ahead as planned. It apologized for the short notice and the disappointment to fans.\n\nThe announcement does not identify the affected member or describe the medical issue. It does offer an encouraging update: the band says the outlook is positive and it intends to return to the stage as soon as possible. No return date or replacement schedule was included.\n\nFor ticket holders, the instructions are straightforward. Refunds for the affected concerts will be issued automatically through the original point of purchase; fans do not need to submit a request to start the process. Anyone with questions about an order should contact the ticket provider used for that purchase.\n\nThe fall concerts were intended to continue a comeback that had already brought Triumph back to North American stages in the spring. The planned lineup paired Rik Emmett and Gil Moore with guitarist Phil X, bassist Todd Kerns and drummer Brent Fitz—the same five musicians listed on the band’s official tour website.\n\nFor listeners who grew up with “Lay It on the Line,” “Magic Power” and “Fight the Good Fight,” the Reloaded shows offered another opportunity to hear those songs on an arena stage. The cancellation puts that return on hold, with future plans awaiting an update from the band.",
  "photo": {
    "src": "/images/news/triumph-reloaded-band.webp",
    "width": 1200,
    "height": 675,
    "alt": "Triumph’s expanded touring lineup posing onstage in front of a cheering audience",
    "caption": "Triumph’s expanded touring lineup. Archive image supplied by Scott; not a photograph of the cancellation announcement."
  },
  "companionPhoto": {
    "src": "/images/news/triumph-classic-trio.webp",
    "width": 780,
    "height": 520,
    "alt": "Three longtime members of Triumph acknowledging an audience under warm stage lights",
    "caption": "Triumph’s classic trio. Archive image supplied by Scott."
  },
  "references": [
    {
      "name": "Consequence · October 30 cancellation report and band statement",
      "url": "https://concerts.consequence.net/articles/triumph-cancel-fall-tour"
    },
    {
      "name": "Triumph · official lineup and tour updates",
      "url": "https://triumphmusic.com/"
    }
  ],
  "source": {
    "name": "Blabbermouth · October 30, 2026 · band statement reproduced",
    "url": "https://blabbermouth.net/news/triumph-cancels-leg-two-of-2026-rock-roll-machine-reloaded-u-s-tour-due-to-sudden-and-unexpected-medical-circumstances"
  }
},
{
  "id": "aerosmith-hollywood-bowl-october-29-2026",
  "photo": {
  "src": "/images/news/aerosmith-hollywood-bowl-2026.jpg",
  "width": 1280,
  "height": 720,
  "alt": "Aerosmith’s winged logo above the Hollywood Bowl stage, illuminated with colorful projections and concert lights",
  "caption": "The Hollywood Bowl stage at California, Dream On: Aerosmith & Friends. Image supplied by Scott."
},
  "artist": "Aerosmith & Friends",
  "category": "Screen & Stage",
  "announcedOn": "2026-10-30",
  "dateLabel": "Reported",
  "title": "Aerosmith return to the Hollywood Bowl: the songs, the guests and Joey Kramer’s finale",
  "summary": "Aerosmith returned to the concert stage at the Hollywood Bowl on Thursday, October 29, 2026, closing the first California, Dream On: Aerosmith & Friends show with six songs. Before Steven Tyler and his bandmates appeared, guest performers worked through a much wider selection of the group’s catalog.\n\nThe format gave the evening two distinct parts: a tribute performed by other artists, followed by Aerosmith’s own set. Sully Erna, Warren Haynes, Billy Idol, Sammy Hagar, Heart and Eric Church took turns before longer appearances by the Black Crowes and Guns N’ Roses. The guests did more than revisit the biggest singles. The reported selections included “Make It,” “Lord of the Thighs” and “Write Me a Letter,” alongside later radio favorites.\n\nThe Black Crowes played five songs associated with Aerosmith and Joe Perry, while Guns N’ Roses opened with three Aerosmith covers—“Nobody’s Fault,” “Last Child” and “Seasons of Wither”—before adding their own “Welcome to the Jungle” and “Paradise City.”\n\nLiv Tyler and Alicia Silverstone introduced Aerosmith. Dave Grohl joined Steven Tyler, Joe Perry, Brad Whitford and Tom Hamilton on drums as they opened with “Toys in the Attic,” then moved through “Back in the Saddle,” “Sweet Emotion” and “Dream On.” Johnny Depp joined the guitar lineup for “Train Kept A-Rollin’.”\n\nFor the closing “Walk This Way,” founding drummer Joey Kramer took over the kit. The appearance brought the five longtime members together for the finale, after Grohl had handled the preceding five songs.\n\nThe concert followed the interruption of Aerosmith’s Peace Out farewell tour in September 2023 and the band’s 2024 retirement from touring after Tyler’s vocal injury. These Hollywood Bowl appearances were announced as two special nights, with a second show scheduled for November 1; they were not an announcement of a new full tour.",
  "setlist": [
    {
      "song": "Make It",
      "performer": "Sully Erna"
    },
    {
      "song": "Lightning Strikes",
      "performer": "Sully Erna"
    },
    {
      "song": "Lord of the Thighs",
      "performer": "Warren Haynes"
    },
    {
      "song": "Walkin’ the Dog",
      "performer": "Warren Haynes"
    },
    {
      "song": "Livin’ on the Edge",
      "performer": "Billy Idol with Steve Stevens"
    },
    {
      "song": "Draw the Line",
      "performer": "Sammy Hagar"
    },
    {
      "song": "Helter Skelter",
      "performer": "Sammy Hagar"
    },
    {
      "song": "Never Loved a Girl",
      "performer": "Heart"
    },
    {
      "song": "Janie’s Got a Gun",
      "performer": "Heart"
    },
    {
      "song": "Rag Doll",
      "performer": "Eric Church"
    },
    {
      "song": "I Don’t Want to Miss a Thing",
      "performer": "Eric Church"
    },
    {
      "song": "Let the Music Do the Talking",
      "performer": "The Black Crowes"
    },
    {
      "song": "Write Me a Letter",
      "performer": "The Black Crowes"
    },
    {
      "song": "Combination",
      "performer": "The Black Crowes"
    },
    {
      "song": "No More No More",
      "performer": "The Black Crowes"
    },
    {
      "song": "Chip Away the Stone",
      "performer": "The Black Crowes"
    },
    {
      "song": "Nobody’s Fault",
      "performer": "Guns N’ Roses"
    },
    {
      "song": "Last Child",
      "performer": "Guns N’ Roses"
    },
    {
      "song": "Seasons of Wither",
      "performer": "Guns N’ Roses"
    },
    {
      "song": "Welcome to the Jungle",
      "performer": "Guns N’ Roses"
    },
    {
      "song": "Paradise City",
      "performer": "Guns N’ Roses"
    },
    {
      "song": "Toys in the Attic",
      "performer": "Aerosmith · Dave Grohl on drums"
    },
    {
      "song": "Back in the Saddle",
      "performer": "Aerosmith · Dave Grohl on drums"
    },
    {
      "song": "Sweet Emotion",
      "performer": "Aerosmith · Dave Grohl on drums"
    },
    {
      "song": "Dream On",
      "performer": "Aerosmith · Dave Grohl on drums"
    },
    {
      "song": "Train Kept A-Rollin’",
      "performer": "Aerosmith with Johnny Depp · Dave Grohl on drums"
    },
    {
      "song": "Walk This Way",
      "performer": "Aerosmith · Joey Kramer on drums"
    }
  ],
  "setlistNote": "Reported live-song running order for October 29, checked October 30, 2026. Rows 1–21 are guest performances; Aerosmith’s six-song set begins at row 22. Credits identify the featured act or guest, not a verified list of every backing musician. Playback music is excluded. The full running order comes from the fan-maintained Aerosmith Setlists archive; the Black Crowes, Guns N’ Roses and Aerosmith portions were cross-checked against their separate setlist.fm entries and concert reports.",
  "references": [
    {
      "name": "Full running order · Aerosmith Setlists (fan-maintained)",
      "url": "https://www.aerosmithsetlists.com/setlist/202610290/2026-10-29-hollywood"
    },
    {
      "name": "Aerosmith concert report · Loudwire",
      "url": "https://loudwire.com/aerosmith-first-show-hollywood-bowl-setlist/"
    },
    {
      "name": "The Black Crowes · setlist.fm",
      "url": "https://www.setlist.fm/setlist/the-black-crowes/2026/hollywood-bowl-los-angeles-ca-b7cbd7e.html"
    },
    {
      "name": "Guns N’ Roses · setlist.fm",
      "url": "https://www.setlist.fm/setlist/guns-n-roses/2026/hollywood-bowl-los-angeles-ca-2b7cb4ce.html"
    },
    {
      "name": "Aerosmith · setlist.fm",
      "url": "https://www.setlist.fm/setlist/aerosmith/2026/hollywood-bowl-los-angeles-ca-4b7f5b4a.html"
    }
  ],
  "source": {
    "name": "Ultimate Classic Rock · October 30 concert report",
    "url": "https://ultimateclassicrock.com/aerosmith-hollywood-bowl-concert-videos-set-list/"
  }
},
{
  "id": "cheap-trick-2027-concert-cancellations",
  "artist": "Cheap Trick",
  "category": "Tours",
  "announcedOn": "2026-10-28",
  "dateLabel": "Reported",
  "title": "Cheap Trick cancel scheduled 2027 shows as band takes touring break",
  "summary": "Cheap Trick’s scheduled 2027 concerts have been canceled as the band prepares to take time away from performing, according to venue announcements reported by Pollstar on October 28. The 2027 dates had also been removed from the band’s website, while its remaining November 2026 shows were still listed.\n\nSuncoast Charities for Children, organizer of Sarasota’s Thunder by the Bay Music & Motors Festival, said the band’s agency had informed it of a break of undetermined length. The February festival appearance will no longer take place. Harrah’s Cherokee Casino Resort also announced that its scheduled Cheap Trick show had been canceled.\n\nNo return date has been announced. The reports describe a pause in touring, rather than a farewell announcement. Fans holding tickets should consult their venue and ticket seller for cancellation notices and refund instructions.\n\nThe November 2026 All Washed Up dates remain a separate part of the schedule. As of the reports, that run was set to begin November 5 in Fort Wayne, Indiana, and finish November 22 in Detroit. Check current venue listings before making travel plans.",
  "photo": {
    "src": "/images/news/cheap-trick-marysville-2009.jpg",
    "width": 1280,
    "height": 960,
    "alt": "Members of Cheap Trick performing onstage",
    "caption": "Rick Nielsen, Bun E. Carlos and Robin Zander performing in Marysville, California, September 3, 2009. Archive photo featuring an earlier lineup. Resized Wikimedia thumbnail.",
    "credit": "Nick Ares",
    "url": "https://commons.wikimedia.org/wiki/File:Cheap-trick.jpg",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/"
  },
  "source": {
    "name": "Pollstar · October 28, 2026",
    "url": "https://news.pollstar.com/2026/10/28/cheap-trick-to-take-time-off-cancels-2027-tour-dates/"
  }
},
{
  "id": "bruce-dickinson-psychogod-tour-2027",
  "artist": "Bruce Dickinson",
  "category": "Tours",
  "announcedOn": "2026-10-27",
  "title": "Bruce Dickinson announces 2027 PsychoGod solo tour",
  "summary": "Bruce Dickinson will take his solo band across the UK and Europe in 2027 on the PsychoGod Tour. Announced October 27, the schedule combines summer concerts and festival appearances with a longer run in November and December.\n\nThe Iron Maiden singer says the performances will feature new material alongside favorites and less frequently heard songs from across his solo career. He will be joined by guitarists Chris Declercq and Philip Näslund, bassist Tanya O’Callaghan, drummer Dave Moreno and keyboardist Mistheria. Swedish band Evergrey will support the November–December dates.\n\nThe itinerary begins June 14 at Belfast’s Ulster Hall and ends December 10 at L’Olympia in Paris. Festival entries below show the event’s full date range, as listed in the announcement; Dickinson’s individual performance days have not been specified there.\n\nGeneral ticket sales begin October 30, 2026, at 10 a.m. GMT. Presale access opened October 28. Use the official tour page for tickets and any schedule changes.",
  "tourDates": [
    {
      "date": "2027-06-14",
      "city": "Belfast, UK",
      "venue": "Ulster Hall"
    },
    {
      "date": "2027-06-16",
      "city": "Dublin, Ireland",
      "venue": "The Academy"
    },
    {
      "date": "2027-06-22",
      "city": "Milan, Italy",
      "venue": "Alcatraz"
    },
    {
      "date": "2027-06-23",
      "city": "Zurich, Switzerland",
      "venue": "Volkshaus"
    },
    {
      "date": "2027-06-25",
      "city": "Zagreb, Croatia",
      "venue": "SRC Salata"
    },
    {
      "date": "2027-06-26",
      "city": "Belgrade, Serbia",
      "venue": "Luka Beograd"
    },
    {
      "date": "2027-06-28",
      "city": "Sofia, Bulgaria",
      "venue": "Vidas Art Arena"
    },
    {
      "date": "2027-06-29",
      "city": "Istanbul, Türkiye",
      "venue": "Bonus Parkorman"
    },
    {
      "date": "2027-07-02",
      "city": "Cartagena, Spain",
      "venue": "Rock Imperium · festival dates July 2–4; performance day TBA",
      "dateLabel": "Jul 2–4, 2027"
    },
    {
      "date": "2027-07-07",
      "city": "Luxembourg City, Luxembourg",
      "venue": "Den Atelier"
    },
    {
      "date": "2027-07-07",
      "city": "Ballenstedt, Germany",
      "venue": "Rockharz · festival dates July 7–10; performance day TBA",
      "dateLabel": "Jul 7–10, 2027"
    },
    {
      "date": "2027-07-08",
      "city": "Vizovice, Czechia",
      "venue": "Masters of Rock · festival dates July 8–11; performance day TBA",
      "dateLabel": "Jul 8–11, 2027"
    },
    {
      "date": "2027-11-10",
      "city": "Warsaw, Poland",
      "venue": "Stodola"
    },
    {
      "date": "2027-11-12",
      "city": "Helsinki, Finland",
      "venue": "Black Box Jäähalli"
    },
    {
      "date": "2027-11-14",
      "city": "Stockholm, Sweden",
      "venue": "Annexet"
    },
    {
      "date": "2027-11-16",
      "city": "Oslo, Norway",
      "venue": "Sentrum Scene"
    },
    {
      "date": "2027-11-17",
      "city": "Copenhagen, Denmark",
      "venue": "Store Vega"
    },
    {
      "date": "2027-11-19",
      "city": "Hamburg, Germany",
      "venue": "Inselpark Arena"
    },
    {
      "date": "2027-11-20",
      "city": "Berlin, Germany",
      "venue": "UberEats Music Hall"
    },
    {
      "date": "2027-11-22",
      "city": "Munich, Germany",
      "venue": "Zenith"
    },
    {
      "date": "2027-11-24",
      "city": "Düsseldorf, Germany",
      "venue": "Mitsubishi Electric Halle"
    },
    {
      "date": "2027-11-25",
      "city": "Amsterdam, Netherlands",
      "venue": "AFAS Live"
    },
    {
      "date": "2027-11-27",
      "city": "Lincoln, UK",
      "venue": "The Engine Shed"
    },
    {
      "date": "2027-11-28",
      "city": "Glasgow, UK",
      "venue": "O2 Academy"
    },
    {
      "date": "2027-11-30",
      "city": "Manchester, UK",
      "venue": "O2 Apollo"
    },
    {
      "date": "2027-12-01",
      "city": "Bristol, UK",
      "venue": "O2 Academy"
    },
    {
      "date": "2027-12-03",
      "city": "London, UK",
      "venue": "Eventim Apollo"
    },
    {
      "date": "2027-12-04",
      "city": "Birmingham, UK",
      "venue": "O2 Academy"
    },
    {
      "date": "2027-12-07",
      "city": "Lyon, France",
      "venue": "Le Radiant-Bellevue"
    },
    {
      "date": "2027-12-08",
      "city": "Toulouse, France",
      "venue": "Le Bikini"
    },
    {
      "date": "2027-12-10",
      "city": "Paris, France",
      "venue": "L’Olympia"
    }
  ],
  "tourHeading": "PsychoGod Tour · announced 2027 schedule",
  "tourCheckedOn": "October 29, 2026",
  "tourUrl": "https://www.brucedickinsonhq.com/bruce-announces-psychogod-tour-2027/",
  "photo": {
    "src": "/images/news/bruce-dickinson-paris-2024.jpg",
    "width": 960,
    "height": 1399,
    "alt": "Bruce Dickinson at a record signing with Iron Maiden and solo albums in front of him",
    "caption": "Bruce Dickinson at a signing at Gibert Joseph in Paris on March 4, 2024. Archive photo; not a 2027 tour image. Resized Wikimedia thumbnail.",
    "credit": "ManoSolo13241324",
    "url": "https://commons.wikimedia.org/wiki/File:Bruce_Dickinson_2024.jpg",
    "license": "CC0 1.0",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  "source": {
    "name": "Bruce Dickinson HQ · Official October 27 announcement",
    "url": "https://www.brucedickinsonhq.com/bruce-announces-psychogod-tour-2027/"
  }
},
{
  "id": "kiss-end-of-the-road-documentary-2026",
  "artist": "Kiss",
  "category": "Screen & Stage",
  "announcedOn": "2026-10-27",
  "dateLabel": "Reported",
  "title": "Kiss announce farewell-tour documentary for November 19",
  "summary": "Kiss will revisit their final tour in Kiss: End of the Road, a documentary directed by DJ Viola. The film will premiere through a special livestream on KissOnline.com on November 19, 2026.\n\nThe documentary follows the work and relationships behind the farewell shows, including the band’s final performances at Madison Square Garden in New York. The tour began in Vancouver on January 31, 2019, and concluded at the Garden on December 2, 2023, after 250 concerts.\n\nThe announcement promises access to the preparations, disagreements and emotions surrounding the closing run. Paul Stanley and Gene Simmons describe it as a chance to experience those shows from inside the band, rather than only from the audience. A trailer is available with the announcement.\n\nFans can check KissOnline.com for the livestream arrangements and further viewing details.",
  "photo": {
    "src": "/images/news/kiss-gene-simmons-o2-2019.jpg",
    "width": 1280,
    "height": 720,
    "alt": "Gene Simmons singing and playing bass in Kiss makeup and stage armor",
    "caption": "Gene Simmons at London’s O2 on July 11, 2019, during Kiss’s End of the Road tour. Archive concert photo; not a documentary still. Resized Wikimedia thumbnail.",
    "credit": "Raph_PH",
    "url": "https://commons.wikimedia.org/wiki/File:KissO2110719_(48692469608).jpg",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/"
  },
  "source": {
    "name": "Classic Rock · October 27, 2026",
    "url": "https://www.loudersound.com/bands-artists/kiss-announce-end-of-the-road-documentary"
  }
},
{
  "id": "lita-ford-dracula-2026",
  "artist": "Lita Ford",
  "category": "Releases",
  "announcedOn": "2026-10-27",
  "title": "Lita Ford releases “Dracula” single and video ahead of Halloween",
  "summary": "Lita Ford has released “Dracula,” a new single accompanied by an official music video. Arriving on October 27, 2026, it is her first release since signing with Frontiers Music Srl and offers a preview of more music expected in 2027.\n\nGary Hoey produced the track, returning to a collaboration that included Ford’s 2012 album Living Like a Runaway. Ford and Hoey perform on the recording alongside drummer Bobby Rock. The song uses its vampire theme to explore attraction, danger and control, with slide guitar adding to the atmosphere.\n\nFord’s previous album, Time Capsule, arrived in 2016 and collected earlier unreleased recordings. “Dracula” puts the focus back on new material from the former Runaways guitarist, whose solo catalog includes “Kiss Me Deadly” and “Close My Eyes Forever.”\n\nThe release also arrives ahead of Halloween-weekend shows in Las Vegas on October 30 and Rancho Mirage, California, on October 31. The official video is included in Classic Rock’s report.",
  "photo": {
    "src": "/images/news/lita-ford-2009.jpg",
    "width": 960,
    "height": 1280,
    "alt": "Lita Ford playing a black electric guitar onstage",
    "caption": "Lita Ford performing on June 27, 2009. Archive concert photo; not a still from “Dracula.” Resized Wikimedia thumbnail of an enhanced photograph.",
    "credit": "Shadowgate; enhancement by Bojars",
    "url": "https://commons.wikimedia.org/wiki/File:Lita_Ford.jpg",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/"
  },
  "source": {
    "name": "Classic Rock · October 27, 2026",
    "url": "https://www.loudersound.com/music/tracks-singles/lita-ford-dracula"
  }
},
{
  "id": "donnie-iris-remembering-2026",
  "companionPhoto": {"src": "/images/news/donnie-iris-love-is-like-a-rock.jpg", "width": 600, "height": 595, "alt": "Young Donnie Iris on the blue Love Is Like a Rock single sleeve", "caption": "Donnie Iris on the sleeve of “Love Is Like a Rock,” backed with “Agnes.” MCA Records artwork; image supplied by Scott."},
  "artist": "Donnie Iris",
  "category": "Remembering",
  "announcedOn": "2026-10-26",
  "dateLabel": "Reported",
  "title": "Remembering Donnie Iris, the voice behind “Ah! Leah!” and “Love Is Like a Rock”",
  "summary": "Donnie Iris, whose career stretched from the Jaggerz to Donnie Iris and the Cruisers, died on October 26, 2026, at 83. Concert promoter Rich Engler confirmed the news, according to Pittsburgh station WPXI.\n\nFor many rock listeners, Iris’s voice is inseparable from “Ah! Leah!” and “Love Is Like a Rock.” “My Girl” was another of his familiar hits. Before his success with the Cruisers, he had reached a national audience with the Jaggerz and “The Rapper,” and later spent time in Wild Cherry.\n\nHis performing career continued for decades, with a devoted following around Pittsburgh. After cancer treatment, he returned to the stage in March 2024. His final concert was September 28, 2026, at the opening of Citizens Live at the Wylie in Pittsburgh. He announced his retirement in October, citing health issues.\n\nThose last appearances closed a career that connected several generations of listeners—from fans who first heard the Jaggerz to those who discovered him through the Cruisers’ early-1980s records.",
  "photo": {
    "src": "/images/news/donnie-iris-south-park-2011.jpg",
    "width": 960,
    "height": 720,
    "alt": "Donnie Iris holding a microphone during an outdoor concert",
    "caption": "Donnie Iris performing at South Park near Pittsburgh on August 26, 2011. Archive concert photograph.",
    "credit": "Comic Book Runner",
    "url": "https://commons.wikimedia.org/wiki/File:Donnie_Iris_South_Park.jpg",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  "source": {
    "name": "WPXI · October 26, 2026",
    "url": "https://www.wpxi.com/news/local/pittsburgh-area-music-legend-donnie-iris-dies-83/ILIA3QG46ZEVTBPYZ56D5MXA6A/"
  }
},
{
  "id": "santana-planet-of-free-will-2027",
  "artist": "Santana",
  "category": "Tours",
  "announcedOn": "2026-10-26",
  "title": "Santana announce 13 European dates for 2027’s Planet of Free Will tour",
  "summary": "Santana have announced the Planet of Free Will Global Tour 2027, with 13 European concerts scheduled from June 30 through July 31. The itinerary begins at London’s O2 and ends at Kaivopuisto Blues in Helsinki, with arena and outdoor appearances across ten countries.\n\nThe October 26 announcement says the performances will draw on more than five decades of music, including the Abraxas and Supernatural eras.\n\nFan presales begin October 27, with most tickets going on general sale October 30. Paris has a later general sale, on November 20. Pordenone, Lucca and Helsinki were already on sale when the itinerary was announced. Check the official tour links for local sale times and availability.",
  "tourDates": [
    {
      "date": "2027-06-30",
      "city": "London, United Kingdom",
      "venue": "The O2"
    },
    {
      "date": "2027-07-07",
      "city": "Paris, France",
      "venue": "Accor Arena"
    },
    {
      "date": "2027-07-08",
      "city": "Kestenholz, Switzerland",
      "venue": "Festival St. Peter at Sunset"
    },
    {
      "date": "2027-07-10",
      "city": "Mönchengladbach, Germany",
      "venue": "SparkassenPark"
    },
    {
      "date": "2027-07-14",
      "city": "Wiesbaden, Germany",
      "venue": "Brita Arena"
    },
    {
      "date": "2027-07-17",
      "city": "Pordenone, Italy",
      "venue": "Pordenone Capitale italiana della Cultura 2027"
    },
    {
      "date": "2027-07-18",
      "city": "Lucca, Italy",
      "venue": "Lucca Summer Festival"
    },
    {
      "date": "2027-07-21",
      "city": "Klam, Austria",
      "venue": "Burg Clam"
    },
    {
      "date": "2027-07-22",
      "city": "Slavkov u Brna, Czech Republic",
      "venue": "Zámecká zahrada"
    },
    {
      "date": "2027-07-24",
      "city": "Krakow, Poland",
      "venue": "TAURON Arena Krakow"
    },
    {
      "date": "2027-07-25",
      "city": "Halle, Germany",
      "venue": "Freilichtbuehne Peissnitz"
    },
    {
      "date": "2027-07-28",
      "city": "Oslo, Norway",
      "venue": "Oslo Spektrum"
    },
    {
      "date": "2027-07-31",
      "city": "Helsinki, Finland",
      "venue": "Kaivopuisto Blues"
    }
  ],
  "tourUrl": "https://santana.com/news/santana-announces-planet-of-free-will-global-tour-2027/",
  "tourHeading": "Announced European concerts · 2027",
  "tourCheckedOn": "October 27, 2026",
  "source": {
    "name": "Santana · Official October 26 announcement",
    "url": "https://santana.com/news/santana-announces-planet-of-free-will-global-tour-2027/"
  }
},
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
