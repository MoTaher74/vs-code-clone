import { useDispatch } from "react-redux";
import type { IFile } from "../interfaces/interface";
import CloseTab from "./CloseTab";
import RenderFIleIcon from "./RenderFIleIcon";
import { setClickedFile } from "../store/feature/fileTreeSlice";

interface IProps{

file:IFile
}

const OpenBarTab =({file}:IProps)=>{
    const dispatch = useDispatch();
    const onClicked = ()=>{
        const {name,content} = file
 dispatch(setClickedFile({filename:name,fileContent:content}))
    }
return (
    <div className="flex items-center mx-1 " onClick={onClicked}>
        <RenderFIleIcon filename={file.name}/>
        <span className=" flex justify-center items-center cursor-pointer p-2 mr-2 w-fit rounded-md  " >{file.name}</span>
        <span className="flex justify-center items-center cursor-pointer p-2 mr-2 w-fit rounded-md"><CloseTab/></span>
    </div>
)
}

export default OpenBarTab ;