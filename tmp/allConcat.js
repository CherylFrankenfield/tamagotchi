import { Tamagotchi } from './../src/js/tamagotchi.js';

const newPet = new Tamagotchi();

$(document).ready(function() {
  $('form#start').submit(function(event) {
    event.preventDefault();
    const nameInput = $('#name').val();
    newPet.name = nameInput;
    newPet.setHunger();
    newPet.setPlay();
    newPet.setEnergy();
    newPet.areYouDead();
    $('.game-play').show();
    $('.start-game').hide();
    $('.petName').append(nameInput);
    $('.foodLevel').append(`F:` + newPet.foodLevel);
    $('.sleepLevel').append(`S:` + newPet.sleepLevel);
    $('.playLevel').append(`P:` + newPet.playLevel);

    let test = setInterval(function(){
      $('.foodLevel').text(`F:` + newPet.foodLevel);
      $('.sleepLevel').text(`S:` + newPet.sleepLevel);
      $('.playLevel').text(`P:` + newPet.playLevel);
      newPet.areYouDead();
      if(newPet.areYouDead() === true){
        $('.game-play').hide();
        alert(`You Killed ${nameInput}`);
        clearInterval(test);
      };
    }, 1001);
  });
  $('#feed').click(function() {
    newPet.feedMe();
    $('.foodLevel').text(`F:` + newPet.foodLevel);
    $('.sleepLevel').text(`S:` + newPet.sleepLevel);
    $('.playLevel').text(`P:` + newPet.playLevel);
  });
  $('#sleep').click(function() {
    newPet.sleepMe();
    $('.foodLevel').text(`F:` + newPet.foodLevel);
    $('.sleepLevel').text(`S:` + newPet.sleepLevel);
    $('.playLevel').text(`P:` + newPet.playLevel);
  });
  $('#play').click(function() {
    newPet.playMe();
    $('.foodLevel').text(`F:` + newPet.foodLevel);
    $('.sleepLevel').text(`S:` + newPet.sleepLevel);
    $('.playLevel').text(`P:` + newPet.playLevel);
  });

});
