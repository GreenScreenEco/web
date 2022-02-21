import styles from './Button.module.css'
import {MouseEventHandler, ReactNode} from "react";
import {useRouter} from "next/router";
import {UrlObject} from "url";

type Props = {
  href?: UrlObject | string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  children: ReactNode,
}

export default function Button({href, onClick, children}: Props) {
  const router = useRouter();

  if (href != null) {
    return (
      <button type="button" onClick={() => router.push(href)} className={styles.button}>{children}</button>
    )
  } else {
    return (
      <button type="button" onClick={onClick} className={styles.button}>{children}</button>
    )
  }
}