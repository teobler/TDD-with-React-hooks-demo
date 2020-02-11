import {getUserId} from "../../../request/someRequest";

export const usePageExample = () => {
    const onClick = () => {
        getUserId();
    };
    const onSubmit = () => console.log('submit');

    return {onClick, onSubmit};
};
