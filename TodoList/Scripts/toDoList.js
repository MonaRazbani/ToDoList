class Note {
    constructor(text, date, status) {
        this.text = text;
        this.date = date;
        this.status = status;
    }

}

var input = document.getElementById('submit');
console.log(input);

var tick = document.getElementById('checkBox');
console.log(notes);


input.addEventListener('click', submitNewNote);
tick.addEventListener('click', TickeNote);





function submitNewNote(e) {

    const newNoteText = document.getElementById('noteInput').value;

    /** @type {HTMLLIElement} */
    var newNoteElement = document.createElement('li');

    newNoteLiElement.classLi = 'list-group-item';


    var newNoteTextElement = document.createElement('<s>' + newNoteText + '</s>');
    var checkBox = document.createElement('checkbox');

    newNoteElement.appendChild(newNoteTextElement);
    newNoteElement.appendChild(checkBox);




}

function TickeNote(e) {


}