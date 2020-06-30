class UserCard extends HTMLElement {
    contructor() {
        super();
        this.innerHTML = `John Doe`;
    }
}

window.customElements.define('user-card', UserCard);