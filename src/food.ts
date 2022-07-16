export default class Food {
  element: HTMLElement;
  stage: HTMLElement;
  constructor() {
    this.element = document.getElementById("food")!;
    this.stage = document.getElementById("stage")!;
  }

  getX() {
    return this.element.offsetLeft
  }
  getY() {
    return this.element.offsetTop
  }
  getCenter() {
    return [this.getX() + 5, this.getY() + 5]
  }
  getRandomX() {
    return parseInt(Math.random() * (this.stage.clientWidth - 10) + "")
  }
  getRandomY() {
    return parseInt(Math.random() * (this.stage.clientHeight - 10) + "")
  }
  display() {
    this.element.style.top = this.getRandomY() + "px"
    this.element.style.left = this.getRandomX() + "px"

  }
}

