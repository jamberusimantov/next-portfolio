import React from 'react'
import Image from "next/image"
import { btnTypes } from './types'

const Svg = (props: {
    name: string,
    size: number,
    className: string,
    click?: React.MouseEventHandler<HTMLImageElement>
}) => {
    return (
        <div
            style={{
                position: 'relative',
                display: 'inline',
                width: `${props.size}px`,
                height: `${props.size}px`
            }}>
            <Image
                src={`/assets/svg/${props.name}.svg`}
                priority={true}
                className={props.className}
                onClick={props.click}
                alt=""
                layout='fill'
            />
        </div>
    )
}
const CustomLink = (props: {
    url: string,
    className: string,
    child: {
        text?: string,
        name?: string,
        element?: JSX.Element,
        className?: string,
        size?: number
        samePage?: boolean
    }
}) => {
    return (<a
        href={props.url}
        rel="noopener noreferrer"
        target={!props.child.samePage ? "_blank" : undefined}
        className={props.className}
        children={<>
            {props.child.text && <span
                key={0}
                className={'svg_text'}
                children={props.child.text}
            />}
            {props.child.name && <Svg
                key={1}
                name={props.child.name}
                size={props.child.size || 35}
                className={props.child.className || 'svg_round'}
            />}
            {props.child.element}
        </>}
    />)
}
const CustomBtn = (props: {
    click?: React.MouseEventHandler<HTMLButtonElement>,
    type?: keyof typeof btnTypes,
    className: string,
    child: {
        text?: string,
        name?: string,
        className?: string,
        size?: number
    }
}) => {
    return (<button
        type={props.type || 'button'}
        onClick={props.click}
        className={props.className}
        children={<>
            {props.child.text && <span
                key={0}
                className='svg_text'
                children={props.child.text}
            />}
            {props.child.name && <Svg
                key={1}
                name={props.child.name}
                size={props.child.size || 35}
                className={props.child.className || 'svg_round'}
            />}
        </>}
    />)
}







const svg = (name: string, size = 35, className = 'svg') => <Image
    src={`/assets/svg/${name}.svg`}
    priority={true}
    className={className}
    alt=""
    width={size}
    height={size}
/>

const Btn = (props: {
    svg: string,
    size?: number,
    id?: string,
    className?: string,
    text?: string,
    onClick?: (event: React.MouseEvent<HTMLElement>) => void,
    submit?: boolean,
    reset?: boolean,
    disabled?: boolean,

}) => {
    return (
        <button
            children={svg(props.svg, props.size) || props.text}
            id={props.id}
            className={props.className}
            onClick={props.onClick}
            type={props.submit ? 'submit' : props.reset ? 'reset' : 'button'}
            disabled={props.disabled}
        ></button>
    )
}
export { Btn, CustomBtn, CustomLink, Svg }