export const truncateText = (str: string) => {
    if (str.length < 4) return
    str

    return str.substring(0,15) + "...";
};