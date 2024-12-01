import './styles.css'
import ContextMenu from "@/menu";
import {BackgroundModule} from "@/modules/background.module";
import {ClicksModule} from "@/modules/clicks.module";

const items = [
    {type:'changebackground', text: 'Поменять цвет'},
    {type:'countclicks', text: 'Считать клики'},
    {type:'callmessage', text: 'Вызвать сообщение'}
     ]

const menu = new ContextMenu()



menu.add(new BackgroundModule('1', 'Поменять цвет'))
menu.add(new ClicksModule('2', 'Считать клики'))

