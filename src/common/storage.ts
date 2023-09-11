export const get = (key: string, defaultValue: string | undefined = undefined): undefined | string | JSON => {
    const value = localStorage.getItem(key);

    if (!value) return undefined;

    try {
        return JSON.parse(value);
    } catch (ex) {
        return value;
    }
};

export const set = (key: string, value: string | JSON): void => {
    const strValue = typeof value === "string" ? value : JSON.stringify(value);
    localStorage.setItem(key, strValue);
};

export const remove = (key: string): void => {
    localStorage.removeItem(key);
};

export const has = (key: string): boolean => {
    return localStorage.getItem(key) != null;
}