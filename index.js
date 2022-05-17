let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function counter() {
   count += 1
   countEl.textContent = count
}

function save() {
    saveEl.textContent += `${count} - `
    count = 0
    countEl.textContent = 0
}

function reset() {
    saveEl.textContent = `Previous count: `
}