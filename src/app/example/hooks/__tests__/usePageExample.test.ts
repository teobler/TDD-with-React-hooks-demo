import {act, renderHook} from "@testing-library/react-hooks";

describe('usePageExample', () => {
    let mockGetUserId: jest.Mock;

    beforeAll(() => {
        mockGetUserId = jest.fn();
        jest.mock('../../../../request/someRequest', () => ({
            getUserId: mockGetUserId,
        }));
    });

    it('should trigger request with test string when click button', () => {
        const {usePageExample} = require('../usePageExample');
        const {result} = renderHook(() => usePageExample());

        act(() => {
            result.current.onClick();
        });

        expect(mockGetUserId).toBeCalled();
    });
});
