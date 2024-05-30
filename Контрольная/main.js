import { functionLi } from "./title.js";
import { funDiv } from "./navigation.js";
let id = 1
let btn = document.createElement("button");
btn.classList.add("btn")
btn.textContent = "Следущая"
let btn1 = document.createElement("button");
btn1.classList.add("btn1")
btn1.textContent = "BACK BACK"
document.body.append(btn, btn1)
let funOtr = async (id) => {
    let all1 = await fetch(`https://gorest.co.in/public/v2/posts?page=${id}`)
    let all = await all1.json();
    console.log(all)
    functionLi(all)

}
funOtr(id)
funDiv(id)
document.querySelector(".btn").addEventListener("click", async function () {
    length = document.querySelectorAll("li").length
    console.log(length)
    for (let i = 0; i < length; i++) {
        document.querySelector("li").remove();
    }
    document.querySelector("h2").remove()
    id = id + 1
    funOtr(id)
    funDiv(id)
})
document.querySelector(".btn1").addEventListener("click", async function () {
    if (id == 1) {
        alert("МЕНЬШЕ НЕКУДА")
    } else {
        id = id - 1
        length = document.querySelectorAll("li").length
        console.log(length)
        for (let i = 0; i < length; i++) {
            document.querySelector("li").remove();
        }
        document.querySelector("h2").remove()
        funOtr(id)
        funDiv(id)
    }
})
