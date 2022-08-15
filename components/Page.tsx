import {ReactElement, ReactNode} from "react";
import Head from "next/head";
import styles from "./Page.module.css";

export type Layout = "single" | null

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