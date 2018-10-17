// get id for not user is trying to edit
const noteId = location.hash.substring(1);

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const dateElement = document.querySelector('#last-edited');

let notes = getSavedNotes();

let note = notes.find((note) => note.id === noteId);

// if note doesnt exist redirects back to home
if (!note) {
   location.assign('/index.html');
}

// populates fields with correct value
titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

// listens for changes on elemenet values
titleElement.addEventListener('input', (e) => {
   note.title = e.target.value;
   note.updatedAt = moment().valueOf();
   dateElement.textContent = generateLastEdited(note.updatedAt);
   saveNotes(notes);
});

bodyElement.addEventListener('input', (e) => {
   note.body = e.target.value
   note.updatedAt = moment().valueOf();
   dateElement.textContent = generateLastEdited(note.updatedAt);
   saveNotes(notes);
})

// listens for click to remove element
removeElement.addEventListener('click', (e) => {
   removeNote(note.id);
   saveNotes(notes);
   location.assign('/index.html');
})

window.addEventListener('storage', (e) => {
   console.log('change');
   if (e.key === 'notes') {
      notes = JSON.parse(e.newValue);

      // checks that note exists
      note = notes.find((note) => note.id === noteId);

      // if note doesnt exist redirects back to home
      if (!note) {
         location.assign('/index.html');
      }

      // populates fields with correct value
      titleElement.value = note.title;
      bodyElement.value = note.body;
      dateElement.textContent = generateLastEdited(note.updatedAt);
   }

})
