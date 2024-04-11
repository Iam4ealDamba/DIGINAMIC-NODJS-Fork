const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('App running on port 3000');
});

// localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// localhost:3000/hello/tata
app.get("/hello/:name", (req, res) => {
  const name = req.params.name 
  res.send(`Hello ${name}`);
})

// localhost:3000/params?name=toto
app.get("/param", (req, res) => {
  const name = req.query.name
  const lastname = req.query.lastname
  res.send(`Hello ${name} ${lastname}`);
})
