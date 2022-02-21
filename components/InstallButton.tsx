import styles from './InstallButton.module.css'
import Button from "./Button";

export type ButtonStyle = "simple" | "extended-with-logos";

type Props = {
  style: ButtonStyle,
}

export default function InstallButton({style}: Props) {
  if (style === "simple") {
    return (
      <Button href="/install">Install</Button>
    )
  }
  return (
    <div className={styles.container}>
      <Button href="/install">Install GreenScreen</Button>
      <img src="/firefox_logo_2019.svg" alt="Google Chrome Browser Logo" className={styles.logo}/>
      <img src="/chrome_logo_2022.svg" alt="Firefox Browser Logo" className={styles.logo}/>
    </div>
  )
}