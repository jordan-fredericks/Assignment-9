
const path = require('path')
const express = require('express')
const app = express()
const port = 3001

const root = path.join(__dirname, 'public')

const jokes = [
    {
        id: 1,
        joke: "My boss told me to have a good day.",
        punchline: "So, I didn't go to work."
    },
    {
        id: 2,
        joke: "Why should you take advice from a porcupine?",
        punchline: "They have a lot of good points."
    },
    {
        id: 3,
        joke: "Why didn't the skeleton cross the road?",
        punchline: "He didn't have any guts."
    },
    {
        id: 4,
        joke: "What do you call a bear with no teeth?",
        punchline: "A gummy bear."
    }
]

//Middleware
app.use(express.json())
app.use(express.static('public'))


app.get('/', (_, response) => {
    response.sendFile('index.html', { root })
})

app.get('/api/v1/random-joke', (request, response) => {
    const index = Math.floor(Math.random() * jokes.length)
    response.send(jokes[index])
})

app.listen(port, () => console.log(`http://localhost:${port}`))