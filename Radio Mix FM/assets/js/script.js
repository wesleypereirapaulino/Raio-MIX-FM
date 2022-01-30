window.onload = function(){
	document.querySelector(".element_button_busca").addEventListener("click",function(){

		if (document.querySelector(".element_search").style.display == 'flex'){
			document.querySelector(".element_search").style.display = 'none';
		}
		else{
			document.querySelector(".element_search").style.display = 'flex';
			document.querySelector(".menumobile").style.display = 'none';
			document.querySelector(".menudesktop").style.display = 'none';
			document.querySelector(".mix").style.display = 'none';

		}
	});
	document.querySelector(".close").addEventListener("click",function(){

		if (document.querySelector(".element_search").style.display == 'flex'){
			document.querySelector(".element_search").style.display = 'none';
			document.querySelector(".menumobile").style.display = 'flex';
			document.querySelector(".mix").style.display = 'flex';

		}
		else{
			document.querySelector(".element_search").style.display = 'flex';
		}
	});
	document.querySelector(".element_menu").addEventListener("click",function(){

		if (document.querySelector(".menudesktop").style.display == 'flex'){
			document.querySelector(".menudesktop").style.display = 'none';
		}
		else{
			document.querySelector(".menudesktop").style.display = 'flex';
		}
	});
	document.querySelector(".closedmobile").addEventListener("click",function(){

		if (document.querySelector(".menudesktop").style.display == 'flex'){
			document.querySelector(".menudesktop").style.display = 'none';
		}
		
	});
};