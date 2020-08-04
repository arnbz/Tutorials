let notes = getSavedNotes();

const filter = {
  titleFilter: '',
  sortBy: 'byUpdated',
};

// All DOM elements
const newNoteBtn = document.querySelector('#new-note-btn');
const filterField = document.querySelector('#filter-field');
const sortBy = document.querySelector('#sort-notes');

// show notes
renderNotes();

// Typing in filter field filters notes
filterField.addEventListener('input', () => {
  filter.titleFilter = filterField.value;
  renderNotes();
});

// Changing the sort by field sorts the notes
sortBy.addEventListener('change', () => {
  filter.sortBy = sortBy.value;
  renderNotes();
});

// Clicking on new note button creates new note
newNoteBtn.addEventListener('click', () => {
  let timeStamp = moment().valueOf();
  let newNote = {
    id: uuidv4(),
    title: '',
    body: '',
    createdAt: timeStamp,
    updatedAt: timeStamp,
  };

  notes.push(newNote);
  saveNotes();

  // redirect to new page
  location.assign(`/edit.html#${newNote.id}`);
});

// Live update windows on data change
window.addEventListener('storage', (e) => {
  notes = JSON.parse(e.newValue);
  renderNotes();
});
