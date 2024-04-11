const fs = require("fs");
const db = require("../data/db");
const { v4: uuidv4 } = require("uuid");

const Todo = require("../models/Todo");

const TodoController = {
  all: (req, res) => {
    const todo_list = db;

    if (todo_list.length === 0) {
      return res.status(404).json({
        message: "No todo found",
      });
    }

    return res.json({
      todos: todo_list,
    });
  },
  one: (req, res) => {
    const { id } = req.params;
    const todo_occ = db.filter((todo) => todo.id == id)[0];

    console.log(todo_occ);

    if (!todo_occ) {
      return res.status(404).json({
        message: "No todo found",
      });
    }

    const selected_todo = new Todo(
      todo_occ.id,
      todo_occ.title,
      todo_occ.description,
      todo_occ.date_debut,
      todo_occ.date_fin,
      todo_occ.done
    );

    return res.json({
      todo: selected_todo.getTodo(),
    });
  },
  create: (req, res) => {
    const { title, description } = req.body;
    const todo_occ = db.filter((todo) => todo.title == title)[0];

    if (todo_occ) {
      return res.status(409).json({
        message: "Todo already exists",
      });
    }

    const new_todo = new Todo(
      uuidv4(),
      title,
      description,
      new Date().toLocaleString(),
      null,
      false
    );

    fs.writeFileSync(
      "./data/db.json",
      JSON.stringify([
        ...db,
        {
          id: new_todo.getId(),
          title: new_todo.getTitle(),
          description: new_todo.getDescription(),
          date_debut: new_todo.getDateDebut(),
          date_fin: new_todo.getDateFin(),
          done: new_todo.getDone(),
        },
      ])
    );

    return res.status(201).json({
      todo: new_todo.getTodo(),
    });
  },
  delete: (req, res) => {
    const { id } = req.params;
    const todo_occ = db.filter((todo) => todo.id == id)[0];

    if (!todo_occ) {
      return res.status(404).json({
        message: "No todo found",
      });
    }

    const new_db = db.filter((todo) => todo.id != id);
    fs.writeFileSync("./data/db.json", JSON.stringify(new_db));

    return res.status(200).json({
      message: "Todo has been deleted",
    });
  },
  update: (req, res) => {
    const { id } = req.params;
    const todo_occ = db.filter((todo) => todo.id == id)[0];

    if (!todo_occ) {
      return res.status(404).json({
        message: "No todo found",
      });
    }

    const updated_todo = new Todo(
      todo_occ.id,
      todo_occ.title,
      todo_occ.description,
      todo_occ.date_debut,
      todo_occ.date_fin,
      todo_occ.done
    );

    if (updated_todo.getDone()) {
      updated_todo.setDateFin(null);
      updated_todo.setDone(false);
    } else {
      updated_todo.setDateFin(new Date().toLocaleString());
      updated_todo.setDone(true);
    }

    fs.writeFileSync(
      "./data/db.json",
      JSON.stringify([
        ...db.filter((todo) => todo.id != id),
        {
          id: updated_todo.getId(),
          title: updated_todo.getTitle(),
          description: updated_todo.getDescription(),
          date_debut: updated_todo.getDateDebut(),
          date_fin: updated_todo.getDateFin(),
          done: updated_todo.getDone(),
        },
      ])
    );

    return res.status(200).json({
      todo: updated_todo.getTodo(),
    });
  },
};

module.exports = TodoController;
