import styles from './InstallButton.module.css'
import Button from "./Button";
import classNames from "classnames";

export type ButtonStyle = "simple" | "extended-with-logos";

type Props = {
  style: ButtonStyle,
  className?: string,
}

export default function InstallButton({style, className}: Props) {
  if (style === "simple") {
    return (
      <Button href="/install" className={className}>Install</Button>
    )
  }
  return (
    <div className={classNames(styles.container, className)}>
      <Button href="/install">Install GreenScreen</Button>
      <img src="/firefox_logo_2019.svg" alt="Firefox Browser Logo" className={styles.logo}/>
      {/*<img src="/chrome_logo_2022.svg" alt="Google Chrome Browser Logo" className={styles.logo}/>*/}
    </div>
  )
}