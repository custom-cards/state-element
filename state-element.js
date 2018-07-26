class StateElement extends HTMLElement {
  set hass(hass) {
    const entityId = this.config.entity;
    const prefix_string = this.config.prefix
    const show_empty = this.config.show_empty
    const state = hass.states[entityId].state;
    const card = document.createElement('state-element');
    if (state.length != 0) {
      if (prefix_string) {
        this.innerHTML = prefix_string + state;
      } else {
        this.innerHTML = state;
      }
    } else if (show_empty == true) {
      if (prefix_string) {
        this.innerHTML = prefix_string + state;
      } else {
        this.innerHTML = state;
      }
    }
  }
  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    if (!config.show_empty) {
      config.show_empty = false;
    }
    this.config = config;
  }

  getCardSize() {
    return 1;
  }
}
customElements.define('state-element', StateElement);