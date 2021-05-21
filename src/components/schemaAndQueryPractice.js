const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
  title: { type: String }, // or just title: String, since no extra props like in my Chatty app
  date: { type: Date },
  copiedSold: { type: Number },
  numberTracks: { type: Number },
  image: { type: String },
  revenue: { type: Number } 
})

// I suppose this shoots the code out but doesn't make it's own collection, nice
module.exports = albumSchema


// other file down here


const mongoose = require('mongoose')
const AlbumSchema = require('whereEverThatSchemaWouldBe')

const artistSchema  = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  yearsActive: { type: Number },
  image: { type: String },
  genre: { type: String },
  website: { type: String },
  netWorth: { type: Number },
  labelName: { type: String },
  retired: { type: Boolean },
  albums: [AlbumSchema]
})

module.exports = mongoose.model('Artist', artistSchema)

Artist.findOneByID(_id)
  .then((user) => {

  })

  // From Stephen, different setup
const Artist = require('../models/Artist')

module.exports = (_id) => {
  return Artist.findOne({ _id: _id })
}
// This also works, same functionality
module.exports = (_id) => {
  return Artist.findById(_id)
}
//This ends up returning a random artist, not sure why, but I can't see all the code so w/e

// Making a new artist

module.exports = (artistProps) => {
  const artist = new Artist(artistProps)

  return artist.save()
}

// Deleting an artist

module.exports = (_id) => {
  return Artist.findByIdAndRemove(_id)
} // my solution, probably slower than Stephen's

// or

module.exports = (_id) => {
  return Artist.remove({ _id })
} // Stephen's

 // or

module.exports = (_id) => {
   return Artist.findById(_id)
    .then((artist) => artist.remove())
 } // this is bad because it hits the database twice, so it's slower

 // Editing a record

module.exports = (_id, artistProps) => {
  return Artist.update({ _id }, artistProps) // Find the artist by the _id, and update with the artistProps that get passed
}