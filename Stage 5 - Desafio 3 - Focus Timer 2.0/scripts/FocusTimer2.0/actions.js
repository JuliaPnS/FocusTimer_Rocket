import state from './state.js'
import * as sounds from './sounds.js'
import * as el from './elements.js'
import * as timer from './timer.js'

export function toggleMusic(target) {
    state.isMute = target.classList.toggle('music-on')
    removeSounds(target)

    if(state.isMute) {
        
        sounds.default[target.classList[1]].play()
        return
    }

    sounds.default[target.classList[1]].pause()
}
    
export function removeSounds(target) {
    let button = null
    for (button of el.childrensounds) {
        
        if(target.classList[1] != button.classList[1]) {
        
        button.classList.remove('music-on')
        sounds.default[button.classList[1]].pause()
    }}

}

export function addColorControls(target) {
    let button = null
    for (button of el.childrencontrols) {
        target.classList.toggle('running')
    }
}

export function toggleRunning() {
    if(state.isRunning) {
        return
    }
    state.isRunning = true 
       timer.countdown()
       addColorControls(target)
}

export function toggleStop() {
    state.isRunning = false

}

export function morefiveminutes() {
    let minutes = Number(el.minutes.textContent) + 5
    let seconds = Number(el.seconds.textContent)
    
    timer.uptadeDisplay(minutes, seconds)

}

export function lessfiveminutes() {

    let minutes = Number(el.minutes.textContent) - 5
    let seconds = Number(el.seconds.textContent)

    if (minutes < 0) {
        return
    }
    

    timer.uptadeDisplay(minutes, seconds)

}