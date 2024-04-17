import { Buttons } from "./components/buttons.js";
import { Cards } from "./components/cards.js";
import { createToastNotify } from "./components/ToastNotify.js";

class Stylizer {
    constructor(){
        this.ButtonStyler = new Buttons;
        this.CardStyler = new Cards;

        this.ButtonCardColorMap = ['#006241','#006241','#DC3545','#DC3545'];
        this.NotiHeadMap = ["GANADOR PARIS", "GANADOR BORUSSIA", "POR DEFINIRSE", "ADVERTENCIA"];
        this.NotiMsgMap = ["", "", "", `ESTE PARTIDO PUEDE SER PELIGROSO PARA EL CORAZON`];
        
    }

    stylize_header = header =>{
        //--estructurar header--//
        header.style.display = 'grid';
        header.style.gridTemplateColumns = '.2fr .6fr .2fr';
        header.style.placeItems = 'center';
        header.style.boxShadow = '0 3px 3px rgba(0,0,0,.1)';
        
        //--logo--//
        const logo = header.children[0];
        logo.style.maxHeight = '175px';

        //---NavItems---//
        const NavItems = header.children[1];
        NavItems.style.width = "100%";
        NavItems.style.display = 'flex';
        NavItems.style.justifyContent = 'space-evenly';
        NavItems.style.listStyle = 'none';
        for (let i = 0; i < NavItems.children.length; i++) {
            let child = NavItems.children[i].children[0];
            child.style.textDecoration = 'none';

            child = this.ButtonStyler.btn_boot(child, '#641E16', '#fff');
        }

        //---Botón login---//
        let loginBtn = header.children[2];
        loginBtn = this.ButtonStyler.btn_neon(loginBtn, '#332D32', ''); //Si dejas el segudo o el tercer valor en blanco, tomaran sus valores por defecto

        return header;
    }

    stylize_main = main =>{
        main.style.textAlign = 'center';
        main.style.margin = "10vh 0 10vh 0"
        
        //Title
        const title = main.children[0];
        title.style.fontSize = '4rem';

        //card section
        const cards_section = main.children[1];
        cards_section.style.display = 'flex';
        cards_section.style.justifyContent = 'space-evenly';

        for (let i = 0; i < cards_section.children.length; i++) {
            let card = cards_section.children[i];
            card.style.display = "grid";
            card.style.placeItems = "center";
            card = this.CardStyler.card_rainbow(card);

            //Botón de la carta
            let card_msg = card.children[0];
            card_msg.style.width = "75%";
            card_msg.style.fontSize = "1.2rem";

            let card_btn = card.children[1];
            card_btn = this.ButtonStyler.btn_boot(card_btn, this.ButtonCardColorMap[i], '#fff');

            card_btn.addEventListener('click', e=>{
                createToastNotify(i, this.NotiHeadMap[i] , this.NotiMsgMap[i]);
            });

        }


        
        
        return main;
    }

    stylize_footer = footer =>{
        footer.style.display = 'grid';
        footer.style.gridTemplateColumns = '1fr 1fr 1fr';
        footer.style.placeItems = 'center';
        footer.style.textAlign = 'center';
        footer.style.boxShadow = '3px 3px 3px rgba(0,0,0,.1)';

        //--Nosotros section--//
        const nosotros_section = footer.children[0];

        const titulo_nosotros = nosotros_section.children[0];
        titulo_nosotros.style.fontSize = '2rem';
        
        const descripcion_nosotros = nosotros_section.children[1];
        descripcion_nosotros.style.width = "40ch";

        //---Info section---//
        const info_section = footer.children[1];

        const title_informacion = info_section.children[0];
        title_informacion.style.fontSize = "2rem";

        //--logo--//
        const logo = footer.children[2].children[0];
        logo.style.maxHeight = '175px';
        logo.style.display = 'block';

        return footer;
    }


}

export { Stylizer } 