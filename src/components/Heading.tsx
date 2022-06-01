import { IconType } from 'react-icons/lib';


interface headingProps {
  title: string;
  icon?: IconType;
  fontSize?: Number;
  fontWeight?: Number;
  color?: string;
  mt?: Number;
  mb?: Number;
  ml?: Number;
  mr?: Number;
  isUpperCase?: Boolean;
}


export const Heading = ({
  icon,
  title,
  fontSize,
  fontWeight,
  color='inherit',
  mt, mb,
  ml, mr,
  isUpperCase = true,
}: headingProps) => {
  // DEFAULT VALUE
  const DEFAULT_FONT_SIZE = 16;
  const DEFAULT_FONT_WEIGHT = 700;
  const DEFAULT_MARGIN = 0;
  const Icon = icon;

  
  const styles = {
    display: 'flex',
    alignItems: 'center',
    color: color,
    fontSize:     `${fontSize || DEFAULT_FONT_SIZE}px`,
    fontWeight:   `${fontWeight || DEFAULT_FONT_WEIGHT}`,
    marginTop:    `${mt || DEFAULT_MARGIN}px`,
    marginBottom: `${mb || DEFAULT_MARGIN}px`,
    marginLeft:   `${ml || DEFAULT_MARGIN}px`,
    marginRight:  `${mr || DEFAULT_MARGIN}px`,
  };
  const TITLE = (isUpperCase)
    ? title.toLocaleUpperCase()
    : title;

  return (
    <div style={styles}>
      {Icon && <Icon style={{ marginRight: "5px" }} />}
      <span>{TITLE}</span>
    </div>
  )
};
