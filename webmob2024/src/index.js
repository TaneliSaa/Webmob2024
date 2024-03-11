import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { Routes,Route } from 'react-router-dom';
import { Etusivu } from './Komponentit/Etusivu';
import { SormustenRitarit } from './Komponentit/SormustenRitarit';
import { KaksiTornia } from './Komponentit/KaksiTornia';
import { KuninkaanPaluu } from './Komponentit/KuninkaanPaluu';
import { Kartat } from './Komponentit/Kartat';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
