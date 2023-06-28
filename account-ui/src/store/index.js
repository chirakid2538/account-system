import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import rootReducer from '~store/redux/reducers';
import rootSaga from '~store/saga/watcher';

const IS_DEV = process.env.NODE_ENV !== 'production';

const bindMiddleware = (middleware) => {
	if (IS_DEV) {
		const { composeWithDevTools } = require('redux-devtools-extension');
		return composeWithDevTools(applyMiddleware(...middleware));
	}
	return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		};
		if (state.count) nextState.count = state.count; // preserve count value on client side navigation
		return nextState;
	} else {
		return rootReducer(state, action);
	}
};

export const makeStore = (context) => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(reducer, bindMiddleware([sagaMiddleware]));

	store.sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};

export const wrapper = createWrapper(makeStore);
