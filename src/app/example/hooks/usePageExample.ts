import {getUserId} from "../../../request/someRequest";
import {formValidate} from "../../../validator/formValidator";

export interface IFormValues {
    email: string;
    name: string;
}

export const usePageExample = () => {
    const onClick = () => {
        getUserId();
    };
    const onSubmit = (formValues: IFormValues) => {
        formValidate(formValues);
    };

    return {onClick, onSubmit};
};
