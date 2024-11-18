const words = 'kinyarwanda officially known as ikinyarwanda is the national language of Rwanda long number word ni ururimi igihugu u Rwanda ni imvugo ururimi Rwanda Burundi ruvugwa no mu bice it is a dialect of the language that is also spoken in adjacent parts of the DRC and in Uganda aho iyo mvugo izwi where the dialect is known as Rufumbira or Urufumbira Kinyarwanda ni rusange mu baturage kavukire Rwanda Kinyarwanda is universal among the native population of Rwanda and kandi yumvikana na Kirundi ururimi igihugu abaturanyi Uburundi kinyabwishya and kinyamulenge are mutually intelligible dialects in the north kivu ni imvugo yumvikana ivugwa mu ntara ya Kivu and South Kivu provinces of neighbouring DRC Amajyaruguru na kivu amajyepfo yo mu bihugu bituranye'.split(' '); //Let's first add/import random words and save the words into a string. and then split each word by a space
const wordsCount = words.length;

function addClass(el,name){
  el.className += ' '+name;
}
function removeClass(el,name){
  el.className = el.className.replace(name,'');
}


function randomWord() {                                                   // fourth, let's create a function 
    const randomIndex = Math.ceil(Math.random() * wordsCount);            //fifth, that function should return a random word let's get a random index
    return words[randomIndex - 1];                                            //sixth, here we are saying 
  }
function formatWord(word){                                                //here we are splitting the words into letters first, and second we join those split letters together by using </span><span>; and because the first letter has a closing tag, we have to open it above, and because the last letter has an opening tag, we must close it in the line below; and I put the spans on each letter, because I will use them to put colors on each letter

    return `<div class="word">                                           
      <span class="letter">${word.split('').join('</span><span class="letter">')}</span>
    </div>`                                                                
}
  

function newGame() {                                                      //secondly after adding random words, let's create a function and call it newGame that will initiate a new game, and inside this function, we will create a new game by getting some random words and put them inside the div game; and we start by resetting the div game empty in case there's something inside the div
    document.getElementById('words').innerHTML = '';
    for (let i = 0; i < 200; i++) {                                       //thirdly after creating the function and resetting the div game, let's create a for loop to generate random words
      document.getElementById('words').innerHTML += formatWord(randomWord()); //7) here we are telling the program to get the word but every word should be added and not replace the content. the formatWord is to return each word on its own line
    }
    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter', 'current'));
}
document.getElementById('game').addEventListener('keyup', ev => {
  const key = ev.key;
  const currentWord = document.querySelector('.word.current');
  const currentLetter = document.querySelector('.letter.current');
  const expected = currentLetter.innerHTML || ' ';
  const isLetter = key.length === 1 && key !== ' ';
  const isSpace = key === ' ';

  console.log({key,expected});

  if(isLetter){
    if(currentLetter){
      addClass(currentLetter, key === expected ? 'correct' : 'incorrect');
      removeClass(currentLetter, 'current');
      if(currentLetter.nextSibling){
        addClass(currentLetter.nextSibling, 'current');
      }      
    } else {
      const incorrectLetter = document.createElement('span');
      incorrectLetter.innerHTML = key;
      incorrectLetter.className = 'letter incorrect extra';
      currentWord.appendChild(incorrectLetter);
    }
  }


  if(isSpace){
    if(expected !== ' '){
      const lettersToInvalidate = [...document.querySelectorAll ('word.current .letter:not(.correct)')];
      lettersToInvalidate.forEach(letter => {
        addClass(letter, 'incorrect');
      });
    }
    removeClass(currentWord, 'current');
    addClass(currentWord.nextSibling, 'current');
    if(currentLetter){
      removeClass(currentLetter, 'current');
    }
    addClass(currentWord.nextSibling.firstChild, 'current');
  }

  // move cursor
  const nextLetter = document.querySelector('.letter.current');
  if(nextLetter){
    cursor.style.top = nextLetter.getBoundingClientRect().top + 2 + 'px';
    cursor.style.left = nextLetter.getBoundingClientRect().left + 'px';
    
  }
})
  
    newGame();