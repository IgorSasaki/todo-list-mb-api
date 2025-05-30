const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Task",
  tableName: "tasks",
  columns: {
    id: {
      primary: true,
      type: "integer",
      generated: true,
    },
    title: {
      type: "varchar",
    },
    description: {
      type: "varchar",
    },
  },
});
