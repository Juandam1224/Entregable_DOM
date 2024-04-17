import { Stylizer } from "./style.js";

class Content{
    constructor(){
        this.Stylize = new Stylizer;
        this.logo_route = '../resources/orejona.webp';
        this.logo_route1 = '../resources/CHAMPIONS.png';
        this.default_card_text1 = "Barcelona VS Paris";
        this.default_card_text2 = "Borussia VS Atletico";
        this.default_card_text3 = "Bayern VS Arsenal";
        this.default_card_text4 = "Manchester City VS Real Madrid";
    }

    fill_header = header =>{
        //--Logo--//
        const logo = document.createElement('img');
        logo.src = this.logo_route1;

        //---Direccionamiento---//
        const navItems = document.createElement('ul');
        //--//
        const navItem1 = document.createElement('li');
        const navLink1 = document.createElement('a');

        navLink1.href = "#";
        navLink1.text = "INICIO"; 
        //--//
        const navItem2 = document.createElement('li');
        const navLink2 = document.createElement('a');

        navLink2.href = "https://www.google.com/search?q=tabla+de+posiciones+champions+league&oq=tabla+de&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg5MgYIBBAuGEDSAQgyNDk0ajBqMagCALACAA&sourceid=chrome&ie=UTF-8#sie=lg;/g/11smjbb5jk;2;/m/0c1q0;st;fp;1;;;";
        navLink2.text = "TABLA DE POSICIONES";
        //--//
        const navItem3 = document.createElement('li');
        const navLink3 = document.createElement('a');

        navLink3.href = "#";
        navLink3.text = "NOSOTROS";
        //--//
        navItem1.appendChild(navLink1);
        navItem2.appendChild(navLink2);
        navItem3.appendChild(navLink3);
        navItems.append(...[navItem1, navItem2, navItem3]);

        //---Iniciar sesion---//
        const loginBtn = document.createElement('button');
        loginBtn.textContent = "GRACIAS POR INGRESAR";
        header.append(...[logo, navItems, loginBtn]);
        header = this.Stylize.stylize_header(header);

        return header;
    }

    fill_main = main => {
        const main_title = document.createElement('h2');
        main_title.textContent = "CUARTOS DE CHAMPIONS";

        //------Cards section------//
        const cards_section = document.createElement('section');
        const card_1 = document.createElement('article');
        const card_2 = document.createElement('article');
        const card_3= document.createElement('article');
        const card_4 = document.createElement('article');

        const msg_card1 = document.createElement('h4');
        msg_card1.textContent = this.default_card_text1;
        const msg_card2 = document.createElement('h4');
        msg_card2.textContent = this.default_card_text2;
        const msg_card3 = document.createElement('h4');
        msg_card3.textContent = this.default_card_text3;
        const msg_card4 = document.createElement('h4');
        msg_card4.textContent = this.default_card_text4;

        const btn_comprar = document.createElement('button');
        const btn_devolver = document.createElement('button');
        const btn_info = document.createElement('button');
        const btn_terminos = document.createElement('button');

        btn_comprar.textContent = "Resultado";
        btn_devolver.textContent = "Resultado";
        btn_info.textContent = "Resultado";
        btn_terminos.textContent = "Resultado";
        
        card_1.append(...[msg_card1, btn_comprar]);
        card_2.append(...[msg_card2, btn_devolver]);
        card_3.append(...[msg_card3, btn_info]);
        card_4.append(...[msg_card4, btn_terminos]);

        cards_section.append(...[card_1, card_2, card_3, card_4]);

        main.append(...[main_title, cards_section]);
        main = this.Stylize.stylize_main(main);
        return main;
    }

    fill_footer = footer =>{
        //---Nosotros section---//
        const nosotros_section = document.createElement('section');
        const title_nosotros = document.createElement('h5');
        title_nosotros.textContent = "Creacion del Torneo";

        const descripcion_nosotros = document.createElement('p');
        descripcion_nosotros.textContent = "19 de agosto de 1992 (Liga de Campeones de la UEFA)"
        

        nosotros_section.append(...[title_nosotros, descripcion_nosotros]);
        //---Info section---//
        const info_section = document.createElement('section');
        const title_informacion = document.createElement('h5');
        title_informacion.textContent = "Información";

        const descripcion_info_horarios = document.createElement('p');
        descripcion_info_horarios.textContent = "Taller Desarrollo Web";

        const descripcion_info_telefonos = document.createElement('p');
        descripcion_info_telefonos.textContent = "Fin";

        const descripcion_info_correo = document.createElement('p');
        descripcion_info_correo.textContent = "Manipulacion Dom";

        info_section.append(...[title_informacion, descripcion_info_horarios, descripcion_info_correo, descripcion_info_telefonos]);
        //---Logo section---//
        const logo_section = document.createElement('section');
        const logo = document.createElement('img');
        logo.src = this.logo_route;

        const copyright_mark = document.createElement('h4');
        copyright_mark.textContent = "¿QUIEN GANARA?";

        logo_section.append(...[logo, copyright_mark]);

        footer.append(...[nosotros_section, info_section, logo_section]);
        footer = this.Stylize.stylize_footer(footer);

        return footer;
    }
}

export { Content }