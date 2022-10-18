import React, { ReactElement } from 'react';
import PageHeadWithImage from "./PageHeadWithImage";
import Layout from "../Layout";


interface iPageProps {
    homepage?: boolean,
    pageName?: string,
    imageClassName?: string,
    children?: ReactElement,
}
export interface iPage {
    (props: iPageProps): JSX.Element;
    getLayout(page: ReactElement): JSX.Element;
}

const Page: iPage = (props: iPageProps) => {
    const { homepage, pageName, imageClassName, children } = props;
    return (
        <div className="page">
            <div className={!homepage ? "pageContainer" : ""}>
                <PageHeadWithImage
                    imageClassName={imageClassName}
                    pageName={pageName}
                />
                {children}
            </div>
        </div>
    )
}

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;