import { Component, OnInit } from '@angular/core';

export class Menu_pos {
    nazwa: string;
    skladniki: string;
}

const MPOS: Menu_pos[] = [
    { nazwa: 'Burger sojowy', skladniki: 'Kotlet sojowy, pomidor, ser, sałata' },
    { nazwa: 'Sałatka warzywna', skladniki: 'Pomidor, sałata lodowa, ogórek, rukola, koperek' },
    { nazwa: 'Spaghetti', skladniki: 'Makaron gluten-free, sos pomidorowy, parmezan' },
    { nazwa: 'Tosty', skladniki: 'Chleb tostowy, ser, pomidor, papryczka jalapeño' },
    { nazwa: 'Wege-kebab', skladniki: 'Kebab sojowy, cebula, czerwona kapusta, pomidor' },
    { nazwa: 'Deser lodowy', skladniki: 'Lody waniliowe, czekoladowe, truskawkowe' },
    { nazwa: 'Panini', skladniki: 'Ser, cebula, pomidor' },
    { nazwa: 'Buritto', skladniki: 'Fasola, sos, cebula, pomidor' },
    { nazwa: 'Frytki', skladniki: 'Ziemniaki' },
    { nazwa: 'Pierogi', skladniki: 'Ruskie, z kapustą, z grzybami' }
];

@Component({
    selector: 'app-res-menu',
    templateUrl: './res-menu.component.html',
    styleUrls: ['./res-menu.component.scss']
})

export class ResMenuComponent implements OnInit {
    m_pos = MPOS;
    constructor() { }

    ngOnInit() {
    }

}
