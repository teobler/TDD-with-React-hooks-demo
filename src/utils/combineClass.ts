const CLASS_PREFIX = "prefix-";

export const combineClass = (...className: string[]) => {
    return className.length === 1 ? `${CLASS_PREFIX}${className[0]}`.trim() : `${CLASS_PREFIX}${className[0]} ${className[1]}`.trim();
};
