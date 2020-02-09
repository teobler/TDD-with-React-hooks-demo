import * as React from "react";
import {combineClass} from "../../utils/combineClass";

export const Content: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
    const { className = '', children, ...restProps } = props;

    return (
        <main className={combineClass('layout-content', className)} {...restProps}>
            {children}
        </main>
    );
};
