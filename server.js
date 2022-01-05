const { response } = require('express');
const express = require('express');
const cors = require('cors');
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
  // const id = "21"
  const addedImage = req.body;
  console.log(addedImage)
  for (let requiredParameter of ['id', 'url', 'title', 'color', 'artist', 'type']) {
    if (!addedImage[requiredParameter]) {
      res
        .status(422)
        .send({
          error: `Expected format: {name: <String>, type: <String>. You\'re missing a "${requiredParameter}" property.`
        })
    }
  }
  const {id, url, title, color, artist, type } = addedImage
  app.locals.images.push({ id, url, title, color, artist, type })
  res.status(201).json({ id, url, title, color, artist, type })
  console.log(req, res)
})

//Data to send and be hosted on the API
app.locals.images = [
  {
    id: "16",
    url: 'https://images.unsplash.com/photo-1577081320692-6eff449819c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80',
    title: 'Last Summer Things Were Greener',
    color: ['green', 'blue', 'brown', 'black'],
    artist: 'John Byam Liston Shaw',
    type: 'painting'
  },
  {
    id: "17",
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=816&q=80',
    title: 'Vase of Flowers',
    color: ['multi', 'black'],
    artist: 'Jan Davidsz de Heem',
    type: 'painting'
  },
  {
    id: 18,
    url: 'https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80',
    title: 'Springtime',
    color: ['green', 'blue', 'white'],
    artist: 'Philip Wilson Steer',
    type: 'painting'
  },
  {
    id: 19,
    url: 'https://images.unsplash.com/photo-1576769267415-9642010aa962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80',
    title: 'Changing the Letter',
    color: ['red', 'blue', 'green', 'yellow'],
    artist: 'Joseph Edward Southall',
    type: 'painting'
  },
  {
    id: 20,
    url: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80',
    title: 'Near Brodick, Isle Of Arran, Scotland',
    color: ['yellow', 'blue', 'green'],
    artist: 'William Andrews Nesfield',
    type: 'painting'
  }
]
