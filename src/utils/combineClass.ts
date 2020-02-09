const CLASS_PREFIX = "prefix-";

export const combineClass = (...className: string[]) => {
    const resultName = className.slice(0);
    resultName[0] = CLASS_PREFIX + className[0];

    return resultName
        .join(' ')
        .trim();
};
