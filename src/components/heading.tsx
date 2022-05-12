interface headingProps {
  title: string;
  fontSize?: Number;
  fontWeight?: Number;
  mt?: Number;
  mb?: Number;
  ml?: Number;
  mr?: Number;
  isUpperCase?: Boolean;
}


export const Heading = ({
  title,
  fontSize,
  fontWeight,
  mt, mb,
  ml, mr,
  isUpperCase = true,
}: headingProps) => {
  // DEFAULT VALUE
  const DEFAULT_FONT_SIZE = 20;
  const DEFAULT_FONT_WEIGHT = 700;
  const DEFAULT_MARGIN = 0;

  
  const styles = {
    fontSize:     `${fontSize || DEFAULT_FONT_SIZE}px`,
    fontWeight:   `${fontWeight || DEFAULT_FONT_WEIGHT}`,
    marginTop:    `${mt || DEFAULT_MARGIN}px`,
    marginBottom: `${mb || DEFAULT_MARGIN}px`,
    marginLeft:   `${ml || DEFAULT_MARGIN}px`,
    marginRight:  `${mr || DEFAULT_MARGIN}px`,
  };

  return (isUpperCase) 
    ? <div style={styles}>{title.toLocaleUpperCase()}</div>
    : <div style={styles}>{title}</div>
};
