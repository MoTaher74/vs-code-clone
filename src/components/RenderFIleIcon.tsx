import { svgstyle } from "../styles";

interface IProps{
filename:string

}

const RenderFIleIcon =({filename}:IProps)=>{
    // const fileExt = filename.split('.').pop()?.toLowerCase();
    const fileExt = filename.split('.').pop();
if(fileExt === 'html') return <img {...svgstyle} src="/icons/file_type_html.svg" alt="" />;
}

export default RenderFIleIcon ;