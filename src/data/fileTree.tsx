import type { IFile } from "../interfaces/interface";

export const fileTree:IFile = {
    name:"VS-Clone",
    isFolder:true,
    children:[
        {
            name:"node_modules",
            isFolder:true,
            children:[{name:'.vite',isFolder:true,children:[{name:'react.js',isFolder:false}]}]
        },
        {
            name:"src",
            isFolder:true,
            children:[{name:'App',isFolder:true,children:[{name:'react.js',isFolder:false}]}]
        },
        {
            name:"components",
            isFolder:true,
             children:[{name:'App',isFolder:true,children:[{name:'react.edie',isFolder:false}]}]
        },
        {
            name:"index.jsx",
            isFolder:false
        },
        {
            name:"index.ts",
            isFolder:false
        },
    
        {
            name:"index.tsx",
            isFolder:false
        }
    ]
}