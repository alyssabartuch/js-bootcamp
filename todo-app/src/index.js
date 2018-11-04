import { setFilters } from './filters';
import { createTodo, loadTodos } from './todos';
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
      renderTodos();
      event.target.elements.todoText.value = '';

   }
});

// Bonus: Add a watcher for local storage

window.addEventListener('storage', (e) => {
   if (e.key === 'todos') {
      loadTodos();
      renderTodos();
   }
});
