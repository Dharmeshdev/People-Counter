let countEl = document.getElementById('count') // h1
let increment = document.getElementById('increment')
let save = document.getElementById('save')  
let output = document.getElementById('Entries') //output 
let counter = 0;
// function and var name can't be same

function incrementFn(){
counter += 1;
countEl.textContent = counter
}

function saveFn(){
    let countStr =  counter + ' - '
    output.textContent += countStr
    // output.textContent = "Previous Entries: " + counter + ' - '
    counter = 0;
    countEl.textContent = 0;

}