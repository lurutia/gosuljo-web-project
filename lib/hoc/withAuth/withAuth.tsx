import {  NextPageContext } from "next"
import { NextPageWithLayout } from "types/layout"
import Router from 'next/router'
import wrapper from "app/store"
import axios from 'axios'
import { accountStateChange } from "app/modules/account/accountSlice"
import { serverUrl } from "config/const"

const loginPath = '/login'; /* Define your login route address. */

const withAuth = (WrappedComponent: NextPageWithLayout) => {
    const hocComponent = ({...props}) => <WrappedComponent {...props} />

    hocComponent.getInitialProps = wrapper.getInitialPageProps((store) => async (context: NextPageContext) => {
        let userAuth = store.getState().account.isLogin
        const isServer = context.req ? true : false
        
        if (!userAuth) {
            if (isServer) {
                const cookie = context.req?.headers.cookie || ''
                await axios.get(serverUrl + '/account/authenticated', {headers: {Cookie: cookie}}).then(response => {
                    if (response.status === 200) {
                        store.dispatch(accountStateChange({...store.getState().account, isLogin: true}))
                        userAuth = true
                    }
                }).catch(error => {
                    console.error(error);
                })
            } else {
                /* client side somthing... */
            }
        }

        // Are you an authorized user or not?
        if (!userAuth) {
            // Handle server-side and client-side rendering.
            if (context.res) {
                context.res?.writeHead(302, {
                    Location: loginPath
                })
                context.res?.end()
            } else {
                Router.replace(loginPath)
            }
        } else if (WrappedComponent.getInitialProps) {
            const wrappedProps = await WrappedComponent.getInitialProps({...context})
            return {...wrappedProps}
        }
    })

    hocComponent.getLayout = WrappedComponent.getLayout

    return hocComponent
}

export default withAuth
