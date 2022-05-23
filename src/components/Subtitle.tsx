import { LOVES } from "../data/loves";
import styles from "./Subtitle.module.css";


interface subtitleProps {
  name: string;
}

export const Subtitle = ({ name }: subtitleProps) => {
  const Loves = () => {
    return (
      <div className={styles.lovesContainer}>
        {LOVES && LOVES.map((love, index) => {
          return (LOVES.length === (index+1))
            ? <div key={love}>
                <span className={styles.loveItem}>{love}</span>
              </div>

            : <div className={styles.pr} key={love}>
                <span className={styles.loveItem}>{love}</span>,
              </div>
        })}
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <span className={`${styles.constEqual} ${styles.pr}`}>const</span>
      <span className={styles.pr}>{name}:</span>
      <span className={styles.array}>Array</span>
      <span>&lt;</span>
      <span className={styles.ingredient}>Ingredient</span>
      <span className={styles.pr}>&gt;</span>
      <span className={`${styles.constEqual} ${styles.pr}`}>=</span>
      <span>[</span>
      <Loves />
      <span>];</span>
    </div>
  )
}
