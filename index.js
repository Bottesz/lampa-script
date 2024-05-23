
 import JatekTer from "./JatekTer.js";

class Allapot{
    lista = [false,true,false,true,false,true,false,true,false];
 constructor(){
 new JatekTer(this.lista);
 $(window).on("kapcsolas",(event) => {
    let id = event.detail;
    this.#szomszedokValtoztatasa(id)
    new JatekTer(this.#lista);
 });
}
#szomszedokValtoztatasa(id) {
    this.#lista[id] = !this.#lista[id];
    if(id % 3 !==0) {
        this.#lista[id-1] = ! this.#lista[id - 1];
    }
    if (id % 3 !==2) {
        this.#lista[id-1] = ! this.#lista[id + 1];
    }
    if (id > 2) {
        this.#lista[id-1] = ! this.#lista[id - 3];
    }
    if (id % 3 !==0) {
        this.#lista[id-1] = ! this.#lista[id + 3];
    }
}
}