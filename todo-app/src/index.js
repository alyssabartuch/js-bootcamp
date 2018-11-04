// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { getFilters, setFilters } from './filters';
import { loadTodos, saveTodos, getTodos, createTodo } from './todos';
import { renderTodos } from './views';

// Render initial todos
renderTodos();


// Set up search text handler
document.querySelector('#search-text').addEventListener('input', (event) => {
   setFilters({
      searchText: event.target.value
   });
   renderTodos();
});

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (event) => {
   setFilters({
      hideCompleted: event.target.checked
   });
   renderTodos();
})

// Set up form submission handler
document.querySelector('#todo-form').addEventListener('submit', (event) => {
   event.preventDefault();
   const text = event.target.elements.todoText.value.trim();

   if (text) {
      createTodo(text);

      saveTodos(todos);
      renderTodos();
      event.target.elements.todoText.value = '';

   } else {
      console.log('Please provide some text');
   }
});

// Bonus: Add a watcher for local storage
