(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.waves = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000099").ss(21,1,1).p("EhkNgTCQAAAMAAAMQASWXhaV8QAAADAAADQBAAAAggBMDF1AAAIDWAAEBiCgO4QAAaFgCNEEhi9gSqQEgEpFRCvQFyC/F3ANQGUAMFcjRQFrjbB9loQgDCzBdCrQBZCkCZBwQCPBoC6AyQCvAwC/gGQDcgGDWhPQDRhNC0iIQC0iJCCi0QCFi6BBjSQA0GkEzFHQEzFIGgBOQGeBPGVjBQGWjBDKl0QD5FWHVBoQDVAwDkgNQDigMDShFQF8iAF6krQEdjgFjmCQgTDcB9DVQB0DHDJCAQCzBzDwA9QDDAxECASQEKATDGhGQDzhWA0jH");
	this.shape.setTransform(21.875,56.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("EhiLAZuIhggFQBa17gS2YIBQAAQEgEqFRCuQFyDAF3AMQGUANFcjSQFrjaB9lpQgDC0BdCrQBZCkCZBvQCPBpC6AyQCvAvC/gGQDcgGDWhOQDRhNC0iJQC0iJCCi0QCFi5BBjTQA0GkEzFIQEzFHGgBPQGeBPGVjCQGWjBDKl0QD5FWHVBpQDVAvDkgMQDigNDShFQF8h/F6krQEdjhFjmBQgTDcB9DUQB0DIDJCAQCzByDwA9QDDAxECASQEKATDGhGQDzhVA0jIIBTAcQAAaEgCNFIAABcg");
	this.shape_1.setTransform(11.275,56.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.waves, new cjs.Rectangle(-637.2,-118.5,1318.2,350.4), null);


(lib.sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(21,1,1).p("ALb/nQDGipC4jEQASgUAHgOQALgVgEgSAY/1bIVSo+QDkhgBvg8QC2hjB0h2EAgSgLzQC4gJC9AXAdyL4QFuCIGKBpAIzfbQA5BKA4CcQA9CvAnBAAVlY7QJhHHKoFWAe1APIdKAAEgB7ghuQgoiIgUhKQgeh1gQhgQgTh3gHiWQgEhdgBixQgCi5gDlyAxb/nQgIhPgqhwQguh8hEiJA7807Qh4i3i3jDQh8iEjgjQQkNj6hWhWQjDjCiBipEgiHgJ8QgDgIgJgIQgFgDgNgIQi/hkjQhWAzkeAQgJAEgLANQhkB+hNB+EggCAKRQjkBJnHCSAjUffQAAIqACRTQgOgCgcgHA8NVKQnMGvoXFzEgiIAAdI52AA");
	this.shape.setTransform(12,1.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(1,1,1).p("Ab0AAQAALioJIJQoJIJriAAQrhAAoJoJQoJoJAAriQAArgIJoKQIJoJLhAAQLiAAIJIJQIJIKAALgg");
	this.shape_1.setTransform(-0.6,-3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AzqTrQoJoKAArhQAArgIJoKQIKoJLgAAQLhAAIKIJQIJIKAALgQAALhoJIKQoKIJrhAAQrgAAoKoJg");
	this.shape_2.setTransform(-0.6,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sun, new cjs.Rectangle(-382.3,-377,788.7,756.3), null);


(lib.circlebutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(26,1,1).p("APFAAQAAGQkbEaQkaEbmQAAQmPAAkbkbQkakaAAmQQAAmPEakbQEbkaGPAAQGQAAEaEaQEbEbAAGPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AqpKqQkbkaAAmQQAAmPEbkaQEakbGPAAQGQAAEaEbQEbEaAAGPQAAGQkbEaQkaEbmQAAQmPAAkakbg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AqpKqQkbkaAAmQQAAmPEbkaQEakbGPAAQGQAAEaEbQEbEaAAGPQAAGQkbEaQkaEbmQAAQmPAAkakbg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(26,1,1).p("AVJAAQAAIwmNGMQmMGNowAAQovAAmNmNQmMmMAAowQAAovGMmNQGNmMIvAAQIwAAGMGMQGNGNAAIvg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("Au8O8QmMmMAAowQAAovGMmNQGNmMIvAAQIwAAGMGMQGNGNAAIvQAAIwmNGMQmMGNowAAQovAAmNmNg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AqpKqQkbkbAAmPQAAmPEbkbQEakaGPAAQGQAAEaEaQEbEbAAGPQAAGPkbEbQkaEbmQAAQmPAAkakbg");
	this.shape_5.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{y:0}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{y:0}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape,p:{y:0.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.3,-148.3,296.6,296.6);


(lib.birds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(26,1,1).p("A1yj8QDpgmC6ACQDjACC5A8QDRBFCYCRQCkCaAuDEQApjKCbilQCUidDNhNQC+hIDigCQDKgBDcA3");
	this.shape.setTransform(-189.5,-69.052);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.birds, new cjs.Rectangle(-342,-115.8,305,93.6), null);


(lib.sunsetbackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sunset
	this.instance = new lib.sun();
	this.instance.setTransform(230.5,-311.05,0.2393,0.2274);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:12,regY:1.1,x:222,y:-303.75},0).wait(1).to({x:210.6,y:-296.45},0).wait(1).to({x:199.1,y:-288.9},0).wait(1).to({x:187.55,y:-281.1},0).wait(1).to({x:175.95,y:-273.05},0).wait(1).to({x:164.35,y:-264.7},0).wait(1).to({x:152.75,y:-256.05},0).wait(1).to({x:141.1,y:-247.15},0).wait(1).to({x:129.5,y:-237.95},0).wait(1).to({x:117.95,y:-228.5},0).wait(1).to({x:106.45,y:-218.7},0).wait(1).to({x:95.05,y:-208.6},0).wait(1).to({x:83.7,y:-198.2},0).wait(1).to({x:72.5,y:-187.45},0).wait(1).to({x:61.4,y:-176.35},0).wait(1).to({x:50.45,y:-164.95},0).wait(1).to({x:39.65,y:-153.2},0).wait(1).to({x:29.05,y:-141.15},0).wait(1).to({x:18.65,y:-128.65},0).wait(1).to({x:8.45,y:-115.85},0).wait(1).to({x:-1.4,y:-102.65},0).wait(1).to({x:-11.1,y:-89.05},0).wait(1).to({x:-20.5,y:-75.1},0).wait(1).to({x:-29.55,y:-60.7},0).wait(1).to({x:-38.3,y:-45.9},0).wait(1).to({x:-46.7,y:-30.75},0).wait(1).to({x:-54.75,y:-15.1},0).wait(1).to({x:-62.35,y:0.9},0).wait(1).to({x:-69.6,y:17.4},0).wait(1).to({x:-76.35,y:34.35},0).wait(1).to({x:-82.7,y:51.8},0).wait(1).to({x:-88.5,y:69.65},0).wait(1).to({x:-93.8,y:88},0).wait(1).to({x:-98.55,y:106.9},0).wait(1).to({x:-102.8,y:126.25},0).wait(1).to({x:-106.4,y:146.1},0).wait(1).to({x:-109.4,y:166.5},0).wait(1).to({x:-111.75,y:187.4},0).wait(1).to({x:-113.45,y:208.85},0).wait(1).to({x:-114.45,y:230.9},0).wait(1).to({x:-114.7,y:253.45},0).wait(1).to({x:-114.25,y:276.6},0).wait(1).to({x:-113,y:300.35},0).wait(1).to({x:-110.95,y:324.65},0).wait(1).to({x:-108.05,y:349.6},0).wait(1).to({x:-104.3,y:375.15},0).wait(1).to({x:-99.65,y:401.4},0).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EBKOgxFMAAABiLMiUbAAAMAAAhiLg");
	this.shape.setTransform(-10.6,3.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#00ADEB","#FFEE28"],[0,1],0.1,-314.2,0.1,314.2).s().p("EhKNAxGMAAAhiLMCUaAAAMAAABiLg");
	this.shape_1.setTransform(-10.6,3.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-486.5,-396.8,951.9,884.2);


(lib.birdsmotion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bird_2
	this.instance = new lib.birds();
	this.instance.setTransform(-250.95,-137.9,1,1,0,0,0,-189.5,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-69.1,scaleX:0.989,scaleY:0.988,x:-250.1,y:-138.25},0).wait(1).to({scaleX:0.978,scaleY:0.9761,x:-249.3,y:-138.55},0).wait(1).to({scaleX:0.9671,scaleY:0.9641,x:-248.45,y:-138.85},0).wait(1).to({scaleX:0.9561,scaleY:0.9522,x:-247.65,y:-139.15},0).wait(1).to({scaleX:0.9451,scaleY:0.9402,x:-246.8,y:-139.45},0).wait(1).to({scaleX:0.9341,scaleY:0.9282,x:-245.95,y:-139.75},0).wait(1).to({scaleX:0.9231,scaleY:0.9163,x:-245.15,y:-140.05},0).wait(1).to({scaleX:0.9121,scaleY:0.9043,x:-244.3,y:-140.35},0).wait(1).to({scaleX:0.9012,scaleY:0.8924,x:-243.45,y:-140.65},0).wait(1).to({scaleX:0.8902,scaleY:0.8804,x:-242.65,y:-140.95},0).wait(1).to({scaleX:0.8792,scaleY:0.8684,x:-241.8,y:-141.25},0).wait(1).to({scaleX:0.8682,scaleY:0.8565,x:-241,y:-141.55},0).wait(1).to({scaleX:0.8572,scaleY:0.8445,x:-240.15,y:-141.85},0).wait(1).to({scaleX:0.8463,scaleY:0.8326,x:-239.3,y:-142.15},0).wait(1).to({scaleX:0.8353,scaleY:0.8206,x:-238.5,y:-142.45},0).wait(1).to({scaleX:0.8243,scaleY:0.8086,x:-237.65,y:-142.75},0).wait(1).to({scaleX:0.8133,scaleY:0.7967,x:-236.8,y:-143.05},0).wait(1).to({scaleX:0.8023,scaleY:0.7847,x:-236,y:-143.3},0).wait(1).to({scaleX:0.7914,scaleY:0.7728,x:-235.15,y:-143.65},0).wait(1).to({scaleX:0.7804,scaleY:0.7608,x:-234.35,y:-143.9},0).wait(1).to({scaleX:0.7694,scaleY:0.7488,x:-233.5,y:-144.2},0).wait(1).to({scaleX:0.7584,scaleY:0.7369,x:-232.65,y:-144.5},0).wait(1).to({scaleX:0.7474,scaleY:0.7249,x:-231.85,y:-144.8},0).wait(1).to({scaleX:0.7364,scaleY:0.713,x:-231,y:-145.1},0).wait(1).to({scaleX:0.7255,scaleY:0.701,x:-230.15,y:-145.4},0).wait(1).to({scaleX:0.7145,scaleY:0.689,x:-229.35,y:-145.7},0).wait(1).to({scaleX:0.7035,scaleY:0.6771,x:-228.5,y:-146},0).wait(1).to({scaleX:0.6925,scaleY:0.6651,x:-227.7,y:-146.3},0).wait(1).to({scaleX:0.6815,scaleY:0.6532,x:-226.85,y:-146.6},0).wait(1).to({scaleX:0.6706,scaleY:0.6412,x:-226,y:-146.9},0).wait(1).to({scaleX:0.6596,scaleY:0.6292,x:-225.2,y:-147.2},0).wait(1).to({scaleX:0.6486,scaleY:0.6173,x:-224.35,y:-147.5},0).wait(1).to({scaleX:0.6376,scaleY:0.6053,x:-223.55,y:-147.8},0).wait(1).to({scaleX:0.6266,scaleY:0.5933,x:-222.7,y:-148.1},0).wait(1).to({scaleX:0.6156,scaleY:0.5814,x:-221.85,y:-148.35},0).wait(1).to({scaleX:0.6047,scaleY:0.5694,x:-221.05,y:-148.7},0).wait(1).to({scaleX:0.5937,scaleY:0.5575,x:-220.2,y:-148.95},0).wait(1).to({scaleX:0.5827,scaleY:0.5455,x:-219.35,y:-149.3},0).wait(1).to({scaleX:0.5717,scaleY:0.5335,x:-218.55,y:-149.55},0).wait(1).to({scaleX:0.5607,scaleY:0.5216,x:-217.7,y:-149.85},0).wait(1).to({scaleX:0.5498,scaleY:0.5096,x:-216.9,y:-150.15},0).wait(1).to({scaleX:0.5388,scaleY:0.4977,x:-216.1,y:-150.45},0).wait(1).to({scaleX:0.5278,scaleY:0.4857,x:-215.25,y:-150.75},0).wait(1).to({scaleX:0.5168,scaleY:0.4737,x:-214.45,y:-151.05},0).wait(1).to({scaleX:0.5058,scaleY:0.4618,x:-213.6,y:-151.35},0).wait(1).to({scaleX:0.4949,scaleY:0.4498,x:-212.75,y:-151.65},0).wait(1).to({scaleX:0.4839,scaleY:0.4379,x:-211.95,y:-151.95},0).wait(1));

	// bird_3
	this.instance_1 = new lib.birds();
	this.instance_1.setTransform(285,-71.95,0.5412,0.497,0,0,0,-189.1,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-189.5,regY:-69.1,x:291.8},0).wait(1).to({x:298.8},0).wait(1).to({x:305.8},0).wait(1).to({x:312.8},0).wait(1).to({x:319.8},0).wait(1).to({x:326.8},0).wait(1).to({x:333.8},0).wait(1).to({x:340.8},0).wait(1).to({x:347.8},0).wait(1).to({x:354.8},0).wait(1).to({x:361.8},0).wait(1).to({x:368.8},0).wait(1).to({x:375.8},0).wait(1).to({x:382.8},0).wait(1).to({x:389.8},0).wait(1).to({x:396.8},0).wait(1).to({x:403.8},0).wait(1).to({x:410.8},0).wait(1).to({x:417.8},0).wait(1).to({x:424.8},0).wait(1).to({x:431.8},0).wait(1).to({x:438.8},0).wait(1).to({x:445.8},0).wait(1).to({x:452.8},0).wait(1).to({x:459.8},0).wait(1).to({x:466.8},0).wait(1).to({x:473.8},0).wait(1).to({x:480.8},0).wait(1).to({x:487.8},0).wait(1).to({x:494.8},0).wait(1).to({x:501.8},0).wait(1).to({x:508.8},0).wait(1).to({x:515.8},0).wait(1).to({x:522.8},0).wait(1).to({x:529.8},0).wait(1).to({x:536.8},0).wait(1).to({x:543.8},0).wait(1).to({x:550.8},0).wait(1).to({x:557.8},0).wait(1).to({x:564.8},0).wait(1).to({x:571.8},0).wait(1).to({x:578.8},0).wait(1).to({x:585.8},0).wait(1).to({x:592.8},0).wait(1).to({x:599.8},0).wait(1).to({x:606.8},0).wait(1).to({x:613.8},0).wait(1));

	// birds
	this.instance_2 = new lib.birds();
	this.instance_2.setTransform(-11.05,71.05,0.276,0.2899,0,0,0,-189.2,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-189.5,regY:-69.1,scaleX:0.2897,scaleY:0.3006,x:-11.15,y:70.85},0).wait(1).to({scaleX:0.3035,scaleY:0.3112},0).wait(1).to({scaleX:0.3172,scaleY:0.3218,y:70.8},0).wait(1).to({scaleX:0.331,scaleY:0.3325,y:70.85},0).wait(1).to({scaleX:0.3447,scaleY:0.3431,y:70.8},0).wait(1).to({scaleX:0.3585,scaleY:0.3537,x:-11.2},0).wait(1).to({scaleX:0.3722,scaleY:0.3644,y:70.75},0).wait(1).to({scaleX:0.386,scaleY:0.375,y:70.8},0).wait(1).to({scaleX:0.3997,scaleY:0.3856,y:70.75},0).wait(1).to({scaleX:0.4135,scaleY:0.3963},0).wait(1).to({scaleX:0.4272,scaleY:0.4069,y:70.8},0).wait(1).to({scaleX:0.441,scaleY:0.4175,y:70.75},0).wait(1).to({scaleX:0.4547,scaleY:0.4282},0).wait(1).to({scaleX:0.4684,scaleY:0.4388},0).wait(1).to({scaleX:0.4822,scaleY:0.4494,x:-11.25},0).wait(1).to({scaleX:0.4959,scaleY:0.4601,y:70.7},0).wait(1).to({scaleX:0.5097,scaleY:0.4707,y:70.75},0).wait(1).to({scaleX:0.5234,scaleY:0.4813,y:70.7},0).wait(1).to({scaleX:0.5372,scaleY:0.4919},0).wait(1).to({scaleX:0.5509,scaleY:0.5026},0).wait(1).to({scaleX:0.5647,scaleY:0.5132},0).wait(1).to({scaleX:0.5784,scaleY:0.5238},0).wait(1).to({scaleX:0.5922,scaleY:0.5345,y:70.65},0).wait(1).to({scaleX:0.6059,scaleY:0.5451,y:70.7},0).wait(1).to({scaleX:0.6197,scaleY:0.5557,x:-11.3,y:70.65},0).wait(1).to({scaleX:0.6334,scaleY:0.5664},0).wait(1).to({scaleX:0.6472,scaleY:0.577},0).wait(1).to({scaleX:0.6609,scaleY:0.5876},0).wait(1).to({scaleX:0.6747,scaleY:0.5983},0).wait(1).to({scaleX:0.6884,scaleY:0.6089},0).wait(1).to({scaleX:0.7021,scaleY:0.6195},0).wait(1).to({scaleX:0.7159,scaleY:0.6302,y:70.6},0).wait(1).to({scaleX:0.7296,scaleY:0.6408},0).wait(1).to({scaleX:0.7434,scaleY:0.6514},0).wait(1).to({scaleX:0.7571,scaleY:0.662,x:-11.35},0).wait(1).to({scaleX:0.7709,scaleY:0.6727,y:70.55},0).wait(1).to({scaleX:0.7846,scaleY:0.6833,y:70.6},0).wait(1).to({scaleX:0.7984,scaleY:0.6939},0).wait(1).to({scaleX:0.8121,scaleY:0.7046,y:70.55},0).wait(1).to({scaleX:0.8259,scaleY:0.7152,y:70.6},0).wait(1).to({scaleX:0.8396,scaleY:0.7258,y:70.55},0).wait(1).to({scaleX:0.8534,scaleY:0.7365},0).wait(1).to({scaleX:0.8671,scaleY:0.7471},0).wait(1).to({scaleX:0.8809,scaleY:0.7577},0).wait(1).to({scaleX:0.8946,scaleY:0.7684,x:-11.4,y:70.5},0).wait(1).to({scaleX:0.9084,scaleY:0.779},0).wait(1).to({scaleX:0.9221,scaleY:0.7896,y:70.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.4,-184.7,1099.4,293.1);


// stage content:
(lib.loberger_newHaiku = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {text:0,artwork:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.toFrame02_btn.addEventListener("click",toFrame02);
		
		function toFrame02(){
			console.log("will go to frame 2");
			root.gotoAndStop("artwork");
		}
		
		this.line01_txt.addEventListener("click",changeLine01);
		
		function changeLine01(){
			console.log("will change line 1");
			root.line01_txt.text = line01;
		}
		
		var line01 = "I love a sunset";
		
		this.line02_txt.addEventListener("click",changeLine02);
		
		function changeLine02(){
			console.log("will change line 2");
			root.line02_txt.text = line02;
		}
		
		var line02 = "With the waves crashing below";
		
		this.line03_txt.addEventListener("click",changeLine03);
		
		function changeLine03(){
			console.log("will change line 3");
			root.line03_txt.text = line03;
		}
		
		var line03 = "And birds all around";
	}
	this.frame_1 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.toFrame01_btn.addEventListener("click",toFrame01);
		
		function toFrame01(){
			console.log("will go to frame 1");
			root.gotoAndStop("text");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// buttons
	this.toFrame02_btn = new lib.circlebutton();
	this.toFrame02_btn.name = "toFrame02_btn";
	this.toFrame02_btn.setTransform(480,502.65,0.6819,0.6819);
	new cjs.ButtonHelper(this.toFrame02_btn, 0, 1, 2, false, new lib.circlebutton(), 3);

	this.toFrame01_btn = new lib.circlebutton();
	this.toFrame01_btn.name = "toFrame01_btn";
	this.toFrame01_btn.setTransform(881.25,573.3,0.558,0.558);
	new cjs.ButtonHelper(this.toFrame01_btn, 0, 1, 2, false, new lib.circlebutton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.toFrame02_btn}]}).to({state:[{t:this.toFrame01_btn}]},1).wait(1));

	// waves
	this.instance = new lib.waves();
	this.instance.setTransform(482.65,543.95,0.8274,0.7246,0,0,0,21.9,56.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// birds
	this.instance_1 = new lib.birdsmotion();
	this.instance_1.setTransform(475.6,228.75,1,1,0,0,0,-18.1,-50.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// sunset
	this.instance_2 = new lib.sunsetbackground();
	this.instance_2.setTransform(475,317.4,1.0338,1.0688,0,0,0,-10.5,2.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// text
	this.line03_txt = new cjs.Text("Line Three", "27px 'Impact'");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 35;
	this.line03_txt.lineWidth = 285;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(480,293.4);

	this.line02_txt = new cjs.Text("Line Two", "27px 'Impact'");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 35;
	this.line02_txt.lineWidth = 442;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(480,222.2);

	this.line01_txt = new cjs.Text("Line One", "27px 'Impact'");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 35;
	this.line01_txt.lineWidth = 275;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(480,167.05);

	this.text = new cjs.Text("Wonderful Haiku", "40px 'Impact'");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 382;
	this.text.parent = this;
	this.text.setTransform(480,24.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.line01_txt},{t:this.line02_txt},{t:this.line03_txt}]}).to({state:[]},1).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhMDgymMCYHAAAMAAABlMMiYHAAAg");
	this.shape.setTransform(479.15,320.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FFCC").s().p("EhMCAymMAAAhlLMCYFAAAMAAABlLg");
	this.shape_1.setTransform(479.15,320.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(417.3,211.1,610.7,459.9);
// library properties:
lib.properties = {
	id: '2090B04B94BA432EB5BCA6C190384BBD',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2090B04B94BA432EB5BCA6C190384BBD'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;