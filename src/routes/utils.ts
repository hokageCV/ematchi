export function shuffleArray<T>(array: T[]) {
    // fisher-yates shuffle algo: inplace array shuffle
    let i = array.length;

    while (i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

export function getTwemojiUrl(emoji: string) {
    const code = [...emoji].map((char) => char.codePointAt(0)!.toString(16)).join("-");

    return `/twemoji/${code}.svg`;
}
