import { sounds } from './elements.js'
import { controls } from './elements.js'

import * as actions from './actions.js'


export function handleClick() {
    sounds.addEventListener('click', click)
    controls.addEventListener('click', click)
}


function click (event) {
    const action = event.target.dataset.action

    if(typeof actions[action] != "function") {
        return
    }
    actions[action](event.target)

}