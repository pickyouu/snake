import Food from "./food";
import ScorePanel from "./ScorePanle";
import Snake from "./newSnake";

export default class GameControl {
  snake: Snake;
  food: Food;
  scorePanle: ScorePanel
  direction: string = "ArrowRight"
  death: boolean = false

  Ubtn: HTMLElement;
  Lbtn: HTMLElement;
  Mbtn: HTMLElement;
  Rbtn: HTMLElement;
  Dbtn: HTMLElement;
  constructor() {
    this.food = new Food()
    this.snake = new Snake()
    this.scorePanle = new ScorePanel()
    this.Ubtn = (document.getElementsByClassName("up"))[0] as HTMLElement
    this.Lbtn = (document.getElementsByClassName("left"))[0] as HTMLElement
    this.Mbtn = (document.getElementsByClassName("flash"))[0] as HTMLElement
    this.Rbtn = (document.getElementsByClassName("right"))[0] as HTMLElement
    this.Dbtn = (document.getElementsByClassName("down"))[0] as HTMLElement
    this.init()
    this.run()
  }
  init() {
    this.Mbtn.addEventListener("click", () => { window.history.go(0) })
    this.Lbtn.addEventListener("click", () => { this.clickHandle("ArrowLeft") })
    this.Rbtn.addEventListener("click", () => { this.clickHandle("ArrowRight") })
    this.Ubtn.addEventListener("click", () => { this.clickHandle("ArrowUp") })
    this.Dbtn.addEventListener("click", () => { this.clickHandle("ArrowDown") })
    document.addEventListener("keydown", (this.keydownHandler).bind(this))
  }
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key
  }
  clickHandle(direction: string) {
    this.direction = direction
  }
  run() {
    let x = this.snake.X
    let y = this.snake.Y
    switch (this.direction) {
      case "ArrowDown": y += 10; break;
      case "ArrowUp": y -= 10; break;
      case "ArrowLeft": x -= 10; break;
      case "ArrowRight": x += 10; break;
      case "Enter": window.location.reload();
      default: this.death = true; break;
    }
    this.checkMeet(x + 5, y + 5)
    try {
      this.snake.X = x
      this.snake.Y = y;
    } catch (err) {
      alert(err)
      this.death = true
    }

    this.death || setTimeout(this.run.bind(this), 300 / (this.scorePanle.level + 1))
  }
  checkMeet(x: number, y: number) {
    let x1 = this.food.getX() + 5
    let y1 = this.food.getY() + 5
    let l: string = (Math.sqrt((x1 - x) ** 2 + (y1 - y) ** 2).toFixed(2))
    if (Number(l) < 10) {
      this.food.display()
      this.scorePanle.upScore()
      this.snake.addBodies()
    }
  }
}