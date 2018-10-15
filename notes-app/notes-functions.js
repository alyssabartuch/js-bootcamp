// read existing notes from local storage
const getSavedNotes = () => {
   const notesJSON = localStorage.getItem('notes');

   if (notesJSON !== null) {
      return JSON.parse(notesJSON);
   } else {
      return [];
   }
}

// save the notes to local localStorage
const saveNotes = (notes) => {
   localStorage.setItem('notes', JSON.stringify(notes));
}

// remove a note from the list
const removeNote = (id) => {
   const noteIndex = notes.findIndex((note) => note.id === id);

   if (noteIndex > -1) {
      notes.splice(noteIndex, 1);
   }
}

// generate the DOM structure for a note
const generateNoteDOM = (note) => {
   const noteElement = document.createElement('div');
   const textElement = document.createElement('a');
   const button = document.createElement('button');

   // setup remove note button
   button.textContent = 'x';
   noteElement.appendChild(button);
   button.addEventListener('click', (e) => {
      removeNote(note.id);
      saveNotes(notes);
      renderNotes(notes, filters);
   })

   // setup the note title text
   if (note.title.length > 0) {
      textElement.textContent = note.title;
   } else {
      textElement.textContent = 'unnamed note';
   }
   textElement.setAttribute('href', `/edit.html#${note.id}`);
   noteElement.appendChild(textElement);


   return noteElement;
}

// sort your notes by 1 of 3 ways
const sortNotes = (notes, sortBy) => {
   if (sortBy === 'byEdited') {
      return notes.sort((a, b) => {
         if (a.updatedAt > b.updatedAt) {
            return -1
         } else if (a.updatedAt < b.updatedAt) {
            return 1
         } else {
            return 0
         }
      })
   } else if (sortBy === 'byCreated') {
      return notes.sort((a, b) => {
         if (a.createdAt > b.createdAt) {
            return -1
         } else if (a.createdAt < b.createdAt) {
            return 1
         } else {
            return 0
         }
      })
   } else if (sortBy === 'alphabetical') {
      return notes.sort((a, b) => {
         if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
         } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
         } else {
            return 0
         }
      })
   } else {
      return notes;
   }
}


// render application notes
const renderNotes = (notes, filters) => {
   notes = sortNotes(notes, filters.sortBy);
   const filteredNotes = notes.filter(function(note) {
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase( ))
   })

   document.querySelector('#notes').innerHTML = '';

   filteredNotes.forEach((note) => {
      const noteElement = generateNoteDOM(note);
      document.querySelector('#notes').appendChild(noteElement);
   })
}

// generate laste dited msg
const generateLastEdited = (timestamp) => `last edited ${moment(timestamp).fromNow()}`;
