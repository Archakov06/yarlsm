**Yarlsm** — Yet another redux like state manager.

Not for production. Made for fun and practice.

## index.js

```js
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

// state changed {tasks: []} TASKS:ADD Get started
// state changed {tasks: Array(2)} TASKS:ADD Create store
// state changed {tasks: Array(3)} TASKS:ADD removed
// state changed {tasks: Array(2)} TASKS:REMOVE 2
// state changed {tasks: Array(3)} TASKS:ADD Test store
```

## reducers.js

```js
export default {
  tasks: (state, type, payload) => {
    switch (type) {
      case 'TASKS:ADD':
        return [...state, payload];
      case 'TASKS:REMOVE':
        return state.filter((_, index) => index !== Number(payload));
      default:
        return state;
    }
  },
};
```
