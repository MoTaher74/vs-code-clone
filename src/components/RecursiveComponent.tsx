
import { useState } from "react";
import type { IFile } from "../interfaces/interface";
import BottomIconArrow from "./SVG/BottomIconArrow";
import FileIcon from "./SVG/FileIcon";
import FolderCloseIcon from "./SVG/FolderCloseIcon";
import FolderOpenIcon from "./SVG/FolderOpenIcon";

import RightIconArrow from "./SVG/RightIconArrow";
import RenderFIleIcon from "./RenderFIleIcon";

interface IProps{
fileTree : IFile;

}

const RecursiveComponent =({fileTree}:IProps)=>{
const [isOpen, setIsOpen] = useState<boolean>(false);

const toggle =()=> {setIsOpen(prev=>!prev);}
return (
    
<div className="mb-2 ml-2 cursor-pointer">

<div className="flex items-center mb-1" onClick={toggle}>
  {
    fileTree.isFolder? (
      <div  className="flex items-center ">
        {
          isOpen?(<>
          <BottomIconArrow/>
            <FolderOpenIcon/>
            </>
          ):(<>
          <RightIconArrow/>
            <FolderCloseIcon/>
          </>)
        }
      </div>
    ):(
      <span className="mr-2">
        <RenderFIleIcon filename={fileTree.name}/>
      </span>
    )
  }

  <span>{fileTree.name}</span>
 
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