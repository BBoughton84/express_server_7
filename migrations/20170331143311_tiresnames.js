
exports.up = function(knex) {
    return knex.schema.createTable('tires', t => {
      t.increments('id')
      t.string('brand')
      t.string('name')
      t.integer('size')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tires')
}
