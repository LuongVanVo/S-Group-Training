import express from 'express';
import mongoose from 'mongoose';

// MongoDB connection
mongoose.connect('mongodb://user:password@127.0.0.1:27019/S-Mongo?authSource=admin')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  rating: Number
});

// Create a model from the schema
const movieCollection = mongoose.model('Movie', movieSchema);

const app = express();
app.use(express.json());

// Create a new movie
app.post('/movies', async (req, res) => {
  const { title, genre, rating } = req.body;
  try {
    const result = await movieCollection.collection.insertOne({ title, genre, rating });
    console.log(result);
    res.status(201).send({ _id: result.insertedId, title, genre, rating });
  } catch (err) {
    res.status(400).send('Error: ' + err.message);
  }
});

// Read all movies
app.get('/movies', async (req, res) => {
  try {
    const movies = await movieCollection.find();
    res.status(200).send(movies);

  } catch (err) {
    res.status(400).send('Error: ' + err.message);
  }
});
// Count the number of movies
app.get('/movies/count', async (req, res) => {
  try {
    const countMovies = await movieCollection.countDocuments();
    res.status(200).send({
      countMovies: countMovies,
      message: 'Total number of movies in the database'
    })
  } catch (err) {
    res.status(400).send('Error: ' + err.message);
  }
})
// Read a single movie by ID
app.get('/movies/:id', async (req, res) => {
    try {
        const { id } = req.params
        const movie = await movieCollection.findOne({ _id : id})
        res.status(200).send(movie); 
    }
    catch (err) {
      res.status(400).send('Error: ' + err.message);
    }
})
// Read movies by genre
app.get('/movies/genre/:genre', async(req, res) => {
  try {
    const { genre } = req.params
    const movies = await movieCollection.find({ genre: genre })
    res.status(200).send(movies);
  } catch (err) {
    res.status(400).send('Error: ' + err.message);
  }
})
// Read movies has rating highest
app.get('/movies/rating/rating', async(req, res) => {
  try {
    const movies = await movieCollection.find().sort({ rating: -1 }).limit(1)
    res.status(200).send(movies);
  } catch (err) {
    res.status(400).send('Error: ' + err.message);
  }
})
// Update a movie
app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, genre, rating } = req.body;
    const result = await movieCollection.updateOne({ _id: id }, { $set: { title, genre, rating }})
    res.status(200).send({ _id: result.title, genre, rating }) 
  } catch (err) {
    res.status(400).send('Error: ' + err.message);
  }
});

// Delete a movie
app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await movieCollection.deleteOne({ _id: id })
    res.status(200).send({ result, 
        message: 'Movie deleted successfully',
    })
  } catch (err) {
    res.status(400).send('Error: ' + err.message);
  }
});


// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`http://localhost:${port}`);
});