import '../styles/globals.css'
import {AppProps} from "next/app";

export default function Application({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
