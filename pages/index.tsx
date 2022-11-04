import React, { ReactElement } from 'react';
import Page from '../components/Page';
import Layout from '../components/Layout';


const Home = () => <Page
    imageClassName={"homepage"}
    homepage
/>

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;