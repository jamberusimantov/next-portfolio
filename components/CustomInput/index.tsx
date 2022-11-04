import React, { forwardRef, ChangeEventHandler, FocusEventHandler, CSSProperties } from "react";
import styles from './CustomInput.module.css';


interface iCustomInputProps {
    title: string;
    value?: string;
    description?: string;
    hasError?: boolean;
    required?: boolean;
    handleBlur?: FocusEventHandler<HTMLInputElement>;
    handleChange?: ChangeEventHandler<HTMLInputElement>;
    type?: keyof { "text": "", "email": "", "tel": "" };
    placeholder?: string;
    style?: CSSProperties;
    testid?: string,
};

const CustomInput = forwardRef<HTMLInputElement, iCustomInputProps>((props, ref) =>
    <div className={styles.input}>
        <label
            htmlFor={props.title}
            className={props.hasError ? styles.error : styles.label}
            children={props.hasError ? " * " + props.description : props.title}
        />
        <input
            ref={ref}
            title={props.title}
            data-testid={props.testid}
            name={props.title}
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            type={props.type}
            required={props.required}
            placeholder={props.placeholder}
            style={props.style}
        />
    </div>
);

export default CustomInput;