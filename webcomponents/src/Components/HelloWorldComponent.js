/**
 * This class describes a hello world component.
 *
 * @class      HelloWorldComponent (name)
 */
class HelloWorldComponent extends HTMLElement {

  /**
   * { item_description }
   */
  //wheels = undefined;

  static get observedAttributes() { return ['wheels']; }

  get wheels(){
    return this.getAttribute('wheels');
  }

  set wheels(newValue){
    this.setAttribute('wheels', newValue);
  }

  constructor(){
    super();

    // 
  }


	/**
   *  life-cycle: connect component
   */
	connectedCallback(){
		this.textContent = 'Hello World Pep have ' + this.wheels + " wheels";
	}

  disconnectedCallback() {
    console.log('Custom square element removed from page.');
  }

  adoptedCallback() {
    console.log('Custom square element moved to new page.');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Custom square element attributes changed.');
    //updateStyle(this);
  }


}

// register component
customElements.define( 'hello-world', HelloWorldComponent );
