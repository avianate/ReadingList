import React from "react";
import {storiesOf, action } from "@kadira/storybook";
import Tile from "./Tile";

const mockImageUrl = "https://books.google.com/books/content?id=tY4zrGsW_fUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";
const mockTitle = "The cat in the hat";
const mockSubtitle = "A story about a cat and his hat";
const mockAuthor = "Dr. Seuss";

storiesOf("Tile", module)

    .add("with mocked data", (imageSrc=mockImageUrl, title=mockTitle, subtitle=mockSubtitle, author=mockAuthor) => (
        <Tile image={mockImageUrl} title={title} subtitle={subtitle} details={author} />
    ));