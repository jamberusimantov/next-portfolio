import React from 'react';
import dynamic from 'next/dynamic';
import Page from '../components/Page';
import { iPage } from 'components/Page';


const ServerError: iPage = () => {
    const DynamicComponentWithNoSSR = dynamic(() => import('../components/Error'), { ssr: false });
    return (
        <Page
            pageName={'badRequest'}
            imageClassName=' '
            children={<DynamicComponentWithNoSSR pageName='badRequest' />}
        />
    );
}

ServerError.getLayout = Page.getLayout;

export default ServerError; 