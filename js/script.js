'use strict';
(function () {
  let colorList = ['green','red','yellow','pink','green','blue','purple','yellow','orange','orange','pink','brown','purple','red','brown','blue'];
  let tileContainer = document.querySelector('.container');
  let tiles = tileContainer.querySelectorAll('.square');
  let tile1 = -1;
  
  var closeTile = function (id, color) {
    tiles[id].style.background = color;
	tile1 = -1;
  };
  
  function compareRandom(a, b) {
    return Math.random() - 0.5;
  }

  (function () {
	colorList.sort(compareRandom);
    tileContainer.addEventListener('click', function (evt){
	  if (evt.target !== evt.currentTarget) {
        if (tile1 < 0) {
	      tile1 = evt.target.id;
	      tiles[evt.target.id].style.background = colorList[evt.target.id];
        } else if (tile1 === evt.target.id){
		  setTimeout(closeTile, 100, tile1, '#C0C0C0');
	    } else if (colorList[tile1] === colorList[evt.target.id]){
		  tiles[evt.target.id].style.background = colorList[evt.target.id];
		  tiles[tile1].setAttribute('class', 'hidden');
		  tiles[evt.target.id].setAttribute('class', 'hidden');
		  tile1 = -1;
	    } else {
		  tiles[evt.target.id].style.background = colorList[evt.target.id];
		  setTimeout(closeTile, 300, tile1, '#C0C0C0');
		  setTimeout(closeTile, 300, evt.target.id, '#C0C0C0');
	    }
	  }
	});
  })();
})();

	




