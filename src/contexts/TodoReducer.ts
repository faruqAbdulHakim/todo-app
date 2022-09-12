import { findItemIndexById } from 'utils/arrayUtils';
import { TodoAction } from './TodoAction';
import { TodoState } from './TodoContext';

export function TodoReducer(
  state: TodoState,
  todoAction: TodoAction
): TodoState {
  const { action, payload } = todoAction;
  if (action === 'ADD_TODO') {
    console.log('eoi');
    state.todos.push(payload.todo);
    return { ...state };
  } else if (action === 'CHANGE_TODO_COMPLETE_STATUS') {
    const todoIndex = findItemIndexById(state.todos, payload.id);
    if (todoIndex !== -1) {
      state.todos[todoIndex].complete = payload.complete;
    }
    return { ...state };
  } else {
    return { ...state };
  }
}
