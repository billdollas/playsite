// function show() {
//   var box = document.getElementsByClassName('boxOne');
//   var position = 0;
//   var int = setInterval (frame, 5);

//   function frame(){
//     if (position === 700) {
//       clearInterval(int);
//     }
//     else {
//       position++;
//       // box.style.marginTop = position + 'px'
//       box.style.backgroundColor = 'blue'

//     }
//   }
//   show();
// }

// function cha() {
//   const box = document.getElementById('boxie');
//   boxie.style.backgroundColor = ('black');
//   console.log('hello')
// }

// function cha changes color


function slide() {
  const hey = document.getElementById('miniBox');
  const pos = 0;
  const int = setInterval (pic, 5);

  function pic(){
    if (pos == 700) {
      clearInterval(int);
      console.log('box one is moving')
    }
    else {
      hey.style.marginTop = pos + '100px';
      console.log('box one is doing something')
    }
  }
}

// slide function shows what is contained in box one slide out

function show() {
  const bae = document.getElementById('babyOne');
  const mini = document.getElementById('babyTwo');
  const miniMe = document.getElementById('babyThree');
  const seperate = document.getElementById('babyCont');
  const position = 0;
  const int = setInterval (frame, 2);

  function frame(){
    if (position == 700) {
      clearInterval(int);
      console.log('not here')
    }
    else {
      // position++;
      bae.style.marginTop = position + '200px';
      mini.style.marginTop = position + '200px';
      miniMe.style.marginTop = position + '200px';
      seperate.style.display = ('flex');
      seperate.style.justifyContent = ('space-between');


      console.log('here')
    }
  }
}

function disa() {
  const innerBox = document.getElementById('babyCont');
  innerBox.style.display = ('none');
  console.log('really disappearing bitch')
}

function appear() {
  const inside = document.getElementById('boxCont');
  inside.style.display = ('block');
  console.log('showing box two contents')
}

// the 'show' function shows whats contained in box two slide out

function down() {
  const what = document.getElementById('tinyBox');
  const where = 0;
  const int = setInterval ( picture, 5);

  function picture() {
    if ( where == 700) {
      clearInterval(int);
    }
    else {
      what.style.marginTop = where + '100px';
      console.log('box three bout to slide')
    }
  }
}

function here() {
  const hidden = document.getElementById('tinyCont');
  hidden.style.display = ('block');
  console.log('showing box three contents')
}
// the down function makes whats inside of box 3 slide out

function tata() {
  const babies = document.getElementById('tinyCont');
  babies.style.display =('none');
  console.log('disappearing box three contents')
}

function hello() {
  const innerBox = document.getElementById('babyCont');
  innerBox.style.display = ('block');
  console.log('showing box one content')
}

//hello function makes the 3 boxes that are hidden appear in box two


// appear function makes the 3 boxes that are hidden appear box one



function bye() {
  const minion = document.getElementById('boxCont');
  minion.style.display = ('none');
  console.log('disappearing box two contents')
}

// bye function makes box ones minions disappear


//disa function makes box twos minions disappear



// tata disappears box three contents




// cha();

//gone function apparently shows 3 boxes whilst  the show function
// just has three boxes that move down

// function box() {
//   const boxie = document.createElement('div');
//   boxie.setAttribute('class', 'leBox');
// }
