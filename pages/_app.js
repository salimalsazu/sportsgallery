import Layout from '@/Components/Layout'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'


export default function App({ Component, pageProps, session }) {
  return <SessionProvider session={session}><Layout><Component {...pageProps} /></Layout></SessionProvider>
}

