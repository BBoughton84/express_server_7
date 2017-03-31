
exports.seed = function(knex, Promise) {
  return knex('tires').del()
    .then(function () {
      return knex('tires').insert([
        {
          brand: 'BFG',
          name: 'AT KO2',
          size: 20
        },
        {
          brand: 'Perelli',
          name: 'P0',
          size: 19
        },
        {
          brand: 'Michillen',
          name: 'Pilot Sport Cup 2',
          size: 20
        }
      ])
    })
}
