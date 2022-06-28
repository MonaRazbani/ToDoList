class Note {
    constructor(text, date, status) {
        this.text = text;
        this.date = date;
        this.status = status;
    }

}

var input = document.querySelector('#noteInput');
var text = document.querySelector('#textOfnote');
var notes = document.querySelector('#notes');

input.addEventListener('submit', submitNewNote);
notes.addEventListener('click', TickeNote);





function submitNewNote(e) {
    var newNoteText = document.getElementById('noteInput').value;
    var newNoteElement = document.createElement('li');
    newNoteLiElement.className = 'list-group-item';

    var newNoteTextElement = document.createElement('<s>' + newNoteText + '</s>'); 
    var checkBox = document.createElement('checkbox');
    
    newNoteElement.appendChild(newNoteTextElement); 
    newNoteElement.appendChild(checkBox); 
    
 ;



}

function TickeNote(e) {

}