import React, { forwardRef } from "react";
import type { ChangeEventHandler, FocusEventHandler, CSSProperties } from "react";
import styles from './CustomInput.module.css'


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
}

const CustomInput = forwardRef<HTMLInputElement, iCustomInputProps>((props, ref) => {
    const { title, required, handleBlur, type = "text", placeholder, style, value, handleChange, description, hasError } = props;
    return (
        <div className={styles.input}>
            <label htmlFor={title} children={title} />
            <input
                ref={ref}
                title={title}
                name={title}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                type={type}
                required={required}
                placeholder={placeholder}
                style={style}
            />
            {hasError && required && <span children={" * " + (description ?? "")} />}
        </div>
    );
});

export default CustomInput;