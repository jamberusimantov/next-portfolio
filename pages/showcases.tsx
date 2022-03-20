import React, { ReactElement } from 'react';
import styles from '../styles/Showcases.module.css'
import { Layout, Form } from '../components';
import Image from "next/image";
import dbConnection from '../dir/mongoDB/connection';
import Websites from '../dir/mongoDB/modals/Websites';
import { response, website } from '../dir/types';
import { CustomLink } from '../dir/elements';


const getServerSideProps = async () => {
    try {
        console.log('connecting DB...');
        await dbConnection();
        console.log('getting from websites DB initial props');
        const docs: website[] = await Websites.find();
        if (!docs) throw new Error(`GET showcases returned falsy`);
        console.log(`got from websites DB : ${docs.length} websites`);
        return ({
            props: { success: true, data: JSON.stringify(docs) }
        })
    } catch (error: any) {
        return ({
            props: { success: false, data: [], error: error.message }
        })
    }
}

const mockShowcases = [{
    name: 'next_memo',
    description: 'N/A',
    url: 'N/A',
    image: '/assets/showcases/next_memo_270x180.jpg',
    _id: 'N/A',
},
{
    name: 'next_weather',
    description: 'N/A',
    url: 'N/A',
    image: '/assets/showcases/next_weather_270x180.jpg',
    _id: 'N/A',
},
{
    name: 'tech_career',
    description: 'N/A',
    url: 'N/A',
    image: '/assets/showcases/tech_career_270x180.jpg',
    _id: 'N/A',
},
{
    name: 'snake',
    description: 'N/A',
    url: 'N/A',
    image: '/assets/showcases/snake_270x180.jpg',
    _id: 'N/A',
},
{
    name: 'memories',
    description: 'N/A',
    url: 'N/A',
    image: '/assets/showcases/memories_270x180.jpg',
    _id: 'N/A',
},
{
    name: 'weather',
    description: 'N/A',
    url: 'N/A',
    image: '/assets/showcases/weather_270x180.jpg',
    _id: 'N/A',
}];


const Showcases = (props: response) => {

    const data: website[] =
        props.success ? JSON.parse(props.data) :
            mockShowcases;

    return (
        <div className='pageContainer'>
            <div className="pageTitle">
                <h2>חלק מהעבודות שביצעתי</h2>
            </div>
            <div className='pageBody'>

                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {data && React.Children.toArray(data.map((showcase, i) =>
                            <CustomLink
                                url={showcase.url}
                                className={styles.showcaseLink}
                                child={{
                                    element: <div className={styles.card_projects} >
                                        <div className={styles.cardImageContainer}>
                                            <div className={styles.img}>
                                                <Image
                                                    src={`${showcase.image}`}
                                                    alt={showcase.name}
                                                    layout='fill'
                                                />
                                            </div>
                                        </div>
                                        <h3>{showcase.name} &rarr;</h3>
                                        <p>{showcase.description}</p>
                                    </div>
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className='formSection'>
                    <p>.רוצים לשמוע עוד? מלאו פרטים עכשיו ואחזור אליכם בהקדם</p>
                    <Form />
                </div>
            </div>
        </div>
    )
}
Showcases.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export { getServerSideProps };
export default Showcases;