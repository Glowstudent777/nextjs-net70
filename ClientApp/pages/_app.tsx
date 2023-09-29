import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

//export default function App({ Component, pageProps }: AppProps) {
//  return <Component {...pageProps} />
//}

function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <Component {...pageProps} />
    </>
}

export default MyApp