const express = require('express')
const cors = require('cors')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var morganBody = require('morgan-body')

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
    }, {
        name: "Veikko Helminen",
        number: "045-58588558",
        id: 3
    }, {
        name: "Liina Kuusisto",
        number: "040-34223434",
        id: 4
    }, {
        name: "Aino Helminen",
        number: "040-34534553",
        id: 5
    },
]
// initialize CORS
app.use(cors())

// initialize bodyParser and hook morganBody to app for logging in server console
app.use(bodyParser.json());
morganBody(app);

// check if requested resource exists in folder called build
app.use(express.static('build'))

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
    return Math.floor(Math.random() * Math.floor(100000));
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    const duplicatePerson = (persons.find(person => person.name === body.name));

    if (!body.name) {
        return response.status(400).json({ error: 'name missing from request' })
    } else if (!body.number) {
        return response.status(400).json({ error: 'number missing from request' })
    } else if (duplicatePerson) {
        return response.status(400).json({ error: 'name already exists in database' })
    }

    const person = {
        name: body.name,
        number: body.number,
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

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

// Port settings and listening

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})