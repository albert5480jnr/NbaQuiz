let username=document.querySelector('#username')
let saveScoreBtn= document.querySelector('#saveScore')
let finalScore= document.querySelector('#finalScore')
let mostrecentScore= localStorage.getItem('mostRecentScore')


const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 10

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')

    
}