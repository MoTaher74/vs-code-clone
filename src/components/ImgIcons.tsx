
interface IProps{
src:string,


}

const ImgIcons =({src}:IProps)=>{
return <img className="w-5 h-5" src={src} alt="icons" />;
}

export default ImgIcons ;