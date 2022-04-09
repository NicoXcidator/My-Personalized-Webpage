//------landing-HOME-TYPEWRITER EFFECT

let line = document.getElementById("slogan")
let arrays = ['a mechatronic engineer', 'a vice president of IEEE', 'also vice president of Robotic'];
let speed = 60

async function typewriter(txt) {
    for (let i = 0; i < txt.length; i++) {
        line.innerHTML += txt[i]; //add letter by letter
        await delay(speed)
    }
}

async function reverseTypewriter(txt) {
    for (let i = txt.length; i > 0; i--) {
        line.innerHTML = line.innerHTML.slice(0, -1) //delete letter by letter
        await delay(speed)
    }
}
//read array per array
async function writeLoop() {
    for (let i = 0; i < arrays.length; i++) {
        await typewriter(arrays[i])
        await delay(1000)
        await reverseTypewriter(arrays[i])
        await delay(300)
    }
    writeLoop()
}
//delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

writeLoop()