import { Todo } from './TodoContext';

export type TodoAction =
  | {
      action: 'ADD_TODO';
      payload: {
        todo: Todo;
      };
    }
  | {
      action: 'CHANGE_TODO_COMPLETE_STATUS';
      payload: {
        id: number;
        complete: boolean;
      };
    }
  | {
      action: 'DELETE_TODO';
      payload: { id: number };
    }
  | {
      action: 'CLEAR_COMPLETED';
      payload: {};
    }
  | {
      action: 'SET_DRAGGED_TODO';
      payload: { id: number | null };
    }
  | {
      action: 'MOVE_TODO';
      payload: { fromId: number; toId: number };
    };

export function addTodo(todo: Todo): TodoAction {
  return {
    action: 'ADD_TODO',
    payload: { todo },
  };
}

export function changeTodoCompleteStatus(
  id: number,
  complete: boolean
): TodoAction {
  return {
    action: 'CHANGE_TODO_COMPLETE_STATUS',
    payload: { id, complete },
  };
}

export function deleteTodo(id: number): TodoAction {
  return {
    action: 'DELETE_TODO',
    payload: { id },
  };
}

export function clearCompleted(): TodoAction {
  return {
    action: 'CLEAR_COMPLETED',
    payload: {},
  };
}

export function setDraggedTodo(id: number | null): TodoAction {
  return {
    action: 'SET_DRAGGED_TODO',
    payload: { id },
  };
}

export function moveTodo(fromId: number, toId: number): TodoAction {
  return {
    action: 'MOVE_TODO',
    payload: { fromId, toId },
  };
}
