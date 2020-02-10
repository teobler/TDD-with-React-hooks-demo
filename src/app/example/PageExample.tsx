import * as React from "react";
import {usePageExample} from "./hooks/usePageExample";

interface IPageExampleProps {
}

export const PageExample: React.FC<IPageExampleProps> = ({}) => {
    const {onClick, onSubmit} = usePageExample();

    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input type="text"/>
            </form>
            <button onClick={onClick}>test</button>
        </div>
    );
};
