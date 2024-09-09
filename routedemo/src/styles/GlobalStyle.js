import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background-color: #f0f8ff;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: none;
  }
`;

export default GlobalStyle;

