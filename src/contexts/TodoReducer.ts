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
    return { ...state };
  } else if (action === 'CHANGE_TODO_COMPLETE_STATUS') {
    const todoIndex = findItemIndexById(state.todos, payload.id);
    if (todoIndex !== -1) {
      state.todos[todoIndex].complete = payload.complete;
    }
    return { ...state };
  } else if (action === 'DELETE_TODO') {
    const todoIndex = findItemIndexById(state.todos, payload.id);
    state.todos = removeItemAtIndex(state.todos, todoIndex);
    return { ...state };
  } else {
    return { ...state };
  }
}
