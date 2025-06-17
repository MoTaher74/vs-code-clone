
import { useState } from "react";
import type { IFile } from "../interfaces/interface";
import BottomIconArrow from "./SVG/BottomIconArrow";


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
          <RenderFIleIcon filename={fileTree.name} isFolder={fileTree.isFolder} isOpen={isOpen}/>
            </>
          ):(<>
          <RightIconArrow/>
          <RenderFIleIcon filename={fileTree.name} isFolder={fileTree.isFolder} isOpen={isOpen}/>
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