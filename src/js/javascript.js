$( function(){

    var total;

    function getRandom(){return Math.ceil(Math.random()* 20);}
    function createSum(){
            var randomNum1 = getRandom(),
                randomNum2 = getRandom();
        total =randomNum1 + randomNum2;
    $( "#question" ).text( randomNum1 + " + " + randomNum2 + "=" );  
    $("#ans").val('');
    checkInput();
    }

    function checkInput(){
            var input = $("#ans").val(), 
            slideSpeed = 200,
        hasInput = !!input, 
        valid = hasInput && input == total;
        $('#message').toggle(!hasInput);
        $('button[type=submit]').prop('disabled', !valid);  
        $('#success').toggle(valid);
        $('#fail').toggle(hasInput && !valid);
    }

    $(document).ready(function(){
        //create initial sum
        createSum();
        // On "reset button" click, generate new random sum
        // $('button[type=reset]').click(createSum);
        // On user input, check value
        $( "#ans" ).keyup(checkInput);
    });





    // carrossel
    //const carousel = document.querySelector('.js-carousel');
    const carousel = document.querySelector('.slide');
    
    new Glider(carousel, {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: ".dots",
        rewind: true,
        arrows: {
          prev: ".glider-prev",
          next: ".glider-next",
        },
        scrollLock: true,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    });
});