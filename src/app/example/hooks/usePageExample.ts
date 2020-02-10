export const usePageExample = () => {
    const onClick = () => console.log("test");
    const onSubmit = () => console.log("submit");

    return {onClick, onSubmit};
};
