import { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'

type AppPropsWithLayout = AppProps & {
    Component: NextPage & {
        getLayout: (page: ReactElement) => ReactNode
    }
}
type stringKeysObject = { [key: string]: any }
type response = {
    success: boolean,
    data: any,
    error?: string
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
}
type message = messageFormData & { _id: string }






type formConfig = {
    schema: string,
    admin?: boolean,
}
type website = {
    name: string,
    description: string,
    url: string,
    image: string
    _id: string
}
type resume = {
    name: string,
    description: string,
    file: string
    _id: string
}

type formData = stringKeysObject & {
    name?: string,
    description?: string,
    url?: string,
    image?: string,
    file?: string,
    subject?: string,
    message?: string,
    _id?: string
}

export type {
    AppPropsWithLayout,
    stringKeysObject,
    response,
    btnTypes,
    messageFormData,
    message,



    formConfig,
    website,
    resume,
    formData,
}