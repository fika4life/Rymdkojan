$(document).ready(function(){



  

	

/*---------------------------page hiding and showing---------------------------------------------*/
$("#splash-audio").on('ended', function(){

    $("#splash").hide( "slide", { direction: "up"  }, 100 );
    
    $("#page1").show("slide", { direction: "right"  }, 1000 ).css("display", "block");

    
  });


  $("#audio1").on('ended', function(){

		$("#page1").hide( "puff", { direction: "up"  }, 100 );
		
		$("#page2").show("puff", { direction: "right"  }, 1000 ).css("display", "block");

	  
	});

	$("#audio2").on('ended', function(){
		
		$("#page2").hide("slide", { direction: "up"  }, 100 );
		$("#page3").show("slide", { direction: "right"  }, 1000).css("display", "block");
	  
	});

	$("#audio3").on('ended', function(){
		
		$("#page3").hide("slide", { direction: "up"  }, 100 );
		$("#page4").show("slide", { direction: "right"  }, 1000).css("display", "block");
	  
	});

	$("#button-4").on("click", function(){
		$("#page4").hide("slide", { direction: "up"  }, 100 );
		$("#page5").show("slide", { direction: "right"  }, 1000).css("display", "initial");
	});

  

/*---------------------------page 5 sound clips---------------------------------------------*/


/*---------------------------page 5 with space animations---------------------------------------------*/

	/*global variable speed*/
    window.speedInput =  $("input[type=range]");
 
      /*set initial  speed to 0*/
  window.speedInput.val(0);
    $("input[type=text]").val(0);
   
  /*sets textbox to 0*/
  $("#rangeInput").val(window.speedInput.val());
  
                
//Stop or go on change slider  
 $("#rangeInput").change(function(){
   
   $("#space").css("background-image", "none", "left", "0px");
   $(".stars").addClass("animateForward");
if(window.speedInput.val() == 0.000){
   $(".stars").removeClass("running").addClass("paused");
  $("#space").css("background-image", "url('https://dl.dropboxusercontent.com/u/5071524/space2.png')");
   }else{
      $(".stars").removeClass("paused").addClass("running");
   }

  
 });
  
  
 /* values of the range input*/

  window.speedInput.change(function(){
   /*changes text field with new value*/
   
    $("input[type=text]").val(window.speedInput.val());
    
    
    var anidur = "2s"; 
    anidur = anidur.slice(0,-1);
    anidur = 4/(anidur * window.speedInput.val());
    anidur = anidur + "s";
  
    $(".stars").css("animation-duration", anidur);
   
  });
  
 /*  right steering*/  
//  var timeout, clicker = $('#right');
// clicker.mousedown(function(){
//     timeout = setInterval(function(){
//     var offset =  $("#space").offset().left;
//      offset = offset- 30 + "px";
     
//     $("#space").css("left", offset);
    
    
//     var marsPos = $("#mars").offset().left;
    
//     var newPos = marsPos - 25 +"px";
//     $("#mars").css("left", newPos);
    

//     }, 200);
   

//     return false;
// });

// $("#right").mouseup(function(){
//     clearInterval(timeout);
//     return false;
// });


$("#right").bind('touchstart mousedown', function(e){
    e.preventDefault();
    timeout = setInterval(function(){
      var offset =  $("#space").offset().left;
       offset = offset- 30 + "px";
       
      $("#space").css("left", offset);
      
      
      var marsPos = $("#mars").offset().left;
      
      var newPos = marsPos - 25 +"px";
      $("#mars").css("left", newPos);
    }, 200);
    return false;

    });


$("#right").bind('touchend mouseup', function(){
    clearInterval(timeout);
    return false;
});


  /*  left steering*/  
  
  $('#left').bind('touchstart mousedown', function(e){
    e.preventDefault();
    timeout = setInterval(function(){
         var offset =  $("#space").offset().left;
     offset = offset+ 30 + "px";
     
    $("#space").css("left", offset);
    var marsPos = $("#mars").offset().left;
    
    var newPos = marsPos + 25 +"px";
    $("#mars").css("left", newPos);

    }, 200);

    return false;
  });

  $('#left').bind('touchend mouseup', function(){
      clearInterval(timeout);
      return false;
  });

  /*  button click if mars in viewport*/ 
  $("#mars-in-viewport").click(function(){
    if($("#mars").isOnScreen()){

    $("#page5").hide("slide", { direction: "up"  }, 100 );
    $("#page6").show("slide", { direction: "right"  }, 1000).css("display", "block");
    }
  });

  $.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};


});