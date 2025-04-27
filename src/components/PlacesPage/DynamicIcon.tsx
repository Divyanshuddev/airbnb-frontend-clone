import * as Icons from "@mui/icons-material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
type DynamicIconProps={
    iconName:string;
}
const DynamicIcon:React.FC<DynamicIconProps> = ({iconName}) => {
    
    const i=Object.keys(Icons);
    const newIconSplit=iconName.split(' ')
    const newIcon= i.filter(item =>{ return item.includes(newIconSplit[0])});    
    const IconComponent = Icons[newIcon[0]];
  return (
    <>
      {
        !IconComponent?(<CheckCircleIcon />):<IconComponent />
      }
    </>
  )
}

export default DynamicIcon
