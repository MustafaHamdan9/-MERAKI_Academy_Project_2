const body = $("body");
const main = $(".main");
const fwd = $(".fwd");
////////////////////////////////////

const europe = $(".eur");

const italy = $(".italy");
//const pitaly = $("<p></p>");
//italy.append(pitaly);

const deleu = function () {
    for (i = 0; i <= fwdx.length - 1; i++) {
      if (fwdx[i] !== europe) {
        fwdx[i].css("display", "none");
      }
    }
  };

const italybut = $("<button>italy</button>");
italy.append(italybut);

italybut.on("click", () => {

});



const french = $(".french");
const frenchbut = $("<button>french</button>");
french.append(frenchbut);

frenchbut.on("click", () => {
    deleu();
});

const spain = $(".spain");
const spainbut = $("<button>spain</button>");
spain.append(spainbut);

spainbut.on("click", () => {
    deleu();
});

const british = $(".british");
const britishbut = $("<button>british</button>");
british.append(britishbut);

britishbut.on("click", () => {
  asia.css("display", "none");
  africa.css("display", "none");
  america.css("display", "none");
});

/////////////////////

const asia = $(".asia");

/*const china = $(".china");
const chinabut = $("<button>china</button>");
china.append(chinabut);



  //asia.css("display", "none");
  //africa.css("display", "none");
  //america.css("display", "none");
});

const Midest = $(".Midest");
const italybut = $("<button>italy</button>");
italy.append(italybut);

italybut.on("click", () => {
  asia.css("display", "none");
  africa.css("display", "none");
  america.css("display", "none");
});

const Korea = $(".Korea");
const italybut = $("<button>italy</button>");
italy.append(italybut);

italybut.on("click", () => {
  asia.css("display", "none");
  africa.css("display", "none");
  america.css("display", "none");
});

const japan = $(".japan");
const italybut = $("<button>italy</button>");
italy.append(italybut);

italybut.on("click", () => {
  asia.css("display", "none");
  africa.css("display", "none");
  america.css("display", "none");
});

////////////////////////////////////*/

const africa = $(".africa");
/*const italybut = $("<button>italy</button>");
italy.append(italybut);

italybut.on("click", () => {
  asia.css("display", "none");
  africa.css("display", "none");
  america.css("display", "none");
});

const moroco = $(".moroco");
const italybut = $("<button>italy</button>");
italy.append(italybut);

italybut.on("click", () => {
  asia.css("display", "none");
  africa.css("display", "none");
  america.css("display", "none");
});

const algeria = $(".algeria");
const italybut = $("<button>italy</button>");
italy.append(italybut);

italybut.on("click", () => {
  asia.css("display", "none");
  africa.css("display", "none");
  america.css("display", "none");
});

const sudan = $(".sudan");
const italybut = $("<button>italy</button>");
italy.append(italybut);

italybut.on("click", () => {
  asia.css("display", "none");
  africa.css("display", "none");
  america.css("display", "none");
});

const egypt = $(".egypt");
const italybut = $("<button>italy</button>");
italy.append(italybut);

italybut.on("click", () => {
  asia.css("display", "none");
  africa.css("display", "none");
  america.css("display", "none");
});

////////////////////////////////////*/

const america = $(".america");
/*const italybut = $("<button>italy</button>");
italy.append(italybut);

italybut.on("click", () => {
  asia.css("display", "none");
  africa.css("display", "none");
  america.css("display", "none");
});

const usa = $(".usa");
const italybut = $("<button>italy</button>");
italy.append(italybut);

italybut.on("click", () => {
  asia.css("display", "none");
  africa.css("display", "none");
  america.css("display", "none");
});

const canda = $(".canda");
const italybut = $("<button>italy</button>");
italy.append(italybut);

italybut.on("click", () => {
  asia.css("display", "none");
  africa.css("display", "none");
  america.css("display", "none");
});

const brazil = $(".brazil");
const italybut = $("<button>italy</button>");
italy.append(italybut);

italybut.on("click", () => {
  asia.css("display", "none");
  africa.css("display", "none");
  america.css("display", "none");
});

const argentina = $(".argin");
const italybut = $("<button>italy</button>");
italy.append(italybut);

italybut.on("click", () => {
  asia.css("display", "none");
  africa.css("display", "none");
  america.css("display", "none");
});*/
fwdx = [asia, europe, africa, america];
