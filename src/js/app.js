
(function() {
	//**************      menu mobile    **************
	$("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });

    if( $('#the-profile').length ){
        console.log("the profile");
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }

    if( $('#trivia').length ){
     //$('.trivia-instruction').modal('show');
    }
    // al cerrar el modal de las instrucciones de la trivia, disparamos el countdown
    $('.trivia-instruction').on('hidden.bs.modal', function () {
        countdown();
    })


    if( $('#question-video').length ){
        $('.video-content').modal('show');
         document.getElementById('myVideo').addEventListener('ended',myHandler,false);
            function myHandler(e) {
                $('.video-content').modal('hide');
                $('#video-question-content').removeClass('hide');
                countdown();
            }
    }

    /*
    30 segundos para contestar cada pregunta
    */  
    function countdown(){

      var counter = 20;
      setInterval(function() {
        counter--;
        if (counter >= 0) {
          span = document.getElementById("count");
          span.innerHTML = counter;
            if (counter <= 10) {
              span = document.getElementById("count");
              span.innerHTML = counter;
              $("#count").addClass("red");
            }
      
        }

        // Display 'counter' wherever you want to display it.
        if (counter === 0) {
            alert('aqui lanzamos la siguiente pregunta');
            clearInterval(counter);
        }
      }, 1000);
    }


    /*************
    preloader
    ************/


    $(window).on('load', function() { // makes sure the whole site is loaded 
          $('#status').fadeOut(); // will first fade out the loading animation 
          $('.the-question').fadeIn(); 
          $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
         // $('body').delay(350).css({'overflow':'visible'});
    })


})();




