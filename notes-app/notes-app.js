let notes = getSavedNotes();

// get id for not user is trying to edit
const noteId = location.hash.substring(1);

const filters = {
   searchText: ''
}

// initial rendering of the list of notes
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(event) {
   const id = uuidv4();
   console.log(uuidv4);
   notes.push({
      id: id,
      title: '',
      body: ''
   })

   saveNotes(notes);
   location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', function(event) {
   filters.searchText = event.target.value;
   renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function(event) {
   console.log(event.target.value);
})

window.addEventListener('storage', function(e) {
   if (e.key === 'notes') {
      notes = JSON.parse(e.newValue);
      renderNotes(notes, filters);
   }
})
