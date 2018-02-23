'use strict';
(function () {
  let colorList = ['green','red','yellow','pink','green','blue','purple','yellow','orange','orange','pink','brown','purple','red','brown','blue'];
  let tileContainer = document.querySelector('.container');
  let tiles = tileContainer.querySelectorAll('.square');
  let winMsg = document.querySelector('.win-msg');
  let tile1 = -1, tile2 = -1;
  let totalRounds = 0;
  let matchingPair = 0;

  let gameOver = function () {
    winMsg.removeAttribute('style');
    winMsg.querySelector('.content p').textContent = 'Total rounds: ' + totalRounds;
    winMsg.querySelector('.out-circle').addEventListener('click', function () {
      window.location.reload();
    })
  };

  let openTile = function (id) {
    tiles[id].style.background = colorList[id];
    tiles[id].setAttribute('class', 'square open');
  };

  let closeTiles = function (color) {
    tiles[tile1].style.background = color;
    tiles[tile2].style.background = color;
    tiles[tile1].setAttribute('class', 'square');
    tiles[tile2].setAttribute('class', 'square');
    tile1 = -1;
    tile2 = -1;
  };

  let checkPair = function () {
    totalRounds++;
    if (colorList[tile1] === colorList[tile2]) {
      tile1 = -1;
      tile2 = -1;
      matchingPair++;
      if (matchingPair === 8) {
        gameOver();
      }
    } else {
      setTimeout(closeTiles, 300, '#2F4F4F');
    }
  };

  function compareRandom(a, b) {
    return Math.random() - 0.5;
  };

  (function () {
    colorList.sort(compareRandom);
    tileContainer.addEventListener('click', function (evt) {
      if (evt.target !== evt.currentTarget && evt.target.className !== 'square open') {
        if (tile1 < 0) {
          tile1 = evt.target.id;
          openTile(tile1);
        } else if (tile2 < 0) {
          tile2 = evt.target.id;
          openTile(tile2);
          checkPair();
        }
      }
    });
  })();
})();
