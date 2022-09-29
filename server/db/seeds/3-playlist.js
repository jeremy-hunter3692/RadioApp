exports.seed = async (knex) => {
  // Inserts seed entries
  await knex('playlist').insert([
    { id: 1, name: 'Band Practise - Mafra', image_id: '8' },
    { id: 4, name: 'DOXA mix reference', image_id: '2' },
    { id: 3, name: 'Live DOXA recordings', image_id: '7' },
    { id: 2, name: 'Bootlegs and lost Tracks', image_id: '10' },
    { id: 5, name: 'Deepest of deep cuts', image_id: '9' },
    { id: 6, name: 'Samples to send to Peter', image_id: '3' },
  ])
}
