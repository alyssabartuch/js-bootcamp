// get id for not user is trying to edit
const noteId = location.hash.substring(1);

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');

let notes = getSavedNotes();

let note = notes.find(function(note) {
   return note.id === noteId;
});

// if note doesnt exist redirects back to home
if (note === undefined) {
   location.assign('/index.html');
}

// populates fields with correct value
titleElement.value = note.title;
bodyElement.value = note.body;

// listens for changes on elemenet values
titleElement.addEventListener('input', function(e) {
   note.title = e.target.value;
   saveNotes(notes);
});

bodyElement.addEventListener('input', function(e) {
   note.body = e.target.value
   saveNotes(notes);
})

// listens for click to remove element
removeElement.addEventListener('click', function(e) {
   removeNote(note.id);
   saveNotes(notes);
   location.assign('/index.html');
})

window.addEventListener('storage', function(e) {
   if (e.key === 'notes') {
      notes = JSON.parse(e.newValue);

      // checks that note exists
      let note = notes.find(function(note) {
         return note.id === noteId;
      });

      // if note doesnt exist redirects back to home
      if (note === undefined) {
         location.assign('/index.html');
      }

      // populates fields with correct value
      titleElement.value = note.title;
      bodyElement.value = note.body;
   }

})
