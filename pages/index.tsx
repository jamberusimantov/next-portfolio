import React from 'react';
import Page from '../components/Page';
import { iPage } from 'components/Page';


const Home: iPage = () => <Page
    imageClassName={" "}
    homepage
/>

Home.getLayout = Page.getLayout;

export default Home;