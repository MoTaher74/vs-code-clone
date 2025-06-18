
import OpenFileBar from "./components/OpenFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";




const App =()=>{
 

return (
<div className="my-2">
    <div className="flex h-screen ">
        <div className="w-64 border-r border-white">
<RecursiveComponent fileTree={fileTree}/>
        </div>
            <OpenFileBar/>
    </div>
</div>

)
}

export default App ;