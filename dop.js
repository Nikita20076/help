let idNOW = new URLSearchParams(window.location.search)
const postID = idNOW.get('id')
console.log(postID)
let p = document.createElement("p")
let h1 = document.createElement("h1")
let functionResponse = async () => {
    let response = await fetch(`https://gorest.co.in/public/v2/posts/${postID}`)
    response = await response.json()
    console.log(response)
    p.textContent = response.body
    h1.textContent = response.title
    document.body.appendChild(h1)
    document.body.appendChild(p)
}
functionResponse()