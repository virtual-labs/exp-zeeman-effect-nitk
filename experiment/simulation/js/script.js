let b = 0;
let magi = 1;
let magcount = -1;
let ibXarray = [];
let ibYarray = [];
let blurr;
let pcheck;
let ibtable;
let ibrow;
let mf = {
    "1": "2.57T",
    "1.5": "3.75T",
    "2": "5.03T",
    "2.5": "6.35T",
    "3": "7.45T",
    "3.5": "8.48T",
    "4": "9.95T"
}
function blurring() {
    if (blurr == true) {
        document.getElementById("simoptions").style.filter = 'blur(2px)';
        document.getElementById("mainsimulation").style.filter = 'blur(2px)';
        document.getElementById("buttondown").style.filter = 'blur(2px)';
    } else if (blurr == false) {
        document.getElementById("simoptions").style.filter = 'blur(0px)';
        document.getElementById("mainsimulation").style.filter = 'blur(0px)';
        document.getElementById("buttondown").style.filter = 'blur(0px)';
    }
}

// Next button
let a = 1;

function up() {
    a += 1;
    next()
}

function down() {
    a -= 1;
    next()
}

function next() {
    if (a == 1) {
        document.getElementById("buttondown").style.display = 'none';
        document.getElementById("buttonup").style.display = 'block';
        document.getElementById("content").style.display = 'block';
        document.getElementById("content2").style.display = 'none';
    } else if (a == 2) {
        document.getElementById("buttondown").style.display = 'block';
        document.getElementById("content").style.display = 'none';
        document.getElementById("content2").style.display = 'block';
        document.getElementById("content3").style.display = 'none';
        document.getElementById("buttonup").style.display = 'none';
        document.getElementById("observation").style.display = 'none';
    } else if (a == 3) {
        document.getElementById("buttonup").style.display = 'none';
        document.getElementById("content2").style.display = 'none';
        document.getElementById("content3").style.display = 'block';
        closeobservation();
    }
}

// procedure selection
function update() {
    let select = document.getElementById('exp');
    let option = select.options[select.selectedIndex].value;
    if (option == 'mfield vs current') {
        document.getElementById("insert").innerHTML = 'Insert Hall probe';
        document.getElementById("remove").innerHTML = 'Remove Hall probe';
        document.getElementById("finalresult").disabled = true;
        document.getElementById("current").style.display = 'block';
        document.getElementById("addbtn").style.display = 'block';
        document.getElementById("circuit1").style.display = 'block';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("leastcount").style.display = 'none';
        document.getElementById("probe").style.display = 'none';
        document.getElementById("wire").style.display = 'none';
        
        document.getElementById("mercurytube").style.display = 'none';
        document.getElementById("fieldvalue").style.display = 'block';
        document.getElementById("cvalue").style.display = 'block';
        document.getElementById("voltagevalue").style.display = 'none';
        document.getElementById("insert").disabled = false;
        document.getElementById("electromagnet").style.display = 'block';
        document.getElementById("constpwrsuply").style.display = 'block';
        document.getElementById("digitalgaussmeter").style.display = 'block';
        document.getElementById("mtube").style.display = 'none';
        document.getElementById("screen").style.display = 'none';
        document.getElementById("flense").style.display = 'none';
        document.getElementById("fpetalon").style.display = 'none';
        document.getElementById("tscope").style.display = 'none';
        document.getElementById("ccdcmra").style.display = 'none';
        document.getElementById("zstand").style.display = 'none';
        document.getElementById("zpwrsply").style.display = 'none';
        document.getElementById("powersupply").style.display = 'none';
        document.getElementById("mmrdng").style.display = 'none';
        document.getElementById("magfield").style.display = 'none';
        document.getElementById('calculatedvalue').style.display="none";
        document.getElementById('originalvalue').style.display="none";
        document.getElementById('error').style.display="none";
        pcheck = true;
        slider_reset();
        remove();
    } else if (option == 'Zeeman Effect') {
        document.getElementById("mmrdng").style.display = 'block';
        document.getElementById("magfield").style.display = 'block';
        document.getElementById("addbtn").style.display = 'none';
        document.getElementById("voltagevalue").style.display = 'block';
        document.getElementById("connection").style.display = 'block';
        document.getElementById("insert").innerHTML = 'Insert tube';
        document.getElementById("insert").disabled = false;
        document.getElementById("current").style.display = 'none';

        document.getElementById("stand").style.display = 'block';
        document.getElementById("crntpwrsuply").style.display = 'block';
        document.getElementById("zmnpwrsuply").style.display = 'block';
        document.getElementById("ccdcamera").style.display = 'block';
        document.getElementById("telescope").style.display = 'block';
        document.getElementById("polariser").style.display = 'block';
        document.getElementById("etalon").style.display = 'block';
        document.getElementById("mercurytube").style.display = 'block';
        document.getElementById("monitor").style.display = 'block';
        
        document.getElementById("fieldvalue").style.display = 'none';
        document.getElementById("cvalue").style.display = 'none';
        document.getElementById("electromagnet").style.display = 'none';
        document.getElementById("constpwrsuply").style.display = 'none';
        document.getElementById("digitalgaussmeter").style.display = 'none';
        document.getElementById("mtube").style.display = 'block';
        document.getElementById("screen").style.display = 'block';
        document.getElementById("flense").style.display = 'block';
        document.getElementById("fpetalon").style.display = 'block';
        document.getElementById("tscope").style.display = 'block';
        document.getElementById("ccdcmra").style.display = 'block';
        document.getElementById("zstand").style.display = 'block';
        document.getElementById("zpwrsply").style.display = 'block';
        document.getElementById("powersupply").style.display = 'block';
        pcheck = false;
        slider_reset();
        remove()
    }
}

// sensor/probe button
function insert() {
    document.getElementById("insert").style.display = 'none';
    if (pcheck == true) {
        document.getElementById("addbutton").disabled = false;
        document.getElementById("observationbutton").disabled = false;
        document.getElementById("remove").style.display = 'block';

        document.getElementById("cslider").style.opacity = '1';
        document.getElementById("cslider").disabled = false;
        document.getElementById("circuit1").style.display = 'none';
        document.getElementById("circuit2").style.display = 'block';
        document.getElementById("connection").style.display = 'none';
        document.getElementById("stand").style.display = 'none';
        document.getElementById("crntpwrsuply").style.display = 'none';
        document.getElementById("zmnpwrsuply").style.display = 'none';
        document.getElementById("elemagnet").style.display = 'none';
        document.getElementById("mertube").style.display = 'none';
        document.getElementById("monitor").style.display = 'none';
        document.getElementById("circle1").style.display = 'none';
        document.getElementById("circle2").style.display = 'none';
        document.getElementById("probe").style.display = 'block';
        document.getElementById("wire").style.display = 'block';

        document.getElementById("probe").style.animation = 'probeslideup 2s forwards';
        document.getElementById("wire").style.animation = 'wireslideup 2s forwards';

        document.getElementById("fieldvalue").innerText = mf[cslider.value];
        document.getElementById("cvalue").innerText = cslider.value + "A";

    } else if (pcheck == false) {
        document.getElementById("exp").disabled = true;
        document.getElementById("voltagevalue").style.display = 'none';
        document.getElementById("probe").style.display = 'none';
        document.getElementById("circuit1").style.display = 'none';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("connection").style.display = 'none';
        document.getElementById("stand").style.display = 'none';
        document.getElementById("crntpwrsuply").style.display = 'none';
        document.getElementById("zmnpwrsuply").style.display = 'none';
        document.getElementById("ccdcamera").style.display = 'none';
        document.getElementById("telescope").style.display = 'none';
        document.getElementById("polariser").style.display = 'none';
        document.getElementById("etalon").style.display = 'none';
        document.getElementById("mercurytube").style.display = 'none';
        document.getElementById("monitor").style.display = 'none';
        document.getElementById("circle1").style.display = 'none';
        document.getElementById("circle2").style.display = 'none';
        document.getElementById("mtube").style.display = 'none';
        document.getElementById("elemagnet").style.display = 'block';
        document.getElementById("mertube").style.display = 'block';
        document.getElementById("mertube").style.animation = 'insertdistube 2s forwards';
        setTimeout(function() {
            document.getElementById("leastcount").style.display = 'block';
            document.getElementById("voltagevalue").style.display = 'block';
            document.getElementById("elemagnet").style.display = 'none';
            document.getElementById("mertube").style.display = 'none';
            document.getElementById("connection").style.display = 'block';
            document.getElementById("stand").style.display = 'block';
            document.getElementById("crntpwrsuply").style.display = 'block';
            document.getElementById("zmnpwrsuply").style.display = 'block';
            document.getElementById("ccdcamera").style.display = 'block';
            document.getElementById("telescope").style.display = 'block';
            document.getElementById("polariser").style.display = 'block';
            document.getElementById("etalon").style.display = 'block';
            document.getElementById("monitor").style.display = 'block';
            document.getElementById("mercurytube").style.display = 'none';
            document.getElementById("mmreading").disabled = false;
            setTimeout(function(){
                document.getElementById("circle1").style.display = 'block';
                document.getElementById("paper").style.display = 'block';
                document.getElementById("paper2").style.display = 'block';
                document.getElementById("mmreading").onclick=function(){
                    setTimeout(function(){
                        document.getElementById("mmreading").onclick="";
                        document.getElementById("hand1").style.display = 'block';
                        document.getElementById("hand1").style.animation = 'rotatehand 2.5s forwards';
                        document.getElementById("circle1").style.animation = 'moverings 3s forwards';
                        setTimeout(function(){
                            document.getElementById("hand1").style.display = 'none';
                            document.getElementById("reading1").style.display = 'block';
                            document.getElementById("readingi").style.display = 'block';
                            document.getElementById("ireading").style.display = 'block';
                            document.getElementById("ireading").innerHTML = "2.07";
                            setTimeout(function(){
                                document.getElementById("reading1").style.display = 'none';
                                document.getElementById("readingi").style.display = 'none';
                                document.getElementById("ireading").style.display = 'none';
                                document.getElementById("note").style.display = 'block';
                            },3200) 
                        },2000)
                    },1000)
                }
            },500)
        },2500)
    }
}

function note() {
    document.getElementById("mmreading").disabled = true;
    document.getElementById("magneticfield").disabled = false;
    document.getElementById("note").style.display = 'none';
    document.getElementById("magneticfield").onclick=function(){
        setTimeout(function(){
            document.getElementById("magneticfield").onclick="";
            document.getElementById("hand").style.display = 'block';
            document.getElementById("hand").style.animation = 'rotatehand 2s forwards';
            setTimeout(function(){
                document.getElementById("hand").style.display = "none";
                document.getElementById("voltagevalue").innerHTML = "4.00";
                document.getElementById("mmreading").disabled = false;
                document.getElementById("magneticfield").disabled = true;
                setTimeout(function(){
                    document.getElementById("circle1").style.display = 'none';
                    document.getElementById("circle2").style.display = 'block';
                    document.getElementById("mmreading").onclick=function(){
                        setTimeout(function(){
                            document.getElementById("mmreading").onclick="";
                            document.getElementById("hand1").style.display = 'block';
                            document.getElementById("hand1").style.animation = 'rotatehand 2.5s forwards';
                            document.getElementById("circle2").style.animation = 'movesplitrings 2.5s forwards';
                            setTimeout(function(){
                                document.getElementById("hand1").style.display = 'none';
                                document.getElementById("reading2").style.display = 'block';
                                document.getElementById("readings").style.display = 'block';
                                document.getElementById("sreading").style.display = 'block';
                                document.getElementById("sreading").innerHTML = "3.18";
                                document.getElementById("mmreading").onclick=function(){
                                    setTimeout(function(){
                                        document.getElementById("mmreading").onclick="";
                                        document.getElementById("reading2").style.display = 'none';
                                        document.getElementById("readings").style.display = 'none';
                                        document.getElementById("sreading").style.display = 'none';
                                        document.getElementById("hand1").style.display = 'block';
                                        document.getElementById("hand1").style.animation = 'rotatehand 2s forwards';
                                        document.getElementById("circle2").style.animation = 'movesplitrings2 2.5s forwards';
                                        setTimeout(function(){
                                            document.getElementById("hand1").style.display = 'none';
                                            document.getElementById("reading3").style.display = 'block';
                                            document.getElementById("readings").style.display = 'block';
                                            document.getElementById("sreading").style.display = 'block';
                                            document.getElementById("sreading").innerHTML = "3.44";
                                            document.getElementById("mmreading").onclick=function(){
                                                setTimeout(function(){
                                                    document.getElementById("mmreading").onclick="";
                                                    document.getElementById("reading3").style.display = 'none';
                                                    document.getElementById("readings").style.display = 'none';
                                                    document.getElementById("sreading").style.display = 'none';
                                                    document.getElementById("hand1").style.display = 'block';
                                                    document.getElementById("hand1").style.animation = 'rotatehand 2s forwards';
                                                    document.getElementById("circle2").style.animation = 'movesplitrings3 2.5s forwards';
                                                    setTimeout(function(){
                                                        document.getElementById("hand1").style.display = 'none';
                                                        document.getElementById("reading4").style.display = 'block';
                                                        document.getElementById("readings").style.display = 'block';
                                                        document.getElementById("sreading").style.display = 'block';
                                                        document.getElementById("sreading").innerHTML = "3.67";
                                                        document.getElementById("mmreading").onclick=function(){
                                                            setTimeout(function(){
                                                                document.getElementById("mmreading").onclick="";
                                                                document.getElementById("reading4").style.display = 'none';
                                                                document.getElementById("readings").style.display = 'none';
                                                                document.getElementById("sreading").style.display = 'none';
                                                                document.getElementById("hand1").style.display = 'block';
                                                                document.getElementById("hand1").style.animation = 'rotatehand 2s forwards';
                                                                document.getElementById("circle2").style.animation = 'movesplitrings4 2.5s forwards';
                                                                setTimeout(function(){
                                                                    document.getElementById("hand1").style.display = 'none';
                                                                    document.getElementById("reading5").style.display = 'block';
                                                                    document.getElementById("readings").style.display = 'block';
                                                                    document.getElementById("sreading").style.display = 'block';
                                                                    document.getElementById("sreading").innerHTML = "4.15";
                                                                    document.getElementById("mmreading").onclick=function(){
                                                                        setTimeout(function(){
                                                                            document.getElementById("mmreading").onclick="";
                                                                            document.getElementById("reading5").style.display = 'none';
                                                                            document.getElementById("readings").style.display = 'none';
                                                                            document.getElementById("sreading").style.display = 'none';
                                                                            document.getElementById("hand1").style.display = 'block';
                                                                            document.getElementById("hand1").style.animation = 'rotatehand 2s forwards';
                                                                            document.getElementById("circle2").style.animation = 'movesplitrings5 2.5s forwards';
                                                                            setTimeout(function(){
                                                                                document.getElementById("hand1").style.display = 'none';
                                                                                document.getElementById("reading6").style.display = 'block';
                                                                                document.getElementById("readings").style.display = 'block';
                                                                                document.getElementById("sreading").style.display = 'block';
                                                                                document.getElementById("sreading").innerHTML = "4.31";
                                                                                document.getElementById("mmreading").onclick=function(){
                                                                                    setTimeout(function(){
                                                                                        document.getElementById("mmreading").onclick="";
                                                                                        document.getElementById("reading6").style.display = 'none';
                                                                                        document.getElementById("readings").style.display = 'none';
                                                                                        document.getElementById("sreading").style.display = 'none';
                                                                                        document.getElementById("hand1").style.display = 'block';
                                                                                        document.getElementById("hand1").style.animation = 'rotatehand 2s forwards';
                                                                                        document.getElementById("circle2").style.animation = 'movesplitrings6 2.5s forwards';
                                                                                        setTimeout(function(){
                                                                                            document.getElementById("hand1").style.display = 'none';
                                                                                            document.getElementById("reading7").style.display = 'block';
                                                                                            document.getElementById("readings").style.display = 'block';
                                                                                            document.getElementById("sreading").style.display = 'block';
                                                                                            document.getElementById("sreading").innerHTML = "4.40";
                                                                                            document.getElementById("mmreading").onclick=function(){
                                                                                                setTimeout(function(){
                                                                                                    document.getElementById("mmreading").onclick="";
                                                                                                    document.getElementById("reading7").style.display = 'none';
                                                                                                    document.getElementById("readings").style.display = 'none';
                                                                                                    document.getElementById("sreading").style.display = 'none';
                                                                                                    document.getElementById("hand1").style.display = 'block';
                                                                                                    document.getElementById("hand1").style.animation = 'rotatehand 2s forwards';
                                                                                                    document.getElementById("circle2").style.animation = 'movesplitrings7 2.5s forwards';
                                                                                                    setTimeout(function(){
                                                                                                        document.getElementById("hand1").style.display = 'none';
                                                                                                        document.getElementById("reading8").style.display = 'block';
                                                                                                        document.getElementById("readings").style.display = 'block';
                                                                                                        document.getElementById("sreading").style.display = 'block';
                                                                                                        document.getElementById("sreading").innerHTML = "4.74";
                                                                                                        document.getElementById("mmreading").onclick=function(){
                                                                                                            setTimeout(function(){
                                                                                                                document.getElementById("mmreading").onclick="";
                                                                                                                document.getElementById("reading8").style.display = 'none';
                                                                                                                document.getElementById("readings").style.display = 'none';
                                                                                                                document.getElementById("sreading").style.display = 'none';
                                                                                                                document.getElementById("hand1").style.display = 'block';
                                                                                                                document.getElementById("hand1").style.animation = 'rotatehand 2s forwards';
                                                                                                                document.getElementById("circle2").style.animation = 'movesplitrings8 2.5s forwards';
                                                                                                                setTimeout(function(){
                                                                                                                    document.getElementById("hand1").style.display = 'none';
                                                                                                                    document.getElementById("reading9").style.display = 'block';
                                                                                                                    document.getElementById("readings").style.display = 'block';
                                                                                                                    document.getElementById("sreading").style.display = 'block';
                                                                                                                    document.getElementById("sreading").innerHTML = "4.89";
                                                                                                                    document.getElementById("mmreading").onclick=function(){
                                                                                                                        setTimeout(function(){
                                                                                                                            document.getElementById("mmreading").onclick="";
                                                                                                                            document.getElementById("reading9").style.display = 'none';
                                                                                                                            document.getElementById("readings").style.display = 'none';
                                                                                                                            document.getElementById("sreading").style.display = 'none';
                                                                                                                            document.getElementById("hand1").style.display = 'block';
                                                                                                                            document.getElementById("hand1").style.animation = 'rotatehand 2s forwards';
                                                                                                                            document.getElementById("circle2").style.animation = 'movesplitrings9 2.5s forwards';
                                                                                                                            setTimeout(function(){
                                                                                                                                document.getElementById("hand1").style.display = 'none';
                                                                                                                                document.getElementById("reading10").style.display = 'block';
                                                                                                                                document.getElementById("readings").style.display = 'block';
                                                                                                                                document.getElementById("sreading").style.display = 'block';
                                                                                                                                document.getElementById("sreading").innerHTML = "4.99";
                                                                                                                                document.getElementById("mmreading").onclick=function(){
                                                                                                                                    setTimeout(function(){
                                                                                                                                        document.getElementById("mmreading").onclick="";
                                                                                                                                        document.getElementById("reading10").style.display = 'none';
                                                                                                                                        document.getElementById("readings").style.display = 'none';
                                                                                                                                        document.getElementById("sreading").style.display = 'none';
                                                                                                                                        document.getElementById("hand1").style.display = 'block';
                                                                                                                                        document.getElementById("hand1").style.animation = 'rotatehand 2s forwards';
                                                                                                                                        document.getElementById("circle2").style.animation = 'movesplitrings10 2.5s forwards';
                                                                                                                                        setTimeout(function(){
                                                                                                                                            document.getElementById("hand1").style.display = 'none';
                                                                                                                                            document.getElementById("reading11").style.display = 'block';
                                                                                                                                            document.getElementById("readings").style.display = 'block';
                                                                                                                                            document.getElementById("sreading").style.display = 'block';
                                                                                                                                            document.getElementById("sreading").innerHTML = "5.30";
                                                                                                                                            document.getElementById("mmreading").onclick=function(){
                                                                                                                                                setTimeout(function(){
                                                                                                                                                    document.getElementById("mmreading").onclick="";
                                                                                                                                                    document.getElementById("reading11").style.display = 'none';
                                                                                                                                                    document.getElementById("readings").style.display = 'none';
                                                                                                                                                    document.getElementById("sreading").style.display = 'none';
                                                                                                                                                    document.getElementById("hand1").style.display = 'block';
                                                                                                                                                    document.getElementById("hand1").style.animation = 'rotatehand 2s forwards';
                                                                                                                                                    document.getElementById("circle2").style.animation = 'movesplitrings11 2.5s forwards';
                                                                                                                                                    setTimeout(function(){
                                                                                                                                                        document.getElementById("hand1").style.display = 'none';
                                                                                                                                                        document.getElementById("reading12").style.display = 'block';
                                                                                                                                                        document.getElementById("readings").style.display = 'block';
                                                                                                                                                        document.getElementById("sreading").style.display = 'block';
                                                                                                                                                        document.getElementById("sreading").innerHTML = "5.39";
                                                                                                                                                        document.getElementById("mmreading").onclick=function(){
                                                                                                                                                            setTimeout(function(){
                                                                                                                                                                document.getElementById("mmreading").onclick="";
                                                                                                                                                                document.getElementById("reading12").style.display = 'none';
                                                                                                                                                                document.getElementById("readings").style.display = 'none';
                                                                                                                                                                document.getElementById("sreading").style.display = 'none';
                                                                                                                                                                document.getElementById("hand1").style.display = 'block';
                                                                                                                                                                document.getElementById("hand1").style.animation = 'rotatehand 2s forwards';
                                                                                                                                                                document.getElementById("circle2").style.animation = 'movesplitrings12 2.5s forwards';
                                                                                                                                                                setTimeout(function(){
                                                                                                                                                                    document.getElementById("hand1").style.display = 'none';
                                                                                                                                                                    document.getElementById("reading13").style.display = 'block';
                                                                                                                                                                    document.getElementById("readings").style.display = 'block';
                                                                                                                                                                    document.getElementById("sreading").style.display = 'block';
                                                                                                                                                                    document.getElementById("sreading").innerHTML = "5.45";
                                                                                                                                                                    setTimeout(function(){
                                                                                                                                                                        document.getElementById("reading13").style.display = 'none';
                                                                                                                                                                        document.getElementById("readings").style.display = 'none';
                                                                                                                                                                        document.getElementById("sreading").style.display = 'none';
                                                                                                                                                                        document.getElementById("observationbutton").disabled = false;
                                                                                                                                                                    },2000)
                                                                                                                                                                },2000)
                                                                                                                                                            },1000)
                                                                                                                                                        }
                                                                                                                                                    },2000)
                                                                                                                                                },1000)
                                                                                                                                            }
                                                                                                                                        },2000)
                                                                                                                                    },1000)
                                                                                                                                }
                                                                                                                            },2000)
                                                                                                                        },1000)
                                                                                                                    }
                                                                                                                },2000)
                                                                                                            },1000)
                                                                                                        }
                                                                                                    },2000)
                                                                                                },1000)
                                                                                            }
                                                                                        },2000)
                                                                                    },1000)
                                                                                }
                                                                            },2000)
                                                                        },1000)
                                                                    }
                                                                },2000)
                                                            },1000)
                                                        }
                                                    },2000)
                                                },1000)
                                            }
                                        },2000)
                                    },1000)
                                }
                            },1250)
                       },1000)
                    }
                },1000)
            },1250)
        },1000)
    }
}
function remove() {
    document.getElementById("remove").style.display = 'none';
    document.getElementById("insert").style.display = 'block';

    document.getElementById("fieldvalue").innerText = '0';
    document.getElementById("observationbutton").disabled = true;
    document.getElementById("addbutton").disabled = true;


    if (pcheck == true) {
        document.getElementById("cvalue").innerText = '1A';
        document.getElementById("circuit1").style.display = 'block';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("stand").style.display = 'none';
        document.getElementById("connection").style.display = 'none';
        document.getElementById("crntpwrsuply").style.display = 'none';
        document.getElementById("zmnpwrsuply").style.display = 'none';
        document.getElementById("elemagnet").style.display = 'none';
        document.getElementById("mertube").style.display = 'none';
        document.getElementById("monitor").style.display = 'none';
        document.getElementById("ccdcamera").style.display = 'none';
        document.getElementById("telescope").style.display = 'none';
        document.getElementById("polariser").style.display = 'none';
        document.getElementById("etalon").style.display = 'none';
        document.getElementById("paper").style.display = 'none';
        document.getElementById("paper2").style.display = 'none';
        document.getElementById("reading1").style.display = 'none';
        document.getElementById("reading2").style.display = 'none';
        document.getElementById("reading3").style.display = 'none';
        document.getElementById("reading4").style.display = 'none';
        document.getElementById("readingi").style.display = 'none';
        document.getElementById("ireading").style.display = 'none';
        document.getElementById("readings").style.display = 'none';
        document.getElementById("sreading").style.display = 'none';
        document.getElementById("cslider").style.opacity = '0.5';
        document.getElementById("cslider").disabled = true;

        document.getElementById("circle1").style.display = 'none';
        document.getElementById("circle1").style.animation = '';

        document.getElementById("circle2").style.display = 'none';
        document.getElementById("circle2").style.animation = '';

        document.getElementById("hand").style.display = 'none';
        document.getElementById("hand").style.animation = '';

        document.getElementById("hand1").style.display = 'none';
        document.getElementById("hand1").style.animation = '';

        document.getElementById("probe").style.display = 'none';
        document.getElementById("probe").style.animation = '';
        document.getElementById("wire").style.display = 'none';
        document.getElementById("wire").style.animation = '';
    } else if (pcheck == false) {
        document.getElementById("circuit1").style.display = 'none';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("stand").style.display = 'block';
        document.getElementById("connection").style.display = 'block';
        document.getElementById("crntpwrsuply").style.display = 'block';
        document.getElementById("zmnpwrsuply").style.display = 'block';
        document.getElementById("ccdcamera").style.display = 'block';
        document.getElementById("telescope").style.display = 'block';
        document.getElementById("polariser").style.display = 'block';
        document.getElementById("etalon").style.display = 'block';
        document.getElementById("mercurytube").style.display = 'block';
        document.getElementById("elemagnet").style.display = 'none';
        document.getElementById("mertube").style.display = 'none';

        document.getElementById("circle1").style.display = 'none';
        document.getElementById("circle1").style.animation = '';

        document.getElementById("circle2").style.display = 'none';
        document.getElementById("circle2").style.animation = '';

        document.getElementById("hand").style.display = 'none';
        document.getElementById("hand").style.animation = '';

        document.getElementById("hand1").style.display = 'none';
        document.getElementById("hand1").style.animation = '';

        document.getElementById("paper").style.display = 'none';
        document.getElementById("paper2").style.display = 'none';
        document.getElementById("reading1").style.display = 'none';
        document.getElementById("reading2").style.display = 'none';
        document.getElementById("reading3").style.display = 'none';
        document.getElementById("reading4").style.display = 'none';
        document.getElementById("readingi").style.display = 'none';
        document.getElementById("ireading").style.display = 'none';
        document.getElementById("readings").style.display = 'none';
        document.getElementById("sreading").style.display = 'none';

        document.getElementById("cslider").style.opacity = '0.5';
        document.getElementById("cslider").disabled = true;

        document.getElementById("probe").style.display = 'none';
        document.getElementById("probe").style.animation = '';
        document.getElementById("wire").style.display = 'none';
        document.getElementById("wire").style.animation = '';

        document.getElementById("voltagevalue").innerText = '0';
    }
}

// current slider
let cslider = document.getElementById("cslider");
let coutput = document.getElementById("currentvalue");
let coutput2 = document.getElementById("cvalue");
let coutput3 = document.getElementById("fieldvalue");
coutput.innerHTML = cslider.value;
coutput2.innerHTML = cslider.value + "A";
coutput3.innerHTML = mf[cslider.value]
cslider.oninput = function () {
    coutput.innerHTML = this.value;
    coutput2.innerHTML = this.value + "A";
    coutput3.innerHTML = mf[this.value];
}

function slider_reset() {
    document.getElementById('currentvalue').innerText = "1";
    document.getElementById('cslider').value = 1;
    if (pcheck == true) {
        coutput3 = 0;
    } else if (pcheck == false) {
        document.getElementById("voltagevalue").innertext= 0;
    }
}

document.getElementById("cslider").addEventListener("change", slidercurrent);

function slidercurrent() {
    // current calculations
    if (pcheck == true) {
        document.getElementById("currentvalue").innerHTML = cslider.value;
        magi = cslider.value;
        document.getElementById("fieldvalue").innerHTML = mf[cslider.value];
    }
};

function Refresh() {
    window.location = window.location.href;
};

function openobservation() {
    if (pcheck == false) {
        document.getElementById("observation").style.display = 'block';
        document.getElementById('blocker').style.display = 'block';
    } else if (pcheck == true) {
        document.getElementById("IBobservation").style.display = 'block';
        document.getElementById('blocker').style.display = 'block';
    }
    blurr = true;
    blurring();
}

function closeobservation() {
    if (pcheck == false) {
        document.getElementById("observation").style.display = 'none';
    } else if (pcheck == true) {
        document.getElementById("IBobservation").style.display = 'none';
    }
    blurr = false;
    blurring();
    document.getElementById('IBgraph').style.display = 'none';
    document.getElementById('blocker').style.display = 'none';
    document.getElementById('myChart').style.display = 'none';
    document.getElementById('instructions').style.display = 'none';
}
function closeobservation2() {
    if (pcheck == false) {
        document.getElementById("observation").style.display = 'block';
        document.getElementById("tablediv").style.display='block';
        document.getElementById("observationTable").style.display='block';
        document.getElementById("observation2").style.display = 'none';
    }
}

function table2() {
    // third page
    document.getElementById("observation").style.display='none';
    document.getElementById("tablediv").style.display='none';
    document.getElementById("observationTable").style.display='none';
    document.getElementById("observation2").style.display='block';
    document.getElementById("tablediv2").style.display='block';
    document.getElementById("observationTable2").style.display='block';
    document.getElementById("finalresult").disabled = false;   
}

function AddingToArray() {
    if (pcheck == true) {
        ibXarray.push(parseFloat(magi));
        ibYarray.push(parseFloat(mf[magi]));
        document.getElementById('add').style.display = 'block';
        setTimeout(timer, 2000);
        addobservation();
    }
}

function addobservation() {
    if (pcheck == true) {
        magcount += 1;
        ibtable = document.getElementById("IBobservationTable");
        ibrow = ibtable.insertRow(magcount + 1);
        let cell1 = ibrow.insertCell(0);
        let cell2 = ibrow.insertCell(1);
        cell1.innerHTML = ibXarray[ibXarray.length - 1];
        cell2.innerHTML = ibYarray[ibYarray.length - 1];
    }
}

function clearing() {
    if (pcheck == true) {
        for (var i = 1; i < ibtable.rows.length;) {
            ibtable.deleteRow(i);
        }
        magcount = -1;
        ibXarray.length = 0;
        ibYarray.length = 0;
        document.getElementById("finalresult").disabled = true;
    }
}

function timer() {
    document.getElementById('add').style.display = 'none';
}

function IBgraph() {
    document.getElementById('IBobservation').style.display = 'none'
    document.getElementById('IBgraph').style.display = 'block'
    document.getElementById('myChart').style.display = 'block'
    document.getElementById('blocker').style.display = 'block';

    let xValues = [];
    let yValues = [];

    ibXarray = sortingArray(ibXarray);
    ibYarray = sortingArray(ibYarray);

    xValues = ibXarray.slice();
    yValues = ibYarray.slice();

    // Define Data
    var data = [{
        x: xValues,
        y: yValues,
        type: 'scatter'
    }];

    // Define Layout
    var layout = {
        width: 700,
        height: 400,
        xaxis: {
            title: "Current (A)"
        },
        yaxis: {
            range: [2, 10],
            title: "Magnetic Field(T)"
        },
        title: "Current (A) vs Magnetic field (T)"
    };

    // Display using Plotly
    Plotly.newPlot("myChart", data, layout, { displayModeBar: false });
}

function help() {
    document.getElementById('instructions').style.display = 'block';
    document.getElementById('blocker').style.display = 'block';
}

function sortingArray(sortarray) {
    const points = sortarray;
    return points.sort(function (a, b) {
        return a - b
    });
}

function hallcovalue() {
    document.getElementById('calculatedvalue').style.display="block";
    document.getElementById('originalvalue').style.display="block";
    document.getElementById('error').style.display="block";
    document.getElementById("exp").disabled = false;
}