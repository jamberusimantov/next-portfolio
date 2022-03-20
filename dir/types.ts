import { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'

type AppPropsWithLayout = AppProps & {
    Component: NextPage & {
        getLayout: (page: ReactElement) => ReactNode
    }
}

type stringKeysObject = {
    [key: string]: any
}

type response = {
    success: boolean,
    data: any,
    error?: string,
    message?: string,
}

enum btnTypes {
    "button" = "button",
    "submit" = "submit",
    "reset" = "reset",
}

type messageFormData = stringKeysObject & {
    name: string,
    email: string,
    phone: string,
    message?: string,
}
type message = messageFormData & { _id: string }

// 
type websiteFormData = stringKeysObject & {
    name: string,
    description: string,
    url: string,
    image: string
}
type website = websiteFormData & { _id: string }

type resumeFormData = stringKeysObject & {
    name: string,
    file: object,
}

type resume = resumeFormData & { _id: string }
// 

export type {
    AppPropsWithLayout,
    stringKeysObject,
    response,
    btnTypes,
    messageFormData,
    message,
    // 
    websiteFormData,
    website,
    resumeFormData,
    resume,
}