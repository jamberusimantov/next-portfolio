import React, { ReactElement } from 'react';
import { Layout, PageHeadWithImage } from '../components';


const Index = () => {
    const links = [
        { name: 'name1', link: 'url1' },
        { name: 'name2', link: 'url2' },
        { name: 'name3', link: 'url3' },
        { name: 'name4', link: 'ur4' },
    ]
    return (
        <div className="page">
            <div>
                <PageHeadWithImage 
                // customLinks={links} 
                image={true} />
            </div>


        </div>
    )
}
Index.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Index