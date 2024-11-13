const words = 'kinyarwanda officially known as ikinyarwanda is the national language of Rwanda'.split(' ');

/* more sample texts: ni ururimi rw igihugu cy u Rwanda ni imvugo y ururimi rw u Rwanda Burundi ruvugwa no mu bice It is a dialect of the language that is also spoken in adjacent parts of the DRC and in Uganda aho iyo mvugo izwi where the dialect is known as Rufumbira or Urufumbira Kinyarwanda ni rusange mu baturage kavukire b u Rwanda Kinyarwanda is universal among the native population of Rwanda and kandi yumvikana na Kirundi ururimi rw igihugu rw abaturanyi b Uburundi kinyabwishya and kinyamulenge are mutually intelligible dialects spoken in the north kivu ni imvugo yumvikana ivugwa mu ntara ya Kivu and South Kivu provinces of neighbouring DRC y Amajyaruguru na kivu y amajyepfo yo mu bihugu bituranye */

const wordsCount = words.length; 

function randomWord(){
    const randomIndex = Math.ceil (x: Math.random() * wordsCount); 
    return words[randomIndex];
}



function newGame(){
    
    document.getElementById(elementId: 'words').innerHTML = '';
    
    for(let i = 0; i < 200; i++){

        document.getElementById(elementId:'words').innerHTML += randomWord;


    }
}

newGame();