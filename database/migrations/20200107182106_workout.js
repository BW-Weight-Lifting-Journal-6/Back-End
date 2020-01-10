exports.up = function(knex) {
  return knex.schema.createTable("workout", workout => {
    workout.increments();
    //workout.increments('name of table id').primary()
    workout.string("exercise", 128).notNullable();

    workout.timestamp("created_at").defaultTo(knex.fn.now());

    workout.integer("reps", 5).notNullable();

    workout.text("muscle", 128).notNullable();

    workout
      .integer("users_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("workout");
};
