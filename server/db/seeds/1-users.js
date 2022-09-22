exports.seed = async (knex) => {
  // Inserts seed entries
  await knex('users').insert([
    { auth0_id: '1', name: 'Peter' },
    { auth0_id: '2', name: 'Craig' },
    { auth0_id: '3', name: 'Nani' },
    { auth0_id: '4', name: 'Jeremy' },
  ])
}
