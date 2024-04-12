const Tasks = require('../repository/taskRepository');
const controller = {};

controller.getAll = (req, res) => {
  res.send(Tasks);
};

controller.store = (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description,
    done: false,
    start_date:
      req.body.start_date ?? new Date(Date.now()).toLocaleDateString('En-US'),
    end_date: req.body.end_date,
  };

  Tasks.push(task);
  res.json(task);
};

controller.update = (req, res) => {
  const id = parseInt(req.params.id);
  const index = Tasks.findIndex((task) => task.id === id);

  const task = {
    id: id,
    title: req.body.title ?? Tasks[index].title,
    description: req.body.description ?? Tasks[index].description,
    done: req.body.done ?? Tasks[index].done,
    start_date: req.body.start_date ?? Tasks[index].start_date,
    end_date: req.body.end_date ?? Tasks[index].end_date,
  };
  Tasks[index] = task;

  res.send(task);
};

controller.destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const index = Tasks.findIndex((task) => task.id === id);
  Tasks.splice(index, 1);
  res.send('Task deleted');
};

module.exports = controller;
