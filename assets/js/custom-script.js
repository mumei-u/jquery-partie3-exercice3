var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
var nbTry = 0;

$(function(){
  $('button').click(function(){
    let inputValue = $('#number').val();
    if (inputValue < 0 || inputValue > 100 || inputValue == '') {
      $('span').html('Le nombre est compris entre 0 et 100 !');
      return;
    }
    ++nbTry;
    if (inputValue == randomNumber) {
      $('span').html(`Trouvé ! Nombre d'essais : ${nbTry}`);
      return;
    };
    if (inputValue > randomNumber) {
      $('span').html('Plus petit');
    } else {
      $('span').html('Plus grand');
    };
  });
});
