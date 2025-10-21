// Todo App with localStorage and checkbox
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const checkbox = document.getElementById('todo-done');
const list = document.getElementById('todo-list');
const STORAGE_KEY = 'todos-v1';

let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function render() {
  list.innerHTML = '';
  todos.forEach((todo, i) => {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = `${todo.text} (${todo.done ? 'done' : 'not done'})`;
    span.className = 'todo-text' + (todo.done ? ' done' : '');

    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.className = 'delete-btn';
    del.addEventListener('click', () => {
      todos.splice(i, 1);
      save();
      render();
    });

    li.appendChild(span);
    li.appendChild(del);
    list.appendChild(li);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  const done = checkbox.checked;
  if (!text) return;
  todos.push({ text, done });
  input.value = '';
  checkbox.checked = false;
  save();
  render();
});

render();
