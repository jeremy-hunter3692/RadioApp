exports.seed = async (knex) => {
  // Inserts seed entries
  await knex('tracks').insert([
    {
      id: 1,
      filepath:
        'https://res.cloudinary.com/dwjfqnyxs/video/upload/v1664157078/diwaul89qwnzdaurdigu.mp3',
      title: 'South Island',
      artist: 'The Trainsurfers',
      album: 'The Trainsurfers Greatest Hit',
      notes: "Ollie's future number one hit!",
    },
    {
      id: 2,
      filepath: 'tracks/Sample3',
      title: 'Jeds is my Jam',
      artist: 'DJJP',
      album: 'JedsJams',
      notes: "it's hype",
    },
    {
      id: 3,
      filepath: 'tracks/Sample6',
      title: 'jam33',
      artist: 'DJ Nani',
      album: 'Queen Nani',
      notes: "it's lit",
    },
    {
      id: 4,
      filepath:
        'https://res.cloudinary.com/dwjfqnyxs/video/upload/v1664160392/u5jyu0opalgao03ailqw.m4a',
      title: 'No Surprises',
      artist: 'Radiohead',
      album: 'Radiohead tribute concert',
      notes: 'Live recording from Te Atamira, Queenstown - 27-Aug-22',
    },
    {
      id: 5,
      filepath: 'tracks/Sample4',
      title: 'based',
      artist: 'DJ DBQueen',
      album: 'Vibes first',
      notes: "it's fun",
    },
    {
      id: 6,
      filepath:
        'https://res.cloudinary.com/dwjfqnyxs/video/upload/v1664159254/yqaaj6xj8jsoayhxaiqx.m4a',
      title: 'Lithium - Bassline',
      artist: 'Nirvana',
      album: 'Practicising for Nirvana gig at the Blue Door',
      notes: 'Craig practicing bassline for Lithium',
    },
    {
      id: 7,
      filepath: 'tracks/Sample5',
      title: 'woo hoo',
      artist: 'DJ Catfish',
      album: 'You know it',
      notes: "it's awesome",
    },
    {
      id: 8,
      filepath: 'tracks/Sample3',
      title: 'standard',
      artist: 'DJ JazzHands',
      album: '5 hours of average jazz',
      notes: "it's amazing",
    },
    {
      id: 9,
      filepath: 'tracks/Sample1',
      title: 'handle this',
      artist: 'DJ LoveHandles',
      album: 'Can you handle it',
      notes: "it's lovely",
    },
  ])
}
