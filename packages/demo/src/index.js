import React from 'react';
import { createRoot } from 'react-dom/client';

import 'semantic-ui-css/semantic.css';
import 'my-react-component/styles.css';

import App from './App';

import './index.css';


const root = createRoot(document.getElementById('root'));

root.render(React.createElement(App));
