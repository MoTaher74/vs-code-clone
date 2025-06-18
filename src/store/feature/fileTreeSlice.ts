import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IFile } from '../../interfaces/interface'
export interface IClicked{
    filename:string,
    fileContent:string |undefined
}
export interface IInitState{
    openFile:IFile[];
    clickedFile:IClicked
}

const initialState:IInitState = {
openFile:[],
clickedFile:{
    filename:"",
    fileContent:""
}
}

export const fileTreeSlice = createSlice({
  name: 'fileTree',
  initialState,
  reducers: {
    setOpenFile:(state,action:PayloadAction<IFile[]>)=>{
        state.openFile = action.payload;
    },
    setClickedFile:(state,ation:PayloadAction<IClicked>)=>{
      state.clickedFile.filename = ation.payload.filename;
      state.clickedFile.fileContent = ation.payload.fileContent
    }
  },
})

// Action creators are generated for each case reducer function
export const { setOpenFile,setClickedFile} = fileTreeSlice.actions

export default fileTreeSlice.reducer