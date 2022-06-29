class Note {
    constructor(text, date, status) {
        this.text = text;
        this.date = date;
        this.status = status;
    }

}

/** @type {HTMLInputElement} */
const submit = document.getElementById('submit')

// get all checkboxes 
const checkboxes = document.querySelectorAll('input[name="checkbox"]');
for (checkbox of checkboxes) {

checkbox.addEventListener('click', checkedNote);

}
console.log(checkboxes)

//get input 
const input = document.getElementById('noteInput');
//get all note ; 
const notesElement = document.getElementById('notes')

//add event listener
submit.addEventListener('click', submitNewNote);
checkbox.addEventListener('click', checkedNote);


function submitNewNote(e) {

 
    /** @type {HTMLLIElement} */
    const noteText = input.value;

    //li
    let liNoteElement = document.createElement('li');
    liNoteElement.classList.add("list-group-item");

    //label:
    let labelNoteElement = document.createElement('label');
    //checkbox 
    let checkBoxNoteElement = document.createElement('input');
    checkBoxNoteElement.type = 'checkbox';
    

    labelNoteElement.textContent = noteText;
    checkBoxNoteElement.addEventListener('click', checkedNote)

    labelNoteElement.appendChild(checkBoxNoteElement)
    liNoteElement.appendChild(labelNoteElement);
    notesElement.appendChild(liNoteElement);

}

function checkedNote(e) {

    let checked = e.target;
    let liCheckedNote = checked.parentElement;
    console.log(liCheckedNote)
    const text = liCheckedNote.textContent;
    liCheckedNote.innerHTML = '<s>' + text + '</s>';
    
    

}