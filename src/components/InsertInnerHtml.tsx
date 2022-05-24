import { marked } from "marked";


interface insertInnerHtmlProps {
  text: string;
  minWidth?: number;
  flex?: number;
  fontSize?: number;
  fontWeight?: number;
}

export const InsertInnerHtml = ({ text, flex=0, minWidth=220, fontSize=16, fontWeight=400 }: insertInnerHtmlProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      style={{
        flex: flex,
        minWidth: minWidth,
        textAlign: "justify",
        fontSize: fontSize,
        fontWeight: fontWeight
      }}
    />
  )
}
