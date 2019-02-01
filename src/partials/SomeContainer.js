import { title } from '../project.json';
import icon from '../resources/images/icon.png';

export default function () {
  return `
    <main class="home-container">
      <logo-elm src="${icon}"></logo-elm>
      <h2>This is</h3>
      <h1>${title}</h1>
      <one-btn></one-btn>
    </main>
  `;
}
