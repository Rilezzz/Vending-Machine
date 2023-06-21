import { AppState } from "../AppState.js";

class MoneyService {
    addMoney() {
        AppState.money += 1.25
        console.log('money increase', AppState.money);
    }

    buyItem(snackPrice) {
        console.log(snackPrice);
        AppState.money -= snackPrice
        console.log('money decrease', AppState.money);
    }
}



export const moneyService = new MoneyService()