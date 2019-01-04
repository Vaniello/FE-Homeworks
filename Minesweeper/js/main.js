let cellsArea= [];
let areaSize = 10;
let bombArray =[];
let bombsNumber;

document.querySelector('.btn_start').addEventListener('click', function() {
  let inputNumBombs = document.querySelectorAll('[name="bombNumber"]');
  for (let i = 0; i < inputNumBombs.length; i++) {
    if(inputNumBombs[i].checked){
      bombsNumber = +inputNumBombs[i].value;
    }
  }
  document.querySelector('.start').classList.add('disable');
  document.querySelector('.area').classList.remove('disable');
  playGame();

})

let playGame = function () {

  for (let i = 0; i < areaSize; i++) {
    for (let j = 0; j < areaSize; j++) {
      cellsArea.push([i,j]); 
    }
  }

  let templateArea = '';
  cellsArea.forEach(elem => {
    templateArea += `<div class="cell" coords="[${elem[0]}, ${elem[1]}]"></div>`;
  });
  document.querySelector('.area').innerHTML=templateArea;

  let randomCoord = function () {
    let posX = Math.floor(Math.random()*10);
    let posY = Math.floor(Math.random()*10);
    return [posX, posY];
  }

  let isArrayEqual = function (arr1, arr2) {
    if(arr1[0] === arr2[0] && arr1[1] === arr2[1]) {
      return true;
    }
    return false;
  }

  let compareCells = function (coords, arrForCompare) {
    for (let b = 0; b < arrForCompare.length; b++) {
      if (isArrayEqual(coords, arrForCompare[b])) {
        return true;
      }
    }
    return false;
  }

  //create bombs array without dublicates
  outer: for (let i = 0; i < bombsNumber; i++) {
  let coords = randomCoord();  
  if (compareCells(coords, bombArray) === true) {
      i--;
      continue outer;
    }
    bombArray.push(coords);
  };

  //number of near bombs around the selected cell
  let nearBombs = function(coordX, coordY) {
  let quantityNearBombs = 0;
    for (let i = coordX-1; i < coordX+2; i++) {
      for (let j = coordY-1; j < coordY+2; j++) {
        bombArray.forEach(elem => {       
          if (elem[0] === i && elem[1] === j){
            ++quantityNearBombs;
          }
        })
      } 
    }
    return quantityNearBombs;
  }

  let testCells = []; // cells for test
  let testedCells = []; // already tested cells

  //create area of checked cells when click on cell with 0 nears bombs
  let testArea = function (arrForTest) {  
    let forTestOutput = [];
    arrForTest.forEach( elem => {          
      for(let i = elem[0] - 1; i < elem[0] + 2; i++) {
        for(let j = elem[1] - 1; j < elem[1] + 2; j++) {
          if (0 <= i && i <= 9 && 0 <= j && j <= 9 && compareCells([i,j], testedCells) === false && compareCells([i,j], bombArray) === false) {
            if (nearBombs(i, j)!== 0) {
              testedCells.push([i, j]);
              document.querySelector(`[coords="[${i}, ${j}]"]`).innerHTML = nearBombs(i, j);
              document.querySelector(`[coords="[${i}, ${j}]"]`).classList.add('verified');
            } else {
              testedCells.push([i,j]);
              forTestOutput.push([i,j]);
              document.querySelector(`[coords="[${i}, ${j}]"]`).classList.add('verified');
            }
          }
        }
      }
    }) 
    return forTestOutput
  }

  document.querySelector('.area').addEventListener('click', function() {
    let target = event.target;
    let coordinates = eval(target.getAttribute('coords'));
    testCells.push (coordinates);

    if (compareCells(coordinates, bombArray) === true) {
      bombArray.forEach( elem => {
        document.querySelector(`[coords="[${elem[0]}, ${elem[1]}]"]`).classList.add('mark');
      });
      document.querySelector('.result').classList.add('result', 'result_lose');
      document.querySelector('.result').innerHTML = `
      YOU DIED
      <br>
      <button type="reset" class="btn btn_lose" onclick = "location.reload(true)">play again</button>`; 
    } else if (nearBombs(...coordinates)!== 0){
      testedCells.push(coordinates);
      document.querySelector(`[coords="${target.getAttribute('coords')}"]`).innerHTML = nearBombs(...coordinates);
      document.querySelector(`[coords="${target.getAttribute('coords')}"]`).classList.add('verified');
    } else {
      while (testCells.length !== 0) {
        testCells = testArea(testCells);
      }
    }

    if ((cellsArea.length - testedCells.length) === bombsNumber) {    
      bombArray.forEach( elem => {
        document.querySelector(`[coords="[${elem[0]}, ${elem[1]}]"]`).classList.add('mark')
      });
      document.querySelector('.result').classList.add('result_win');
      document.querySelector('.result').innerHTML = `
      CONGRATS! YOU WIN!!!
      <br>
      <button type="reset" class="btn btn_win" onclick = "location.reload(true)">play again</button>`;
    }
  });

  let compareFlagCells = function(flag, bomb) {
    let sameCells = 0;
    outer: for (let i = 0; i < flag.length; i++) {
      for (let j = 0; j < bomb.length; j++) {
        if(isArrayEqual(flagCells[i], bombArray[j])){        
          sameCells++;
          continue outer
        }
      }
    }
    return sameCells;
  }

  let flagCells = [];
  document.querySelector('.area').oncontextmenu = function() {
    let target = event.target;
    let coordinates = eval(target.getAttribute('coords'));
    if(compareCells(coordinates, testedCells)!== true){
      if (document.querySelector(`[coords="${target.getAttribute('coords')}"]`).classList.contains('flag')) {
        for (let i = 0; i < flagCells.length; i++) {
          if(isArrayEqual(flagCells[i], coordinates)) {
            document.querySelector(`[coords="${target.getAttribute('coords')}"]`).classList.remove('flag')          
            flagCells.splice(i,1);
          };        
        }
      } else {
        document.querySelector(`[coords="${target.getAttribute('coords')}"]`).classList.add('flag');
        flagCells.push(coordinates);
      }
    }
    
    if(flagCells.length === bombsNumber && compareFlagCells(flagCells, bombArray) === bombsNumber) {
      document.querySelector('.result').classList.add('result_win');
      document.querySelector('.result').innerHTML = `
      CONGRATS! YOU WIN!!!
      <br>
      <button type="reset" class="btn btn_win" onclick = "location.reload(true)">play again</button>`   
    }
    return false
  }
}
