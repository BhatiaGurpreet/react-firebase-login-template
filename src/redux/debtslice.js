import { createSlice } from "@reduxjs/toolkit";
import { getLocalState } from "./localstate";
import { splitModel } from "./model";

var localState = getLocalState()?.debt;
var initialState = localState?localState:splitModel;
export const debtSlice = createSlice({
  name: 'debt',
  initialState: initialState,
  reducers: {
    addMember: (state,action) => {
      let indx = state.members.length;
      action.payload.id=indx+1;
      state.members.push(action.payload);
    },
    updateMember: (state,action) => {
      let indx=state.members.findIndex(m=>m.id==action.payload.id);
      state.members[indx]=action.payload;
    },
    removeMember: (state,action) => {
     var delIndex=state.members.findIndex(m=>m.id==action.payload.id);
     state.members[delIndex].inactive=1;
    },
    addTransaction: (state, action) => {
      let indx = state.transactions.length;
      action.payload.id=indx+1;
      state.transactions.push(action.payload);
    },
    updateTransaction: (state, action) => {
      let id = action.payload.id;
      let index = state.transactions.findIndex(t=>t.id==id);
      console.log(state.transactions[index])
      state.transactions[index] = action.payload;
    },
    deleteTransaction: (state, action) => {
      var delIndex=state.transactions.findIndex(t=>t.id==action.payload.id);
      state.transactions[delIndex].inactive=1;
    },
    undoDeleteTransaction: (state, action) => {
      var delIndex=state.transactions.findIndex(t=>t.id==action.payload.id);
      state.transactions[delIndex].inactive=0;
    },
    ///Settlements

    updateSettlements:(state,action)=>
    {
      var sIndex = state.settlements?.findIndex(s=>s.groupId==action.payload.groupId);
      if(sIndex)state.settlements[sIndex]=action.payload;
      else{state.settlements?.push(action.payload)}
    },
    ////
    createGroup: (state) => {
      let indx = state.groups.length;
      var group={id:indx+1,name:'New Group '+indx,active:1}
      state.groups.push(group);
    },
    updateGroupName: (state, action) => {
      let indx=state.groups.findIndex(g=>g.id==action.payload.id);
      state.groups[indx].name=action.payload.name;
    },
    deleteGroup: (state, action) => {
      var grp = state.groups.find(g=>g.id==action.payload);
      grp.active=0;
    },
  },
});
export const { createGroup, updateGroupName, addMember, removeMember, updateSettlements, addTransaction,updateTransaction,deleteTransaction, undoDeleteTransaction,deleteGroup, updateMember } = debtSlice.actions;
export default debtSlice.reducer;