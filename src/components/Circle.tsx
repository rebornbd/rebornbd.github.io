import { Tooltip } from 'antd';


interface circleProps {
  timePeriod?: string;
  radius?: number;
  bgColor?: string;
}

export const Circle = ({ timePeriod="", radius=15, bgColor="#7F8487" }: circleProps) => {
  const styles = {
    marginTop: '15px',
    width: `${radius}px`,
    height: `${radius}px`,
    backgroundColor: bgColor,
    borderRadius: '500px',
  };


  return (
    <Tooltip title={timePeriod} color={"#2C394B"} placement="right">
      <div style={styles} />
    </Tooltip>
  )
}
