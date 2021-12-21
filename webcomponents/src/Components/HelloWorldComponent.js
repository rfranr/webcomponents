/**
 * This class describes a hello world component.
 *
 * @class      HelloWorldComponent (name)
 */
class HelloWorldComponent extends HTMLElement {

  /**
   * template definition.
   * Notes: this metthod is private
   */
  #template(){
    return `<p> 
      Hello World Pep have ${this.wheels} wheels
    </p>`;
  }

  // -------------------------------------------------- //
  // * Attributes 

  static get observedAttributes() { return ['wheels']; }

  get wheels(){
    return this.getAttribute('wheels');
  }

  set wheels(newValue){
    this.setAttribute('wheels', newValue);
  }
  // -------------------------------------------------- //


  constructor(){
    super();

    // something else
    // ...
  }


  // -------------------------------------------------- //
  // * Life cycle component
	connectedCallback(){
    this.innerHTML = this.#template();
	}

  disconnectedCallback() {
    console.log('Custom square element removed from page.');
  }

  adoptedCallback() {
    console.log('Custom square element moved to new page.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
  }
  // -------------------------------------------------- //


}

// register component
customElements.define( 'hello-world', HelloWorldComponent );
