import { Tooltip } from 'antd';


export const Circle = ({ timePeriod="", radius=15 }: { timePeriod?: string; radius?: Number }) => {
  const styles = {
    width: `${radius}px`,
    height: `${radius}px`,
    borderRadius: '500px',
    backgroundColor: '#000000',
    marginTop: '15px'
  };


  return (
    <Tooltip title={timePeriod} color={"#2C394B"} placement="right">
      <div style={styles} />
    </Tooltip>
  )
}
