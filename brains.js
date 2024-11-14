const words = 'kinyarwanda officially known as ikinyarwanda is the national language of Rwanda long number word ni ururimi rw igihugu cy u Rwanda ni imvugo y ururimi rw u Rwanda Burundi ruvugwa no mu bice it is a dialect of the language that is also spoken in adjacent parts of the DRC and in Uganda aho iyo mvugo izwi where the dialect is known as Rufumbira or Urufumbira Kinyarwanda ni rusange mu baturage kavukire b u Rwanda Kinyarwanda is universal among the native population of Rwanda and kandi yumvikana na Kirundi ururimi rw igihugu rw abaturanyi b Uburundi kinyabwishya and kinyamulenge are mutually intelligible dialects in the north kivu ni imvugo yumvikana ivugwa mu ntara ya Kivu and South Kivu provinces of neighbouring DRC y Amajyaruguru na kivu y amajyepfo yo mu bihugu bituranye'.split(' ');
const wordsCount = words.length;


function randomWord() {
    const randomIndex = Math.ceil(Math.random() * wordsCount);
    return words[randomIndex];
  }
function formatWord(word){

    return `<div class="word">
      <span class="letter">
        ${word.split('').join('</span><span class="letter">')}
      </span>
    </div>` //here we are splitting the words into letters first, and second we join those split letters together by using </span><span>; and because the first letter has a closing tag, we have to open it above, and because the last letter has an opening tag, we must close it in the line below; and I put the spans on each letter, because I will use them to put colors on each letter 
}
  

function newGame() {
    document.getElementById('words').innerHTML = '';
    for (let i = 0; i < 200; i++) {
      document.getElementById('words').innerHTML += formatWord(randomWord()); //the formatWord is to return each word on its own line
    }
}
  
    newGame();