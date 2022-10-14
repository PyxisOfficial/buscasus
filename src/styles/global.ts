import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Lato', sans-serif;
    overflow: hidden;
}

tbody::-webkit-scrollbar {
    width: 13px;
}

tbody::-webkit-scrollbar-track {
    background: #fff;
    border-bottom-right-radius: 8px;
}

tbody::-webkit-scrollbar-thumb {
    background-color: #2D8272;
    border-radius: 20px;
    border: 3px solid #fff;
}

.versao-incompativel,
.text-versao-imcompativel {
    display: none;
}

.hospital-link,
.adm-link {
    flex: 1;
    color: #000;
    font-weight: bold;
    text-align: center;
    padding: 8px;
    cursor: pointer;
    text-decoration: none;
}

.hospital-link.active {
    color: #fff;
    background-color: #3eb08f;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 20px;
}

.adm-link.active {
    color: #fff;
    background-color: #3eb08f;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 20px;
}

@media (max-width: 999px) {
    .login-container {
        display: none;
    }

    .container {
        display: none;
    }

    .versao-incompativel {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #3eb08f;
        color: #fff;
        height: 100vh;
    }

    .text-versao-imcompativel {
        display: block;
    }
}

`;

export default GlobalStyle;