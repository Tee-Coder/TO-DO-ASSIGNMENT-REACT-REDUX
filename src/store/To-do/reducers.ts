import { TodoState, REMOVE_ITEM_FROM_TODO, ADD_ITEM_TO_TODO, TodoActionTypes } from './type';

// Set up a default or "initial" state for our app.
const initialState: TodoState = {
  items: [
    {
      id: 1,
      name: 'Cooking'
    },
    {
      id: 2,
      name: 'Put kids to bed'
    },
    {
      id: 3,
      name: 'Read'
    }
  ]
}


export function TodoReducer ( state = initialState, action: TodoActionTypes ) {
  switch ( action.type ) {
    case REMOVE_ITEM_FROM_TODO:
      return {
        ...state,
        items: state.items.filter( item => item.id !== action.payload )
      }
    case ADD_ITEM_TO_TODO:
      return {
        ...state,
        items: [ ...state.items, action.payload ]
      }
    default:
      return state;
  }
}