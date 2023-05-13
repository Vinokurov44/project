


//page1
function checkName(){
  let input = document.getElementById("name1").value;
  if (input=='abcd'){
    localStorage.setItem('input',input)
    return true;
  } 
  else{
    return false;
  }
}



function checkPassword(){
  let input2 = document.getElementById("password1").value;
  if (input2=='1234'){
    return true;
  } 
  else{
    return false;
  }
}

function next(event){
  const isPasswordOk = checkPassword();
  const isNameOkay = checkName(); 
  if (isNameOkay == true && isPasswordOk == true){
    return true;
  }

  if (isNameOkay == false){
    document.getElementById("error1").innerHTML = "User Name Incorrect";
    event.preventDefault();
    return false;
  } 

  else{
    document.getElementById("error1").innerHTML = "";
  }

  if (isPasswordOk == false){
    document.getElementById("error2").innerHTML = "Password Incorrect";
    event.preventDefault();
    return false;
  }

  else{
    document.getElementById("error2").innerHTML =  "";
  }
}





//page3




const LEVELS = {
  easy: [ 
    [
     "625 3419 38 9 1256179 6 3487 62483 94 81 35679137 6  44 356 98 6198 27455 24 7 31",
     "625834197384971256179265348756248319428193567913756824473561982619832745582497631",
    ],
    [
     " 98 675 22  59374847 812639 467 5923359462 8728 3 15 4634  1859921 356 47 8 46 2 ",
     "398467512216593748475812639146785923359462187287391564634271859921835674758946123",
    ],
    [
     "173 864528 2 5 6176 521 93 8 1 6532 2759341863 982 7 4 97 142 836 7285 948259 1 6",
     "173986452892453617645217938841765329275934186369821754597614238361728549482593176",
    ],
    [
      "9 5 1837 6 15749828 729  61749 52163 2 4 3 9 13597 48228  915 63592671 8 1435 7 9",
      "925618374631574982847293561749852163826413795135976482287491536359267148614358729",
     ],
     [
      "7 358642182134  5964 2193 861  42957 7 916 8 93458  628 5239 7419  6 5327234 18 6",
      "793586421821347659645219378618342957275916483934587162865239174194768532723451896",
     ]

  ],
  medium: [
    [
     "53 6 2 98 7 195 4  1 3   6 8 94  7   6 8 392   37 1  6 6 2   4  3 419 8 28 6 5 79",
     "534672198678195342912348567859426713761853924423791856961287345537419286284635179",
    ],
    [
     " 172  69   3 1 75  598 7 3  7  48  9984  7 3  12 93   98  75  6  5 1 689  4 9  3  ",
     "817235694263419758459867231376148529984527631512693784982753461375146892146928375",
      
    ],
    [
     "   5 29 4 57 9   8 3 4 8 1782 65 7  74  89 16 5   4 8 39 4 7 8  7  6 1 4 41    95",
     "168572934457391628932468517829651743743289516156374289395417286872965134641823795",
    ],
  ],
  hard: [
    [
     "   7  2  8       73   2       6  1  7    8  66    2  83       1   9    4    8   3",
     "469713258825469317317825946982637145731548296654192738374526891182973654569481273",
    ],
    [
     "    8 7  74  2       4  6    4 7      6  2    3   6  8    5     8   9 3     8  9 ",
     "562981743743625198819473652294875136876312954135946728329457618481269537567381294",
    ],
    [
     "  6    7 1   5  2   5  7 1  1  3      6    1         4  7  9   3 4    9   9  8   ",
     "896142573147653928235987416715234968436879215892651374657329481384761592129548763",
    ],
    [
     " 5   2       7        3  28     6 2 95    6     2  75     7   8    45  9  6      ",
     "453892167826571493197634528714586329952137684863249751935671248218345769476982315",
    ],
    [
      " 9  8        4 6    5    7   83    7  5     3     71   6    1    47 8       5  9 ",
      "793586421821347659645219378618342957275916483934587162865239174194768532723451896",
    ]
  ],
};

// take the level from the url
const level = getLevel();
console.log("level", level);



const allOptions = LEVELS[level].length;
console.log("allOptions", allOptions);

const currentLevelIndex = Math.floor(Math.random() * allOptions);
const currentLevel = LEVELS[level][currentLevelIndex];
console.log("currentLevel", currentLevel);

// take the unsolved element from the array of the level
const unsolved = currentLevel[0];
const solved = currentLevel[1];




drawBoard();
function drawBoard() {
  const cells = document.querySelectorAll(".cell input");
  cells.forEach(function(cell, cellIndex) {
    const sudokuValue = unsolved[cellIndex];
    if (sudokuValue !== " ") {
      cell.value = sudokuValue;
      cell.disabled = true;
    } else {
      cell.addEventListener("input", function(event) {
        const inputValue = event.target.value;
        if (inputValue.length > 1) {
          event.target.value = inputValue.charAt(0);
        }
        else if(!/^\d*$/.test(inputValue)){
          event.preventDefault();
          event.target.value = "";
        }
      });
    }
  });
}



function getLevel(){
  const level = window.location.search.split("=")[1];
  return level;
}

function checkWin(event){
  const cells = document.querySelectorAll(".cell input");
  let win = true;
  for (let cellIndex = 0; cellIndex < cells.length; cellIndex++){
    const cell = cells[cellIndex];
    const correctValue = solved[cellIndex];
    if (cell.value !== correctValue){
      win = false;
      break;
    }
  }

  if (win){
    alert("You win!");
  } 

  else{
    alert("Wrong answer Game over!");
  }
}

function clearBord(){
    const cells = document.querySelectorAll(".cell input");
    cells.forEach(function (cell, cellIndex){
      const sudokuValue = unsolved[cellIndex];
      if(sudokuValue == ' ')
        cell.value = '';
        else
          cell.value = sudokuValue;
    }
   )
  }

  const myFunc=()=>{
  if(level==='easy'){
  return 5
  }
  if(level=='medium'){
    return 7
  }
  if(level=='hard'){
    return 10
  }
}
console.log(myFunc())
let start=myFunc()
let time = start * 60;
const countDown = document.getElementById('p10');


function updateDown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds=seconds<10? '0'+seconds:seconds

  countDown.innerHTML = `${minutes}:${seconds}`;
  if (time == -1) {
    countDown.innerHTML=`0:00`
    alert('Your time is over');
    window.location.href='index2.html'
  } else {
    time--;
    setTimeout(updateDown, 1000); // Call updateDown again after 1 second
  }
}

updateDown();











