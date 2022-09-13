import { findItemIndexById, removeItemAtIndex } from 'utils/arrayUtils';
import { TodoAction } from './TodoAction';
import { TodoState } from './TodoContext';

export function TodoReducer(
  state: TodoState,
  todoAction: TodoAction
): TodoState {
  const { action, payload } = todoAction;
  if (action === 'ADD_TODO') {
    state.todos.push(payload.todo);
  } else if (action === 'CHANGE_TODO_COMPLETE_STATUS') {
    const todoIndex = findItemIndexById(state.todos, payload.id);
    if (todoIndex !== -1) {
      state.todos[todoIndex].complete = payload.complete;
    }
  } else if (action === 'DELETE_TODO') {
    const todoIndex = findItemIndexById(state.todos, payload.id);
    state.todos = removeItemAtIndex(state.todos, todoIndex);
  } else if (action === 'CLEAR_COMPLETED') {
    state.todos = state.todos.filter((todo) => !todo.complete);
  }
  return { ...state };
}
