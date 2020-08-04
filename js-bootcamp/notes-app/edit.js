let notes = getSavedNotes();
let noteToEdit = notes.find((note) => note.id === location.hash.substring(1));

if (noteToEdit === undefined) {
  location.assign('/index.html');
}

// DOM elements
const titleField = document.querySelector('#title-field');
const noteBody = document.querySelector('#note-body');
const removeBtn = document.querySelector('#remove-btn');
const lastEditedSection = document.querySelector('#last-edited-info');

// Populating note title and note body fields
titleField.value = noteToEdit.title;
noteBody.value = noteToEdit.body;

displayLastEditedTime();

// Changing title field auto saves note on the fly
titleField.addEventListener('input', () => {
  noteToEdit.title = titleField.value;
  noteToEdit.updatedAt = moment().valueOf();
  displayLastEditedTime();
  saveNotes();
});

// Changing note body field auto saves note on the fly
noteBody.addEventListener('input', () => {
  noteToEdit.body = noteBody.value;
  noteToEdit.updatedAt = moment().valueOf();
  displayLastEditedTime();
  saveNotes();
});

// Clicking remove button removes current note
removeBtn.addEventListener('click', () => {
  let index = notes.findIndex((note) => note.id === location.hash.substring(1));

  // delete the note if found
  if (index > -1) {
    notes.splice(index, 1);
  }

  saveNotes();
  location.assign('/index.html');
});

// Live updating other windows upon editing fields in current window
window.addEventListener('storage', (e) => {
  notes = JSON.parse(e.newValue);
  noteToEdit = notes.find((note) => note.id === location.hash.substring(1));
  // Populating note title and note body fields
  titleField.value = noteToEdit.title;
  noteBody.value = noteToEdit.body;
  displayLastEditedTime();
});
