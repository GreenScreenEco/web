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
  let mainClassName;
  if (layout === "simple") {
    mainClassName = styles.single;
  } else if (layout === "focused") {
    mainClassName = styles.focused;
  } else {
    mainClassName = undefined;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {nav}

      <main className={mainClassName}>
        {children}
      </main>
    </>
  )
}