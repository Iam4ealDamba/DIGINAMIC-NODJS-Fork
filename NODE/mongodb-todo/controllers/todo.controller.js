const { validationResult } = require("express-validator");

const Todo = require("../schemas/todo.schema");
const TodoModel = require("../models/Todo");

const TodoController = {
  all: async (_, res) => {
    console.log("all");
    const todo_list = await Todo.find();

    if (todo_list.length === 0) {
      return res.status(404).json({
        message: "No todo found",
      });
    }

    return res.json({
      todos: todo_list,
    });
  },
  one: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title } = req.params;
      const todo_occ = await Todo.findOne({ title });

      if (!todo_occ) {
        return res.status(404).json({
          message: "No todo found",
        });
      }

      const selected_todo = new TodoModel(
        todo_occ._id,
        todo_occ.title,
        todo_occ.description,
        todo_occ.date_debut,
        todo_occ.date_fin,
        todo_occ.done
      );

      return res.json({
        todo: selected_todo.getTodo(),
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },
  create: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, description } = req.body;
      const todo_occ = await Todo.findOne({ title });

      if (todo_occ) {
        return res.status(409).json({
          message: "Todo already exists",
        });
      }

      await Todo.create({
        title,
        description,
        date_debut: new Date().toLocaleString(),
        date_fin: null,
        done: false,
      }).then((todo) => {
        const new_todo = new TodoModel(
          todo._id,
          todo.title,
          todo.description,
          todo.date_debut,
          todo.date_fin,
          todo.done
        );

        return res.status(201).json({
          todo: new_todo.getTodo(),
        });
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },
  delete: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title } = req.params;
      const todo_occ = await Todo.findOne({ title });

      if (!todo_occ) {
        return res.status(404).json({
          message: "No todo found",
        });
      }

      await Todo.deleteOne({ title: todo_occ.title }).then(() => {
        return res.status(200).json({
          message: "Todo has been deleted",
        });
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },
  update: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title } = req.params;
      const { done, description } = req.body;
      const todo_occ = await Todo.findOne({ title });

      if (!todo_occ) {
        return res.status(404).json({
          message: "No todo found",
        });
      }

      await Todo.updateOne({
        title: todo_occ.title,
        description: description || todo_occ.description,
        date_debut: todo_occ.date_debut,
        date_fin: done ? new Date().toLocaleString() : null,
        done: done || todo_occ.done,
      }).then(() => {
        const updated_todo = new TodoModel(
          todo_occ.id,
          todo_occ.title,
          todo_occ.description,
          todo_occ.date_debut,
          todo_occ.date_fin,
          todo_occ.done
        );
        return res.status(200).json({
          todo: updated_todo.getTodo(),
        });
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  },
};

module.exports = TodoController;
