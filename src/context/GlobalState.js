import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: []
  }

export const GlobalContext = createContext(initialState);
