import { easyEmojis, hardEmojis, mediumEmojis } from "../emojiList";
import type { Level } from "../types";

export const levelList: Level[] = [
    {
        label: "Easy",
        size: 4,
        duration: 60 * 1000,
        emojis: easyEmojis,
    },
    {
        label: "Medium",
        size: 6,
        duration: 60 * 1000,
        emojis: mediumEmojis,
    },
    {
        label: "Hard",
        size: 8,
        duration: 60 * 1000,
        emojis: hardEmojis,
    },
];
