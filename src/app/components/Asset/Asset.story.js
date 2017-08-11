import React from "react";
import {storiesOf, action} from "@kadira/storybook";
import Asset from "./Asset";

const mockImageUrl = "https://books.google.com/books/content?id=tY4zrGsW_fUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";
const mockTitle = "The cat in the hat";
const mockSubtitle = "A story about a cat and his hat";
const mockAuthor = "Dr. Seuss";



let mockAssets = [
    {
        id: 0,
        image: mockImageUrl,
        title: mockTitle,
        details: [
            mockAuthor
        ],
        subtitle: mockSubtitle,
        isRead: false
    },
    {
        id: 1,
        image: "https://books.google.com/books/content?id=AbLxAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE738lWeV7PauaZm6g6ahx7Nqdkp0n1sv0M6Y56Z7FD-yMKnmE_snd8LAMzX8_FgUp1i3nA2-7sjJsDm4uatSuBd5w5pRmZURS_QA1nXko9z4MlX_TBl676w4KPFgUGVpZ4mnS2fp",
        title: "Horton hears a who!",
        details: [
            mockAuthor
        ],
        subtitle: "An elephant and his big ears",
        isRead: false
    }
];

storiesOf("Asset", module)

    .add("NoBooks", () => (
        <Asset
            onAdd={action("onAddBook")}
            onRemove={action("onRemove")}
            onToggle={action("onToggle")}

        />
    ))

    .add("WithBooks", ({assets=mockAssets}) => (
        <Asset
            onAdd={action("onAddBook")}
            onRemove={action("onRemove")}
            onToggle={action("onToggle")}
            assets={assets}
        />
    ))


