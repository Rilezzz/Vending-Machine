import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

function _drawSnacks() {
    const snacks = AppState.items

    let template = ''

    snacks.forEach(snack => template += snack.itemTemplate)

    setHTML('snackList', template)
}



export class SnacksController {
    constructor() {
        console.log('workin snack controller');
        _drawSnacks()
    }

}