'use strict'

// fetch existing todos from local storage
const getSavedTodos = () => {
   const todosJSON = localStorage.getItem('todos');

   try {
      return todosJSON ? JSON.parse(todosJSON) : [];
   } catch (e) {
      return [];
   }


}

// save todos to local storage
const saveTodos = (todos) => {
   localStorage.setItem('todos', JSON.stringify(todos));
}

// toggle todo completed value
const toggleTodo = (id) => {
   const todo = todos.find((todo) => todo.id === id);

   if (todo) {
      todo.completed = !todo.completed;
   }
}

// remove a todo from the list
const removeTodo = (id) => {
   const todoIndex = todos.findIndex((todo) => todo.id === id);

   if (todoIndex > -1) {
      todos.splice(todoIndex, 1);
   }
}

// render application todos based on filters
const renderTodos = (todos, filters) => {
   const filteredTodos = todos.filter((todo) => {
      const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
      const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

      return searchTextMatch && hideCompletedMatch;
   })


   const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);


   document.querySelector('#todos').innerHTML = '';

   document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));


   filteredTodos.forEach((todo) => {
      document.querySelector('#todos').appendChild(generateTodoDOM(todo));
   });

}

// get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
   const todoEl = document.createElement('div');
   const checkbox = document.createElement('input');
   const todoText = document.createElement('span');
   const removeButton = document.createElement('button');

   // setup todo checkbox
   checkbox.setAttribute('type', 'checkbox');
   checkbox.checked = todo.completed;
   todoEl.appendChild(checkbox);
   checkbox.addEventListener('change', () => {
      toggleTodo(todo.id);
      saveTodos(todos);
      renderTodos(todos, filters);
   })


   // setup todo text
   todoText.textContent = todo.text;
   todoEl.appendChild(todoText);

   // setup remove todo button
   removeButton.textContent = 'x';
   todoEl.appendChild(removeButton);
   removeButton.addEventListener('click', (e) => {
      removeTodo(todo.id);
      saveTodos(todos);
      renderTodos(todos, filters);
   })

   return todoEl;
}

// get the DOM elements for list summary
const generateSummaryDOM = (incomplete) => {
   const summary = document.createElement('h2');
   summary.textContent = `you have ${incomplete.length} todos left`;
   return summary;
}
