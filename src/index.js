import {createStore} from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RND+":
      return state + action.payload;
    case "RND-":
      return state - action.payload;
    default:
      return state;
  }
};

const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch({type: 'INC'})
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch({type: 'DEC'})
});

document.getElementById('rnd+').addEventListener('click', () => {
  store.dispatch({type: 'RND+', payload: Math.floor(Math.random() * 10)})
});

document.getElementById('rnd-').addEventListener('click', () => {
  store.dispatch({type: 'RND-', payload: Math.floor(Math.random() * 10)})
});

const update = () => {
  document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);