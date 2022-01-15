import wrapper from 'app/store'
import '../styles/globals.css'
import { AppPropsWithLayout } from '../types/layout'

const MyApp = ({Component, pageProps: {session, ...pageProps}}: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(<Component {...pageProps} />)
}

export default wrapper.withRedux(MyApp)