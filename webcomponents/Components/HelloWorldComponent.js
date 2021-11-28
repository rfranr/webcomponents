// web component
class HelloWorldComponent extends HTMLElement {

	// connect component
	connectedCallback(){
		alert(8)
		this.textContent = 'Hello World pep';
	}
}

// register component
customElements.define( 'hello-world', HelloWorldComponent );
