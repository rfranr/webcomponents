// web component
class HelloWorldComponent extends HTMLElement {

  constructor(){
    super();

    // 
  }

	// connect component
	connectedCallback(){
		this.textContent = 'Hello World pep ' + 29;
	}
}

// register component
customElements.define( 'hello-world', HelloWorldComponent );
