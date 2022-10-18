import React, { forwardRef } from "react";
import type { MouseEventHandler } from "react";
import Link from 'next/link';
import styles from "./Link.module.css"

interface iCustomLinkProps {
    children?: JSX.Element | JSX.Element[] | string,
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    href?: string,
    target?: keyof { "_blank": "" },
    title?: string,
    disabled?: boolean,
    className?: string,
}

const CustomLink = forwardRef<HTMLAnchorElement, iCustomLinkProps>((props, ref) => {
    const { href = "/path/to/somewhere", children = "CLICK", target, title, disabled } = props;

    return <Link
        href={href}
        children={
            <AnchorWrapper
                children={children}
                target={target}
                title={title}
                className={disabled ? styles.disabled : undefined}
            />}
        ref={ref}
        shallow
        replace
        passHref
        prefetch={false}

    />
});

const AnchorWrapper = forwardRef<HTMLAnchorElement, iCustomLinkProps>((props, ref) => {
    const { href, children, onClick } = props;
    return <a
        {...props}
        href={href}
        children={children}
        onClick={(e) => onClick && onClick(e)}
        ref={ref}
        data-testid="link"
    />
});

export default CustomLink;