"use client"
import { Products } from "@/Types";
import { PayloadAction } from "@reduxjs/toolkit";
const { createSlice } = require("@reduxjs/toolkit")


const initialState:[]=[];

const cartSlice =createSlice({
    name :"cart",
    initialState,

    reducers :{
        add :(state :any ,action :PayloadAction<[]>)=>{
            return [...state ,action.payload]
        },
        remove :(state :any ,action :PayloadAction<number>)=>{
            return state.filter((item:any)=>item.id !==action.payload)
        }
    }
    
})
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;