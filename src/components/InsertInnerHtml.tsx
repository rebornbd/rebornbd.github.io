import { marked } from "marked";


interface insertInnerHtmlProps {
  text: string;
  minWidth?: number;
  flex?: number;
}

export const InsertInnerHtml = ({ text, flex=0, minWidth=250 }: insertInnerHtmlProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      style={{
        flex: flex,
        minWidth: minWidth,
        textAlign: "justify"
      }}
    />
  )
}
