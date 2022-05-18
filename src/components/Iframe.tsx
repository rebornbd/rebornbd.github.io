import { v4 as uuidv4 } from 'uuid';


interface iframeProps {
  src: string;
  width?: number | "100%";
  height?: number;
}

export const Iframe = ({ src, width="100%", height=500 }: iframeProps) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      frameBorder="0" 
      // allowTransparency={true}
      allow="encrypted-media;"
      title={uuidv4()}
      style={{
        width: "100%",
        borderRadius: "4px",
      }}
    />
  )
}
