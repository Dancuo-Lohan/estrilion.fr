///////ON MOBILE DEVICE WITH WIDTH < 1024px
if (document.documentElement.clientWidth < 701 ||screen.width < 701) {

	
	function ec1(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  posX2 = $(window).width() - posX;
	  switch (img) {
	    case '1':
	      ;
		  imgW = document.getElementById("infoScroll").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoScroll").css({visibility:"visible"});
	      $("#infoScroll").css({right:posX2, top:posY});
	      break;
	    case '2':
	      ;
		  imgW = document.getElementById("infoCasqEc").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoCasqEc").css({visibility:"visible"});
	      $("#infoCasqEc").css({right:posX2, top:posY});
	      break;
	    case '3':
	      ;
		  imgW = document.getElementById("infoBow").width;
	      $("#infoBow").css({visibility:"visible"});
	      $("#infoBow").css({right:posX2, top:posY});
	      break;
	    case '4':
	      ;
		  imgW = document.getElementById("infoGappl").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoGappl").css({visibility:"visible"});
	      $("#infoGappl").css({right:posX2, top:posY});
	      break;
	    case '5':
	      ;
		  imgW = document.getElementById("infoPlasEc").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoPlasEc").css({visibility:"visible"});
	      $("#infoPlasEc").css({right:posX2, top:posY});
	      break;
	    case '6':
	      ;
		  imgW = document.getElementById("infoArrow").width;
	      $("#infoArrow").css({visibility:"visible"});
	      $("#infoArrow").css({right:posX2, top:posY});
	      break;
	    case '8':
	      ;
		  imgW = document.getElementById("infoLegEc").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoLegEc").css({visibility:"visible"});
	      $("#infoLegEc").css({right:posX2, top:posY});
	      break;
	    case '9':
	      ;
		  imgW = document.getElementById("infoSwordEc").width;
	      $("#infoSwordEc").css({visibility:"visible"});
	      $("#infoSwordEc").css({right:posX2, top:posY});
	      break;
	    case '10':
	      ;
		  imgW = document.getElementById("infoBlt").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBlt").css({visibility:"visible"});
	      $("#infoBlt").css({right:posX2, top:posY});
	      break;
	    case '11':
	      ;
		  imgW = document.getElementById("infoBotEc").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBotEc").css({visibility:"visible"});
	      $("#infoBotEc").css({right:posX2, top:posY});
	      break;
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	function ec2(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  switch (img) {
	    case '1':
	      $("#infoScroll").css({visibility:"hidden"});
	      break;
	    case '2':
	      $("#infoCasqEc").css({visibility:"hidden"});
	      break;
	    case '3':
	      $("#infoBow").css({visibility:"hidden"});
	      break;
	    case '4':
	      $("#infoGappl").css({visibility:"hidden"});
	      break;
	    case '5':
	      $("#infoPlasEc").css({visibility:"hidden"});
	      break;
	    case '6':
	      $("#infoArrow").css({visibility:"hidden"});
	      break;
	    case '8':
	      $("#infoLegEc").css({visibility:"hidden"});
	      break;
	    case '9':
	      $("#infoSwordEc").css({visibility:"hidden"});
	      break;
	    case '10':
	      $("#infoBlt").css({visibility:"hidden"});
	      break;
	    case '11':
	      $("#infoBotEc").css({visibility:"hidden"});
	      break;
	        
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function ex1(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  posX2 = $(window).width() - posX;
	  switch (img) {
	    case '1':
	      ;
	      imgW = document.getElementById("infoScroll").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoScroll").css({visibility:"visible"});
	      $("#infoScroll").css({right:posX2, top:posY});
	      break;
	    case '2':
	      ;
	      imgW = document.getElementById("infoCasqEx").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoCasqEx").css({visibility:"visible"});
	      $("#infoCasqEx").css({right:posX2, top:posY});
	      break;
	    case '4':
	      ;
	      imgW = document.getElementById("infoGapplE").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoGapplE").css({visibility:"visible"});
	      $("#infoGapplE").css({right:posX2, top:posY});
	      break;
	    case '5':
	      ;
	      imgW = document.getElementById("infoPlasEx").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoPlasEx").css({visibility:"visible"});
	      $("#infoPlasEx").css({right:posX2, top:posY});
	      break;
	    case '8':
	      ;
	      imgW = document.getElementById("infoLegEx").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoLegEx").css({visibility:"visible"});
	      $("#infoLegEx").css({right:posX2, top:posY});
	      break;
	    case '9':
	      ;
	      imgW = document.getElementById("infoSwordEx").width;
	      $("#infoSwordEx").css({visibility:"visible"});
	      $("#infoSwordEx").css({right:posX2, top:posY});
	      break;
	    case '10':
	      ;
	      imgW = document.getElementById("infoBlt").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBlt").css({visibility:"visible"});
	      $("#infoBlt").css({right:posX2, top:posY});
	      break;
	    case '11':
	      ;
	      imgW = document.getElementById("infoBotEx").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBotEx").css({visibility:"visible"});
	      $("#infoBotEx").css({right:posX2, top:posY});
	      break;
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	function ex2(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  switch (img) {
	    case '1':
	      $("#infoScroll").css({visibility:"hidden"});
	      break;
	    case '2':
	      $("#infoCasqEx").css({visibility:"hidden"});
	      break;
	    case '4':
	      $("#infoGapplE").css({visibility:"hidden"});
	      break;
	    case '5':
	      $("#infoPlasEx").css({visibility:"hidden"});
	      break;
	    case '8':
	      $("#infoLegEx").css({visibility:"hidden"});
	      break;
	    case '9':
	      $("#infoSwordEx").css({visibility:"hidden"});
	      break;
	    case '10':
	      $("#infoBlt").css({visibility:"hidden"});
	      break;
	    case '11':
	      $("#infoBotEx").css({visibility:"hidden"});
	      break;
	        
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function pa1(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  posX2 = $(window).width() - posX;
	  switch (img) {
	    case '1':
	      ;
	      imgW = document.getElementById("infoScroll").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoScroll").css({visibility:"visible"});
	      $("#infoScroll").css({right:posX2, top:posY});
	      break;
	    case '2':
	      ;
	      imgW = document.getElementById("infoCasqPa").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoCasqPa").css({visibility:"visible"});
	      $("#infoCasqPa").css({right:posX2, top:posY});
	      break;
	    case '4':
	      ;
	      imgW = document.getElementById("infoGappl").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoGappl").css({visibility:"visible"});
	      $("#infoGappl").css({right:posX2, top:posY});
	      break;
	    case '5':
	      ;
	      imgW = document.getElementById("infoPlasPa").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoPlasPa").css({visibility:"visible"});
	      $("#infoPlasPa").css({right:posX2, top:posY});
	      break;
	    case '8':
	      ;
	      imgW = document.getElementById("infoLegPa").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoLegPa").css({visibility:"visible"});
	      $("#infoLegPa").css({right:posX2, top:posY});
	      break;
	    case '9':
	      ;
	      imgW = document.getElementById("infoSwordPa").width;
	      $("#infoSwordPa").css({visibility:"visible"});
	      $("#infoSwordPa").css({right:posX2, top:posY});
	      break;
	    case '10':
	      ;
	      imgW = document.getElementById("infoBlt").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBlt").css({visibility:"visible"});
	      $("#infoBlt").css({right:posX2, top:posY});
	      break;
	    case '11':
	      ;
	      imgW = document.getElementById("infoBotPa").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBotPa").css({visibility:"visible"});
	      $("#infoBotPa").css({right:posX2, top:posY});
	      break;
	    case '12':
	      ;
	      imgW = document.getElementById("infoPiochePa").width;
	      $("#infoPiochePa").css({visibility:"visible"});
	      $("#infoPiochePa").css({right:posX2, top:posY});
	      break;
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	function pa2(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  switch (img) {
	    case '1':
	      $("#infoScroll").css({visibility:"hidden"});
	      break;
	    case '2':
	      $("#infoCasqPa").css({visibility:"hidden"});
	      break;
	    case '4':
	      $("#infoGappl").css({visibility:"hidden"});
	      break;
	    case '5':
	      $("#infoPlasPa").css({visibility:"hidden"});
	      break;
	    case '8':
	      $("#infoLegPa").css({visibility:"hidden"});
	      break;
	    case '9':
	      $("#infoSwordPa").css({visibility:"hidden"});
	      break;
	    case '10':
	      $("#infoBlt").css({visibility:"hidden"});
	      break;
	    case '11':
	      $("#infoBotPa").css({visibility:"hidden"});
	      break;
	    case '12':
	      $("#infoPiochePa").css({visibility:"hidden"});
	      break;
	        
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	
	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function ty1(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  posX2 = $(window).width() - posX;
	  switch (img) {
	    case '1':
		  ;
		  imgW = document.getElementById("infoScrollR").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoScrollR").css({visibility:"visible"});
	      $("#infoScrollR").css({right:posX2, top:posY});
	      break;
	    case '2':
	      ;
		  imgW = document.getElementById("infoCasqTy").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoCasqTy").css({visibility:"visible"});
	      $("#infoCasqTy").css({right:posX2, top:posY});
	      break;
	    case '3':
	      ;
	      $("#infoBowTy").css({visibility:"visible"});
	      $("#infoBowTy").css({right:posX2, top:posY});
	      break;
	    case '4':
	      ;
		  imgW = document.getElementById("infoGapplER").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoGapplER").css({visibility:"visible"});
	      $("#infoGapplER").css({right:posX2, top:posY});
	      break;
	    case '5':
	      ;
		  imgW = document.getElementById("infoPlasTy").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoPlasTy").css({visibility:"visible"});
	      $("#infoPlasTy").css({right:posX2, top:posY});
	      break;
	    case '6':
	      $("#infoArrowR").css({visibility:"visible"});
	      $("#infoArrowR").css({right:posX2, top:posY});
	      break;
	    case '7':
	      ;
		  imgW = document.getElementById("infoPizza").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoPizza").css({visibility:"visible"});
	      $("#infoPizza").css({right:posX2, top:posY});
	      break;
	    case '8':
	      ;
		  imgW = document.getElementById("infoLegTy").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoLegTy").css({visibility:"visible"});
	      $("#infoLegTy").css({right:posX2, top:posY});
	      break;
	    case '9':
	      ;
	      $("#infoSwordTy").css({visibility:"visible"});
	      $("#infoSwordTy").css({right:posX2, top:posY});
	      break;
	    case '10':
	      ;
		  imgW = document.getElementById("infoBlt").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBlt").css({visibility:"visible"});
	      $("#infoBlt").css({right:posX2, top:posY});
	      break;
	    case '11':
	      ;
		  imgW = document.getElementById("infoBotTy").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBotTy").css({visibility:"visible"});
	      $("#infoBotTy").css({right:posX2, top:posY});
	      break;
	    case '12':
	      ;
	      $("#infoPiocheTy").css({visibility:"visible"});
	      $("#infoPiocheTy").css({right:posX2, top:posY});
	      break;
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	function ty2(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  switch (img) {
	    case '1':
	      $("#infoScrollR").css({visibility:"hidden"});
	      break;
	    case '2':
	      $("#infoCasqTy").css({visibility:"hidden"});
	      break;
	    case '3':
	      $("#infoBowTy").css({visibility:"hidden"});
	      break;
	    case '4':
	      $("#infoGapplER").css({visibility:"hidden"});
	      break;
	    case '5':
	      $("#infoPlasTy").css({visibility:"hidden"});
	      break;
	    case '6':
	      $("#infoArrowR").css({visibility:"hidden"});
	      break;
	    case '7':
	      $("#infoPizza").css({visibility:"hidden"});
	      break;
	    case '8':
	      $("#infoLegTy").css({visibility:"hidden"});
	      break;
	    case '9':
	      $("#infoSwordTy").css({visibility:"hidden"});
	      break;
	    case '10':
	      $("#infoBlt").css({visibility:"hidden"});
	      break;
	    case '11':
	      $("#infoBotTy").css({visibility:"hidden"});
	      break;
	    case '12':
	      $("#infoPiocheTy").css({visibility:"hidden"});
	      break;
	        
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function mo1(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  posX2 = $(window).width() - posX;
	  switch (img) {
	    case '1':
		  ;
		  imgW = document.getElementById("infoScrollR").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoScrollR").css({visibility:"visible"});
	      $("#infoScrollR").css({right:posX2, top:posY});
	      break;
	    case '2':
	      ;
		  imgW = document.getElementById("infoCasqMo").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoCasqMo").css({visibility:"visible"});
	      $("#infoCasqMo").css({right:posX2, top:posY});
	      break;
	    case '6':
	      ;
	      $("#infoAile").css({visibility:"visible"});
	      $("#infoAile").css({right:posX2, top:posY});
	      break;
	    case '4':
	      ;
		  imgW = document.getElementById("infoGapplER").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoGapplER").css({visibility:"visible"});
	      $("#infoGapplER").css({right:posX2, top:posY});
	      break;
	    case '5':
	      ;
		  imgW = document.getElementById("infoPlasMo").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoPlasMo").css({visibility:"visible"});
	      $("#infoPlasMo").css({right:posX2, top:posY});
	      break;
	    case '7':
	      ;
		  imgW = document.getElementById("infoPizza").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoPizza").css({visibility:"visible"});
	      $("#infoPizza").css({right:posX2, top:posY});
	      break;
	    case '8':
	      ;
		  imgW = document.getElementById("infoLegMo").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoLegMo").css({visibility:"visible"});
	      $("#infoLegMo").css({right:posX2, top:posY});
	      break;
	    case '9':
	      ;
	      $("#infoSwordMo").css({visibility:"visible"});
	      $("#infoSwordMo").css({right:posX2, top:posY});
	      break;
	    case '11':
	      ;
		  imgW = document.getElementById("infoBotMo").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBotMo").css({visibility:"visible"});
	      $("#infoBotMo").css({right:posX2, top:posY});
	      break;
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	function mo2(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  switch (img) {
	    case '1':
	      $("#infoScrollR").css({visibility:"hidden"});
	      break;
	    case '2':
	      $("#infoCasqMo").css({visibility:"hidden"});
	      break;
	    case '6':
	      $("#infoAile").css({visibility:"hidden"});
	      break;
	    case '4':
	      $("#infoGapplER").css({visibility:"hidden"});
	      break;
	    case '5':
	      $("#infoPlasMo").css({visibility:"hidden"});
	      break;
	    case '7':
	      $("#infoPizza").css({visibility:"hidden"});
	      break;
	    case '8':
	      $("#infoLegMo").css({visibility:"hidden"});
	      break;
	    case '9':
	      $("#infoSwordMo").css({visibility:"hidden"});
	      break;
	    case '11':
	      $("#infoBotMo").css({visibility:"hidden"});
	      break;
	        
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	
	
	
} else { ///////ON OTHER DEVICE WITH WIDTH > 1024
	
	
	function ec1(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  posX2 = $(window).width() - posX;
	  switch (img) {
	    case '1':
	      ;
		  imgW = document.getElementById("infoScroll").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoScroll").css({visibility:"visible"});
	      $("#infoScroll").css({right:posX2, top:posY});
	      break;
	    case '2':
	      ;
		  imgW = document.getElementById("infoCasqEc").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoCasqEc").css({visibility:"visible"});
	      $("#infoCasqEc").css({right:posX2, top:posY});
	      break;
	    case '3':
	      ;
		  imgW = document.getElementById("infoBow").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBow").css({visibility:"visible"});
	      $("#infoBow").css({right:posX2, top:posY});
	      break;
	    case '4':
	      ;
		  imgW = document.getElementById("infoGappl").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoGappl").css({visibility:"visible"});
	      $("#infoGappl").css({right:posX2, top:posY});
	      break;
	    case '5':
	      ;
		  imgW = document.getElementById("infoPlasEc").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoPlasEc").css({visibility:"visible"});
	      $("#infoPlasEc").css({right:posX2, top:posY});
	      break;
	    case '6':
	      ;
		  imgW = document.getElementById("infoArrow").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoArrow").css({visibility:"visible"});
	      $("#infoArrow").css({right:posX2, top:posY});
	      break;
	    case '8':
	      ;
		  imgW = document.getElementById("infoLegEc").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoLegEc").css({visibility:"visible"});
	      $("#infoLegEc").css({right:posX2, top:posY});
	      break;
	    case '9':
	      ;
		  imgW = document.getElementById("infoSwordEc").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoSwordEc").css({visibility:"visible"});
	      $("#infoSwordEc").css({right:posX2, top:posY});
	      break;
	    case '10':
	      ;
		  imgW = document.getElementById("infoBlt").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBlt").css({visibility:"visible"});
	      $("#infoBlt").css({right:posX2, top:posY});
	      break;
	    case '11':
	      ;
		  imgW = document.getElementById("infoBotEc").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBotEc").css({visibility:"visible"});
	      $("#infoBotEc").css({right:posX2, top:posY});
	      break;
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	function ec2(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  switch (img) {
	    case '1':
	      $("#infoScroll").css({visibility:"hidden"});
	      break;
	    case '2':
	      $("#infoCasqEc").css({visibility:"hidden"});
	      break;
	    case '3':
	      $("#infoBow").css({visibility:"hidden"});
	      break;
	    case '4':
	      $("#infoGappl").css({visibility:"hidden"});
	      break;
	    case '5':
	      $("#infoPlasEc").css({visibility:"hidden"});
	      break;
	    case '6':
	      $("#infoArrow").css({visibility:"hidden"});
	      break;
	    case '8':
	      $("#infoLegEc").css({visibility:"hidden"});
	      break;
	    case '9':
	      $("#infoSwordEc").css({visibility:"hidden"});
	      break;
	    case '10':
	      $("#infoBlt").css({visibility:"hidden"});
	      break;
	    case '11':
	      $("#infoBotEc").css({visibility:"hidden"});
	      break;
	        
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function ex1(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  posX2 = $(window).width() - posX;
	  switch (img) {
	    case '1':
	      ;
	      imgW = document.getElementById("infoScroll").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoScroll").css({visibility:"visible"});
	      $("#infoScroll").css({right:posX2, top:posY});
	      break;
	    case '2':
	      ;
	      imgW = document.getElementById("infoCasqEx").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoCasqEx").css({visibility:"visible"});
	      $("#infoCasqEx").css({right:posX2, top:posY});
	      break;
	    case '4':
	      ;
	      imgW = document.getElementById("infoGapplE").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoGapplE").css({visibility:"visible"});
	      $("#infoGapplE").css({right:posX2, top:posY});
	      break;
	    case '5':
	      ;
	      imgW = document.getElementById("infoPlasEx").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoPlasEx").css({visibility:"visible"});
	      $("#infoPlasEx").css({right:posX2, top:posY});
	      break;
	    case '8':
	      ;
	      imgW = document.getElementById("infoLegEx").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoLegEx").css({visibility:"visible"});
	      $("#infoLegEx").css({right:posX2, top:posY});
	      break;
	    case '9':
	      ;
	      imgW = document.getElementById("infoSwordEx").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoSwordEx").css({visibility:"visible"});
	      $("#infoSwordEx").css({right:posX2, top:posY});
	      break;
	    case '10':
	      ;
	      imgW = document.getElementById("infoBlt").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBlt").css({visibility:"visible"});
	      $("#infoBlt").css({right:posX2, top:posY});
	      break;
	    case '11':
	      ;
	      imgW = document.getElementById("infoBotEx").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBotEx").css({visibility:"visible"});
	      $("#infoBotEx").css({right:posX2, top:posY});
	      break;
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	function ex2(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  switch (img) {
	    case '1':
	      $("#infoScroll").css({visibility:"hidden"});
	      break;
	    case '2':
	      $("#infoCasqEx").css({visibility:"hidden"});
	      break;
	    case '4':
	      $("#infoGapplE").css({visibility:"hidden"});
	      break;
	    case '5':
	      $("#infoPlasEx").css({visibility:"hidden"});
	      break;
	    case '8':
	      $("#infoLegEx").css({visibility:"hidden"});
	      break;
	    case '9':
	      $("#infoSwordEx").css({visibility:"hidden"});
	      break;
	    case '10':
	      $("#infoBlt").css({visibility:"hidden"});
	      break;
	    case '11':
	      $("#infoBotEx").css({visibility:"hidden"});
	      break;
	        
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function pa1(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  posX2 = $(window).width() - posX;
	  switch (img) {
	    case '1':
	      ;
	      imgW = document.getElementById("infoScroll").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoScroll").css({visibility:"visible"});
	      $("#infoScroll").css({right:posX2, top:posY});
	      break;
	    case '2':
	      ;
	      imgW = document.getElementById("infoCasqPa").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoCasqPa").css({visibility:"visible"});
	      $("#infoCasqPa").css({right:posX2, top:posY});
	      break;
	    case '4':
	      ;
	      imgW = document.getElementById("infoGappl").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoGappl").css({visibility:"visible"});
	      $("#infoGappl").css({right:posX2, top:posY});
	      break;
	    case '5':
	      ;
	      imgW = document.getElementById("infoPlasPa").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoPlasPa").css({visibility:"visible"});
	      $("#infoPlasPa").css({right:posX2, top:posY});
	      break;
	    case '8':
	      ;
	      imgW = document.getElementById("infoLegPa").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoLegPa").css({visibility:"visible"});
	      $("#infoLegPa").css({right:posX2, top:posY});
	      break;
	    case '9':
	      ;
	      imgW = document.getElementById("infoSwordPa").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoSwordPa").css({visibility:"visible"});
	      $("#infoSwordPa").css({right:posX2, top:posY});
	      break;
	    case '10':
	      ;
	      imgW = document.getElementById("infoBlt").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBlt").css({visibility:"visible"});
	      $("#infoBlt").css({right:posX2, top:posY});
	      break;
	    case '11':
	      ;
	      imgW = document.getElementById("infoBotPa").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoBotPa").css({visibility:"visible"});
	      $("#infoBotPa").css({right:posX2, top:posY});
	      break;
	    case '12':
	      ;
	      imgW = document.getElementById("infoPiochePa").width;
		  posX2 = posX2 - imgW - 1;
	      $("#infoPiochePa").css({visibility:"visible"});
	      $("#infoPiochePa").css({right:posX2, top:posY});
	      break;
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	function pa2(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  switch (img) {
	    case '1':
	      $("#infoScroll").css({visibility:"hidden"});
	      break;
	    case '2':
	      $("#infoCasqPa").css({visibility:"hidden"});
	      break;
	    case '4':
	      $("#infoGappl").css({visibility:"hidden"});
	      break;
	    case '5':
	      $("#infoPlasPa").css({visibility:"hidden"});
	      break;
	    case '8':
	      $("#infoLegPa").css({visibility:"hidden"});
	      break;
	    case '9':
	      $("#infoSwordPa").css({visibility:"hidden"});
	      break;
	    case '10':
	      $("#infoBlt").css({visibility:"hidden"});
	      break;
	    case '11':
	      $("#infoBotPa").css({visibility:"hidden"});
	      break;
	    case '12':
	      $("#infoPiochePa").css({visibility:"hidden"});
	      break;
	        
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	
	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function ty1(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  posX2 = $(window).width() - posX;
	  switch (img) {
	    case '1':
	      $("#infoScrollR").css({visibility:"visible"});
	      $("#infoScrollR").css({right:posX2, top:posY});
	      break;
	    case '2':
	      ;
	      $("#infoCasqTy").css({visibility:"visible"});
	      $("#infoCasqTy").css({right:posX2, top:posY});
	      break;
	    case '3':
	      ;
	      $("#infoBowTy").css({visibility:"visible"});
	      $("#infoBowTy").css({right:posX2, top:posY});
	      break;
	    case '4':
	      ;
	      $("#infoGapplER").css({visibility:"visible"});
	      $("#infoGapplER").css({right:posX2, top:posY});
	      break;
	    case '5':
	      ;
	      $("#infoPlasTy").css({visibility:"visible"});
	      $("#infoPlasTy").css({right:posX2, top:posY});
	      break;
	    case '6':
	      $("#infoArrowR").css({visibility:"visible"});
	      $("#infoArrowR").css({right:posX2, top:posY});
	      break;
	    case '7':
	      ;
	      $("#infoPizza").css({visibility:"visible"});
	      $("#infoPizza").css({right:posX2, top:posY});
	      break;
	    case '8':
	      ;
	      $("#infoLegTy").css({visibility:"visible"});
	      $("#infoLegTy").css({right:posX2, top:posY});
	      break;
	    case '9':
	      ;
	      $("#infoSwordTy").css({visibility:"visible"});
	      $("#infoSwordTy").css({right:posX2, top:posY});
	      break;
	    case '10':
	      ;
	      $("#infoBlt").css({visibility:"visible"});
	      $("#infoBlt").css({right:posX2, top:posY});
	      break;
	    case '11':
	      ;
	      $("#infoBotTy").css({visibility:"visible"});
	      $("#infoBotTy").css({right:posX2, top:posY});
	      break;
	    case '12':
	      ;
	      $("#infoPiocheTy").css({visibility:"visible"});
	      $("#infoPiocheTy").css({right:posX2, top:posY});
	      break;
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	function ty2(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  switch (img) {
	    case '1':
	      $("#infoScrollR").css({visibility:"hidden"});
	      break;
	    case '2':
	      $("#infoCasqTy").css({visibility:"hidden"});
	      break;
	    case '3':
	      $("#infoBowTy").css({visibility:"hidden"});
	      break;
	    case '4':
	      $("#infoGapplER").css({visibility:"hidden"});
	      break;
	    case '5':
	      $("#infoPlasTy").css({visibility:"hidden"});
	      break;
	    case '6':
	      $("#infoArrowR").css({visibility:"hidden"});
	      break;
	    case '7':
	      $("#infoPizza").css({visibility:"hidden"});
	      break;
	    case '8':
	      $("#infoLegTy").css({visibility:"hidden"});
	      break;
	    case '9':
	      $("#infoSwordTy").css({visibility:"hidden"});
	      break;
	    case '10':
	      $("#infoBlt").css({visibility:"hidden"});
	      break;
	    case '11':
	      $("#infoBotTy").css({visibility:"hidden"});
	      break;
	    case '12':
	      $("#infoPiocheTy").css({visibility:"hidden"});
	      break;
	        
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function mo1(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  posX2 = $(window).width() - posX;
	  switch (img) {
	    case '1':
	      $("#infoScrollR").css({visibility:"visible"});
	      $("#infoScrollR").css({right:posX2, top:posY});
	      break;
	    case '2':
	      ;
	      $("#infoCasqMo").css({visibility:"visible"});
	      $("#infoCasqMo").css({right:posX2, top:posY});
	      break;
	    case '6':
	      ;
	      $("#infoAile").css({visibility:"visible"});
	      $("#infoAile").css({right:posX2, top:posY});
	      break;
	    case '4':
	      ;
	      $("#infoGapplER").css({visibility:"visible"});
	      $("#infoGapplER").css({right:posX2, top:posY});
	      break;
	    case '5':
	      ;
	      $("#infoPlasMo").css({visibility:"visible"});
	      $("#infoPlasMo").css({right:posX2, top:posY});
	      break;
	    case '7':
	      ;
	      $("#infoPizza").css({visibility:"visible"});
	      $("#infoPizza").css({right:posX2, top:posY});
	      break;
	    case '8':
	      ;
	      $("#infoLegMo").css({visibility:"visible"});
	      $("#infoLegMo").css({right:posX2, top:posY});
	      break;
	    case '9':
	      ;
	      $("#infoSwordMo").css({visibility:"visible"});
	      $("#infoSwordMo").css({right:posX2, top:posY});
	      break;
	    case '11':
	      ;
	      $("#infoBotMo").css({visibility:"visible"});
	      $("#infoBotMo").css({right:posX2, top:posY});
	      break;
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	function mo2(img) {
	  posX = event.clientX;
	  posY = event.clientY;
	  switch (img) {
	    case '1':
	      $("#infoScrollR").css({visibility:"hidden"});
	      break;
	    case '2':
	      $("#infoCasqMo").css({visibility:"hidden"});
	      break;
	    case '6':
	      $("#infoAile").css({visibility:"hidden"});
	      break;
	    case '4':
	      $("#infoGapplER").css({visibility:"hidden"});
	      break;
	    case '5':
	      $("#infoPlasMo").css({visibility:"hidden"});
	      break;
	    case '7':
	      $("#infoPizza").css({visibility:"hidden"});
	      break;
	    case '8':
	      $("#infoLegMo").css({visibility:"hidden"});
	      break;
	    case '9':
	      $("#infoSwordMo").css({visibility:"hidden"});
	      break;
	    case '11':
	      $("#infoBotMo").css({visibility:"hidden"});
	      break;
	        
	
	    default:
	      console.log(`Problème chargement image`);
	  }
	  
	}
	
	
	
	
	
	
}// END ELSE