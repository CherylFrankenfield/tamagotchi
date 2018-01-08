export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.playLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 2000);
  }

  setPlay() {
    setInterval(() => {
      this.playLevel--;
    }, 4000);
  }

  setEnergy() {
    setInterval(() => {
      this.sleepLevel--;
    }, 5000);
  }

  didYouFeedMe() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  //
  // feed() {
  //   this.foodLevel = 10;
  // }
}
