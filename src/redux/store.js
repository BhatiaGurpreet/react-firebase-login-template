import { configureStore } from '@reduxjs/toolkit';
import debtReducer from './debtslice';
import operationReducer from './operationslice';
import { saveStateToLocal } from './localstate';

const store = configureStore({
    reducer: {
        debt: debtReducer,
        operations:operationReducer,
    },
}
);

store.subscribe(() => {
    saveStateToLocal(store.getState());
});

export default store;

