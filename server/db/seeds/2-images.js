exports.seed = async (knex) => {
  // Inserts seed entries
  await knex('images').insert([
    { id: 1, image_url: './public/images/mixtape1.png' },
    {
      id: 2,
      image_url: './public/images/mixtape2.png',
    },
    {
      id: 3,
      image_url: './public/images/mixtape3.png',
    },
    {
      id: 4,
      image_url: './public/images/mixtape4.png',
    },
    {
      id: 5,
      image_url: './public/images/mixtape5.png',
    },
    {
      id: 6,
      image_url: './public/images/mixtape6.png',
    },
    {
      id: 7,
      image_url: './public/images/mixtape7.png',
    },
    {
      id: 8,
      image_url: './public/images/mixtape8.png',
    },
    {
      id: 9,
      image_url: './public/images/mixtape9.png',
    },
    {
      id: 10,
      image_url: './public/images/mixtape10.png',
    },
    {
      id: 11,
      image_url: './public/images/mixtape11.png',
    },
    {
      id: 12,
      image_url: './public/images/mixtape12.png',
    },
    {
      id: 13,
      image_url: './public/images/mixtape13.png',
    },
    {
      id: 14,
      image_url: './public/images/mixtape14.png',
    },
    {
      id: 15,
      image_url: './public/images/mixtape15.png',
    },
    {
      id: 16,
      image_url: './public/images/mixtape16.png',
    },
  ])
}
