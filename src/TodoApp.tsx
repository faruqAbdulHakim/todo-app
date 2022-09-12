import { AppContainer } from 'components/AppContainer';
import { Header } from 'components/Header';
import { NewTodoForm } from 'components/NewTodoForm';
import { TodoList } from 'components/TodoList';

export function TodoApp() {
  return (
    <AppContainer>
      <Header />
      <NewTodoForm />
      <TodoList />
    </AppContainer>
  );
}
