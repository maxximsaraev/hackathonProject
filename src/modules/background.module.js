import {Module} from '../core/module'

export class BackgroundModule extends Module {


    trigger() {
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        document.body.style.background = getRandomColor()
    }


    toHTML() {
        const html = super.toHTML()
        html.addEventListener('click', this.trigger);
        return html
    }
}


