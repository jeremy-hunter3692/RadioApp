exports.seed = async (knex) => {
  // Inserts seed entries
  await knex('playlist').insert([
    { id: 1, name: 'Summer Vibes', image_id: '6' },
    { id: 2, name: 'Bootleg Recordings', image_id: '11' },
    { id: 3, name: 'Cool Jazz', image_id: '3' },
    { id: 4, name: 'K Pop', image_id: '16' },
  ])
}
