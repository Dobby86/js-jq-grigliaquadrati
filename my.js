
// Creare in HTML una griglia formata da 8x8 rettangolini tutti bianchi.
// 15 di questi rettangolini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi

//
//
var redPoint = 0, greenPoint = 0;

  // faccio cose
  // $('.square').click(
  //   function () {
  //     if($(this).hasClass('redWannabe')){
  //       $(this).css('background', 'red');
  //       redPoint++;
  //       console.log("punteggio rosso: " + redPoint);
  //       $('.prossa').html("punteggio rosso: " + redPoint);
  //     } else {
  //       $(this).css('background', 'green');
  //       greenPoint++;
  //       console.log("punteggio verde: " + greenPoint);
  //       $('.pverde').html("punteggio verde: " + greenPoint);
  //     }
  //   }
  // );


  $('.square').click(
      function () {
          if ($(this).hasClass('active')){
              console.log("oh! l' hai gia cliccato");
        }else if ($(this).hasClass('redWannabe')){

          $(this).css('background', 'red');
          redPoint++;
          $(this).addClass('active');
          console.log("punteggio rosso: " + redPoint);
          $('.prossa').html("punteggio rosso: " + redPoint);
        } else {
             console.log("oh! l' hai gia cliccato");
          $(this).css('background', 'green');
          greenPoint++;
          $(this).addClass('active');
          console.log("punteggio verde: " + greenPoint);
          $('.pverde').html("punteggio verde: " + greenPoint);
        }
      }
    );
