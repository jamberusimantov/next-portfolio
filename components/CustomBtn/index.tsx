import React, { forwardRef, MouseEventHandler, CSSProperties } from 'react';
import styles from './CustomBtn.module.css';


interface iCustomBtnProps {
    id?: string,
    className?: string,
    text?: string,
    status?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    type?: keyof { "button": "", "submit": "", "reset": "" };
    title?: string;
    style?: CSSProperties;
    testid?: string,
};

const CustomBtn = forwardRef<HTMLButtonElement, iCustomBtnProps>((props, ref) =>
    <button
        id={props.id}
        className={`${props.className ?? ""} ${styles.button}`}
        ref={ref}
        data-testid={props.testid}
        onClick={props.handleClick}
        type={props.type ?? "button"}
        title={props.title}
        children={[
            props.text && <p key={0}>{props.text}</p>,
            props.status && <div key={1} className={props.status}></div>
        ]}
    />
);

export default CustomBtn;