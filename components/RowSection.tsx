import {ReactNode} from "react";
import styles from "./RowSection.module.css";

type ColumnLayoutProps = {
  children: ReactNode,
}

export function RowSection({children}: ColumnLayoutProps) {
  return (
    <section className={styles.rows}>
      {children}
    </section>
  )
}