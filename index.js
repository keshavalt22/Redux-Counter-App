let store = Redux.createStore(reducer);
let counter = store.getState();

const h1 = document.querySelector('h1');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const reset = document.querySelector('.reset');
const step5 = document.querySelector('.step-5');
const step10 = document.querySelector('.step-10');
const step15 = document.querySelector('.step-15');
const value15 = document.querySelector('.value-15');
const value100 = document.querySelector('.value-100');
const value200 = document.querySelector('.value-200');

h1.innerText = counter;

let step = 1;

let maxValue = Infinity;

step5.addEventListener('click', () => {
    return step = 5;
})

step10.addEventListener('click', () => {
    return step = 10;
})

step15.addEventListener('click', () => {
    return step = 15;
})

value15.addEventListener('click', () => {
    return maxValue = 15;
})

value100.addEventListener('click', () => {
    return maxValue = 100;
})

value200.addEventListener('click', () => {
    return maxValue = 200;
})

increment.addEventListener('click', () => {
    store.dispatch({ type: 'increment', step })
});

decrement.addEventListener('click', () => {
    store.dispatch({ type: 'decrement', step })
});

reset.addEventListener('click', () => {
    store.dispatch({ type: 'reset' })
});


store.subscribe(() => {
    if (store.getState() < maxValue) {
        counter = store.getState();
    }
    h1.innerText = counter;
})


function reducer(state = 0, action) {
    switch (action.type) {
        case 'increment':
            return state + (action.step || 1);
        case 'decrement':
            return state - (action.step || 1);
        case 'reset':
            return 0;
        default:
            return state;
    }
}
