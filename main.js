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
      fwdx[i].hide();
    }
  }
};
const backeu = () => {
  for (i = 0; i <= fwdx.length - 1; i++) {
    fwdx[i].show();
  }
};

const italy = $(".italy");

const ib2 = $("<button>Italy</button>");
italy.append(ib2);
ib2.css("font-size", "50px");
let showIt = true;
ib2.on("click", () => {
  if (showIt === true) {
    deleu();
    showIt = !showIt;
  } else {
    backeu();
    showIt = !showIt;
  }
});

const french = $(".french");
const fb2 = $("<button>French</button>");
french.append(fb2);
fb2.css("font-size", "50px");

let showFr = true;
fb2.on("click", () => {
  if (showFr === true) {
    deleu();
    showFr = !showFr;
  } else {
    backeu();
    showFr = !showFr;
  }
});

const spain = $(".spain");
const bs2 = $("<button>Spain</button>");
spain.append(bs2);
bs2.css("font-size", "50px");
let showSp = true;
bs2.on("click", () => {
  if (showSp === true) {
    deleu();
    showSp = !showSp;
  } else {
    backeu();
    showSp = !showSp;
  }
});

const british = $(".british");
const bb2 = $("<button>British</button>");
british.append(bb2);
bb2.css("font-size", "50px");
let showBr = true;
bb2.on("click", () => {
  if (showBr === true) {
    deleu();
    showBr = !showBr;
  } else {
    backeu();
    showBr = !showBr;
  }
});

//////////////////////////////////////////////
const delas = () => {
  for (i = 0; i <= fwdx.length - 1; i++) {
    if (fwdx[i] !== asia) {
      fwdx[i].hide();
    }
  }
};
const backas = () => {
  for (i = 0; i <= fwdx.length - 1; i++) {
    fwdx[i].show();
  }
};

const china = $(".china");
const chb2 = $("<button>China</button>");
china.append(chb2);
chb2.css("font-size", "50px");
let showch = true;
chb2.on("click", () => {
  if (showch === true) {
    delas();
    showch = !showch;
  } else {
    backas();
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
    delas();
    showmd = !showmd;
  } else {
    backas();
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
    delas();
    showko = !showko;
  } else {
    backas();
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
    delas();
    showjp = !showjp;
  } else {
    backas();
    showjp = !showjp;
  }
});

////////////////////////////////////////////////////
const delaf = () => {
  for (i = 0; i <= fwdx.length - 1; i++) {
    if (fwdx[i] !== africa) {
      fwdx[i].css("display", "none");
    }
  }
};
const backaf = () => {
  for (i = 0; i <= fwdx.length - 1; i++) {
    fwdx[i].show();
  }
};

const moroco = $(".moroco");
const mcb = $("<button>Moroco</button>");
moroco.append(mcb);
mcb.css("font-size", "50px");
let showmo = true;

mcb.on("click", () => {
  if (showmo === true) {
    delaf();
    showmo = !showmo;
  } else {
    backaf();
    showmo = !showmo;
  }
});

const algeria = $(".algeria");
const algb = $("<button>Algeria</button>");
algeria.append(algb);
algb.css("font-size", "50px");

let showalg = true;
algb.on("click", () => {
  if (showalg === true) {
    delaf();
    showalg = !showalg;
  } else {
    backaf();
    showalg = !showalg;
  }
});

const sudan = $(".sudan");
const sudb = $("<button>Sudan</button>");
sudan.append(sudb);
sudb.css("font-size", "50px");

let showsd = true;
sudb.on("click", () => {
  if (showsd === true) {
    delaf();
    showsd = !showsd;
  } else {
    backaf();
    showsd = !showsd;
  }
});


 
const egypt = $(".egypt");
const egb = $("<button>Egypt</button>");
egypt.append(egb);
egb.css("font-size", "50px");
let showeg = true;
egb.on("click", () => {
  if (showeg === true) {
    delaf();
    showeg = !showeg;
  } else {
    backaf();
    showeg = !showeg;
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
const backam = () => {
  for (i = 0; i <= fwdx.length - 1; i++) {
    fwdx[i].show();
  }
};


const usa = $(".usa");
const usab = $("<button>USA</button>");
usa.append(usab);
usab.css("font-size", "50px");

let showus = true;
usab.on("click", () => {
  if (showus === true) {
    delam();
    showus = !showus;
  } else {
    backam();
    showus = !showus;
  }
});

/*
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
});*/
