import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import mySaga from './sagas';
import {rootReducer} from './reducers/rootReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(mySaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
