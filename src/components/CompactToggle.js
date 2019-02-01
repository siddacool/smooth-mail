export default class extends HTMLElement {
  constructor() {
    super();
    this.compact = false;

    this.innerHTML = `
      <a href="#">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z"/></svg>
      </a>
    `;
  }

  handleClick(e) {
    e.preventDefault();
    this.compact = !this.compact;
    const mailApp = document.querySelector('smooth-mail-app');
    const aside = document.querySelector('aside');

    mailApp.setAttribute('workspace', this.compact ? 'compact' : '');
    aside.classList.toggle('show');
  }

  connectedCallback() {
    this.addEventListener('click', this.handleClick);
  }
}
