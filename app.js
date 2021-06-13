const URL = 'https://jsonplaceholder.typicode.com'
let losers = []
let posts = []
let message = ''

const master = () => {
    getLosers()
    // renderLosers()
}

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


const loserClickHandle = event => {
    event.preventDefault()
    let id = +event.target.id.split('§')[1]
    getPostById(id)
    renderLoserName(id)
}

const getPostById = loserId => {
    fetch(`${URL}/posts?userId=${loserId}`)
    .then(response => response.json())
    .then(postsArray => {
        posts = postsArray
        renderPosts()
    })
}

const renderPosts = () => {
    const ul = document.querySelector('.posts-list')
    ul.innerHTML = ''
    posts.forEach(post => {
        const li = document.createElement('li')
        li.textContent = post.title
        li.id = `id§${post.id}`
        li.addEventListener('click', postClickHandle)
        ul.appendChild(li)
    })
}


const postClickHandle = event => {
    event.preventDefault()
    let id = +event.target.id.split('§')[1]
    getMessageById(id)
    // renderPostName(id)
}

const getMessageById = postId => {
    fetch(`${URL}/post?id=${postId}`)
        .then(response => response.json())
        .then(message => {
 //
        }, renderMessage() )
}

const renderMessage = () => {
    const idx = posts.findIndex(u => u.id === postId)
    if (idx !== -1) {
        document.querySelector('#content p span').textContent = message
    }
}
 
const renderLoserName = loserId => {
    const idx = losers.findIndex(u => u.id === loserId)
    if (idx !== -1) {
        document.querySelector('#post h3 span').textContent = losers[idx].name
    }
}



master()