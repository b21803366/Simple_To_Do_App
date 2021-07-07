let form = document.getElementById("form")
let input = document.getElementById("input")
let list = document.getElementById("list")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    createItem(input.value)
})

function createItem(value){
    let HTML = `<li>${value} <button onclick="deleteItem(this)"> Delete</button></li>`
    list.insertAdjacentHTML("beforeend", HTML)
    input.value = ""
    input.focus()
}
function deleteItem(item){
    item.parentElement.remove()
}