export default class Snake {
  head: HTMLElement;
  element: HTMLElement;
  bodies: HTMLCollection;
  stage: HTMLElement;
  constructor() {
    this.head = document.getElementById("head")!
    this.element = document.getElementById("snake")!
    this.bodies = this.head.getElementsByTagName("div")
    this.stage = document.getElementById("stage")!
  }
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  set X(value: number) {
    if (value == this.X) { return }
    this.moveBodies()
    if (value < 0 || value > this.stage.offsetWidth * 1 - 10) {
      throw new Error("撞墙了")
    }
    this.head.style.left = value + "px"
  }
  set Y(value: number) {
    if (value == this.Y) { return }
    this.moveBodies()
    if (value < 0 || value > this.stage.offsetHeight * 1 - 10) {
      throw new Error("撞墙了")
    }
    this.head.style.top = value + "px"
  }
  get randomNum() {
    return parseInt(Math.random() * 255 + "")
  }
  get Color() {
    return `rgba(${this.randomNum},${this.randomNum},${this.randomNum},${Math.random()})`
  }
  addBodies() {
    let node = document.createElement("div")
    node.setAttribute("style", `background-color:${this.Color}`)
    this.element.appendChild(node)
    this.bodies = this.element.getElementsByTagName("div")
  }
  moveBodies() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = x + "px";
      (this.bodies[i] as HTMLElement).style.top = y + "px";
    }
  }
}