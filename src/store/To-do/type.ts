export interface Item {
    id: number,
    name: string
  }
  
  export interface TodoState {
    items: Item[]
  }
  
 
  export const REMOVE_ITEM_FROM_TODO = 'REMOVE_ITEM_FROM_TODO';
  export const ADD_ITEM_TO_TODO = 'ADD_ITEM_TO_TODO';
 
  
  interface RemoveItemFromTodo {
    type: typeof REMOVE_ITEM_FROM_TODO,
    payload: number 
  }
  
  interface AddItemToTodo {
    type: typeof ADD_ITEM_TO_TODO,
    payload: Item 
  }
  export type TodoActionTypes = RemoveItemFromTodo | AddItemToTodo;