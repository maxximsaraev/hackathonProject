import {Module} from '../core/module'

export class ClicksModule extends Module {

    constructor(type, text) {
        super(type, text);
        this.countClicks = 0
        console.log('Constructor', this.countClicks)
    }

    trigger() {
        let s = 0
        const rootDiv = document.querySelector('#click')
        const showClicks = document.createElement('div')
        showClicks.textContent = '1'
        document.body.addEventListener('mousedown', (event)=>{
            s += 1
        })
        setTimeout(()=>{
            rootDiv.innerHTML = ''
            rootDiv.append(showClicks)
            showClicks.textContent = `  ${s}  кликов`
            console.log('trigger',s)
        },3000)

    }
    toHTML() {
        const html = super.toHTML()
        html.addEventListener('click', this.trigger.bind(this));
        return html
    }
}