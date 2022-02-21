import NextLink from "next/link"
import {ReactNode} from "react";
import {UrlObject} from "url";

type Props = {
  href: UrlObject | string,
  className?: string,
  children: ReactNode,
}

export default function Link({href, className, children}: Props) {
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}