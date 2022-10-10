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

.select-disable {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}

.versao-incompativel,
.text-versao-imcompativel {
    display: none;
}

@media (max-width: 999px) {
    .container-login {
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