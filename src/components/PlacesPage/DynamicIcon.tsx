import * as Icons from "@mui/icons-material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { SvgIconComponent } from "@mui/icons-material";

type DynamicIconProps = {
  iconName: string;
};

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName }) => {
  const i = Object.keys(Icons);

  const newIconSplit = iconName.split(' '); // split based on space
  const newIcon = i.find(item => item.includes(newIconSplit[0])); // find one matching icon

  const IconComponent = newIcon ? (Icons[newIcon as keyof typeof Icons] as SvgIconComponent) : undefined;

  return (
    <>
      {!IconComponent ? <CheckCircleIcon /> : <IconComponent />}
    </>
  );
};

export default DynamicIcon;
