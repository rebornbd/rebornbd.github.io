import { Heading } from "../../../components";
import styles from "./Tags.module.css";


export const Tags = ({ tags }: { tags: Array<string> }) => {
  return (
    <div className={styles.container}>
      {tags && tags.map((tag, index) => (
        <Heading
          title={`#${tag}`}
          fontSize={12}
          fontWeight={400}
          isUpperCase={false}
          key={tag}
        />
      ))}
    </div>
  )
}
