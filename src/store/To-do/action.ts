import { TodoActionTypes, ADD_ITEM_TO_TODO, REMOVE_ITEM_FROM_TODO, Item } from './type';

export function removeItemFromTodo ( id: number ): TodoActionTypes {
  return {
    type: REMOVE_ITEM_FROM_TODO,
    payload: id // Will only accept type: number
  }
}

export function addItemToTodo ( item: Item ): TodoActionTypes {
  return {
    type: ADD_ITEM_TO_TODO,
    payload: item // Will only accept type: Item
  }
}