//your code here!
const list = document.getElementById("list");
let count = 1;


function addItems(num) {
    for (let i = 0; i < num; i++) {
        const li = document.createElement("li");
        li.textContent = `List Item ${count++}`;
        list.appendChild(li);
    }
}


addItems(10);


window.addEventListener("scroll", () => {
    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight
    ) {
        addItems(2);
    }
});
