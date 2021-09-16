const express = require('express')
const app = express()
const PORT = 412

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let animals = [
    {
        animalName: "Lola",
        species: "Dog",
        numbers: [1, 7, 3],
        route: 'lola'
    },
    {
        animalName: "Abby",
        species: "Dog",
        numbers: [4, 5, 6],
        route: 'abby'
    },
    {
        animalName: "Pancakes",
        species: "Cat",
        numbers: [7, 8, 9],
        route: 'pancakes'
    },
    {
        animalName: "Elizardbeth",
        species: "Unknown",
        numbers: [1, 10, 8],
        route: 'elizardbeth'
    }
]

// home route
app.get('/', (req, res) => {
    res.send("ya site's workin' there, fella")
})

// ummagumma
app.get('/ummagumma', (req, res) => {
    res.send(`<img src='https://images-na.ssl-images-amazon.com/images/I/81-Joj09kIL._SL1300_.jpg'></img>`)
})

// :routeName is our route parameter
app.get('/api/animals/:routeName', (req, res) => {
    // accessing :routeName
    const targetAnimal = req.params.routeName

    // looping throught animals object to find animal with targetAnimal routeName
    const animal = animals.find(animal => {
        return animal.route === targetAnimal
    })

    //sending data to browser
    res.send(
        `${animal.animalName} is barking`
    )

    res.end()
})

// API routes
app.get('/api/animals', (req, res) => {
    res.json(animals)
})

app.post('/api/animals/add', (req, res) => {

    const newAnimal = req.body
    // adding the property of route to our animal
    newAnimal.route = newAnimal.animalName.replace(/ /g, "").toLowerCase()

    animals.push(newAnimal)
    console.log(animals)
    // everything went peachy
    res.status(200).send()
})

// Get the dang server to listen
app.listen(PORT, () => {
    console.log(`ya server's listening fool - check it on http://localhost:${PORT}`)
})


