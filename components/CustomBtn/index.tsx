import React, { forwardRef } from 'react';
import type { MouseEventHandler, CSSProperties } from 'react';
import styles from './CustomBtn.module.css'
import { JsxElement } from 'typescript';


interface iCustomBtnProps {
    id?: string,
    className?: string,
    text?: string,
    status?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    handleMouseEnter?: MouseEventHandler<HTMLButtonElement>;
    handleMouseLeave?: MouseEventHandler<HTMLButtonElement>;
    type?: keyof { "button": "", "submit": "", "reset": "" };
    title?: string;
    style?: CSSProperties;
    children?: JsxElement
}

const CustomBtn = forwardRef<HTMLButtonElement, iCustomBtnProps>((props, ref) => {
    const { id, className, text, status, handleClick, type = "button", handleMouseEnter, handleMouseLeave } = props;
    return <button
        ref={ref}
        id={id}
        className={`${className ?? ""} ${styles.button}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        type={type}
        children={[
            text && <p key={0}>{text}</p>,
            status && <div className={status} key={1}></div>
        ]}
    />

});

export default CustomBtn;