'use strict'

const Schema = use('Schema')

class ContentSchema extends Schema {
  up () {
    this.create('contents', (table) => {
      table.increments()
      table.string('identifier')
      table.string('section_name')
      table.string('type')
      table.text('data')
      table.integer('user_id').unsigned()
      table
           .foreign('user_id')
           .references('users.id')
           .onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('contents')
  }
}

module.exports = ContentSchema
