class Note {
    constructor(userId, id, title, completed) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

}

const allNotes = JSON.parse(`[{"userId":1,"id":1,"title":"delectus aut autem","completed":false},{"userId":1,"id":2,"title":"quis ut nam facilis et officia qui","completed":false},{"userId":1,"id":3,"title":"fugiat veniam minus","completed":false},{"userId":1,"id":4,"title":"et porro tempora","completed":true},{"userId":1,"id":5,"title":"laboriosam mollitia et enim quasi adipisci quia provident illum","completed":false},{"userId":1,"id":6,"title":"qui ullam ratione quibusdam voluptatem quia omnis","completed":false},{"userId":1,"id":7,"title":"illo expedita consequatur quia in","completed":false},{"userId":1,"id":8,"title":"quo adipisci enim quam ut ab","completed":true},{"userId":1,"id":9,"title":"molestiae perspiciatis ipsa","completed":false},{"userId":1,"id":10,"title":"illo est ratione doloremque quia maiores aut","completed":true},{"userId":1,"id":11,"title":"vero rerum temporibus dolor","completed":true},{"userId":1,"id":12,"title":"ipsa repellendus fugit nisi","completed":true},{"userId":1,"id":13,"title":"et doloremque nulla","completed":false},{"userId":1,"id":14,"title":"repellendus sunt dolores architecto voluptatum","completed":true},{"userId":1,"id":15,"title":"ab voluptatum amet voluptas","completed":true},{"userId":1,"id":16,"title":"accusamus eos facilis sint et aut voluptatem","completed":true},{"userId":1,"id":17,"title":"quo laboriosam deleniti aut qui","completed":true},{"userId":1,"id":18,"title":"dolorum est consequatur ea mollitia in culpa","completed":false},{"userId":1,"id":19,"title":"molestiae ipsa aut voluptatibus pariatur dolor nihil","completed":true},{"userId":1,"id":20,"title":"ullam nobis libero sapiente ad optio sint","completed":true},{"userId":2,"id":21,"title":"suscipit repellat esse quibusdam voluptatem incidunt","completed":false},{"userId":2,"id":22,"title":"distinctio vitae autem nihil ut molestias quo","completed":true},{"userId":2,"id":23,"title":"et itaque necessitatibus maxime molestiae qui quas velit","completed":false},{"userId":2,"id":24,"title":"adipisci non ad dicta qui amet quaerat doloribus ea","completed":false},{"userId":2,"id":25,"title":"voluptas quo tenetur perspiciatis explicabo natus","completed":true}]`);

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
checkbox.addEventListener('checked', checkedNote);


function submitNewNote(e) {


    // /** @type {HTMLLIElement} */


    // create note object userId, id, title, completed
    newNote = new Note(0, allNotes.length, input.value, false);

    //add to list 
    notes.push(newNote);

    ////li
    //let liNoteElement = document.createElement('li');
    //liNoteElement.classList.add("list-group-item");

    ////label:
    //let labelNoteElement = document.createElement('label');
    ////checkbox 
    //let checkBoxNoteElement = document.createElement('input');
    //checkBoxNoteElement.type = 'checkbox';


    //labelNoteElement.textContent = ;
    //checkBoxNoteElement.addEventListener('click', checkedNote)

    //labelNoteElement.appendChild(checkBoxNoteElement)
    //liNoteElement.appendChild(labelNoteElement);
    //notesElement.appendChild(liNoteElement);

}

function viewNote(notes) {
    for (note of notes) {

        //checkbox 
        let checkboxNoteElement = document.createElement('input');
        checkboxNoteElement.type = 'checkbox';
        checkboxNoteElement.checked = note.completed;

        //add event listener 
        checkboxNoteElement.addEventListener('click', checkedNote);
        //note 

        //li
        let liNoteElement = document.createElement('li');
        liNoteElement.classList.add("list-group-item");
        //label:
        let labelNoteElement = document.createElement('label');
        // html 
        if (!note.completed) {

            const uncompleteNote = document.createElement('span');
            uncompleteNote.textContent = note.title;
            labelNoteElement.appendChild(checkboxNoteElement);
            labelNoteElement.appendChild(uncompleteNote);

        }
        else {
            const doneNote = document.createElement('s');
            doneNote.textContent = note.title;
            labelNoteElement.appendChild(checkboxNoteElement);
            labelNoteElement.appendChild(doneNote);
            
        }
            liNoteElement.appendChild(labelNoteElement);
            notesElement.appendChild(liNoteElement);
       
    }
}

function checkedNote(e) {

    let checked = e.target;

    if (checked.checked) {
        let liCheckedNote = checked.parentElement;
        //delete current text Element
        const currentTextElement = checked.nextElementSibling;
        const text = currentTextElement.innerText;
        liCheckedNote.removeChild(currentTextElement);
        // create new note Style 
        const doneNote = document.createElement('s');
        doneNote.innerText = text;
        liCheckedNote.appendChild(doneNote);
    }
    else {
        let liCheckedNote = checked.parentElement;
        //delete current text Element
        const currentTextElement = checked.nextElementSibling;
        const text = currentTextElement.innerText;
        liCheckedNote.removeChild(currentTextElement);

        //create new note Style 
        const uncompleteNote = document.createElement('span');
        uncompleteNote.innerText = text;
        liCheckedNote.appendChild(uncompleteNote);
    }

}

viewNote(allNotes)