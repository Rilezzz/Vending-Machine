export class Snacks {


  constructor(data) {
    // debugger
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }


  get itemTemplate() {
    return `
        <div class="col-3 p-3 itemBox d-flex flex-column m-3">
        <img class="image p-2" src="${this.imgUrl}" alt="Snack">
        <div class="d-flex text-light justify-content-between align-items-center">
        <button onclick="app.MoneyController.buyItem(${this.price})" class="rounded fs-4 p-2 btn bg-primary text-light">Buy ${this.name}</button>
        <p class="m-0">$${this.price.toFixed(2)}</p>
        </div>
        </div>
        `
  }


}   