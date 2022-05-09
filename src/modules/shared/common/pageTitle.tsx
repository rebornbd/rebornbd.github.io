export const PageTitle = ({
  title,
  fontSize,
  fontWeight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight
}: {
  title: string;
  fontSize?: Number;
  fontWeight?: Number;
  marginTop?: Number;
  marginBottom?: Number;
  marginLeft?: Number;
  marginRight?: Number;
}) => {
  const myStyle = {
    fontSize: `${fontSize || 30}px`,
    fontWeight: `${fontWeight || 700}`,
    marginTop: `${marginTop || 0}px`,
    marginBottom: `${marginBottom || 0}px`,
    marginLeft: `${marginLeft || 0}px`,
    marginRight: `${marginRight || 0}px`
  };

  return <div style={myStyle}>{title}</div>;
};
