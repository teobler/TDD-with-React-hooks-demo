import {act, renderHook} from "@testing-library/react-hooks";

describe('usePageExample', () => {
    let mockGetUserId: jest.Mock;
    let mockValidate: jest.Mock;

    beforeAll(() => {
        mockGetUserId = jest.fn();
        mockValidate = jest.fn();

        jest.mock('../../../../request/someRequest', () => ({
            getUserId: mockGetUserId,
        }));
        jest.mock('../../../../validator/formValidator', () => ({
            formValidate: mockValidate,
        }));
    });

    afterAll(() => {
        mockGetUserId.mockReset();
        mockValidate.mockReset();
    });

    it('should trigger request with test string when click button', () => {
        const {usePageExample} = require('../usePageExample');
        const {result} = renderHook(() => usePageExample());

        act(() => {
            result.current.onClick();
        });

        expect(mockGetUserId).toBeCalled();
    });

    it('should validate form values before submit', () => {
        const {usePageExample} = require('../usePageExample');
        const {result} = renderHook(() => usePageExample());
        const formValues = {id: '1', name: 'name'};

        act(() => {
            result.current.onSubmit(formValues);
        });

        expect(mockValidate).toBeCalledWith(formValues);
    });
});
