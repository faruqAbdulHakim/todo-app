import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoApp } from './TodoApp';
import './index.css';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { TodoContextProvider } from 'contexts/TodoContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeContextProvider>
    <TodoContextProvider>
      <TodoApp />
    </TodoContextProvider>
  </ThemeContextProvider>
);
