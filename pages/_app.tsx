import '../styles/globals.css'
import {AppProps} from "next/app";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

export default function Application({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
