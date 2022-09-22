exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('tracks').del()
  await knex('playlist').del()
  await knex('images').del()
  await knex('users').del()
}
