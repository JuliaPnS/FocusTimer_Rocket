import state from './state.js'
import * as el from './elements.js'

export function countdown() {
    if(!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    } 

    if (minutes < 0) {
        seconds = 59
        minutes = 0
    }


    uptadeDisplay(minutes, seconds)
    setTimeout(() => countdown(), 1000)

}



export function uptadeDisplay(minutes, seconds) {
    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")

}