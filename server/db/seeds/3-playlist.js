exports.seed = async (knex) => {
  // Inserts seed entries
  await knex('playlist').insert([
    { id: 1, name: 'Banananana' },
    { id: 2, name: "When you're a happy banana" },
    { id: 3, name: 'Cool bananas' },
    { id: 4, name: 'Pew pew' },
    { id: 5, name: "Stop right there or I'll point at you!" },
    { id: 6, name: 'Kachow' },
    { id: 7, name: 'Thank you very much' },
    { id: 8, name: "Let's motor!" },
    { id: 9, name: 'Pyjamas for scale' },
  ])
}
