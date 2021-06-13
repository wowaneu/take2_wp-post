const URL = 'https://jsonplaceholder.typicode.com'

let posts = []

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

