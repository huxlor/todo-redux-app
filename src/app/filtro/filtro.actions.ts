import { createAction, props } from '@ngrx/store';

export const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{filtro: filtrosValidos}>()
);

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';