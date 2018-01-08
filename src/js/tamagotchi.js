export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.playLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      if(this.foodLevel === -1){
        return this.foodLevel;
      } else {
        this.foodLevel--;
      }
    }, 2000);
  }

  setPlay() {
    setInterval(() => {
      if(this.playLevel === -1){
        return this.playLevel;
      } else {
        this.playLevel--;
      }
    }, 4000);
  }

  setEnergy() {
    setInterval(() => {
      if(this.sleepLevel === -1){
        return this.sleepLevel;
      } else {
        this.sleepLevel--;
      }
    }, 5000);
  }


  amIHungry() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  amITired() {
    if (this.sleepLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  amIBored() {
    if (this.playLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feedMe() {
    this.foodLevel = 10;
  }

  sleepMe() {
    this.sleepLevel = 10;
  }

  playMe() {
    this.playLevel = 10;
  }

  areYouDead() {
    if ((this.foodLevel === -1) && (this.sleepLevel === -1) && (this.playLevel === -1)) {
      return true;

    } else {
      return false;
    }
  }
}
