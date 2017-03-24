 /*check that the index.js file is loading*/
let message ="Hello from jess";
console.log(message);

 /*use react and react-dom modules*/
import React from 'react';
import { render } from 'react-dom';

 /*use module from components/app.js*/
import App from 'components/app';

 /*render components/app.js in the dom*/
render(<App />, document.getElementById('app'))
