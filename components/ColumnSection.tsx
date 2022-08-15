import {ReactNode} from "react";
import styles from "./ColumnSection.module.css";

type ColumnLayoutProps = {
  children: ReactNode,
}

export function ColumnSection({children}: ColumnLayoutProps) {
  return (
    <section className={styles.columns}>
      {children}
    </section>
  )
}