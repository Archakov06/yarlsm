import createStore from './store';
import reducers from './reducers';

const store = new createStore(reducers, {
  tasks: [],
});

store.listen(({ type, data, state }) => {
  console.log('state changed', state, type, data);
});

store.dispatch('TASKS:ADD', 'Get started');
store.dispatch('TASKS:ADD', 'Create store');
store.dispatch('TASKS:ADD', 'removed');
store.dispatch('TASKS:REMOVE', 2);
store.dispatch('TASKS:ADD', 'Test store');
