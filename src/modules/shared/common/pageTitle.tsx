export const PageTitle = ({
  title,
  fontSize,
  fontWeight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  isUpperCase = true,
}: {
  title: string;
  fontSize?: Number;
  fontWeight?: Number;
  marginTop?: Number;
  marginBottom?: Number;
  marginLeft?: Number;
  marginRight?: Number;
  isUpperCase?: Boolean;
}) => {
  const myStyle = {
    fontSize: `${fontSize || 20}px`,
    fontWeight: `${fontWeight || 700}`,
    marginTop: `${marginTop || 0}px`,
    marginBottom: `${marginBottom || 0}px`,
    marginLeft: `${marginLeft || 0}px`,
    marginRight: `${marginRight || 0}px`,
  };

  return (isUpperCase)
    ? <div style={myStyle}>{title.toLocaleUpperCase()}</div>
    : <div style={myStyle}>{title}</div>
};
