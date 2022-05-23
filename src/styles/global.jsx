import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        // transition: 0.3s linear;
    }

    html, body {
        font-size: 62.5%;
    }

    body {
        min-height: 100vh;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;