/**
 * Interface for the 'Todos' data
 */
export interface Todos {
  id: string | number; // Primary ID
  title: string;
  done: boolean;
}

export interface TodosDict {
  [id: string]: Todos
}