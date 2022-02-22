import {ReactElement, ReactNode} from "react";
import Head from "next/head";
import styles from "./Page.module.css";

export type Layout = "single" | "columns"

type PageProps = {
  title: string,
  nav: ReactElement,
  layout: Layout,
  children: ReactNode,
}

export function Page({title, nav, layout, children}: PageProps) {
  let mainClassName;
  if (layout === "single") {
    mainClassName = styles.single;
  } else if (layout === "columns") {
    mainClassName = styles.columns;
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

type PageColumnProps = {
  children: ReactNode,
}

export function PageColumn({children}: PageColumnProps) {
  return (
    <section>{children}</section>
  )
}