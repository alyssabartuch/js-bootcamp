'use strict'

// read existing notes from local storage
const getSavedNotes = () => {
   const notesJSON = localStorage.getItem('notes');

   try {
      return notesJSON ? JSON.parse(notesJSON) : [];
   } catch (e) {
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
   const noteElement = document.createElement('a');
   const textElement = document.createElement('p');
   const statusElement = document.createElement('p');


   // setup the note title text
   if (note.title.length > 0) {
      textElement.textContent = note.title;
   } else {
      textElement.textContent = 'unnamed note';
   }
   textElement.classList.add('list-item__title');
   noteElement.appendChild(textElement);

   // setup link
   noteElement.setAttribute('href', `/edit.html#${note.id}`);
   noteElement.classList.add('list-item');

   // setup status message
   statusElement.textContent = generateLastEdited(note.updatedAt);
   statusElement.classList.add('list-item__subtitle')
   noteElement.appendChild(statusElement);


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
   const notesEl = document.querySelector('#notes');

   notes = sortNotes(notes, filters.sortBy);
   const filteredNotes = notes.filter(function(note) {
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase( ))
   })


   notesEl.innerHTML = '';

   if (filteredNotes.length > 0) {
      filteredNotes.forEach((note) => {
         const noteElement = generateNoteDOM(note);
         notesEl.appendChild(noteElement);
      });

   } else {
      const emptyMessage = document.createElement('p');
      emptyMessage.textContent = 'No notes to show';
      emptyMessage.classList.add('empty-message');
      notesEl.appendChild(emptyMessage);
   }


}

// generate laste dited msg
const generateLastEdited = (timestamp) => `last edited ${moment(timestamp).fromNow()}`;
