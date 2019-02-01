import SomeContainer from '../partials/SomeContainer';

export default function () {
  document.getElementById('wrapper').innerHTML = `
    <smooth-mail-app>
      ${SomeContainer()}
    </smooth-mail-app>
  `;
}
