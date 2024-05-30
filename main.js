import { functionLi } from "./title.js"
let funOtr = async () => {
    const all1 = await fetch("https://gorest.co.in/public/v2/posts")
    let all = await all1.json();
    console.log(all)
    await functionLi(all)
}

funOtr()


