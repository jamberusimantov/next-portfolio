import React, { forwardRef, ReactElement } from "react";
import styles from "./CustomLink.module.css";
import Link from 'next/link';


interface iCustomLinkProps {
    children?: ReactElement | ReactElement[] | string,
    href?: string,
    target?: keyof { "_blank": "" },
    title?: string,
    disabled?: boolean,
    testid?: string,
    className?: string,
    prefetch?: boolean 
};

const CustomLink = forwardRef<HTMLAnchorElement, iCustomLinkProps>((props, ref) =>
    <Link
        href={props.href ?? "/path/to/somewhere"}
        shallow
        replace
        passHref
        prefetch={props.prefetch ?? false}
        children={<a
            data-testid={props.testid}
            ref={ref}
            target={props.target}
            title={props.title}
            children={props.children?? "/path/to/somewhere"}
            className={props.disabled ? styles.disabled : props.className ?? styles.link}
        />
        }
    />
);

export default CustomLink;