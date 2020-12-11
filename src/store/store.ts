import { createStore, Store } from 'redux';
import { IState } from './IState';
import reducers from './reducers';

const store: Store<IState> = createStore(reducers);

export default store;
