let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let resetBtn = document.getElementById("reset-btn");

let count = 0;

resetBtn.style.display = "none"

function counter() {
   count += 1
   countEl.textContent = count
}

function save() {
    saveEl.textContent += `${count} - `
    count = 0
    countEl.textContent = 0
    resetBtn.style.display = "inline-block"
}


function reset() {
    saveEl.textContent = `Previous count: `
    resetBtn.style.display = "none"
}
