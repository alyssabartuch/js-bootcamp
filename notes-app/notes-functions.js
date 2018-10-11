// read existing notes from local storage
const getSavedNotes = function() {
  const notesJSON = localStorage.getItem('notes');

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
}

// generate the DOM structure for a note
const generateNoteDOM = function(note) {
  const noteElement = document.createElement('div');
  const textElement = document.createElement('span');
  const button = document.createElement('button');

  // setup remove note button
  button.textContent = 'x';
  noteElement.appendChild(button);

  // setup the note title text
  if (note.title.length > 0) {
    textElement.textContent = note.title;
  } else {
    textElement.textContent = 'unnamed note';
  }

  noteElement.appendChild(textElement);


  return noteElement;
}


// render application notes
const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase( ))
  })

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(function(note) {
    const noteElement = generateNoteDOM(note);
    document.querySelector('#notes').appendChild(noteElement);
  })
}


// save the notes to local localStorage
const saveNotes = function(notes) {
   localStorage.setItem('notes', JSON.stringify(notes));
}
