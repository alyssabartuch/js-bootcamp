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
   const todoEl = document.querySelector('#todos');

   const filteredTodos = todos.filter((todo) => {
      const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
      const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

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
      messageEl.textContent = 'No to-do\'s to show';
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
      saveTodos(todos);
      renderTodos(todos, filters);
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
      saveTodos(todos);
      renderTodos(todos, filters);
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
