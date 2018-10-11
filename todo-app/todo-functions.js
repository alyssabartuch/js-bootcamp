
// fetch existing todos from local storage
const getSavedTodos = function() {
   const todosJSON = localStorage.getItem('todos');

   if (todosJSON !== null) {
      return JSON.parse(todosJSON);
   } else {
      return [];
   }
}

// save todos to local storage
const saveTodos = function(todos) {
   localStorage.setItem('todos', JSON.stringify(todos));
}

// render application todos based on filters
const renderTodos = function(todos, filters) {
   const filteredTodos = todos.filter(function(todo) {
      const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
      const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

      return searchTextMatch && hideCompletedMatch;
   })


   const incompleteTodos = filteredTodos.filter(function(todo) {
      return !todo.completed;
   })


   document.querySelector('#todos').innerHTML = '';

   document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));


   filteredTodos.forEach(function(todo) {

      document.querySelector('#todos').appendChild(generateTodoDOM(todo));
   });

}

// get the DOM elements for an individual todo
const generateTodoDOM = function(todo) {
   const todoEl = document.createElement('div');
   const checkbox = document.createElement('input');
   const todoText = document.createElement('span');
   const removeButton = document.createElement('button');

   // setup todo checkbox
   checkbox.setAttribute('type', 'checkbox');
   //checkbox.type = 'checkbox'; -- also worked; is it correct?
   todoEl.appendChild(checkbox);

   // setup todo text
   todoText.textContent = todo.text;
   todoEl.appendChild(todoText);

   // setup remove todo button
   removeButton.textContent = 'x';
   todoEl.appendChild(removeButton);

   return todoEl;
}

// get the DOM elements for list summary
const generateSummaryDOM = function(incomplete) {
   const summary = document.createElement('h2');
   summary.textContent = `you have ${incomplete.length} todos left`;
   return summary;
}
