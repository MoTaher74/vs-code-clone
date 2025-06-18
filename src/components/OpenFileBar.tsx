import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import OpenBarTab from "./OpenBarTab";



const OpenFileBar =()=>{

       const{openFile,clickedFile} = useSelector((state:RootState) => state.fileTree)
return (
<div>
    <div className="flex items-center px-2">
    {openFile.map((file)=>(
        <OpenBarTab file={file} key={file.id}/>
    ))}
    
</div>
<span className="text-2xl">{clickedFile.fileContent}</span>
</div>
)
}

export default OpenFileBar ;