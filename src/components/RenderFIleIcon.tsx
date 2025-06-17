
import { extIconPath } from "../consts/data";
import type { IRenderFIleIcon } from "../interfaces/interface";
import ImgIcons from "./ImgIcons";
import FileIcon from "./SVG/FileIcon";



const RenderFIleIcon =({filename,isFolder,isOpen}:IRenderFIleIcon)=>{
    // const fileExt = filename.split('.').pop()?.toLowerCase();
    const fileExt = filename.split('.').pop();
    if(fileExt && Object.prototype.hasOwnProperty.call(extIconPath,fileExt)) {
        const iconPath = isFolder? isOpen? `${extIconPath[fileExt]}_opened.svg`:`${extIconPath[fileExt]}.svg`:`${extIconPath[fileExt]}`;
 return <ImgIcons src={iconPath}/>;
    }
        

// if(fileExt === 'html') return <ImgIcons src="/icons/file_type_html.svg"/>

if(fileExt && isFolder) return isOpen? <ImgIcons src="/icons/default_folder_opened.svg"/>:<ImgIcons src="/icons/default_folder.svg"/>
return <FileIcon/>;
}

export default RenderFIleIcon ;