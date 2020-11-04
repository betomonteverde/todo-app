import './styles.css';

import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );

//const newTodo = new Todo ('Hacer una nueva app web');
//todoList.nuevoTodo( newTodo );