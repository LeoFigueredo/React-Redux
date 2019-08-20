import { createStore } from 'redux';
import reducer from './reducers';
import {obtenerStateStorage, guardarStateStorage} from './Localstorage';


//definir state inicial
//const initialState = [];

//obtener citas del localstorage
const storageState = obtenerStateStorage();

const store = createStore(
    reducer,
    storageState, 
    //initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe ( () => {
    guardarStateStorage({
        citas: store.getState().citas
    })
    
})

export default store; 