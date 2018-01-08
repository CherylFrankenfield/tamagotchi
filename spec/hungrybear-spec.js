import { Tamagotchi  } from './../src/js/hungrybear.js';

describe('Tamagotchi', function() {
  let tamagotchi = new Tamagotchi ("Fuzzy");

  beforeEach(function() {
    jasmine.clock().install();
    tamagotchi.setHunger();
    tamagotchi.setPlay();
    tamagotchi.setEnergy();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food, sleep, and play level of 10 when it is created', function() {
    expect(tamagotchi.name).toEqual("Fuzzy");
    expect(tamagotchi.foodLevel).toEqual(10);
    expect(tamagotchi.playLevel).toEqual(10);
    expect(tamagotchi.sleepLevel).toEqual(10);
  });


  it('should have a food level of 8 after 4001 milliseconds', function() {
    jasmine.clock().tick(4001);
    expect(tamagotchi.foodLevel).toEqual(8);
  });

  it('should have a play level of 9 after 4001 milliseconds', function() {
    expect(tamagotchi.playLevel).toEqual(9);
  });

  it('should have a sleep level of 9 after 5001 milliseconds', function() {
    jasmine.clock().tick(5001);
    expect(tamagotchi.sleepLevel).toEqual(9);
  });

  it('should get very hungry if the food level drops below zero', function() {
    tamagotchi.foodLevel = 0;
    expect(tamagotchi.didYouFeedMe()).toEqual(true);
  });

  it('should get very sleepy if the sleep level drops below zero', function() {
    tamagotchi.sleepLevel = 0;
    expect(tamagotchi.didYouFeedMe()).toEqual(true);
  });
  //
  // it('should get very hungry if 10 seconds pass without feeding', function() {
  //   jasmine.clock().tick(10001);
  //   expect(fuzzy.didYouGetEaten()).toEqual(true);
  // });
  //
  // it('should have a food level of ten if it is fed', function() {
  //   jasmine.clock().tick(9001);
  //   fuzzy.feed();
  //   expect(fuzzy.foodLevel).toEqual(10);
  // });


});
