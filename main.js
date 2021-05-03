if (!!localStorage.getItem("feeds")) {
  z = JSON.parse(localStorage.getItem("feeds"));
} else {
  z = [];
}

const body = $("body");

const main = $(".main");
const fwd = $(".fwd");
//////////////////////////
const europe = $(".eur");
const asia = $(".asia");
const africa = $(".africa");
const america = $(".america");
const abt  = $(".abt");

fwdx = [asia, europe, america, africa];
europe.hide();
asia.hide();
america.hide();
africa.hide();
abt.hide();
const home = $("#hme");
const hme = $("<button>Home</button>");
home.append(hme);
hme.css({"font-size": "25px","padding": 0,
"border": "none", "font-weight": "bold",
"background": "none" ,"opacity": 1 ,"font-weight": "bold",});


hme.on("click", () => {
  europe.hide();
  asia.hide();
  america.hide();
  africa.hide();
  abt.hide();
  body.css("background-image" ," url(https://cdn.wallpapersafari.com/67/52/CY6KqS.jpg)");
});

const aboute  = $("#about");
const about = $("<button>About</button>");
aboute.append(about);
about.css({"font-size": "25px","padding": 0,
"border": "none", "font-weight": "bold",
"background": "none" ,"opacity": 1 ,"font-weight": "bold",});

about.on("click", () => {
  europe.hide();
  asia.hide();
  america.hide();
  africa.hide();
  abt.show();
  
}); 


///////////////////////////////////////////
const french = $(".french");
const spain = $(".spain");
const british = $(".british");
const italy = $(".italy");

eux = [french, spain, british, italy];

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
eu2.css({"font-size": "25px","padding": 0,
"border": "none",
"background": "none","font-weight": "bold"});

eu2.on("click", () => {
  deleu();
  europe.show();
  abt.hide();
  body.css("background-image"," url(https://thumbs.dreamstime.com/z/food-cheese-figs-mushrooms-meat-vegetables-european-asian-cuisine-healthy-black-stone-background-top-view-197354062.jpg)");
});
/////////////////////////////////
const ib2 = $("<button>Italy</button>");
italy.append(ib2);
ib2.css({"font-size": "40px","padding": 0,
"border": "none",
"background": "none"});

const itmg = $(".itmg");
itmg.hide();

let showIt = true;
ib2.on("click", () => {
  if (showIt === true) {
    itmg.show();
    french.hide();
    spain.hide();
    british.hide();

    showIt = !showIt;
  } else {
    itmg.hide();

    french.show();
    spain.show();
    british.show();
    showIt = !showIt;
  }
});

const fb2 = $("<button>France</button>");
french.append(fb2);
fb2.css({"font-size": "40px","padding": 0,
"border": "none",
"background": "none"});
const frimage = $(".frfood");
frimage.hide();

let showFr = true;
fb2.on("click", () => {
  if (showFr === true) {
    italy.hide();
    spain.hide();
    british.hide();
    frimage.show();
    showFr = !showFr;
  } else {
    italy.show();
    spain.show();
    british.show();
    frimage.hide();
    showFr = !showFr;
  }
});

const bs2 = $("<button>Spain</button>");
spain.append(bs2);
bs2.css({"font-size": "40px","padding": 0,
"border": "none",
"background": "none"});
const spimage = $(".spfood");
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
bb2.css({"font-size": "40px","padding": 0,
"border": "none",
"background": "none"});
const britmage = $(".britfood");
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

/////////////////////////////////////////////////////////////////
const china = $(".china");
const Midest = $(".Midest");
const Korea = $(".Korea");
const japan = $(".japan");

asix = [china, Midest, Korea, japan];

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
as2.css({"font-size": "25px","padding": 0,
"border": "none","font-weight": "bold",
"background": "none"} );

as2.on("click", () => {
  delas();
  asia.show();
  abt.hide();
  body.css("background-image"," url(https://previews.123rf.com/images/kesu87/kesu871905/kesu87190500167/123488888-asian-food-background-with-various-ingredients-on-rustic-stone-background-top-view-.jpg)");

});
/////////

const chb2 = $("<button>China</button>");
china.append(chb2);
chb2.css({"font-size": "30px","padding": 0,
"border": "none",
"background": "none"});
const chinmg = $(".chinmg");
chinmg.hide();

let showch = true;
chb2.on("click", () => {
  if (showch === true) {
    Midest.hide();
    Korea.hide();
    japan.hide();
    chinmg.show();
    showch = !showch;
  } else {
    Midest.show();
    Korea.show();
    japan.show();
    chinmg.hide();
    showch = !showch;
  }
});

const mdb2 = $("<button>Midest</button>");
Midest.append(mdb2);
mdb2.css({"font-size": "30px","padding": 0,
"border": "none",
"background": "none"});

const mdemg = $(".mdmg");
mdemg.hide();
let showmd = true;
mdb2.on("click", () => {
  if (showmd === true) {
    china.hide();
    Korea.hide();
    japan.hide();
    mdemg.show();

    showmd = !showmd;
  } else {
    china.show();
    Korea.show();
    japan.show();
    mdemg.hide();

    showmd = !showmd;
  }
});

const kb2 = $("<button>Korea</button>");
Korea.append(kb2);
kb2.css({"font-size": "30px","padding": 0,
"border": "none",
"background": "none"});
const kormg = $(".kormg");
kormg.hide();

let showko = true;
kb2.on("click", () => {
  if (showko === true) {
    china.hide();
    Midest.hide();
    japan.hide();
    kormg.show();

    showko = !showko;
  } else {
    china.show();
    Midest.show();
    japan.show();
    kormg.hide();

    showko = !showko;
  }
});

const jb2 = $("<button>Japan</button>");
japan.append(jb2);
jb2.css({"font-size": "30px","padding": 0,
"border": "none",
"background": "none"});
const jpmg = $(".jpmg");

jpmg.hide();

let showjp = true;
jb2.on("click", () => {
  if (showjp === true) {
    china.hide();
    Midest.hide();
    Korea.hide();
    jpmg.show();

    showjp = !showjp;
  } else {
    china.show();
    Midest.show();
    Korea.show();
    jpmg.hide();

    showjp = !showjp;
  }
});

//////////////////////////////////////////////////////////////
const usa = $(".usa");
const canada = $(".canada");
const brazil = $(".brazil");
const argin = $(".argin");

amx = [usa, canada, brazil, argin];

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
am2.css({"font-size": "25px","padding": 0,
"border": "none",
"background": "none","font-weight": "bold"});
const usmg = $(".usmg");
usmg.hide();

am2.on("click", () => {
  delam();
  america.show();
  abt.hide();
});

const usab = $("<button>USA</button>");
usa.append(usab);
usab.css({"font-size": "30px","padding": 0,
"border": "none",
"background": "none"});

let showus = true;
usab.on("click", () => {
  if (showus === true) {
    canada.hide();
    brazil.hide();
    argin.hide();
    usmg.show();

    showus = !showus;
  } else {
    canada.show();
    brazil.show();
    argin.show();
    usmg.hide();

    showus = !showus;
  }
});

const canb = $("<button>Canada</button>");
canada.append(canb);
canb.css({"font-size": "30px","padding": 0,
"border": "none",
"background": "none"});
const canmg = $(".canmg");
canmg.hide();

let showca = true;
canb.on("click", () => {
  if (showca === true) {
    usa.hide();
    brazil.hide();
    argin.hide();
    canmg.show();

    showca = !showca;
  } else {
    usa.show();
    brazil.show();
    argin.show();
    canmg.hide();

    showca = !showca;
  }
});

const brab = $("<button>Brazil</button>");
brazil.append(brab);
brab.css({"font-size": "30px","padding": 0,
"border": "none",
"background": "none"});
const brmg = $(".brmg");
brmg.hide();

let showbr = true;
brab.on("click", () => {
  if (showbr === true) {
    usa.hide();
    canada.hide();
    argin.hide();
    brmg.show();

    showbr = !showbr;
  } else {
    usa.show();
    canada.show();
    argin.show();
    brmg.hide();
    showbr = !showbr;
  }
});
const argb = $("<button>Argentina</button>");
argin.append(argb);
argb.css({"font-size": "30px","padding": 0,
"border": "none",
"background": "none"});
const argm = $(".argmg");
argm.hide();

let showarg = true;
argb.on("click", () => {
  if (showarg === true) {
    usa.hide();
    canada.hide();
    brazil.hide();
    argm.show();

    showarg = !showarg;
  } else {
    usa.show();
    brazil.show();
    canada.show();
    argm.hide();

    showarg = !showarg;
  }
});
////////////////////////////

const delaf = () => {
  for (i = 0; i <= fwdx.length - 1; i++) {
    if (fwdx[i] !== africa) {
      fwdx[i].css("display", "none");
    }
  }
};
const Africa = $("#afr");
const af2 = $("<button>Africa</button>");
Africa.append(af2);
af2.css({"font-size": "25px","padding": 0,
"border": "none",
"background": "none","font-weight": "bold"});

af2.on("click", () => {
  delaf();
  africa.show();
  abt.hide();
});

///////////////////////////////////////////////////////////////////////


const egypt = $(".egypt");
const egyb = $("<button>Egypt</button>");
egypt.append(egyb);
egyb.css({"font-size": "30px","padding": 0,
"border": "none",
"background": "none"});

let showegp = true;
egyb.on("click", () => {
  if (showegp === true) {
    tunisia.hide();
    moroco.hide();
    libia.hide();

    showegp = !showegp;
  } else {
    tunisia.show();
    moroco.show();
    libia.show();

    showegp = !showegp;
  }
});

///////////////////////////////////////////////////////////////////////////
const moroco = $(".moroco");
const morob = $("<button>Moroco</button>");
moroco.append(morob);
morob.css({"font-size": "30px","padding": 0,
"border": "none",
"background": "none"});

let showmor = true;
morob.on("click", () => {
  if (showmor === true) {
    egypt.hide();
    tunisia.hide();
    libia.hide();

    showmor = !showmor;
  } else {
    egypt.show();
    tunisia.show();
    libia.show();

    showmor = !showmor;
  }
});
////////////////////////////////////////////////////////
const tunisia = $(".tunisia");
const tunsb = $("<button>Tunisia</button>");
tunisia.append(tunsb);
tunsb.css({"font-size": "30px","padding": 0,
"border": "none",
"background": "none"});

let showtun = true;
tunsb.on("click", () => {
  if (showtun === true) {
    egypt.hide();
    moroco.hide();
    libia.hide();

    showtun = !showtun;
  } else {
    egypt.show();
    moroco.show();
    libia.show();

    showtun = !showtun;
  }
});

/////////////////////////////////////////////////////
const libia = $(".Libia");
const libb = $("<button>Libya</button>");
libia.append(libb);
libb.css({"font-size": "30px","padding": 0,
"border": "none",
"background": "none"});

let showlp = true;
libb.on("click", () => {
  if (showlp === true) {
    egypt.hide();
    moroco.hide();
    tunisia.hide();

    showlp = !showlp;
  } else {
    egypt.show();
    moroco.show();
    tunisia.show();

    showlp = !showlp;
  }
});

/////////////////////////


 


const feed = $("#feed");
let x = [];

const feed_button = () => {
  let obj = {
    feed: feed.val(),
  };
  x.push(obj);

  localStorage.setItem("feeds", JSON.stringify(x));
  x = JSON.parse(localStorage.getItem("feeds"));
};

const feedb = $("#fedbk");
feedb.css({"font-size": "30px","padding": 0,
"border": "none",
"background": "none"});
feedb.on("click", () => {
  feed_button();
});

//const add = $("#add");

/*add.on("click", () => {
  add();
});

let addMeal = document.getElementById("contry").value;
/*
$(contry).append(`<p>${country}</p>
<p>${meal}</p>`)



const add = () => {
  {
    if (eux[addMeal] === -1 || amx[addMeal] === -1 || asix[addMeal] === -1) {
      eux.push(addMeal);
    }
  }
};*/
