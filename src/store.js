import {createStore} from 'redux';

const initialState ={
    count:3
}

function reducer(state = initialState,action){
return state;
}

const store = createStore(reducer);

export default store;
