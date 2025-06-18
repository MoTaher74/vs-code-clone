export interface IFile{
  id:string;
    name:string;
    children?:IFile[];
    isFolder:boolean;
    content?:string
}

export interface IRenderFIleIcon{
filename:string;
isFolder?:boolean;
isOpen?:boolean

}