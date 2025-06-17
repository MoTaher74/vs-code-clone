import type { IFile } from "../interfaces/interface";

export const fileTree:IFile = {
    name:"VS-Clone",
    isFolder:true,
    children:[
        {
            name:"node-modules",
            isFolder:true,
            children:[{name:'.vite',isFolder:true,children:[{name:'react.js',isFolder:false}]}]
        },
        {
            name:"src",
            isFolder:true,
            children:[{name:'App',isFolder:true,children:[{name:'react.js',isFolder:false}]}]
        },
        {
            name:"index.html",
            isFolder:false
        }
    ]
}