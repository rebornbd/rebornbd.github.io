interface imageProps {
  src: string;
  width?: number | "auto";
  height?: number;
  alt?: string;
  flex?: number;
  minWidth?: number;
}


export const Image = ({
  src,
  width="auto",
  height=200,
  alt="",
  flex=0,
  minWidth=250 }: imageProps) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      style={{
        flex: flex,
        height: height,
        width: width,
        minWidth: minWidth
      }}
    />
  )
}
