
interface IProps{
src:string,


}

const ImgIcons =({src}:IProps)=>{
return <img className="w-6 h-6" src={src} alt="icons" />;
}

export default ImgIcons ;