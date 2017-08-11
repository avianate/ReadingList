import React from "react";
import {storiesOf, action } from "@kadira/storybook";
import SearchForm from "./SimpleForm";

storiesOf("SearchForm", module)

    .add("default", () => (
        <SearchForm></SearchForm>
    ));