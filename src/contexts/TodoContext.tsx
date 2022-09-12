import { createContext, useContext, useReducer } from 'react';
import { getInitialData } from 'utils/getInitialData';
import { TodoAction } from './TodoAction';
import { TodoReducer } from './TodoReducer';

export interface Todo {
  id: number;
  todo: string;
  complete: boolean;
}

export interface TodoState {
  todos: Todo[];
}

interface TodoContextProps {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
}

interface TodoContextProviderProps {
  children: React.ReactNode;
}

export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);

export function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [state, dispatch] = useReducer(TodoReducer, getInitialData());

  const { todos } = state;

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(TodoContext);
}
