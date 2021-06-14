export class CurrentTime extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = `
        <div id="modal-timer" class="hide">       
        </div> 
        `;

        this.timeWord = "time";
        this.nextPosition = 0;

        document.addEventListener('keydown', (event) => {
            if (event.key == "t" && this.nextPosition == 1) {
                return;
            }
            if (event.key == this.timeWord[this.nextPosition]) {
                this.nextPosition++;
            } else {
                this.nextPosition = 0;
            }
            if (this.nextPosition == this.timeWord.length) {
                this.showTime();
                this.nextPosition = 0;
            }
        });
    }

    showTime() {
        document.querySelector('#modal-timer').innerText = (new Date()).toLocaleTimeString();
        document.querySelector('#modal-timer').classList.remove('hide');
        for (var i = 1; i < 6; i++) {
            setTimeout(function () {
                document.querySelector('#modal-timer').innerText = (new Date()).toLocaleTimeString();
            }, i * 1000);
        }
        setTimeout(function () {
            document.querySelector('#modal-timer').classList.add('hide');
        }, 6000);
    }
}

customElements.define('current-time', CurrentTime);