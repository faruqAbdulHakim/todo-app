import { TodoState } from 'contexts/TodoContext';

export function getInitialData(): TodoState {
  return {
    todos: [
      {
        id: 1662985865363,
        todo: 'Complete online JavaScript Course',
        complete: true,
      },
      {
        id: 1662985918442,
        todo: 'Jog around the park 3x',
        complete: false,
      },
      {
        id: 1662985928033,
        todo: '10 minutes meditation',
        complete: false,
      },
      {
        id: 1662985934716,
        todo: 'Read for 1 hour',
        complete: false,
      },
      {
        id: 1662985941461,
        todo: 'Pick up groceries',
        complete: false,
      },
      {
        id: 1662985947913,
        todo: 'Complete Todo App on Frontend Mentor',
        complete: false,
      },
    ],
    draggedTodo: { id: null },
  };
}
