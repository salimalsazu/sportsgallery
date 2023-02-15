import Layout from '@/Components/Layout'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { store } from '../Redux/Store/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps, session }) {
  return (

    <Provider store={store} >
      <SessionProvider session={session}><Layout><Component {...pageProps} /></Layout></SessionProvider>
    </Provider>

  )
}

