const { response } = require('express');
const express = require('express');
const cors = require('cors');
const e = require('express');
const app = express();

app.use(cors())
app.use(express.json())


app.set('port', process.env.PORT || 3001)
app.locals.title = 'Under A Tack'

// Confirm the server is running
app.get('/', (req, res) => {
  res.send('UnderATack')
  console.log('Request>>>', req)
  console.log('Response>>>', res)
});

//Console.log for confirmation
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
})


//Send all images upon visit
app.get('/api/v1/favorites', (req, res) => {
  res.json(app.locals.favorites)
})

app.get('/api/v1/favorites/:id', (req, res) => {
  const foundFavorite = app.locals.favorites.find(element => element.id === req.params.id)
  console.log(req, res)
  if (!foundFavorite) {
    return res.status(404).json({ message: `Sorry, no favorite found with an id of ${req.params.id}` })
  }
  res.status(200).json(foundFavorite)
})

app.post('/api/v1/favorites', (req, res) => {
  const postedItem = req.body;
  for (let requiredParameter of ['id', 'url', 'title', 'color', 'artist', 'type']) {
    if (!postedItem[requiredParameter]) {
      res
        .status(422)
        .send({
          error: `Expected format: {id: <Number>, url: <String>, title: <String>, color: <String>, artist: <String>, type: <String>. You\'re missing a "${requiredParameter}" property.`
        })
    }
  }

  app.locals.images.forEach(image => {
    if(image.id === postedItem.id && !app.locals.favorites.includes(image)){
      image.favorited = true
      app.locals.favorites.push(image);
      res.status(201).json(postedItem);
    }
  });
  console.log('POST IS HAPPENING OMG <<>>>><<<<<>>>>');
})

app.delete('/api/v1/favorites/:id', (req, res) => {
  const deletedId = req.params.id;
  app.locals.images.forEach(image => {
    if(image.id === deletedId) {
      image.favorited = false
    }
  })
  const filteredFavorites = app.locals.favorites.filter(element => element.id !== deletedId);
  app.locals.favorites = filteredFavorites;
  res.status(200).json(app.locals.favorites);
})

app.get('/api/v1/images', (req, res) => {
  const images = app.locals.images
  console.log('RequestPARAMS>>>', req.params)
  console.log('Response>>>', res)
  res.json(images)
})

//Send a single image upon visit
app.get('/api/v1/images/:id', (req, res) => {
  const imageId = req.params.id
  console.log('RequestPARAMSID>>>', imageId)
  const allImages = app.locals.images
  const foundImage = allImages.find(image => image.id === imageId)
  console.log(req, res)
  if (!foundImage) {
    return res.send(req.params.id)
  }
  res.status(200).json(foundImage)
})

//POST data here:
app.post('/api/v1/images', (req, res) => {
  const addedImage = req.body;
  console.log(addedImage)
  for (let requiredParameter of ['id', 'url', 'title', 'color', 'artist', 'type', 'quantity', 'price']) {
    if (!addedImage[requiredParameter]) {
      res
        .status(422)
        .send({
          error: `Expected format: {name: <String>, type: <String>. You\'re missing a "${requiredParameter}" property.`
        })
    }
  }
  const {id, url, title, color, artist, type, quantity, price } = addedImage
  app.locals.images.push({ id, url, title, color, artist, type, quantity, price })
  res.status(201).json({ id, url, title, color, artist, type, quantity, price })
  console.log(req, res)
})

// GET cart items
app.get('/api/v1/cart', (req, res) => {
  const cartItems = app.locals.cart
  // console.log('RequestPARAMS>>>', req.params)
  // console.log('Response>>>', res)
  res.json(cartItems)
})

// POST item to cart
app.post('/api/v1/cart', (req, res) => {
  const addedItem = req.body;
  app.locals.images.forEach(image => {
    if(image.id === addedItem.id && !app.locals.cart.includes(image)){
      image.quantity++
      app.locals.cart.push(image);
      res.status(201).json(addedItem);
    } else if(image.id === addedItem.id){
      image.quantity++
      res.status(201).json(addedItem);
    }
  });
  console.log('POST IS HAPPENING OMG <<>>>><<<<<>>>>')
})



//Data to send and be hosted on the API
app.locals.images = [
  {
    id: "1",
    url: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
    title: 'Prometheus Bound and the Oceanids',
    color: ['white', 'black', 'grey'],
    artist: 'Eduard Müller',
    type: 'sculpture',
    favorited: false,
    quantity: 0,
    price: '25'
  },
  {
    id: "2",
    url: 'https://images.unsplash.com/photo-1555443805-658637491dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1585&q=80',
    title: 'Dea',
    color: ['blue', 'white'],
    artist: `unknown`,
    type: 'sculpture',
    favorited: false,
    quantity: 0,
    price: '25'
  },
  {
    id: "3",
    url: 'https://images.unsplash.com/photo-1506813561347-cbbdf7b3f520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1002&q=80',
    title: 'Ercole e Ippolita',
    color: ['black', 'white', 'yellow'],
    artist: `Vincenzo de' rossi`,
    type: 'sculpture',
    favorited: false,
    quantity: 0,
    price: '25'
  },
  {
    id: "4",
    url: 'https://images.unsplash.com/photo-1628508438706-6e6a19853e1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    title: 'Homer Head',
    color: ['purple'],
    artist: `unknown`,
    type: 'sculpture',
    favorited: false,
    quantity: 0,
    price: '25'
  },
  {
    id: "5",
    url: 'https://images.unsplash.com/photo-1614701759345-c4e5dfa3a0b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    title: 'Posiedon',
    color: ['Blue'],
    artist: `unknown`,
    type: 'sculpture',
    favorited: false,
    quantity: 0,
    price: '25'
  },
  {
    id: "16",
    url: 'https://images.unsplash.com/photo-1577081320692-6eff449819c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80',
    title: 'Last Summer Things Were Greener',
    color: ['green', 'blue', 'brown', 'black'],
    artist: 'John Byam Liston Shaw',
    type: 'painting',
    favorited: false,
    quantity: 0,
    price: '25'
  },
  {
    id: "17",
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=816&q=80',
    title: 'Vase of Flowers',
    color: ['multi', 'black'],
    artist: 'Jan Davidsz de Heem',
    type: 'painting',
    favorited: false,
    type: 'painting', 
    quantity: 0,
    price: '25'
  },
  {
    id: "18",
    url: 'https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80',
    title: 'Springtime',
    color: ['green', 'blue', 'white'],
    artist: 'Philip Wilson Steer',
    type: 'painting',
    favorited: false,
    quantity: 0,
    price: '25'
  },
  {
    id: "19",
    url: 'https://images.unsplash.com/photo-1576769267415-9642010aa962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80',
    title: 'Changing the Letter',
    color: ['red', 'blue', 'green', 'yellow'],
    artist: 'Joseph Edward Southall',
    type: 'painting',
    favorited: false,
    quantity: 0,
    price: '25'
  },
  {
    id: "20",
    url: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80',
    title: 'Near Brodick, Isle Of Arran, Scotland',
    color: ['yellow', 'blue', 'green'],
    artist: 'William Andrews Nesfield',
    type: 'painting',
    favorited: false,
    quantity: 0,
    price: '25'
  }
]

app.locals.cart = [
  // {
  //   id: 20,
  //   url: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80',
  //   title: 'Near Brodick, Isle Of Arran, Scotland',
  //   color: ['yellow', 'blue', 'green'],
  //   artist: 'William Andrews Nesfield',
  //   type: 'painting',
  //   quantity: 1,
  //   price: 25
  // }
]

app.locals.favorites = [];
