
const jokeButton = document.querySelector('#givejoke')

jokeButton.addEventListener('click', async () => {
    const url = '/api/v1/random-joke'

    const result = await fetch(url)
    const { joke, punchline } = await result.json()
    console.log(joke, punchline)

    const jokeSpan = document.querySelector('#joke')
    const punchlineSpan = document.querySelector('#punchline')

    jokeSpan.textContent = joke
    punchlineSpan.textContent = punchline
})