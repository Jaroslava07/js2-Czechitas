export class Day extends HTMLElement {
    constructor(dayNumber) {
      super();
      this.innerText = 'Den';
      this.number = dayNumber;
      this.addEventListener('click', this.handleClickEvent);
     
    }

    handleClickEvent () {
      alert('clecked day: ' + this.number);
    }
  
    }

    // сообщим браузеру, что <my-element> обслуживается нашим новым классом
customElements.define('app-day', Day);