import { getTodos, toggleTodo, removeTodo } from './todos';
import { getFilters } from './filters';

// render application todos based on filters
const renderTodos = () => {
   const todos = getTodos();
   const { searchText, hideCompleted } = getFilters();
   const todoEl = document.querySelector('#todos');

   const filteredTodos = todos.filter((todo) => {
      const searchTextMatch = todo.text.toLowerCase().includes(searchText.toLowerCase());
      const hideCompletedMatch = !hideCompleted || !todo.completed;

      return searchTextMatch && hideCompletedMatch;
   })

   const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

   todoEl.innerHTML = '';
   todoEl.appendChild(generateSummaryDOM(incompleteTodos));

   if (filteredTodos.length > 0) {
      filteredTodos.forEach((todo) => {
         todoEl.appendChild(generateTodoDOM(todo));
      });
   } else {
      const messageEl = document.createElement('p');
      messageEl.classList.add('empty-message');
      messageEl.textContent = 'There are no to-do\'s to show';
      todoEl.appendChild(messageEl);
   }
}

// get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
   const todoEl = document.createElement('label');
   const containerEl = document.createElement('div');
   const checkbox = document.createElement('input');
   const todoText = document.createElement('span');
   const removeButton = document.createElement('button');

   // setup todo checkbox
   checkbox.setAttribute('type', 'checkbox');
   checkbox.checked = todo.completed;
   containerEl.appendChild(checkbox);

   checkbox.addEventListener('change', () => {
      toggleTodo(todo.id);
      renderTodos();
   })

   // setup todo text
   todoText.textContent = todo.text;
   containerEl.appendChild(todoText);

   // setup containerEl
   todoEl.classList.add('list-item');
   containerEl.classList.add('list-item__container');
   todoEl.appendChild(containerEl);

   // setup remove todo button
   removeButton.textContent = 'remove';
   removeButton.classList.add('button', 'button--text');
   todoEl.appendChild(removeButton);

   removeButton.addEventListener('click', (e) => {
      removeTodo(todo.id);
      renderTodos();
   })

   return todoEl;
}

// get the DOM elements for list summary
const generateSummaryDOM = (incomplete) => {
   const summary = document.createElement('h2');
   const plural = incomplete.length === 1 ? '' : 's';
   summary.classList.add('list-title');
   summary.textContent = `you have ${incomplete.length} todo${plural} left`;

   return summary;
}



// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM };
