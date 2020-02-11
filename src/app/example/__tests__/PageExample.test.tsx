import {PageExample} from "../PageExample";
import {render} from "@testing-library/react";
import * as React from "react";

describe('PageExample', () => {
    it('should render correctly', () => {
        const {container} = render(<PageExample/>);
        expect(container).toMatchSnapshot();
    });
});