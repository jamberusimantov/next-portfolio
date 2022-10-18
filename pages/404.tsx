import React from 'react';
import dynamic from 'next/dynamic';
import Page from '../components/Page';
import { iPage } from 'components/Page';


const ClientError: iPage = () => {
    const DynamicComponentWithNoSSR = dynamic(() => import('../components/Error'), { ssr: false });
    return (
        <Page
            pageName={'pageNotFound'}
            imageClassName=' '
            children={<DynamicComponentWithNoSSR pageName='pageNotFound' />}
        />
    );
}

ClientError.getLayout = Page.getLayout;

export default ClientError;