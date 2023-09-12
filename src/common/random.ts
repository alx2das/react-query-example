export const number = (min = 1, max = 100) => {
    return parseInt( "" + Math.random() * (max - min + 1) + min);
};

export const string = (length = 5) => {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const strLength = str.length - 1;

    let result = "";

    // while (index < length) {
    //     result += str[number(0, strLength)];
    //     index++
    // }

    for (let i = 0; i <= length; i++) {
        result += str[number(0, strLength)];
    }

    return result;
};