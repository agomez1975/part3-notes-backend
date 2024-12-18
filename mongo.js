const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[lAPsL8jEyBoHSMEB]

const url =
'mongodb+srv://afgp0523:<db_password>@agcluster0.1z38h.mongodb.net/noteApp?retryWrites=true&w=majority&appName=AgCluster0'

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is easy',
  important: true,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})