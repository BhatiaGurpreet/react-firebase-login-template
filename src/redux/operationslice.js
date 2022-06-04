import { createSlice } from "@reduxjs/toolkit";
import { getLocalState } from "./localstate";


var localState = getLocalState()?.operations;
var initialState = localState ? localState :
  {
    toaster:
    {
      show: false,
      header: '',
      text: ''
    },
    lastLocation: '/',
    user: {
      isAuthenticated: false,
      userName: null,
      lastAuthMode: null
    }
  };

const operationSlice = createSlice({
  name: 'operations',
  initialState: initialState,
  reducers: {
    setToaster: (state, action) => {
      state.toaster = action.payload;
    },
    updateLastLocation: (state, action) => {
      state.lastLocation = action.payload;
    },
    updateIsAuthenticatedFlag: (state, action) => {
      state.user.isAuthenticated = action.payload;
    },
    updateUserName: (state, action) => {
      state.user.userName = action.payload;
    },
    updateLastAuthMode: (state, action) => {
      state.user.lastAuthMode = action.payload;
    }
  },
});
export const { setToaster, updateLastLocation, updateIsAuthenticatedFlag, updateUserName, updateLastAuthMode } = operationSlice.actions;
export default operationSlice.reducer;