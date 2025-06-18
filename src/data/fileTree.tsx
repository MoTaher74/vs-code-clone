import type { IFile } from "../interfaces/interface";
import { v4 as uuid } from 'uuid';
export const fileTree:IFile = {
     id:uuid(),
    name:"VS-Clone",
    isFolder:true,
    children:[
        {
            id:uuid(),
            name:"node_modules",
            isFolder:true,
            children:[{ id:uuid(),name:'.vite',isFolder:true,children:[{ id:uuid(),name:'react.js',isFolder:false,content:"this is a test"}]}]
        },
        {
             id:uuid(),
            name:"src",
            isFolder:true,
            children:[{ id:uuid(),name:'App',isFolder:true,children:[{ id:uuid(),name:'react.js',isFolder:false,content:"react js file in app folder"}]}]
        },
        {
             id:uuid(),
            name:"components",
            isFolder:true,
             children:[{ id:uuid(),name:'App',isFolder:true,children:[{ id:uuid(),name:'react.edie',isFolder:false,content:"react.edie file in app folder"}]}]
        },
        {
             id:uuid(),
            name:"index.jsx",
            isFolder:false
            ,content:"this is index.jsx file"
        },
        {
             id:uuid(),
            name:"index.ts",
            isFolder:false
             ,content:"this is index.ts file"
        },
    
        {
             id:uuid(),
            name:"index.tsx",
            isFolder:false
             ,content:"this is index.tsx file"
        }
    ]
}