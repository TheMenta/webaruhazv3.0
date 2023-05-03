class Termek {
    constructor (adat){
        let txt = "";
            txt+=` <div class="card col-sm-4">
              <div class="card-body">
                <h4 class="card-title">${adat.nev}</h4>
                <p class="card-text">${adat.ar} FT, ${adat.leiras} </p>
                <a href="#" class="card-link">Megtekint</a>
                <a href="#" class="card-link">Kosárba rak</a>
              </div>
            </div>`
    }
};



export default Termek;