import React from 'react'
import dynamic from 'next/dynamic'


const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/Error/ErrorServer'),
    { ssr: false }
)

const PageNotFound = () => {

    return (
        <DynamicComponentWithNoSSR />
    )
}
export default PageNotFound;