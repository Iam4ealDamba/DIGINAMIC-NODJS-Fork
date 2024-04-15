const mongoose = require("../config/mongodb.config");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date_debut: {
    type: String,
    required: true,
  },
  date_fin: {
    type: String,
    required: false,
  },
  done: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
