// import type { NextPage } from 'next'
import { ReactElement } from 'react';
import PresentationLayout from '../layouts/PresentationLayout';
import { NextPageWithLayout } from '../types/layout';

const Login: NextPageWithLayout = () => {
    return (
        <>
        LoginPage...
        </>
    )
}

export default Login;

Login.getLayout = (page: ReactElement) => {
    return (
        <PresentationLayout>{page}</PresentationLayout>
    )
}