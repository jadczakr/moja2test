	  function readmore()
	  {
		  document.getElementById("button2").click();
	  }
	  
	  $(window).scroll(function(){
	      if($(document).scrollTop() > 100){
	          $("#naglowek").css({"background-color":"#0ea186"}); 
	          }
	      else{
	    	  
	          $("#naglowek").css({"background-color":"transparent"});
	      }
	
	  })
	  
	  
	  $(document).ready(function() {
		   
		   $(".cont").fadeOut();
		   $(".cont").hide();
		   
		   
			$("#pierwszy").fadeIn("slow", function() {
		       // Animation complete
		     });
		     
			 $("#kontakt").fadeIn("slow",function(){
		    	 
		     });
		     
		   
	
		   });
	  
	
	  $("#drop1").click(function() {
			
		  $(".galeria:not(#galeria1)").slideUp("slow");
		  $("#galeria1").slideToggle("slow");
	  });
	  
	  $("#drop2").click(function() {
			
		  $(".galeria:not(#galeria2)").slideUp("slow");
		  $("#galeria2").slideToggle("slow");
	  });
	  
	  $("#drop3").click(function() {
			
		  $(".galeria:not(#galeria3)").slideUp("slow");
		  $("#galeria3").slideToggle("slow");
	  });
	  
	  $("#drop4").click(function() {
			
		  $(".galeria:not(#galeria4)").slideUp("slow");
		  $("#galeria4").slideToggle("slow");
	  });
	
	
	
	
		   $("#button1").click(function() {
			   
			   
			   document.getElementById("poczatek").scrollIntoView({ behavior: 'smooth', block: 'end'});
			   
			   $(".cont").fadeOut();
			   $(".cont").hide();
			   
			   
			$("#pierwszy").fadeIn("slow", function() {
		       // Animation complete
		     });
		     
			 $("#kontakt").delay(500).fadeIn("slow",function(){
		    	 
		     });
		     
	
		   });
	
	
		   $("#button2").click(function() {
	
			   
			   document.getElementById("poczatek").scrollIntoView({ behavior: 'smooth', block: 'end'});
			   
			   $("#rozwin").hide();
			   $(".cont").fadeOut();
			   $(".cont").hide();
			   
			   
		       
				$("#drugi").fadeIn("slow",function(){
			    	 
			     });	       
		       
				$("#kontakt").delay(500).fadeIn("slow",function(){
			    	 
			     });   
	
		       
				$("#rozwin").delay(2000).slideDown(2000);
		     
		   });
	
	
	
		   $("#button3").click(function() {
			   
			   document.getElementById("poczatek").scrollIntoView({ behavior: 'smooth', block: 'end'});
			   
			   $(".cont").fadeOut();
			   $(".cont").hide();
			   
		     $("#trzeci").fadeIn("slow", function() {
		       // Animation complete
		     });
		     	
		     $("#kontakt").delay(500).fadeIn("slow",function(){
		    	 
		     });
		   });
		   
		   $("#button4").click(function(){
			  
			   
			   document.getElementById("poczatek").scrollIntoView({ behavior: 'smooth', block: 'end'});
	
			   
			   $(".cont").fadeOut();
			   $(".cont").hide();
			   
			     $("#czwarty").fadeIn("slow", function() {
				       // Animation complete
				     });
			     $("#kontakt").delay(500).fadeIn("slow",function(){
			    	 
			     });
			   
		   });
		   