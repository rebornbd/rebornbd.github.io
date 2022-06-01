import {
  OutlineLinkIcon,
  LinkIcon
} from "./Icons";
import classes from "./Image.module.css";


interface imageProps {
  src: string;
  width?: number | "auto" | "100%";
  height?: number;
  alt?: string;
  flex?: number;
  minWidth?: number;
  border?: string;
  borderRadius?: number;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down",
  isShowHoverEffect?: boolean;
  styles?: React.CSSProperties;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}


export const Image = ({
  src,
  width="100%",
  height=200,
  alt="",
  flex=0,
  minWidth=220,
  border="none",
  borderRadius=0,
  objectFit="fill",
  isShowHoverEffect=false,
  styles={},
  mt=0,
  mb=0,
  ml=0,
  mr=0
}: imageProps) => {
  return (
    <div 
      className={classes.imageContainer}
      style={{
        flex: flex,
        width: width,
        height: height,
        minWidth: minWidth,
      }}
      >
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={classes.image}
        style={{
          flex: flex,
          width: "100%",
          height: "100%",
          minWidth: minWidth,
          border: border,
          borderRadius: borderRadius,
          objectFit: objectFit,
          margin: `${mt}px ${mr}px ${mb}px ${ml}px`,
          cursor: (isShowHoverEffect) ? "pointer" : "default",
          ...styles
        }}
      />

      {isShowHoverEffect && <LinkIcon className={classes.chainIcon} />}
    </div>
  )
}
