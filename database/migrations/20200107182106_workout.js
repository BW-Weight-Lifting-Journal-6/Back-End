exports.up = function(knex) {
  return knex.schema.createTable("workout", workout => {
    workout.increments();

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
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("workout");
};
