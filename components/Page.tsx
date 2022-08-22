import {ReactElement, ReactNode} from "react";
import Head from "next/head";
import styles from "./Page.module.css";

export type Layout = "simple" | "focused" | null

type PageProps = {
  title: string,
  nav: ReactElement,
  layout: Layout,
  children: ReactNode,
}

export function Page({title, nav, layout, children}: PageProps) {
  let pageClassName;
  if (layout === "simple") {
    pageClassName = styles.single;
  } else if (layout === "focused") {
    pageClassName = styles.focused;
  } else {
    pageClassName = undefined;
  }

  return (
    <div className={pageClassName}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {nav}

      <main>
        {children}
      </main>
    </div>
  )
}