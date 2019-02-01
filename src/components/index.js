import LogoElm from './LogoElm';
import OneBtn from './OneBtn';

// Main component
class SmoothMailApp extends HTMLElement {}

const componentCollection = {
  'logo-elm': LogoElm,
  'one-btn': OneBtn,
  'smooth-mail-app': SmoothMailApp,
};

Object.keys(componentCollection).forEach((key) => {
  const elm = componentCollection[key];

  customElements.define(key, elm);
});
