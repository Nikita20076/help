export let functionLi = async (all) => {
    for (let el of all) {
        let id = el.id;
        console.log(id)
        let li = document.createElement("li");
        let link = document.createElement('a');
        link.href = `post.html?id=${id}`
        link.textContent = el.title;
        li.append(link)
        document.querySelector(".ul").append(li);
    }
}