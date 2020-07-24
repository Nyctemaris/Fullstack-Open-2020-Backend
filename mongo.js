const mongoose = require("mongoose")
const {username, dbname} = require('./Secrets.js')

// Check for too many or too few arguments
if (process.argv.length > 5) {
    console.log("Too many arguments")
    process.exit(1)
  } else if (process.argv.length < 3) {
    console.log("Password missing")
    process.exit(1)
  } else if (process.argv.length === 4) {
    console.log("Missing one argument. Correct arguments: node filename databasePassword username phonenumber")
    process.exit(1)
  }

const password = process.argv[2]

// Connect to MongoDB Cluster
const dbURL = `mongodb+srv://${username}:${password}@fullstackopen2020.fyida.azure.mongodb.net/${dbname}?retryWrites=true&w=majority`
console.log(dbURL)
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })

// Define schema
const userSchema = new mongoose.Schema({
    name: String,
    number: String
  })
  
  const User = mongoose.model('User', userSchema)

  // Add user to database if process.argv.length === 5

  if (process.argv.length === 5) {

    const user = new User({
        name: `${process.argv[3]}`,
        number: `${process.argv[4]}`
      })

    user.save().then(response => {
        console.log(`Added ${user.name} number ${user.number} to phonebook`)
        mongoose.connection.close()
        process.exit(1)
      })
  } else {
      // print database users when only password is in process.argvs
      console.log('Phonebook:')
      User.find({}).then(users => {
          users.forEach(user => {
              console.log(user.name, user.number)
          })
          mongoose.connection.close()
      })
  }