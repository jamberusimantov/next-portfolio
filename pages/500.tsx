import React, { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Error from '../components/Error';


const ServerError = () => {
    const DynamicPage = dynamic(() => import('../components/Page'), { ssr: false });
    return (
        <DynamicPage
            pageName='badRequest'
            imageClassName='error'
            children={<Error pageName='badRequest' />}
        />
    );
};

ServerError.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default ServerError; 