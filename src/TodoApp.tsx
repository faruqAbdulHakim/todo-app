import { AppContainer } from 'components/AppContainer';
import { AppFooter } from 'components/AppFooter';
import { Header } from 'components/Header';
import { NewTodoForm } from 'components/NewTodoForm';
import { TodoList } from 'components/TodoList';

export function TodoApp() {
  return (
    <AppContainer>
      <Header />
      <NewTodoForm />
      <TodoList />
      <AppFooter />
    </AppContainer>
  );
}
