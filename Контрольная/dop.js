let idNOW = new URLSearchParams(window.location.search)
const postID = idNOW.get('id')
console.log(postID)
let p = document.createElement("p")
let h1 = document.createElement("h1")
let functionResponse = async () => {
    let response = await fetch(`https://gorest.co.in/public/v2/posts/${postID}`)
    response = await response.json()

    let comment = await fetch(`https://gorest.co.in/public/v2/comments?post_id=${postID}`)
    comment = await comment.json()

    console.log(response)
    p.textContent = response.body
    h1.textContent = response.title
    document.body.appendChild(h1)
    document.body.appendChild(p)
    console.log(postID)
    console.log(comment)

    let functionCom = async (comment) => {
        for (let el of comment) {
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            console.log(el)
            p1.textContent = `Имя ${el.name}`;
            p2.textContent = `Комментарий ${el.body}`;
            let li = document.createElement("li");
            li.classList.add("li")
            li.append(p1, p2);
            console.log(p1)
            console.log(p2)
            document.querySelector(".ul").append(li);
        }


    }
    functionCom(comment)
}
functionResponse()