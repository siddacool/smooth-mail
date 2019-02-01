import Nav from '../partials/Nav';

export default function () {
  document.getElementById('wrapper').innerHTML = `
    <smooth-mail-app>
      <aside>
      </aside>
      ${Nav()}
      <main>
      </main>
    </smooth-mail-app>
  `;
}
