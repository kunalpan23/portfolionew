import React, { useState, createContext, useReducer } from 'react';
import {defaultStore} from '../defaults/defaultStore';
import reducer from '../reducers';

import {dispatchHandler} from '../utils';

const MyContext = createContext([{}, () => {}]);

interface ProvideNode {
    children?: React.ReactNode;
}

const MyProvider = ({ children }:ProvideNode) => {
	const [state, setState]: any = useReducer(reducer, defaultStore);
	const dispatch = dispatchHandler(setState);
	return (
		<MyContext.Provider value={[state, dispatch]}>
			{children}
		</MyContext.Provider>
	);
};

export { MyContext, MyProvider };