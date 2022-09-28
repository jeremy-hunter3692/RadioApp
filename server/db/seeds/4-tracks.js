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
      filepath: 'tracks/Sample3.mp3',
      title: 'Jeds is my Jam',
      artist: 'DJJP',
      album: 'JedsJams',
      notes: "it's hype",
    },
    {
      id: 3,
      filepath: 'tracks/Sample4.mp3',
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
      filepath: 'tracks/Sample6.mp3',
      title: 'based',
      artist: 'DJ DBQueen',
      album: 'Vibes first',
      notes: "it's fun",
    },
    {
      id: 6,
      filepath:
        'https://res.cloudinary.com/dwjfqnyxs/video/upload/v1664159254/yqaaj6xj8jsoayhxaiqx.m4a',
      title: 'Live set practise',
      artist: 'DOXA',
      album: 'Practicising for the Moon show',
      notes: 'Trying out those new tracks',
    },
    {
      id: 7,
      filepath: 'https://www.youtube.com/watch?v=_WHqZRSXxFA',
      title: 'Bernward Büker Bande ',
      artist: 'Alltag',
      album: '1981 Tanz Mit Dem Herzen',
      notes: "From that Deutschwave album I can't find this anywhere else.. ",
    },
    {
      id: 8,
      filepath: 'tracks/Sample1.mp3',
      title: 'Ciara demo',
      artist: '3ch∆in$&a†∆•nga',
      album: 'Demos',
      notes: "From the mixtape he's reworking - Latest Version",
    },
    {
      id: 9,
      filepath: 'tracks/Sample3.mp3',
      title: 'Groeni bootleg-from twisted frequency',
      artist: 'Groeni',
      album: 'Live Bootleg',
      notes: 'That absolute banger they played in the middle of their set',
    },
  ])
}
