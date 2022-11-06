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

a:-webkit-any-link {
  text-decoration: none;
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

.sidebar-item {
    padding: 12px;
    margin-bottom: 25px;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
}

.sidebar-item:focus {
    outline: none;
}

.sidebar-item.active {
    font-weight: bold;
    padding: 12px;
    margin: 0 0 25px 10px;
    background-color: #ededed;
    color: #000;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    position: relative;
}

.sidebar-item.active::before {
    content: "";
    background-color: #3eb08f;
    width: 30px;
    height: 30px;
    float: right;
    border-radius: 50%;
    box-shadow: 15px 15px 0 #ededed;
    position: absolute;
    top: -30px;
    right: 0;
}

.sidebar-item.active::after {
    content: "";
    background-color: #3eb08f;
    width: 30px;
    height: 30px;
    float: right;
    border-radius: 50%;
    box-shadow: 15px -15px 0 #ededed;
    position: absolute;
    bottom: -30px;
    right: 0;
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

.myDatePicker {
  z-index: 0 !important;
}

.rmdp-prime.rmdp-wrapper {
  border: 1px solid #3eb08f;
}

.rmdp-prime .rmdp-border-right {
  border-right: 1px solid #3eb08f !important; 
}

.rmdp-shadow {
  box-shadow: 0px 11px 4px rgba(0, 0, 0, 0.01), 0px 6px 4px rgba(0, 0, 0, 0.05), 0px 3px 3px rgba(0, 0, 0, 0.09), 0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
}

.rmdp-header {
  background-color: #3eb08f;
  border-top-left-radius: 8px;
  border: none !important;
}

.rmdp-header span {
  color: #fff !important;
  font-weight: bold;
  font-size: 1.3em !important;
}

.rmdp-panel-header {
  background-color: #3eb08f;
  border-top-right-radius: 8px;
  color: #fff !important;
  font-weight: bold;
  font-size: 1em !important;
  border: none !important;
}

.green .rmdp-arrow {
    border: solid #fff;
    border-width: 0 2px 2px 0;
}

.rmdp-wrapper {
  border-radius: 8px;
}

.rmdp-day-picker {
  padding: 12px;
  width: 100%;
  height: 100%;
}

.rmdp-day {
  width: 4vw;
  height: 8vh;
}

.rmdp-week-day {
  font-size: 18px;
  font-weight: bold;
  width: 4vw;
}

.rmdp-day span{
  font-size: 24px;
  border-radius: 8px !important;
  left: 0;
  right: 0;
  color: #313131;
}

.rmdp-day.rmdp-deactive span {
  color: #909090 !important;
}

`;

export default GlobalStyle;