const deleteTodo = async (title) => {
  await fetch(`http://localhost:3001/api/todos/${title}`, {
    method: "DELETE",
  });
};

const IndexController = {
  index: async (req, res) => {
    const request = await fetch("http://localhost:3001/api/todos");
    const data = await request.json();
    const todos = data.todos;

    if (!todos) {
      return res.render("pages/index", {
        url: req.protocol + "://" + req.get("host") + req.originalUrl,
        deleteTodo: deleteTodo,
        todos: [],
      });
    }

    res.render("pages/index", {
      todos: todos,
    });
  },
  one: async (req, res) => {
    const { title: url_title } = req.params;
    const title = url_title.replaceAll("-", " ");
    const request = await fetch(`http://localhost:3001/api/todos/${title}`);
    const data = await request.json();
    const todo = data.todo;

    if (!todo) {
      return res.render("pages/not-found");
    }

    res.render("pages/todo", {
      todo: todo,
    });
  },
  delete: async (req, res) => {
    const { title: url_title } = req.params;
    const title = url_title.replaceAll("-", " ");

    await fetch(`http://localhost:3001/api/todos/${title}`, {
      method: "DELETE",
    });

    const request = await fetch("http://localhost:3001/api/todos");
    const data = await request.json();
    const todo = data.todo;

    return res.redirect("/");
  },
};

module.exports = IndexController;
