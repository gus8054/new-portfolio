import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
const GlobalStyle = createGlobalStyle`
    ${normalize}
    @font-face {
      font-family: 'MaplestoryOTFBold';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'Bazzi';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'omyu_pretty';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
    }
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: ${(props) => props.theme.font.default}, sans-serif;
      line-height: 1.5;
      font-size: 18px;
      scroll-behavior: smooth;
      background: ${(props) => props.theme.color.background};
      color: white;
      min-height:100vh;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    a {
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: none;
    }
    
    img {
      max-width: 100%;
      display: block;
      pointer-events: none;
    }
        
    li {
      list-style-type: none;
    }
`;
export default GlobalStyle;
