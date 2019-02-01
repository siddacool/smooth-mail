import CompactToggle from './CompactToggle';

// Main component
class SmoothMailApp extends HTMLElement {}

const componentCollection = {
  'smooth-mail-app': SmoothMailApp,
  'compact-toggle': CompactToggle,
};

Object.keys(componentCollection).forEach((key) => {
  const elm = componentCollection[key];

  customElements.define(key, elm);
});
