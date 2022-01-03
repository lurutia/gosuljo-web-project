import { store } from 'app/store'
import { Provider } from 'react-redux'
import '../styles/globals.css'
// import type { AppProps } from 'next/app'
// import { NextPage } from 'next'
// import { ReactElement, ReactNode } from 'react'
import { AppPropsWithLayout } from '../types/layout'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
    )
}

export default MyApp
