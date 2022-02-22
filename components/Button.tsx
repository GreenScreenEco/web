import styles from './Button.module.css'
import {MouseEventHandler, ReactNode} from "react";
import {useRouter} from "next/router";
import {UrlObject} from "url";
import classNames from "classnames";

export type ButtonStyle = "normal" | "passthrough";

type Props = {
  href?: UrlObject | string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  style?: ButtonStyle,
  className?: string,
  children: ReactNode,
}

export default function Button({href, onClick, style, className, children}: Props) {
  const router = useRouter();

  if (href != null) {
    onClick = () => router.push(href);
  }

  let buttonClassName;
  if (style === "normal" || style === undefined) {
    buttonClassName = styles.buttonNormal;
  } else if (style === "passthrough") {
    buttonClassName = styles.buttonPassthrough;
  } else {
    buttonClassName = undefined;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(buttonClassName, className)}>
      {children}
    </button>
  )
}