import React from "react";
import {storiesOf, action} from "@kadira/storybook";
import TileList from "./TileList";

const mockImageUrl = "https://books.google.com/books/content?id=tY4zrGsW_fUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";
const mockTitle = "The cat in the hat";
const mockSubtitle = "A story about a cat and his hat";
const mockAuthor = "Dr. Seuss";

let mockItems = [
    {
        image: mockImageUrl,
        title: mockTitle,
        details: [
            mockAuthor
        ],
        subtitle: mockSubtitle,
        actions: []
    },
    {
        image: "https://books.google.com/books/content?id=AbLxAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE738lWeV7PauaZm6g6ahx7Nqdkp0n1sv0M6Y56Z7FD-yMKnmE_snd8LAMzX8_FgUp1i3nA2-7sjJsDm4uatSuBd5w5pRmZURS_QA1nXko9z4MlX_TBl676w4KPFgUGVpZ4mnS2fp",
        title: "Horton hears a who!",
        details: [
            mockAuthor
        ],
        subtitle: "An elephant and his big ears",
        actions: []
    }
];

storiesOf("TileList", module)

    .add("default", () => (
        <TileList 
            tiles={mockItems}
        />
    ));