import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootreducer = combineReducers({

})

const store = configureStore({
    reducer: rootreducer,
})

export default store;