const body = $("body");
const main = $(".main");
const fwd = $(".fwd");
////////////////////////////////////
const europe = $(".eur");
const asia = $(".asia");
const africa = $(".africa");
const america = $(".america");
fwdx = [asia, europe, africa, america];

///////////////////////////////
const deleu = () => {
  for (i = 0; i <= fwdx.length - 1; i++) {
    if (fwdx[i] !== europe) {
      fwdx[i].css("display", "none");
    }
  }
};
const italy = $(".italy");
const italybut = $("<button>italy</button>");
italy.append(italybut);
italybut.on("click", () => {
  deleu();
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
  deleu();
});

/////////////////////
const delas = () => {
  for (i = 0; i <= fwdx.length - 1; i++) {
    if (fwdx[i] !== asia) {
      fwdx[i].css("display", "none");
    }
  }
};

const china = $(".china");
const chinabut = $("<button>china</button>");
china.append(chinabut);
chinabut.on("click", () => {
  delas();
});

const Midest = $(".Midest");
const Midestbut = $("<button>Midest</button>");
Midest.append(Midestbut);
Midestbut.on("click", () => {
  delas();
});

const Korea = $(".Korea");
const Koreabut = $("<button>Korea</button>");
Korea.append(Koreabut);

Koreabut.on("click", () => {
  delas();
});

const japan = $(".japan");
const japanbut = $("<button>japan</button>");
japan.append(japanbut);

japanbut.on("click", () => {
  delas();
});

////////////////////////////////////*/
const delaf = () => {
  for (i = 0; i <= fwdx.length - 1; i++) {
    if (fwdx[i] !== africa) {
      fwdx[i].css("display", "none");
    }
  }
};

const moroco = $(".moroco");
const morocobut = $("<button>moroco</button>");
moroco.append(morocobut);

morocobut.on("click", () => {
  delaf();
});

const algeria = $(".algeria");
const algeriabut = $("<button>algeria</button>");
algeria.append(algeriabut);

algeriabut.on("click", () => {
  delaf();
});

const sudan = $(".sudan");
const sudanbut = $("<button>sudan</button>");
sudan.append(sudanbut);

sudanbut.on("click", () => {
  delaf();
});

const egypt = $(".egypt");
const egyptbut = $("<button>egypt</button>");
egypt.append(egyptbut);

egyptbut.on("click", () => {
  delaf();
});

////////////////////////////////////*/

const delam = () => {
  for (i = 0; i <= fwdx.length - 1; i++) {
    if (fwdx[i] !== america) {
      fwdx[i].css("display", "none");
    }
  }
};

const usa = $(".usa");
const usabut = $("<button>usa</button>");
usa.append(usabut);

usabut.on("click", () => {
  delam();
});

const canda = $(".canda");
const candabut = $("<button>canda</button>");
canda.append(candabut);

candabut.on("click", () => {
  delam();
});

const brazil = $(".brazil");
const brazilbut = $("<button>brazil</button>");
brazil.append(brazilbut);

brazilbut.on("click", () => {
  delam();
});

const argentina = $(".argin");
const argentinabut = $("<button>argentina</button>");
argentina.append(argentinabut);

argentinabut.on("click", () => {
  delam();
});
