import {render} from "@testing-library/react";
import {Content} from "../Content";
import * as React from "react";


describe('Content', () => {
    it('should render correctly', () => {
        const {container} = render(<Content/>);
        expect(container).toMatchSnapshot();
    });
});
