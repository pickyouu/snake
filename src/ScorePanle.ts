export default class ScorePanel {
  score = 0;
  level = 0;
  maxLevel: number
  addLevelScore: number
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  constructor(maxlevel = 10, addLevelScore = 10) {
    this.maxLevel = maxlevel
    this.addLevelScore = addLevelScore
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
  }

  upScore() {
    this.scoreEle.innerHTML = ++this.score + ""
    this.upLevel()
  }
  upLevel() {
    if (this.level < this.maxLevel) {
      if (this.score % this.addLevelScore == 0) {
        this.levelEle.innerHTML = ++this.level + ""
      }
    }
  }
}

