const piano = Synth.createInstrument('piano');
 // plays C4 for 2s using the 'piano' sound profile


// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
const pianoLetter = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C'];
const pianoNum = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5];

// console.log(notes);

// this function gets the id of the keys array and store it on notes variable
keys.forEach(key => {
    notes.push(document.getElementById(key));
})


const pianoKeys = (letter, number, time) => {
    piano.play(letter, number, time);
}

// this function change the keys to light blue and calls pianoKeys function to play corresponding notes
const keyPlay = event => {
    event.target.style.backgroundColor = '#ADD8E6';

    let targetKey = event.target.id;

    console.log(targetKey);

    if(targetKey == 'c-key') {
        pianoKeys('C#', 4, 1);
    } else if(targetKey == 'c-sharp-key') {
        pianoKeys('C#', 4, 1)
    } else if(targetKey == 'd-key') {
        pianoKeys('D', 4, 1)
    } else if(targetKey == 'd-sharp-key') {
        pianoKeys('D#', 4, 1)
    } else if(targetKey == 'e-key') {
        pianoKeys('E', 4, 1)
    } else if(targetKey == 'f-key') {
        pianoKeys('F', 4, 1)
    } else if(targetKey == 'f-sharp-key') {
        pianoKeys('F#', 4, 1)
    } else if(targetKey == 'g-key') {
        pianoKeys('G', 4, 1)
    } else if(targetKey == 'g-sharp-key') {
        pianoKeys('G#', 4, 1)
    } else if(targetKey == 'a-key') {
        pianoKeys('A', 4, 1)
    } else if(targetKey == 'a-sharp-key') {
        pianoKeys('A#', 4, 1)
    } else if(targetKey == 'b-key') {
        pianoKeys('B', 4, 1)
    } else if(targetKey == 'high-c-key') {
        pianoKeys('C#', 5, 1)
    }
    
}

// separate to keyPlay function to avoid playing pianoKeys() function twice
const keyPlayMobile = event => {
    event.target.style.backgroundColor = '#ADD8E6';
}

// this function returns the keys to original color
const keyReturn = event => {
    event.target.style.backgroundColor = '';
}

// this function changes of keys when hold and return to its original color when released
const keyActive = note => {
    note.addEventListener('mousedown', keyPlay);
    note.addEventListener('mouseup', keyReturn);
    note.addEventListener('touchstart', keyPlayMobile);
}

// this statement calls keyActive function to notes array
// notes.forEach(note => keyActive(note));

notes.forEach(note => keyActive(note));

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// event handler shows nextTwo button and change notes
nextOne.onclick = () => {
    nextOne.hidden = true;
    nextTwo.hidden = false;
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
}

// event handler shows nextThree button and change notes and lyrics
nextTwo.onclick = () => {
    nextTwo.hidden = true;
    nextThree.hidden = false;
    lastLyric.style.display = 'inline-block';
    document.getElementById('word-five').innerHTML = 'DEAR';
    document.getElementById('word-six').innerHTML = 'FRI-';
    document.getElementById('letter-note-three').innerHTML = 'G';
    document.getElementById('letter-note-four').innerHTML = 'E';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('letter-note-six').innerHTML = 'B';

}

// event handler shows startOver button and change notes and lyrics
nextThree.onclick = () => {
    nextThree.hidden = true;
    startOver.hidden = false;
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('word-three').innerHTML = 'BIRTH-';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-one').innerHTML = 'F';
    document.getElementById('letter-note-two').innerHTML = 'F';
    document.getElementById('letter-note-three').innerHTML = 'E';
    document.getElementById('letter-note-four').innerHTML = 'C';
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
    lastLyric.style.display = 'none';

}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
    nextOne.hidden = false;
    startOver.hidden = true;
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('letter-note-one').innerHTML = 'G';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('letter-note-two').innerHTML = 'G';
    document.getElementById('word-three').innerHTML = 'BIRTH-';
    document.getElementById('letter-note-three').innerHTML = 'A';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('letter-note-four').innerHTML = 'G';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-six').innerHTML = 'B';
}