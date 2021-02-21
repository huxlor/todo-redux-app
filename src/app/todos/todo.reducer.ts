// @ts-nocheck

import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { crear, toggle, editar, borrar, toggleAll, cleanCompleted } from './todo.actions';
import { Todo } from './models/todo.model';
 
export const estadoInicial: Todo[] = [
  new Todo('Save the world'),
  new Todo('Save Colombia'),
  new Todo('Save the USA')
];
 
const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(cleanCompleted, (state) => state.filter(todo => !todo.completado)),
  on(toggle, (state, { id }) => {
    return state.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
       return todo; 
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          texto
        }
      } else {
       return todo; 
      }
    });
  }),
  on(toggleAll, (state, { completado }) => {
    return state.map(todo => {
      return {
        ...todo,
        completado
      }
    });
  }),
);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}