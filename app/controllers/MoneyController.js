import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";


function _drawMoney() {
  setText('moneyCount', AppState.money.toFixed(2))
}



export class MoneyController {
  constructor() {
    console.log('Money Controller works!')
  }



  addMoney() {
    console.log('Button Clicked');
    moneyService.addMoney()
    _drawMoney()
  }


  buyItem(snackPrice) {
    // debugger
    console.log('buy item worked');
    moneyService.buyItem(snackPrice)
    _drawMoney()
  }
}
