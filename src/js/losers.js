const URL = 'https://jsonplaceholder.typicode.com'
let losers = []



const getLosers = () => {
    fetch(`${URL}/users`) 
    .then(response => response.json())
    .then(losersArray => {
        losers = losersArray
        renderLosers()
    })
}

const renderLosers = () => {
    const ul = document.querySelector('.losers-list')
    losers.forEach(loser => {
        const li = document.createElement('li')
        li.textContent = loser.username
        li.id = `id§${loser.id}`
        li.addEventListener('click', loserClickHandle)
        ul.appendChild(li)
    }) 
} 



export default getLosers