const saveNotes = () => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

const getSavedNotes = () => {
  let notesJSON = localStorage.getItem('notes');
  // if notes exist in local storage, send notes
  // else send empty array
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  }
  return [];
};

const removeNote = (noteToDelete) => {
  let index = notes.findIndex((note) => note.id === noteToDelete.id);

  notes.splice(index, 1);
};

const createNoteDOM = (note) => {
  // create a elements for the note title
  let a = document.createElement('a');
  a.textContent = note.title.length > 0 ? note.title : 'Unnamed note';
  a.setAttribute('href', `/edit.html#${note.id}`);

  // create button for removing note
  let xBtn = document.createElement('button');
  xBtn.textContent = 'x';
  // Clicking on cross button removes corresponding note
  xBtn.addEventListener('click', () => {
    removeNote(note);
    saveNotes();
    renderNotes();
  });

  // create a div to order the dom elements
  let div = document.createElement('div');
  div.appendChild(a);
  div.appendChild(xBtn);

  return div;
};

const sortNotes = (notes, sortCriteria) => {
  if (sortCriteria === 'byUpdated') {
    notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortCriteria === 'byCreated') {
    notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    notes.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    });
  }
};

const renderNotes = () => {
  sortNotes(notes, filter.sortBy);
  const noteSection = document.querySelector('#note-section');

  let filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filter.titleFilter.toLowerCase())
  );

  // clear all currently shown notes
  noteSection.innerHTML = '';

  filteredNotes.forEach((note) => {
    let newNoteDiv = createNoteDOM(note);
    noteSection.appendChild(newNoteDiv);
  });
};
