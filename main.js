import { functionLi } from "./title.js"
let funOtr = async (id) => {
    const all1 = await fetch(`https://gorest.co.in/public/v2/posts?page=${id}`)
    let all = await all1.json();
    console.log(all)
    functionLi(all)
}
funOtr(10)


