export default class Lampa {
    #allapot = false;
    #id;
    #szuloElem;
    #divElem;
    constructor(allapot, id, szuloELem){
        this.#allapot = allapot;
        this.#id=id;
        this.#szuloElem = szuloELem;
        this.#megjelenit
        this.#divElem=this.#szuloElem.children("div:-last-child")
        this.szinBeallit();
        
        esemenykezelo(){
        this.#divElem.on("click",()=>{
            this.#trigger("kapcsolas");
            console.log(this.#id)
        })
    }
    }

    
    #trigger(esemenyNev){
        const e =new CustomEvent(esemenyNev,{detail:this.#id})
        window.dispatchEvent(e);
    }
    #megjelenit(){
        let txt=`
        <div class="lampa">

        </div>
        `;
        this.#szuloElem.append(txt)
    }
    #szinBealit(){
        /* az elem állapotátol függöen hozzáadja .felkapcs classt*/
        if (this.#allapot) {
            (this.#divElem.addClass="felkapcs")
        }
    }

}