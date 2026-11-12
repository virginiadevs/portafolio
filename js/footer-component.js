// MY BRAND FOOTER

class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            footer {
                display: flex; justify-content: center; align-items: center;
                margin: if(media(width < 768px): 4rem 0 4rem; else: 1rem 0);
            }
            footer .my-logo {
                --size: 40px; width: var(--size); height: var(--size);
            }
            footer .my-logo img { 
                width: 100%; 
            }
            footer p {
                font-size: 12px; color: var(--grey); margin-top: 9px;
            }
        </style>
        <footer>
            <figure class="my-logo">
                <img src="img/virginiadevs-logo.webp" alt="Logo de VirginiaDevs">
            </figure>

            <p>Creado con <i class="fas fa-heart"></i> por VirginiaDevs.</p>
        </footer>
        `;
    }
}

customElements.define("brand-footer", myFooter);