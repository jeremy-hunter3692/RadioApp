exports.seed = async (knex) => {
  // Inserts seed entries
  await knex('playlist').insert([
    { id: 1, name: 'I purple you' },
    { id: 2, name: 'Waiata Reo Māori' },
    { id: 3, name: 'Classic Kiwi Summer' },
    { id: 4, name: 'The Boom Boom Room' },
    // { id: 5, name: "Stop right there or I'll point at you!" },
    // { id: 6, name: 'Kachow' },
    // { id: 7, name: 'Thank you very much' },
    // { id: 8, name: "Let's motor!" },
    // { id: 9, name: 'Pyjamas for scale' },
  ])
}
