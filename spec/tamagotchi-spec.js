import { Tamagotchi  } from './../src/js/tamagotchi.js';

describe('Tamagotchi', function() {
  let tamagotchi = new Tamagotchi ("Gotchi");

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
    expect(tamagotchi.name).toEqual("Gotchi");
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
    expect(tamagotchi.amIHungry()).toEqual(true);
  });

  it('should get very hungry if 20 seconds pass without feeding', function() {
    tamagotchi.foodLevel = 10;
    jasmine.clock().tick(20001);
    expect(tamagotchi.amIHungry()).toEqual(true);
  });

  it('should get very sleepy if the sleep level drops below zero', function() {
    tamagotchi.sleepLevel = 0;
    expect(tamagotchi.amITired()).toEqual(true);
  });

  it('should get very sleepy if 50 seconds pass without sleeping', function() {
    tamagotchi.sleepLevel = 10;
    jasmine.clock().tick(50001);
    expect(tamagotchi.amITired()).toEqual(true);
  });

  it('should get very bored if the play level drops below zero', function() {
    tamagotchi.playLevel = 0;
    expect(tamagotchi.amIBored()).toEqual(true);
  });

  it('should get very bored if 40 seconds pass without playing', function() {
    tamagotchi.playLevel = 10;
    jasmine.clock().tick(40001);
    expect(tamagotchi.amIBored()).toEqual(true);
  });


  it('should reset levels if actions are taken', function() {
    jasmine.clock().tick(9001);
    tamagotchi.feedMe();
    tamagotchi.sleepMe();
    tamagotchi.playMe();
    expect(tamagotchi.foodLevel).toEqual(10);
    expect(tamagotchi.sleepLevel).toEqual(10);
    expect(tamagotchi.playLevel).toEqual(10);
  });

  it('should return You Killed Your Tamagotchi if all levels drop below zero', function(){
    tamagotchi.foodLevel = -1;
    tamagotchi.sleepLevel = -1;
    tamagotchi.playLevel = -1;
    expect(tamagotchi.areYouDead()).toEqual(true);
  });


});
