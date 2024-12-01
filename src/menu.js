import {Menu} from './core/menu'

export default  class ContextMenu extends Menu {
    constructor(props) {
        super(props);

        this.$ul = document.querySelector('#menu')
        document.body.addEventListener('contextmenu', (event)=>{
            event.preventDefault()
            this.open()
        })
    }

    open() {
        this.$ul.classList.add('open')
    }

    close() {
        this.$ul.classList.remove('open')
    }

    add(module) {
        this.$ul.append(module.toHTML())

    }
}