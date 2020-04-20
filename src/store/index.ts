import { combineReducers, createStore} from 'redux';
import { TodoReducer } from './To-do/reducers';

const rootReducer = combineReducers({
    Todo: TodoReducer
});

export type RootState = ReturnType <typeof rootReducer>;

export default function configureStore()
{
    const store = createStore(rootReducer);
    return store;
}