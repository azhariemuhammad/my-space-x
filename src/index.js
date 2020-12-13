import React from 'react';
import ReactDOM from 'react-dom';

import { DataProvider, createDataClient } from 'react-isomorphic-data';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dataClient = createDataClient({
  initialCache: {},
  ssr: false,
});

ReactDOM.render(
  <React.StrictMode>
    <DataProvider client={dataClient}>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
