import React, { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Error from '../components/Error';


const ClientError = () => {
    const DynamicPage = dynamic(() => import('../components/Page'), { ssr: false });
    return (
        <DynamicPage
            pageName='pageNotFound'
            imageClassName='error'
            children={<Error pageName='pageNotFound' />}
        />
    );
};

ClientError.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default ClientError;