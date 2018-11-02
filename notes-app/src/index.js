import { createNote } from './notes';
import { setFilters } from './filters';
import { renderNotes } from './views';


// initial rendering of the list of notes
renderNotes();

document.querySelector('#create-note').addEventListener('click', (e) => {
   const id = createNote();
   location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', (e) => {
   setFilters({
      searchText: e.target.value
   });
   renderNotes();
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
   setFilters({
      sortBy: e.target.value
   });
   renderNotes();
})

window.addEventListener('storage', (e) => {
   if (e.key === 'notes') {
      renderNotes();
   }
});



// // UNIX epoch - Jan 1 1970 00:00:00
