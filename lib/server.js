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
  let id = req.params.id;
  
});
app.put('/products/:id', (req, res) => {
  let id = req.params.id;
  let product = tempStorage.products.find(el => el.id === id)
  product.name = req.body;

});
app.post('/categories', (req, res) => {

});
app.post('/products', (req, res) => {

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
    app.listen(PORT, () => console.log('Listening on port ${PORT}.'));
  }
}