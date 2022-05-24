import { IconType } from 'react-icons/lib';
import styles from "./Button.module.css";


interface buttonProps {
  label: string;
  onClickHandler: () => void;

  Icon?: IconType;
  color?: string;
  bgColor?: string;
  fontSize?: number;
  fontWeight?: number;
}

export const Button = (
{
  label,
  onClickHandler,
  Icon,
  color="#1e1e1e",
  bgColor="#ffffff",
  fontSize=16,
  fontWeight=800
}: buttonProps) => {
  const Label = (Icon)
    ? <div className={styles.labelContainer}>
        <Icon />
        <span className={styles.label}>{label}</span>
      </div>
    : <span>{label}</span>;

  const STYLES = {
    color: color,
    backgroundColor: bgColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    opacity: 1,
    cursor: 'pointer'
  };


  return (
    <button
      onClick={onClickHandler}
      style={STYLES}
      type='button'
    >{Label}</button>
  )
}
