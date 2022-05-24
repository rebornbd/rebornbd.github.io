import styles from "./DownloadLink.module.css";


interface downloadLinkProps {
  url: string;
  value: string;

  color?: string;
  bgColor?: string;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
}

export const DownloadLink = (
{
  url,
  value,
  color = '#dddddd',
  bgColor = '#2C394B',
  pl = 0, 
  pr = 0, 
  pt = 0, 
  pb = 0
}: downloadLinkProps) => {
  const STYLES = {
    padding: `${pt}px ${pr}px ${pb}px ${pl}px`,
    color: `${color}`,
    backgroundColor: `${bgColor}`
  };


  return (
    <a
      className={styles.aTag}
      style={STYLES}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >{value}</a>
  )
}
