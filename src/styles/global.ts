import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  --rmdp-primary-green: #3eb08f;
  --rmdp-secondary-green: #3eb08f;
  --rmdp-shadow-green: #3eb08f;
  --rmdp-today-green: #95d2c1;
  --rmdp-hover-green: #3eb08f;
  --rmdp-deselect-green: #3eb08f;
}

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

.green .rmdp-wrapper {
  border: 1px solid var(--rmdp-secondary-green);
  box-shadow: 0 0 5px var(--rmdp-secondary-green);
}

.green .rmdp-panel-body li {
  background-color: var(--rmdp-primary-green);
  box-shadow: 0 0 2px var(--rmdp-secondary-green);
}

.green .rmdp-week-day {
  color: var(--rmdp-primary-green);
}

.green .rmdp-day.rmdp-deactive {
  color: var(--rmdp-secondary-green);
}

.green .rmdp-range {
  background-color: var(--rmdp-primary-green);
  box-shadow: 0 0 3px var(--rmdp-shadow-green);
}

.green .rmdp-arrow {
  border: solid var(--rmdp-primary-green);
  border-width: 0 2px 2px 0;
}

.green .rmdp-arrow-container:hover {
  background-color: var(--rmdp-primary-green);
  box-shadow: 0 0 3px var(--rmdp-secondary-green);
}

.green .rmdp-panel-body::-webkit-scrollbar-thumb {
  background: var(--rmdp-primary-green);
}

.green .rmdp-day.rmdp-today span {
  background-color: var(--rmdp-today-green);
}

.green .rmdp-rtl .rmdp-panel {
  border-left: unset;
  border-right: 1px solid var(--rmdp-secondary-green);
}

.green .rmdp-day.rmdp-selected span:not(.highlight) {
  background-color: var(--rmdp-primary-green);
  box-shadow: 0 0 3px var(--rmdp-shadow-green);
}

.green .rmdp-day:not(.rmdp-day-hidden) span:hover {
  background-color: var(--rmdp-hover-green) !important;
}

.green .b-deselect {
  color: var(--rmdp-deselect-green);
  background-color: white;
}

.green .rmdp-action-button {
  color: var(--rmdp-primary-green);
}

.green .rmdp-button:not(.rmdp-action-button) {
  background-color: var(--rmdp-primary-green);
}

.green .rmdp-button:not(.rmdp-action-button):hover {
  background-color: var(--rmdp-deselect-green);
}

`;

export default GlobalStyle;