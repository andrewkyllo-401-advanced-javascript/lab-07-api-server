const express = require('express');
const app = express();
app.use(express.json());


let tempStorage = {
  categories: [
    {
      "id": 1,
      "name": "fruits",
    },
    {
      "id": 2,
      "name": "vegetables"
    }
  ],
  products: [
    {
      "id": 1,
      "name": "banana",
      "description": "yellow and stuff"
    },
    {
      "id": 2,
      "name": "carrots",
      "description": "orange and stuff"
    }
  ]
}

app.get('/categories', (req, res) => {
  let output = {
    name: req.query.name
  }
  res.status(200).json(output);
});
app.get('/products', (req, res) => {
  let output = {
    name: req.query.name
  }
  res.status(200).json(output);
});
app.put('/categories/:id', (req, res) => {
  let id = Number(req.params.id);
  let category = tempStorage.categories.find(el => el.id === id);
  category.name = req.body.name;
  res.status(202).json(category)  
});
app.put('/products/:id', (req, res) => {
  let id = Number(req.params.id);
  let product = tempStorage.products.find(el => el.id === id);
  if (req.body.name && req.body.description) {
    product.name = req.body.name;
    product.description = req.body.description;
  } else if (req.body.name) {
    product.name = req.body.name;
  } else if (req.body.description) {
    product.description = req.body.description;
  } 
  res.status(202).json(product)
});
app.post('/categories', (req, res) => {
  tempStorage.categories.push(req.body);
  res.status(201).json(req.body);
});
app.post('/products', (req, res) => {
  tempStorage.products.push(req.body);
  res.status(201).json(req.body);
});
app.delete('/categories/:id', (req, res) => {
  let id = req.params.id;
  tempStorage = tempStorage.categories.filter(category => category.id != id);
  res.json({});
});
app.delete('/products/:id', (req, res) => {
  let id = req.params.id;
  tempStorage = tempStorage.categories.filter(product => product.id != id);
  res.json({});
});


function timeStamp(request, response, next) {
  const date = new Date();
  const requestTime = date.toLocaleDateString;
  return requestTime;
}

module.exports = {
  server: app,
  start: function(port) {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
  }
}