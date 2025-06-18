
import { useState } from "react";
import type { IFile } from "../interfaces/interface";
import BottomIconArrow from "./SVG/BottomIconArrow";
import RightIconArrow from "./SVG/RightIconArrow";
import RenderFIleIcon from "./RenderFIleIcon";
import { useDispatch, useSelector } from "react-redux";
import { setOpenFile } from "../store/feature/fileTreeSlice";
import type { RootState } from "../store/store";
import { doesFileObjectExist } from "../utils/function";


interface IProps{
fileTree : IFile;


}

const RecursiveComponent =({fileTree}:IProps)=>{
   const dispatch = useDispatch()
   const{openFile} = useSelector((state:RootState) => state.fileTree)
const [isOpen, setIsOpen] = useState<boolean>(false);

const toggle =()=> {setIsOpen(prev=>!prev);}

{/**
 * Handles the event when a file is clicked in the file tree.
 *
 * Checks if the selected file already exists in the list of open files.
 * If the file is not already open, it dispatches an action to add the file to the open files list.
 *
 * @remarks
 * This function prevents duplicate files from being opened in the editor.
 *
 * @usedBy
 * Typically used as an event handler for file click events in the file explorer component.
 */}
const onFileClicked = ()=>{
const exists = doesFileObjectExist(openFile,fileTree.id)
  if(exists) return
   dispatch(setOpenFile([...openFile,fileTree]))
}
return (
    
<div className="mb-2 ml-2 cursor-pointer">

<div className="flex items-center mb-1" onClick={toggle}>
  {
    fileTree.isFolder? (
      <div  className="flex items-center " >
        {
          isOpen?(<>
          <BottomIconArrow/>
          <RenderFIleIcon filename={fileTree.name} isFolder={fileTree.isFolder} isOpen={isOpen}/>
            </>
          ):(<>
          <RightIconArrow/>
          <RenderFIleIcon filename={fileTree.name} isFolder={fileTree.isFolder} isOpen={isOpen}/>
          </>)
     
        }
      <span>{fileTree.name}</span>
      </div>
    ):(
<div className="flex" onClick={onFileClicked}>
        <span className="mr-2" >
        <RenderFIleIcon filename={fileTree.name} />
      </span>
      <span>{fileTree.name}</span>
</div>
    )
  }

  
 
</div> 
   {
    isOpen &&fileTree.children && fileTree.children.map((file,idx)=>(
      <div key={idx} className="">
        <RecursiveComponent fileTree={file} />
      </div>
        
    ))
}


 </div>
)
}

export default RecursiveComponent ;