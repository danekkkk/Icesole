export const shortenText = (text: string, maxLength: number = 45): string => {
    if (text.length > maxLength) {
        const shortenedText = text.substring(0, maxLength);
        const lastSpaceIndex = shortenedText.lastIndexOf(' ');
        return shortenedText.substring(0, lastSpaceIndex) + '...';
    }
    return text;
};