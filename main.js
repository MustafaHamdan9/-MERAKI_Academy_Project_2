const body = $("body");
const main = $(".main");
const fwd = $(".fwd");
//////////////////////////
const europe = $(".eur");
const asia = $(".asia");

const america = $(".america");
fwdx = [asia, europe, america];
europe.hide();
asia.hide();
america.hide();

const home = $("#hme");
const hme = $("<button>Home</button>");
home.append(hme);
hme.css("font-size", "10px");

hme.on("click", () => {
  europe.hide();
  asia.hide();
  america.hide();
});
///////////////////////////////////////////
const french = $(".french");
const spain = $(".spain");
const british = $(".british");
const italy = $(".italy");

const deleu = () => {
  for (i = 0; i <= fwdx.length - 1; i++) {
    if (fwdx[i] !== europe) {
      fwdx[i].hide();
    }
  }
};

const eur = $("#eup");
const eu2 = $("<button>Europe</button>");
eur.append(eu2);
eu2.css("font-size", "10px");

eu2.on("click", () => {
  deleu();
  europe.show();
});
/////////////
const ib2 = $("<button>Italy</button>");
italy.append(ib2);
ib2.css("font-size", "50px");

const pasta = $("#pas");
const pizza = $("#piz");
pasta.hide();
pizza.hide();

let showIt = true;
ib2.on("click", () => {
  if (showIt === true) {
    pasta.show();
    pizza.show();
    french.hide();
    spain.hide();
    british.hide();

    showIt = !showIt;
  } else {
    pasta.hide();
    pizza.hide();
    french.show();
    spain.show();
    british.show();
    showIt = !showIt;
  }
});

const fb2 = $("<button>France</button>");
french.append(fb2);
fb2.css("font-size", "50px");
const frimage =$(".frfood")
frimage.hide()

let showFr = true;
fb2.on("click", () => {
  if (showFr === true) {
    italy.hide();
    spain.hide();
    british.hide();
    frimage.show()
    showFr = !showFr;
  } else {
    italy.show();
    spain.show();
    british.show();
    frimage.hide()
    showFr = !showFr;
  }
});

const bs2 = $("<button>Spain</button>");
spain.append(bs2);
bs2.css("font-size", "50px");
const spimage =$(".spfood")
spimage.hide();
let showSp = true;
bs2.on("click", () => {
  if (showSp === true) {
    italy.hide();
    french.hide();
    british.hide();
    spimage.show();
    showSp = !showSp;
  } else {
    italy.show();
    french.show();
    british.show();
    spimage.hide();
    showSp = !showSp;
  }
});

const bb2 = $("<button>British</button>");
british.append(bb2);
bb2.css("font-size", "50px");
const britmage =$(".britfood")
britmage.hide(); 

let showBr = true;
bb2.on("click", () => {
  if (showBr === true) {
    italy.hide();
    french.hide();
    spain.hide();
    britmage.show(); 

    showBr = !showBr;
  } else {
    italy.show();
    french.show();
    spain.show();
    britmage.hide(); 

    showBr = !showBr;
  }
});

//////////////////////////////////////////////////////////
const delas = () => {
  for (i = 0; i <= fwdx.length - 1; i++) {
    if (fwdx[i] !== asia) {
      fwdx[i].hide();
    }
  }
};

const assia = $("#asi");
const as2 = $("<button>Asia</button>");
assia.append(as2);
as2.css("font-size", "10px");

as2.on("click", () => {
  delas();
  asia.show();
});
/////////
const china = $(".china");
const chb2 = $("<button>China</button>");
china.append(chb2);
chb2.css("font-size", "50px");
let showch = true;
chb2.on("click", () => {
  if (showch === true) {
    Midest.hide();
    Korea.hide();
    japan.hide();
    showch = !showch;
  } else {
    Midest.show();
    Korea.show();
    japan.show();
    showch = !showch;
  }
});

const Midest = $(".Midest");
const mdb2 = $("<button>Midest</button>");
Midest.append(mdb2);
mdb2.css("font-size", "50px");
let showmd = true;
mdb2.on("click", () => {
  if (showmd === true) {
    china.hide();
    Korea.hide();
    japan.hide();
    showmd = !showmd;
  } else {
    china.show();
    Korea.show();
    japan.show();
    showmd = !showmd;
  }
});

const Korea = $(".Korea");
const kb2 = $("<button>Korea</button>");
Korea.append(kb2);
kb2.css("font-size", "50px");
let showko = true;
kb2.on("click", () => {
  if (showko === true) {
    china.hide();
    Midest.hide();
    japan.hide();
    showko = !showko;
  } else {
    china.show();
    Midest.show();
    japan.show();
    showko = !showko;
  }
});

const japan = $(".japan");
const jb2 = $("<button>Japan</button>");
japan.append(jb2);
jb2.css("font-size", "50px");
let showjp = true;
jb2.on("click", () => {
  if (showjp === true) {
    china.hide();
    Midest.hide();
    Korea.hide();
    showjp = !showjp;
  } else {
    china.show();
    Midest.show();
    Korea.show();
    showjp = !showjp;
  }
});

//////////////////////////////////////////////////////////////

const delam = () => {
  for (i = 0; i <= fwdx.length - 1; i++) {
    if (fwdx[i] !== america) {
      fwdx[i].css("display", "none");
    }
  }
};

const amerca = $("#amc");
const am2 = $("<button>America</button>");
amerca.append(am2);
am2.css("font-size", "10px");

am2.on("click", () => {
  delam();
  america.show();
});

const usa = $(".usa");
const usab = $("<button>USA</button>");
usa.append(usab);
usab.css("font-size", "50px");

let showus = true;
usab.on("click", () => {
  if (showus === true) {
    canada.hide();
    brazil.hide();
    argin.hide();
    showus = !showus;
  } else {
    canada.show();
    brazil.show();
    argin.show();
    showus = !showus;
  }
});

const canada = $(".canada");
const canb = $("<button>Canada</button>");
canada.append(canb);
canb.css("font-size", "50px");

let showca = true;
canb.on("click", () => {
  if (showca === true) {
    usa.hide();
    brazil.hide();
    argin.hide();
    showca = !showca;
  } else {
    usa.show();
    brazil.show();
    argin.show();
    showca = !showca;
  }
});

const brazil = $(".brazil");
const brab = $("<button>Brazil</button>");
brazil.append(brab);
brab.css("font-size", "50px");

let showbr = true;
brab.on("click", () => {
  if (showbr === true) {
    usa.show();
    canada.show();
    argin.show();
    showbr = !showbr;
  } else {
    usa.show();
    canada.show();
    argin.show();
    showbr = !showbr;
  }
});
const argin = $(".argin");
const argb = $("<button>Argentina</button>");
argin.append(argb);
argb.css("font-size", "50px");

let showarg = true;
argb.on("click", () => {
  if (showarg === true) {
    usa.show();
    canada.show();
    brazil.show();
    showarg = !showarg;
  } else {
    usa.show();
    brazil.show();
    canada.show();
    showarg = !showarg;
  }
});
