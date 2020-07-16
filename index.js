const express = require('express')
const app = express()

let persons = [
    {
        name: "Arto Hellas",
        number: "040-1249899",
        id: 1
    },
    {
        name: "Janne Mikkonen",
        number: "040-13453899",
        id: 2
    },    {
        name: "Veikko Helminen",
        number: "045-58588558",
        id: 3
    },    {
        name: "Liina Kuusisto",
        number: "040-34223434",
        id: 4
    },    {
        name: "Aino Helminen",
        number: "040-34534553",
        id: 5
    },
]

// HTTP GET operations
app.get('/', (request, response) => {
    response.send('<h1>Requests need to made to /api/desiredResource</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.get('/info', (request, response) => {
    const personCount = persons.length
    const message = 
    `<p>Phonebook has info for ${personCount} people<p>` + 
    `<p>${new Date()}</p>`;
    response.send(message)
})

// HTTP POST operations
app.use(express.json()) 

//...

const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
  }
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.content) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    const person = {
      content: body.content,
      important: body.important || false,
      date: new Date(),
      id: generateId(),
    }
  
    persons = persons.concat(person)
  
    response.json(person)
  })


// HTTP Delete operations
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const tempLength = persons.length

    persons = persons.filter(person => person.id !== id)

    // Check if someone was really removed and send proper response. Needs refactoring later on.
    if (tempLength === persons.length) {
        response.status(404).end()
    } else {
        response.status(204).end()
    }
  })



// Port settings and listening

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})