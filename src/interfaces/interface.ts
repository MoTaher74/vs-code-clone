export interface IFile{
    name:string;
    children?:IFile[];
    isFolder:boolean;
    content?:string
}