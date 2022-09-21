exports.seed = async (knex) => {
  // Inserts seed entries
  await knex('playlist').insert([
    { id: 1, song_id: 1, name: 'Banananana' },
    { id: 2, song_id: 1, name: "When you're a happy banana" },
    { id: 3, song_id: 1, name: 'Cool bananas' },
    { id: 4, song_id: 2, name: 'Pew pew' },
    { id: 5, song_id: 2, name: "Stop right there or I'll point at you!" },
    { id: 6, song_id: 2, name: 'Kachow' },
    { id: 7, song_id: 3, name: 'Thank you very much' },
    { id: 8, song_id: 3, name: "Let's motor!" },
    { id: 9, song_id: 1, name: 'Pyjamas for scale' },
  ])
}
