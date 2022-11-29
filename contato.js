class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <hr>
        <b>Fale com a gente:</b><br>
        suporte@safe2pay.com.br |  Tel <b>4003-5591</b>
        </footer>
        `
    }
}

customElements.define('my-footer',MyFooter)