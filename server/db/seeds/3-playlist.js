exports.seed = async (knex) => {
  // Inserts seed entries
  await knex('playlist').insert([
    { id: 1, name: 'Summer Vibes' },
    { id: 2, name: 'Hard Rock' },
    { id: 3, name: 'Cool Jazz' },
    { id: 4, name: 'Alternative' },
    { id: 5, name: 'Kiwi Classics' },
    { id: 6, name: 'Aussie Anthems' },
    { id: 7, name: 'Brit Pop' },
    { id: 8, name: 'Punk' },
    { id: 9, name: 'House Party' },
  ])
}
