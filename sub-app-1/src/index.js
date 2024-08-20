import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let root 

function render(props) {
  const { container } = props;
  root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.getElementById('root'));

  root.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/subapp1' : '/'}>
      <App />
    </BrowserRouter>);
}
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
// @ts-ignore
export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}
// @ts-ignore
export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}
// @ts-ignore
export async function unmount(props) {
  root.unmount();
}
