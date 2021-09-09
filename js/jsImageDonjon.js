if (document.documentElement.clientWidth < 938 ||screen.width < 938) {

	if (document.documentElement.clientWidth < 321 ||screen.width < 321){
	
	
		function isInViewport(el) {
		  const rect = el.getBoundingClientRect();
		  return (
		    rect.top >= -document.documentElement.clientHeight*2.5&&
		    rect.bottom <= (window.innerHeight*3.6 || document.documentElement.clientHeight*3.6)
		
		  );
		}
		
		
		$(".monstres").each(function(i, obj) {
		  const box = this;
		  document.querySelector(".content").addEventListener('scroll', function () {
		    //Detect when out/in view
		    if(isInViewport(box)) {
		      box.classList.add("inViewM");
		    } else {
		      box.classList.remove("inViewM");
		    }
		  }, {
		    passive: true
		  });
		});
	

	} else {
	
		function isInViewport(el) {
		  const rect = el.getBoundingClientRect();
		  return (
		    rect.top >= -document.documentElement.clientHeight*1.7&&
		    rect.bottom <= (window.innerHeight*2.75 || document.documentElement.clientHeight*2.75)
		
		  );
		}
		
		
		$(".monstres").each(function(i, obj) {
		  const box = this;
		  document.querySelector(".content").addEventListener('scroll', function () {
		    //Detect when out/in view
		    if(isInViewport(box)) {
		      box.classList.add("inViewM");
		    } else {
		      box.classList.remove("inViewM");
		    }
		  }, {
		    passive: true
		  });
		});
	}


} else {
	
	
	function isInViewport(el) {
	  const rect = el.getBoundingClientRect();
	  return (
	    rect.top >= -document.documentElement.clientHeight*0.5&&
	    rect.bottom <= (window.innerHeight*1.5 || document.documentElement.clientHeight*1.5)
	
	  );
	}
	
	
	$(".monstres").each(function(i, obj) {
	  const box = this;
	  document.querySelector(".content").addEventListener('scroll', function () {
	    //Detect when out/in view
	    if(isInViewport(box)) {
	      box.classList.add("inViewM");
	    } else {
	      box.classList.remove("inViewM");
	    }
	  }, {
	    passive: true
	  });
	});
	
	
}



/* LOAD IF IS ON VIEW */
window.onload = function () {
  $(".monstres").each(function(i, obj) {
    const box = this;
    if(isInViewport(box)) {
      box.classList.add("inViewM");
    }
  });
}




///////ON MOBILE DEVICE WITH WIDTH < 701px
if (document.documentElement.clientWidth < 701 ||screen.width < 701) {

	
	function coin1(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  posX2 = $(window).width() - posX;
	  switch (img) {
	    case '1':
	      ;
		  imgW = document.getElementById("stone_coin").width;
		  posX2 = posX2 - imgW - 1;
	      $("#stone_coin").css({visibility:"visible"});
	      $("#stone_coin").css({right:posX2, top:posY});
	      break;
	case '2':
	      ;
		  imgW = document.getElementById("bronze_coin").width;
		  posX2 = posX2 - imgW - 1;
	      $("#bronze_coin").css({visibility:"visible"});
	      $("#bronze_coin").css({right:posX2, top:posY});
	      break;
	case '3':
	      ;
		  imgW = document.getElementById("iron_coin").width;
		  posX2 = posX2 - imgW - 1;
	      $("#iron_coin").css({visibility:"visible"});
	      $("#iron_coin").css({right:posX2, top:posY});
	      break;
	case '4':
	      ;
		  imgW = document.getElementById("gold_coin").width;
		  posX2 = posX2 - imgW - 1;
	      $("#gold_coin").css({visibility:"visible"});
	      $("#gold_coin").css({right:posX2, top:posY});
	      break;
	case '5':
	      ;
		  imgW = document.getElementById("diamond_coin").width;
		  posX2 = posX2 - imgW - 1;
	      $("#diamond_coin").css({visibility:"visible"});
	      $("#diamond_coin").css({right:posX2, top:posY});
	      break;
	case '6':
	      ;
		  imgW = document.getElementById("emerald_coin").width;
		  posX2 = posX2 - imgW - 1;
	      $("#emerald_coin").css({visibility:"visible"});
	      $("#emerald_coin").css({right:posX2, top:posY});
	      break;

	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	function coin2(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  switch (img) {
	    case '1':
	      $("#stone_coin").css({visibility:"hidden"});
	      break;
	    case '2':
	      $("#bronze_coin").css({visibility:"hidden"});
	      break;
	    case '3':
	      $("#iron_coin").css({visibility:"hidden"});
	      break;
	    case '4':
	      $("#gold_coin").css({visibility:"hidden"});
	      break;
	    case '5':
	      $("#diamond_coin").css({visibility:"hidden"});
	      break;
	    case '6':
	      $("#emerald_coin").css({visibility:"hidden"});
	      break;
	        
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
	
	
	
	
	function drop1(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  posX2 = $(window).width() - posX;
	  switch (img) {
	    case '1':
	      ;
		  imgW = document.getElementById("coeur").width;
		  posX2 = posX2 - imgW - 1;
	      $("#coeur").css({visibility:"visible"});
	      $("#coeur").css({right:posX2, top:posY});
	      break;
	case '2':
	      ;
		  imgW = document.getElementById("scarabee").width;
		  posX2 = posX2 - imgW - 1;
	      $("#scarabee").css({visibility:"visible"});
	      $("#scarabee").css({right:posX2, top:posY});
	      break;
	case '3':
	      ;
		  imgW = document.getElementById("diamond").width;
		  posX2 = posX2 - imgW - 1;
	      $("#diamond").css({visibility:"visible"});
	      $("#diamond").css({right:posX2, top:posY});
	      break;
	case '4':
	      ;
		  imgW = document.getElementById("slimeball").width;
		  posX2 = posX2 - imgW - 1;
	      $("#slimeball").css({visibility:"visible"});
	      $("#slimeball").css({right:posX2, top:posY});
	      break;
	case '5':
	      ;
		  imgW = document.getElementById("slimeball_r").width;
		  posX2 = posX2 - imgW - 1;
	      $("#slimeball_r").css({visibility:"visible"});
	      $("#slimeball_r").css({right:posX2, top:posY});
	      break;
	case '6':
	      ;
		  imgW = document.getElementById("slimeball_b").width;
		  posX2 = posX2 - imgW - 1;
	      $("#slimeball_b").css({visibility:"visible"});
	      $("#slimeball_b").css({right:posX2, top:posY});
	      break;
	case '7':
	      ;
		  imgW = document.getElementById("knightslime").width;
		  posX2 = posX2 - imgW - 1;
	      $("#knightslime").css({visibility:"visible"});
	      $("#knightslime").css({right:posX2, top:posY});
	      break;
	case '8':
	      ;
		  imgW = document.getElementById("fermented").width;
		  posX2 = posX2 - imgW - 1;
	      $("#fermented").css({visibility:"visible"});
	      $("#fermented").css({right:posX2, top:posY});
	      break;
	case '9':
	      ;
		  imgW = document.getElementById("string").width;
		  posX2 = posX2 - imgW - 1;
	      $("#string").css({visibility:"visible"});
	      $("#string").css({right:posX2, top:posY});
	      break;
	case '10':
	      ;
		  imgW = document.getElementById("eye").width;
		  posX2 = posX2 - imgW - 1;
	      $("#eye").css({visibility:"visible"});
	      $("#eye").css({right:posX2, top:posY});
	      break;
	case '11':
	      ;
		  imgW = document.getElementById("ironB").width;
		  posX2 = posX2 - imgW - 1;
	      $("#ironB").css({visibility:"visible"});
	      $("#ironB").css({right:posX2, top:posY});
	      break;
	case '12':
	      ;
		  imgW = document.getElementById("redstoneB").width;
		  posX2 = posX2 - imgW - 1;
	      $("#redstoneB").css({visibility:"visible"});
	      $("#redstoneB").css({right:posX2, top:posY});
	      break;
	case '13':
	      ;
		  imgW = document.getElementById("observer").width;
		  posX2 = posX2 - imgW - 1;
	      $("#observer").css({visibility:"visible"});
	      $("#observer").css({right:posX2, top:posY});
	      break;
	case '14':
	      ;
		  imgW = document.getElementById("croc").width;
		  posX2 = posX2 - imgW - 1;
	      $("#croc").css({visibility:"visible"});
	      $("#croc").css({right:posX2, top:posY});
	      break;
	case '15':
	      ;
		  imgW = document.getElementById("toile").width;
		  posX2 = posX2 - imgW - 1;
	      $("#toile").css({visibility:"visible"});
	      $("#toile").css({right:posX2, top:posY});
	      break;
	case '16':
	      ;
		  imgW = document.getElementById("bookE").width;
		  posX2 = posX2 - imgW - 1;
	      $("#bookE").css({visibility:"visible"});
	      $("#bookE").css({right:posX2, top:posY});
	      break;
	case '17':
	      ;
		  imgW = document.getElementById("loup").width;
		  posX2 = posX2 - imgW - 1;
	      $("#loup").css({visibility:"visible"});
	      $("#loup").css({right:posX2, top:posY});
	      break;
	case '18':
	      ;
		  imgW = document.getElementById("croquettes").width;
		  posX2 = posX2 - imgW - 1;
	      $("#croquettes").css({visibility:"visible"});
	      $("#croquettes").css({right:posX2, top:posY});
	      break;
	case '19':
	      ;
		  imgW = document.getElementById("crotte").width;
		  posX2 = posX2 - imgW - 1;
	      $("#crotte").css({visibility:"visible"});
	      $("#crotte").css({right:posX2, top:posY});
	      break;
	case '20':
	      ;
		  imgW = document.getElementById("heros").width;
		  posX2 = posX2 - imgW - 1;
	      $("#heros").css({visibility:"visible"});
	      $("#heros").css({right:posX2, top:posY});
	      break;
	case '21':
	      ;
		  imgW = document.getElementById("dieu").width;
		  posX2 = posX2 - imgW - 1;
	      $("#dieu").css({visibility:"visible"});
	      $("#dieu").css({right:posX2, top:posY});
	      break;
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	function drop2(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  switch (img) {
	    case '1':
	      $("#coeur").css({visibility:"hidden"});
	      break;
	    case '2':
	      $("#scarabee").css({visibility:"hidden"});
	      break;
	    case '3':
	      $("#diamond").css({visibility:"hidden"});
	      break;
	    case '4':
	      $("#slimeball").css({visibility:"hidden"});
	      break;
	    case '5':
	      $("#slimeball_r").css({visibility:"hidden"});
	      break;
	    case '6':
	      $("#slimeball_b").css({visibility:"hidden"});
	      break;
 		case '7':
	      $("#knightslime").css({visibility:"hidden"});
	      break;
 		case '8':
	      $("#fermented").css({visibility:"hidden"});
	      break;
 		case '9':
	      $("#string").css({visibility:"hidden"});
	      break;	
 		case '10':
	      $("#eye").css({visibility:"hidden"});
	      break;   
		case '11':
	      $("#ironB").css({visibility:"hidden"});
	      break;
 		case '12':
	      $("#redstoneB").css({visibility:"hidden"});
	      break;	
 		case '13':
	      $("#observer").css({visibility:"hidden"});
	      break;  
		case '14':
	      $("#croc").css({visibility:"hidden"});
	      break;
 		case '15':
	      $("#toile").css({visibility:"hidden"});
	      break;	
 		case '16':
	      $("#bookE").css({visibility:"hidden"});
	      break;   
		case '17':
	      $("#loup").css({visibility:"hidden"});
	      break;	
 		case '18':
	      $("#croquettes").css({visibility:"hidden"});
	      break;  
 		case '19':
	      $("#crotte").css({visibility:"hidden"});
	      break;   
		case '20':
	      $("#heros").css({visibility:"hidden"});
	      break;	
 		case '21':
	      $("#dieu").css({visibility:"hidden"});
	      break; 
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	} else { ///////ON OTHER DEVICE WITH WIDTH > 1024
	
		
		function coin1(img) {
		  posX = event.clientX;
		  posY = event.clientY;
		  posX2 = $(window).width() - posX;
		  switch (img) {
		    case '1':
		      ;
			  imgW = document.getElementById("stone_coin").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#stone_coin").css({visibility:"visible"});
		      $("#stone_coin").css({right:posX2, top:posY});
		      break;
		    case '2':
		      ;
			  imgW = document.getElementById("bronze_coin").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#bronze_coin").css({visibility:"visible"});
		      $("#bronze_coin").css({right:posX2, top:posY});
		      break;
		    case '3':
		      ;
			  imgW = document.getElementById("iron_coin").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#iron_coin").css({visibility:"visible"});
		      $("#iron_coin").css({right:posX2, top:posY});
		      break;
		    case '4':
		      ;
			  imgW = document.getElementById("gold_coin").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#gold_coin").css({visibility:"visible"});
		      $("#gold_coin").css({right:posX2, top:posY});
		      break;
		    case '5':
		      ;
			  imgW = document.getElementById("diamond_coin").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#diamond_coin").css({visibility:"visible"});
		      $("#diamond_coin").css({right:posX2, top:posY});
		      break;
		    case '6':
		      ;
			  imgW = document.getElementById("emerald_coin").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#emerald_coin").css({visibility:"visible"});
		      $("#emerald_coin").css({right:posX2, top:posY});
		      break;
		   
		
		    default:
		      console.log(`Problème chargement image`);
		  }
		  
		}
		
		function coin2(img) {
		  posX = event.clientX;
		  posY = event.clientY;
		  switch (img) {
		    case '1':
		      $("#stone_coin").css({visibility:"hidden"});
		      break;
		    case '2':
		      $("#bronze_coin").css({visibility:"hidden"});
		      break;
		    case '3':
		      $("#iron_coin").css({visibility:"hidden"});
		      break;
		    case '4':
		      $("#gold_coin").css({visibility:"hidden"});
		      break;
		    case '5':
		      $("#diamond_coin").css({visibility:"hidden"});
		      break;
		    case '6':
		      $("#emerald_coin").css({visibility:"hidden"});
		      break;
	        
		        
		
		    default:
		      console.log(`Problème chargement image`);
		  }
		  
		}
		
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
	
	
	
	
	
	function drop1(img) {
		  posX = event.clientX;
		  posY = event.clientY;
		  posX2 = $(window).width() - posX;
		  switch (img) {
		    case '1':
		      ;
			  imgW = document.getElementById("coeur").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#coeur").css({visibility:"visible"});
		      $("#coeur").css({right:posX2, top:posY});
		      break;
		    case '2':
		      ;
			  imgW = document.getElementById("scarabee").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#scarabee").css({visibility:"visible"});
		      $("#scarabee").css({right:posX2, top:posY});
		      break;
		    case '3':
		      ;
			  imgW = document.getElementById("diamond").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#diamond").css({visibility:"visible"});
		      $("#diamond").css({right:posX2, top:posY});
		      break;
		    case '4':
		      ;
			  imgW = document.getElementById("slimeball").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#slimeball").css({visibility:"visible"});
		      $("#slimeball").css({right:posX2, top:posY});
		      break;
		    case '5':
		      ;
			  imgW = document.getElementById("slimeball_r").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#slimeball_r").css({visibility:"visible"});
		      $("#slimeball_r").css({right:posX2, top:posY});
		      break;
		    case '6':
		      ;
			  imgW = document.getElementById("slimeball_b").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#slimeball_b").css({visibility:"visible"});
		      $("#slimeball_b").css({right:posX2, top:posY});
		      break;
   		    case '7':
		      ;
			  imgW = document.getElementById("knightslime").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#knightslime").css({visibility:"visible"});
		      $("#knightslime").css({right:posX2, top:posY});
		      break;
   		    case '8':
		      ;
			  imgW = document.getElementById("fermented").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#fermented").css({visibility:"visible"});
		      $("#fermented").css({right:posX2, top:posY});
		      break;
   		    case '9':
		      ;
			  imgW = document.getElementById("string").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#string").css({visibility:"visible"});
		      $("#string").css({right:posX2, top:posY});
		      break;
   		    case '10':
		      ;
			  imgW = document.getElementById("eye").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#eye").css({visibility:"visible"});
		      $("#eye").css({right:posX2, top:posY});
		      break;
   		    case '11':
		      ;
			  imgW = document.getElementById("ironB").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#ironB").css({visibility:"visible"});
		      $("#ironB").css({right:posX2, top:posY});
		      break;
   		    case '12':
		      ;
			  imgW = document.getElementById("redstoneB").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#redstoneB").css({visibility:"visible"});
		      $("#redstoneB").css({right:posX2, top:posY});
		      break;
   		    case '13':
		      ;
			  imgW = document.getElementById("observer").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#observer").css({visibility:"visible"});
		      $("#observer").css({right:posX2, top:posY});
		      break;
			case '14':
		      ;
			  imgW = document.getElementById("croc").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#croc").css({visibility:"visible"});
		      $("#croc").css({right:posX2, top:posY});
		      break;
   		    case '15':
		      ;
			  imgW = document.getElementById("toile").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#toile").css({visibility:"visible"});
		      $("#toile").css({right:posX2, top:posY});
		      break;
   		    case '16':
		      ;
			  imgW = document.getElementById("bookE").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#bookE").css({visibility:"visible"});
		      $("#bookE").css({right:posX2, top:posY});
		      break;
			case '17':
		      ;
			  imgW = document.getElementById("loup").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#loup").css({visibility:"visible"});
		      $("#loup").css({right:posX2, top:posY});
		      break;
   		    case '18':
		      ;
			  imgW = document.getElementById("croquettes").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#croquettes").css({visibility:"visible"});
		      $("#croquettes").css({right:posX2, top:posY});
		      break;
   		    case '19':
		      ;
			  imgW = document.getElementById("crotte").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#crotte").css({visibility:"visible"});
		      $("#crotte").css({right:posX2, top:posY});
		      break;
			case '20':
		      ;
			  imgW = document.getElementById("heros").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#heros").css({visibility:"visible"});
		      $("#heros").css({right:posX2, top:posY});
		      break;
   		    case '21':
		      ;
			  imgW = document.getElementById("dieu").width;
			  posX2 = posX2 - imgW - 15;
			  posY = posY + 15;
		      $("#dieu").css({visibility:"visible"});
		      $("#dieu").css({right:posX2, top:posY});
		      break;		
		
		    default:
		      console.log(`Problème chargement image`);
		  }
		  
		}
		
		function drop2(img) {
		  posX = event.clientX;
		  posY = event.clientY;
		  switch (img) {
		    case '1':
		      $("#coeur").css({visibility:"hidden"});
		      break;
		    case '2':
		      $("#scarabee").css({visibility:"hidden"});
		      break;
		    case '3':
		      $("#diamond").css({visibility:"hidden"});
		      break;
		    case '4':
		      $("#slimeball").css({visibility:"hidden"});
		      break;
		    case '5':
		      $("#slimeball_r").css({visibility:"hidden"});
		      break;
		    case '6':
		      $("#slimeball_b").css({visibility:"hidden"});
		      break;
	 		case '7':
		      $("#knightslime").css({visibility:"hidden"});
		      break;
	 		case '8':
		      $("#fermented").css({visibility:"hidden"});
		      break;
	 		case '9':
		      $("#string").css({visibility:"hidden"});
		      break;	
	 		case '10':
		      $("#eye").css({visibility:"hidden"});
		      break;  
	 		case '11':
		      $("#ironB").css({visibility:"hidden"});
		      break;
	 		case '12':
		      $("#redstoneB").css({visibility:"hidden"});
		      break;	
	 		case '13':
		      $("#observer").css({visibility:"hidden"});
		      break; 
			case '14':
		      $("#croc").css({visibility:"hidden"});
		      break;
	 		case '15':
		      $("#toile").css({visibility:"hidden"});
		      break;	
	 		case '16':
		      $("#bookE").css({visibility:"hidden"});
		      break; 
			case '17':
		      $("#loup").css({visibility:"hidden"});
		      break;	
	 		case '18':
		      $("#croquettes").css({visibility:"hidden"});
		      break; 
	 		case '19':
		      $("#crotte").css({visibility:"hidden"});
		      break;   
			case '20':
		      $("#heros").css({visibility:"hidden"});
		      break;	
	 		case '21':
		      $("#dieu").css({visibility:"hidden"});
		      break; 
		        
		        
		
		    default:
		      console.log(`Problème chargement image`);
		  }
		  
		}
		
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
}// END ELSE
