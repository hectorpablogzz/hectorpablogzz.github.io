// valores iniciales
var boomers = 0;
var genx = 0;
var millenials = 0;
var genz = 0;
var total = 0;

var prod = 0;
var com = 0;
var org = 0;
var inn = 0;
var cre = 0;
var eco = 0;
var res = 0;
var inc = 0;
var exp = 0;

// stats boomer
var boomerProd = 20;
var boomerCom = 10;
var boomerOrg = 25;
var boomerInn = 5;
var boomerCre = 10;
var boomerEco = 5;
var boomerRes = 25;
var boomerInc = 5;
var boomerExp = 25;

// stats genx
var genxProd = 25;
var genxCom = 10;
var genxOrg = 20;
var genxInn = 10;
var genxCre = 10;
var genxEco = 10;
var genxRes = 20;
var genxInc = 5;
var genxExp = 20;

// stats millenial
var milProd = 5;
var milCom = 25;
var milOrg = 5;
var milInn = 10;
var milCre = 25;
var milEco = 25;
var milRes = 5;
var milInc = 10;
var milExp = 15;

// stats genz
var genzProd = 10;
var genzCom = 10;
var genzOrg = 10;
var genzInn = 25;
var genzCre = 20;
var genzEco = 20;
var genzRes = 10;
var genzInc = 25;
var genzExp = 5;


// elementos - barras
var prodBar = document.getElementById("prodBar");
var comBar = document.getElementById("comBar");
var orgBar = document.getElementById("orgBar");
var innBar = document.getElementById("innBar");
var creBar = document.getElementById("creBar");
var ecoBar = document.getElementById("ecoBar");
var resBar = document.getElementById("resBar");
var incBar = document.getElementById("incBar");
var expBar = document.getElementById("expBar");

// elementos - numeros stats
var prodNum = document.getElementById("prodNum");
var comNum = document.getElementById("comNum");
var orgNum = document.getElementById("orgNum");
var innNum = document.getElementById("innNum");
var creNum = document.getElementById("creNum");
var ecoNum = document.getElementById("ecoNum");
var resNum = document.getElementById("resNum");
var incNum = document.getElementById("incNum");
var expNum = document.getElementById("expNum");

// elementos - numeros gens
var totalNum = document.getElementById("totalNum");

function subtract(gen) {
  if(gen == "boomer" && boomers > 0) {
    // cambiar valores
    boomers --;
    total --;
    prod -= boomerProd;
    com -= boomerCom;
    org -= boomerOrg;
    inn -= boomerInn;
    cre -= boomerCre;
    eco -= boomerEco;
    res -= boomerRes;
    inc -= boomerInc;
    exp -= boomerExp;
    
    // cambiar graficos
    update("boomer");
  }
  else if(gen == "genx" && genx > 0) {
    // cambiar valores
    genx --;
    total --;
    prod -= genxProd;
    com -= genxCom;
    org -= genxOrg;
    inn -= genxInn;
    cre -= genxCre;
    eco -= genxEco;
    res -= genxRes;
    inc -= genxInc;
    exp -= genxExp;
    
    // cambiar graficos
    update("genx");
  }
  else if(gen == "millenial" && millenials > 0) {
    // cambiar valores
    millenials --;
    total --;
    prod -= milProd;
    com -= milCom;
    org -= milOrg;
    inn -= milInn;
    cre -= milCre;
    eco -= milEco;
    res -= milRes;
    inc -= milInc;
    exp -= milExp;
    
    // cambiar graficos
    update("millenial");
  }
  else if(gen == "genz" && genz > 0) {
    // cambiar valores
    genz --;
    total --;
    prod -= genzProd;
    com -= genzCom;
    org -= genzOrg;
    inn -= genzInn;
    cre -= genzCre;
    eco -= genzEco;
    res -= genzRes;
    inc -= genzInc;
    exp -= genzExp;
    
    // cambiar graficos
    update("genz");
  }
}

function add(gen) {
  if(gen == "boomer" && total < 10) {
    // cambiar valores
    boomers ++;
    total ++;
    prod += boomerProd;
    com += boomerCom;
    org += boomerOrg;
    inn += boomerInn;
    cre += boomerCre;
    eco += boomerEco;
    res += boomerRes;
    inc += boomerInc;
    exp += boomerExp;
    
    // cambiar graficos
    update("boomer");
  }
  else if(gen == "genx" && total < 10) {
    // cambiar valores
    genx ++;
    total ++;
    prod += genxProd;
    com += genxCom;
    org += genxOrg;
    inn += genxInn;
    cre += genxCre;
    eco += genxEco;
    res += genxRes;
    inc += genxInc;
    exp += genxExp;
    
    // cambiar graficos
    update("genx");
  }
  else if(gen == "millenial" && total < 10) {
    // cambiar valores
    millenials ++;
    total ++;
    prod += milProd;
    com += milCom;
    org += milOrg;
    inn += milInn;
    cre += milCre;
    eco += milEco;
    res += milRes;
    inc += milInc;
    exp += milExp;
    
    // cambiar graficos
    update("millenial");
  }
  else if(gen == "genz" && total < 10) {
    // cambiar valores
    genz ++;
    total ++;
    prod += genzProd;
    com += genzCom;
    org += genzOrg;
    inn += genzInn;
    cre += genzCre;
    eco += genzEco;
    res += genzRes;
    inc += genzInc;
    exp += genzExp;
    
    // cambiar graficos
    update("genz");
  }
}

function update(gen) {
  // numeros gens
  if(gen == "boomer") {
    boomerNum.innerHTML = boomers;
  }
  else if(gen == "genx") {
    genxNum.innerHTML = genx;
  }
  else if(gen == "millenial") {
    millenialNum.innerHTML = millenials;
  }
  else if(gen == "genz") {
    genzNum.innerHTML = genz;
  }
  
  totalNum.innerHTML = total;
  
  // numeros stats
  prodNum.innerHTML = prod;
  comNum.innerHTML = com;
  orgNum.innerHTML = org;
  innNum.innerHTML = inn;
  creNum.innerHTML = cre;
  ecoNum.innerHTML = eco;
  resNum.innerHTML = res;
  incNum.innerHTML = inc;
  expNum.innerHTML = exp;
  
  // barras
  var prodH = prod + "px";
  prodBar.style.height = prodH;
  var comH = com + "px";
  comBar.style.height = comH;
  var orgH = org + "px";
  orgBar.style.height = orgH;
  var innH = inn + "px";
  innBar.style.height = innH;
  var creH = cre + "px";
  creBar.style.height = creH;
  var ecoH = eco + "px";
  ecoBar.style.height = ecoH;
  var resH = res + "px";
  resBar.style.height = resH;
  var incH = inc + "px";
  incBar.style.height = incH;
  var expH = exp + "px";
  expBar.style.height = expH;
}