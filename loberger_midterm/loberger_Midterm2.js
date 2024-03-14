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


(lib.sunstatic = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AKUAAQAAERjCDCQjBDBkRAAQkRAAjBjBQjBjCAAkRQAAkQDBjCQDBjBERAAQERAADBDBQDCDCAAEQg");
	this.shape.setTransform(191.85,164.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(11,1,1).p("AbzABICMAAAJzp5QCMhPBGgrQB0hHBVhDQBFg3CEh1QB4hkBjgrAEuttQAjhNA+hAQAGgGAMgNQAKgMAEgJAgHuWQATmJgSmXAMLl5QCAgqCEgRAlbtcQhUiPhPilAt4msQgCgBiEg+QgXgKgugWIgbgNQgWgMgRgMApYrDQiKhdjEjJQjpjvhZhJAtQgbQoCgFosgmAt4EjQgKAGgPADQgIACgUABQgtABhaAFQg7AEgZAFAmsMXQgSAugOAeQgPApgEAOQgKAggCAZAqaIVQl6FimiE1AMLFIQAqANAxAWQAeANA6AcQAkARAVAPQAOAKAHAFQALAIAKAEAJLI9QA5BDB1BZQCMBqArApQAdAaAuAzQA0A4AWAWQAxAxBCA2QArAkBPA6AEPL5QAIArAUAzQAKAZAeBDQAOAZASAnAgoMNIgLOqANHgRQHWgJHqAP");
	this.shape_1.setTransform(191.925,171.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AnSHTQjBjCAAkRQAAkQDBjCQDBjBERAAQESAADADBQDCDCAAEQQAAERjCDCQjADBkSAAQkRAAjBjBg");
	this.shape_2.setTransform(191.85,164.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sunstatic, new cjs.Rectangle(-5.5,-5.5,394.9,354.9), null);


(lib.frontMountains = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ANKjrQALAPAgAGQA0AIBAgNQApgIBIgZQAPgFAHAAQANADACAAQAMAAAQgPQAKgJAIgFQAFgEAEgBANEj5QABAIAFAGQCMjlAQkLQBNCvB6ERQBeDSB5ENQFHjODMlZQBJh7AyiAQBajoAOj5QA+BeDjFVQAjgEAKgCAjslDQCSEIDFFkQFnhJD/kmQBFhQA0hVEAgygJRQALAHAWAQQAWAQAMAHQAtAaAhgMQAXgJAYghQAfgpAMgKQAagUA4gDQAZgCATgBQByCqCbDpQEllDC3mUQAyhvAohwQAAgCABgBQBpkqAik6QCGFDBqEAQCTFmBeDhQCcjMBWj4QAEgLADgKQAKAFANADQARAEAgAAQAzgBAfgHQApgKAbgWQABgBACgCQACgBAEgDQAFgDADAAQADgBAMAGQAaANAfgLEBAygR1QAHAJALAHQBPjuAEj1QA8DnBPDgQBgESB9EGQD5iaCnj+QAxhLAnhPQBbi6AejMQAmBQCSE0EAzegSvQANAYASARQAQARARACQANAAAWgOQAUgOAogZQAfgVAQAOQACABAHAKQAFAIAFACQAMAEAKgMQACgCAFgIQAFgHADgDQAMgKAWAAQANgBAaAAQAOgBAQgJQAEgCALgGQAGgDAIgFEBPsgSbQAFAAAGAAQBGAEA/gXQASgHALADQAHADALAQQAYAjATAiQAcgRAIghQAMAEANgFQANgEAIgMEhTNgKzQhqhjhQh8QhQh8gviKQhTM6CbM0QAkC8ArB+QA5CnBXB3QCTDHEUB9QDMBdFFBFQNoC6SEAvQGwARJRAEQFWABKsAAQFwAALkAEQKIABHNgNQTogiOyinQEHguCgg4QDhhQCQiEQCvigBhkRQA8irBAlhQBDlyA0igQBbkZCjipQiYlAhkjUEhOWgOcQAyAuBGAUQBDATBHgJQAcgFAMgFQAOgEAbgLQAZgHAQAIEhTGgKqQCehvB7iWQAKgMAKgNQCDinBLjCQBaDmBiDfQBvD8B5DzQFIiqEqjUQEEi6DsjZQAxCLBJDOIAAAAQBODcBpEpIDYmHIDym5QBHDbBaDTQBsD9CIDyQEojdDCmmQAthiAuiBQBUjpBalPQAxEhBUEZQAgBtAlBsQCGGBDCFmQBthcBRh3QAVgfATghQBcieAiixQBYCfCBDqQAEAGADAHEg6rgLtQBVAHAsgBQBHgBA2gUQAdgLAlgXQArgbAVgNQABAPALAMQAMAMAQABQAPACANgKQAOgJAEgOIAzAmQArgTAngJQACgBADgBEgrLgK4QAHAAAIABQBCACBCgDQAfAAAMAJQAHAFAJANQAKAPAGAFQAJAJANACQAZACAVgUQANgKATgcQAUAVA0gYA3gw0QANAQAVAHQAUAGAVgEQAogHAcgmQAKAEAIAJQAHAJACALIAsgcQABABAHAPQAFAJAHAAQADAAADgCQADgCACgCQARgLATAGApYk5QASALAYgCQAWgBAVgLQAQgJASgRQALgKAUgWQASAdAiAcQAAgIAIgGQAHgFAJAAQAJABAWAMQAaAMAfgBQAZgBAXgJQABgBABAAQADgBADgC");
	this.shape.setTransform(0.0171,0.0286);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AMcX1QrkgElwAAQqsAAlWgBQpRgEmwgRQyEgvtoi6QlFhFjMhdQkUh9iTjHQhXh3g5inQgrh+gki8Qibs0BTs6QAvCKBQB8QBQB8BqBjIAHAJQCehvB7iWIAXATQAyAuBGAUQBDATBHgJQAcgFAMgFQAOgEAbgLQAZgHAQAIIALgEQBvD8B5DzQFIiqEqjUIAKAOQBVAHAsgBQBHgBA2gUQAdgLAlgXIBAgoQABAPALAMQAMAMAQABQAPACANgKQAOgJAEgOIAzAmQArgTAngJIAFgCIC3IFIDYmHQBCACBCgDQAfAAAMAJQAHAFAJANQAKAPAGAFQAJAJANACQAZACAVgUQANgKATgcQAUAVA0gYIAYgJQBsD9CIDyQEojdDCmmQAthiAuiBIAQAFQANAQAVAHQAUAGAVgEQAogHAcgmQAKAEAIAJQAHAJACALIAsgcIAIAQQAFAJAHAAQADAAADgCIAFgEQARgLATAGIAKgCQAgBtAlBsQCGGBDCFmQBthcBRh3IAaARQASALAYgCQAWgBAVgLQAQgJASgRQALgKAUgWQASAdAiAcQAAgIAIgGQAHgFAJAAQAJABAWAMQAaAMAfgBQAZgBAXgJIACgBIFXJsQFnhID/knQBFhQA0hVQALAPAgAGQA0AIBAgNQApgIBIgZQAPgFAHAAIAPADQAMAAAQgPQAKgJAIgFIDXHgQFHjPDMlZQBJh7AyiAIAgANQALAHAWAQQAWAQAMAHQAtAaAhgMQAXgJAYghQAfgpAMgKQAagUA4gDIAsgDIENGTQEllDC3mUQAyhvAohwQANAYASARQAQARARACQANAAAWgOIA8gnQAfgVAQAOIAJALQAFAIAFACQAMAEAKgMIAHgKIAIgKQAMgKAWAAIAngBQAOgBAQgJIAPgIIDxJHQCcjMBWj4IAHgVQAKAFANADQARAEAgAAQAzgBAfgHQApgKAbgWQBgESB9EGQD5iaCnj+QAxhLAnhPQBGAEA/gXQASgHALADQAHADALAQQAYAjATAiQAcgRAIghQAMAEANgFQANgEAIgMID8IUQijCphbEZQg0CghDFyQhAFhg8CrQhhERivCgQiQCEjhBQQigA4kHAuQuyCnzoAiQmsANpNAAIhcgBg");
	this.shape_1.setTransform(0.0171,29.0036);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AK4MeQgggGgLgOQCMjmAQkKIDHG/QgIAFgKAKQgQAOgMAAIgPgCQgHAAgPAFQhIAYgpAJQgmAIgjAAQgWAAgVgEgAsVK7IgagRQAVgfATggQBcifAiixIDZGKIAFANQgXAKgZABQgfABgagNQgWgLgJgBQgJAAgHAFQgIAGAAAIQgigdgSgdQgUAXgLAKQgSARgQAJQgVALgWABIgGAAQgUAAgQgKgAe4HSQgMgHgWgQQgWgRgLgHIgggMQBajoAOj4IEhGxIgsADQg4ADgaAVQgMAJgfAqQgYAhgXAIQgLAEgMAAQgYAAgfgRgEgqUAF2QgNgBgJgKQgGgFgKgPQgJgNgHgEQgMgJgfAAQhCAChCgCIDym3QBHDZBaDTIgYAKQg0AYgUgWQgTAdgNAKQgTASgWAAIgFgBgEg9oAEHIgKgOQEEi5DsjYIB6FXIAAABIgFABQgnAKgrATIgzgnQgEAOgOAKQgNAJgPgCQgQAAgMgNQgLgLgBgQIhAApQglAWgdALQg2AUhHACIgLAAQgrAAhLgHgEhPbACaQhGgUgyguIgXgTIAUgYQCDimBLjDQBaDmBiDeIgLAFQgQgIgZAHQgbAKgOAEQgMAFgcAFQgXADgXAAQgvAAgtgNgA57goQgVgGgNgQIgQgGQBUjpBalPQAxEhBUEZIgKADQgTgGgRALIgFAEQgDACgDAAQgHAAgFgJIgIgQIgsAbQgCgLgHgJQgIgIgKgEQgcAmgoAHQgIABgIAAQgMAAgNgEgEA+egBoQgNgDgKgFQBPjuAEj1QA8DoBPDfQgbAXgpAJQgfAHgzABQggAAgRgEgEBPugCqQgLgQgHgCQgLgDgSAGQg/AXhGgDQBbi6AejNIC4GFQgIALgNAFQgNAFgMgFQgIAigcAQQgTghgYgkgEAxAgCRQgSgQgNgZIABgCQBpkrAik6IDwJEIgPAIQgQAIgOACIgnAAQgWABgMAKIgIAJIgHALQgKALgMgEQgFgCgFgHIgJgMQgQgNgfAVIg8AmQgWAOgNAAQgRgCgQgRg");
	this.shape_2.setTransform(18.925,-101.332);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frontMountains, new cjs.Rectangle(-567.7,-182.5,1135.5,365.1), null);


(lib.bushes = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#003300").ss(1,1,1).p("AaOnhQhbgDg2ACQheADhKASQhXAXhDAwQhLA2giBJQgHARgOAiQgOAdgRAQQgYAVgtAKQg0AJgZAGQhJASg6A+Qg1A4gaBPQgXBDgHBXQgFA3AABnQAABVAHAsQALBIAiAuQAbAnAxAfQAiAUA9AaQCmBHC9AzQBjAZBIAIQBeAMBPgMQBagMBKgtQBMgvAohGQgUgXgQgZQgwhKgXhcQgWhWAChdQAChjArhMQAyhXBSgDQhahsg6iDQg7iDgUiLQgFghgBgfQgDhHASg8QAfhoBSgjQAZgKAzgIQA2gJAXgIQAigMAoggQAXgSAtgmQCih9DcASQDdARCMCVQAMhKBLg6QA1goBhgnQA/gaAmgLQA5gQAwAEQA5AFArAiQAvAlAFAyQA8hdBig6QBjg6BugHQA6gEAuAZQA0AcgFAwQBOhkCKg6QB0gwCYgRQBcgKBGAEQBXAEBGAZQBPAdA7A3QA/A6AXBLQCEgjClAPQB6AMCuAtQCUAmBcAnQB/A2BSBOQBgBbA8CRQAvB0AcCiQAcChgKB8QgNCahGBuQglA6g/A7QgkAjhSBBQh5BghEAxQhrBOhdAzQkOCTl6AvQkAAgmwgJQt8gPtphEQiWgMhJADQh4AFhXAlQh3g/hKhbQABgDACgDAaongQgOAAgMgBEhWBgLrQDEi+D/h0QBCgfAygKQBCgPA2AQQA+ARAhA6QAjA8gdA0QEDiXERhHQBCgSAtgDQA/gFAwARQBnAkAuB9QAnBqgMCGQBQhPAqgkQBHg7BCgfQBQglBSABQBZABBAAuQCUBtgmEyQBZhQCBgHQCAgGBhBHQA5AqAjA9QBQgmAygPQBMgWA/AJQBJAMAwA8QAyA/gWBAQCzgtB2A4QBAAeAuA7QAsA5ARBHQASBDgJBKQgHBGgeBEQgtBphZBOQhYBOhuAgQg/AThzANQiPARhTAKQgvAYg8ATQhoAehrAFQhtAFhogXQAQA/gcBDQgZA/g2AuQgtAohDAfQgwAXhNAZQvKFIyvAHQifABhigLQiMgPhsgrQiGg3g/haQgigugVg/QgRgzgLhGQg4lhB1l5QBslaDrk4QBPhnBJg3QBghJBmAEgEhWfgLNQAPgPAPgPEgoIgGyQAYApANAyQAhB8gxBtQA+gaBGAXQBDAWAsA3QBMBfgJCiQgICShKBbQguA7hRApQgQACgNAC");
	this.shape.setTransform(0.002,0.0072);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AbJLHQhIgJhjgZQi9gyimhHQg+gaghgVQgxgegbgnQgigvgMhHQgHgsAAhWQAAhmAGg4QAHhWAWhCQAbhPA1g5QA6g+BIgSQAagGA0gJQAtgKAYgWQARgPANgeIAWgzQAihJBLg1QBDgwBXgXQBJgTBegDQA3gCBaAEQACAeAEAhQAVCMA7CDQA6CCBaBtQhSAEgyBXQgrBKgCBjQgCBdAWBXQAXBcAwBJQAQAZAUAYQgoBGhMAuQhKAthaANQgoAGgrAAQgrAAgvgGgA/HD1QBLhbAIiTQAJighMhgQgsg4hDgWQhGgXg+AbQAxhughh7QgNgygYgqQBQglAygPQBMgWA+AJQBKALAwA9QAyA+gXBBQCzguB3A5QA/AdAuA7QAtA6ARBGQARBEgIBKQgIBGgdBEQgtBohZBOQhYBOhuAhQg/ATh0AMIjhAcQBRgqAtg6g");
	this.shape_1.setTransform(-32.85,21.3569);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("EhZjAUVQiMgPhsgrQiGg3g/haQgigugVg/QgRgzgLhGQg4lhB1l5QBslaDrk4QBPhnBJg3QBghJBmAEIgeAeIAegeQDEi+D/h0QBCgfAygKQBCgPA2AQQA+ARAhA6QAjA8gdA0QEDiXERhHQBCgSAtgDQA/gFAwARQBnAkAuB9QAnBqgMCGQBQhPAqgkQBHg7BCgfQBQglBSABQBZABBAAuQCUBtgmEyQBZhQCBgHQCAgGBhBHQA5AqAjA9QAYApANAyQAhB8gxBtQA+gaBGAXQBDAWAsA3QBMBfgJCiQgICShKBbQguA7hRApIgdAEIAdgEQgvAYg8ATQhoAehrAFQhtAFhogXQAQA/gcBDQgZA/g2AuQgtAohDAfQgwAXhNAZQvKFIyvAHIgbAAQiMAAhagKgEBCZAO6Qt8gPtphEQiWgMhJADQh4AFhXAlQh3g/hKhbIADgGIgDAGQgUgXgQgZQgwhKgXhcQgWhWAChdQAChjArhMQAyhXBSgDQhahsg6iDQg7iDgUiLQgFghgBgfIAaABIgagBQgDhHASg8QAfhoBSgjQAZgKAzgIQA2gJAXgIQAigMAoggIBEg4QCih9DcASQDdARCMCVQAMhKBLg6QA1goBhgnQA/gaAmgLQA5gQAwAEQA5AFArAiQAvAlAFAyQA8hdBig6QBjg6BugHQA6gEAuAZQA0AcgFAwQBOhkCKg6QB0gwCYgRQBcgKBGAEQBXAEBGAZQBPAdA7A3QA/A6AXBLQCEgjClAPQB6AMCuAtQCUAmBcAnQB/A2BSBOQBgBbA8CRQAvB0AcCiQAcChgKB8QgNCahGBuQglA6g/A7QgkAjhSBBQh5BghEAxQhrBOhdAzQkOCTl6AvQjKAZk2AAQhUAAhcgCg");
	this.shape_2.setTransform(0.002,0.0072);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bushes, new cjs.Rectangle(-628.7,-132.1,1257.5,264.2), null);


(lib.bird = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(24,1,1).p("A0PhbQExgsDFABQEVACDTBQQBzAsBPA/QBeBKAkBhAA5C0QA2hLBxhPQDnieEag8QEag8EVAy");
	this.shape.setTransform(357.675,-266.329);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(34,1,1).p("EgiVgDYQLqioLyA+QDDAQCQAeQC1AmCOBCQChBMB3B1QCAB/A3CbAHhFUQgZhEBrhSQB3hZBUg1QByhHBogsQD+hnFYAJQDbAGGNBE");
	this.shape_1.setTransform(-564.175,-369.8205);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(48,1,1).p("AiOHFQDgkUFSi8QE7iwF5hSQFVhIGIADQFTADGOA8QFZA0DhBoQEnCIB1DsEg3rACvQBRizCliLQCaiCDJhJQCxhCDbgYQCygUDnAGQJmATHxDJQI3DmE0Gw");
	this.shape_2.setTransform(-7.675,-53.0047);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bird, new cjs.Rectangle(-801,-420.8,1300.3,437.1), null);


(lib.backMountains = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("EhNtgBtQHXhtF1lUQB8hyBlh/QDGj9BlkzQBqE7B7E4QCfGQC9GLQGRhLFXmBQBmhzByimQCNjQCfkeQBREIBcEAQB5FRCKFCQDrh1CujMQAZgdAXgfQC9j4A6knQB6E2CKEuQEZJmFcJHQE9kED4l9QDelVCgmuQCHlnBrnRQACgKADgJQBAkdBjoeQByFzBsF5QCxJuCfJ/QE8kyC1mdQA2h9Anh/QBZkmAGk0QDRDvCqEHQAfAxAfAyQCBDVBoDlQFNl7DgnJQAZgzAYg0QDroIBIorQAgDsBUEQQA9DHB0EnQAgBSAaBEQB+FCAHATQBpEaA4DbQCJIbgOK3QgJGshcM3QgYDUgbBtQgqCvhUB2QifDhlTBRQjpA4mLgFMhXfgA9QuAgKnMgsQruhHo4jMQjohUiVhjQjBiBhYirQhOiagHjWQgEiLAgj4QBMpoBVpT");
	this.shape.setTransform(0.0219,0.0205);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAkXgCfIBSg9QAUgPANABQAHABAJAGQAFAEAJAJQATASAaAHQAbAHAZgFQASgDAbgMQAigPAKgDQAegJAfAFQAgAEAbAQQAGAEAUANQAPALAKAEQAJAEAIACAPnl4QB9hIBwhmQAdAVARAgQAGgJANACQANACAGAJQAEAEAJAPQAHALAHAFQAMAIAPgCQAGgBAEgCEA41gIwQAvgBAagBQA3gDArgJQBsgVBAhEQAXgbAHgHQATgRATgDQARgDAVAKQANAFAVAQQBLAzBYAnQAkARAZgEEhD3ADFQAqAzA/AbQBAAcBCgEQARgBAggFQAhgFAQgCQAWgCAugCQAzgFAvgREgnYAE0QAxAbA4APQBAAQBCgFQADAAAvgHQAfgEAVgBQAKgBAaAAQAYAAAOgCQAggDAegJA1jKgQAnAhA2AKQA7ALA1gVQACgBAbgLQARgIANgDQATgDAyAGQAsAGAXgKQARgJACAAQALgFAJACQAIABALALQANANAFADQAcASAzgi");
	this.shape_1.setTransform(45.2,-98.67);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Az/TJQg2gKgnghQAZgdAXgfQC9j4A6knQB6E2CKEuQgzAigcgSQgFgDgNgNQgLgLgIgBQgJgCgLAFIgTAJQgXAKgsgGQgygGgTADQgNADgRAIIgdAMQgjAOglAAQgUAAgUgEgEgloANcQg4gPgxgbQCNjQCfkeQBREIBcEAQgeAJggADQgOACgYAAIgkABIg0AFIgyAHIgdABQgzAAgygMgEhCHAMRQg/gbgqgzIgNgKQDGj9BlkzQBqE7B7E4IgQAGQgvARgzAFQguACgWACIgxAHQggAFgRABIgRAAQg5AAg4gYgEAkNAFYQBZkmAGkzQDRDvCqEGQAfAxAfAyQgJgCgIgEQgKgEgQgLIgagRQgagQgggEQgggFgeAJIgsASQgaAMgSADQgaAFgagHQgagHgTgSIgOgNQgJgGgIgBQgMgBgUAPIhSA9gASRq1QByFzBsF4IgKADQgQACgLgIQgHgFgHgLQgKgPgDgEQgHgJgMgCQgNgCgGAJQgRgfgdgVQhxBlh8BIQBAkcBjoegEA5sgCZQDroIBIorQAgDsBUEQQA9DHB0EnIA6CWQgYAEglgRQhXgnhLgzQgWgQgMgFQgVgKgSADQgSADgTARIgeAiQhABEhtAVQgqAJg3ADIhKACQAZgzAYg0g");
	this.shape_2.setTransform(44.525,-149.6746);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("EA7gAinMhXfgA9QuAgKnMgsQruhHo4jMQjohUiVhjQjBiBhYirQhOiagHjWQgEiLAgj4QBMpnBVpUIAyAFQHXhtF1lUQB8hyBlh/IANAKQAqAzA/AbQBAAcBCgEQARgBAggFIAxgHQAWgCAugCQAzgFAvgRIAQgGQCfGQC9GMQGRhMFXmBQBmhzByimQAxAbA4APQBAAQBCgFIAygHIA0gFIAkgBQAYAAAOgCQAggDAegJQB5FRCKFDQDrh2CujMQAnAhA2AKQA7ALA1gVIAdgMQARgIANgDQATgDAyAGQAsAGAXgKIATgJQALgFAJACQAIABALALQANANAFADQAcASAzgiQEZJnFcJGQE9kED4l8QDelWCgmuQCHlnBrnRIAFgTQB8hIBxhmQAdAVARAgQAGgJANACQAMACAHAJQADAEAKAPQAHALAHAFQALAIAQgCIAKgDQCxJuCfJ/QE8kyC1mdQA2h9Anh/IARAGIBSg9QAUgPAMABQAIABAJAGIAOANQATASAaAHQAaAHAagFQASgDAagMIAsgSQAegJAgAFQAgAEAaAQIAaARQAQALAKAEQAIAEAJACQCBDVBoDlQFNl7DgnJIBKgCQA3gDAqgJQBtgVBAhEIAegiQATgRASgDQASgDAVAKQAMAFAWAQQBLAzBXAnQAlARAYgEICFFVQBpEaA4DbQCJIbgOK4QgJGrhcM3QgYDUgbBtQgqCvhUB2QifDhlTBRQjWA0leAAIhAgBg");
	this.shape_3.setTransform(0.0219,51.0251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backMountains, new cjs.Rectangle(-522.3,-273.5,1044.6999999999998,547.1), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bushes();
	this.instance.setTransform(627.75,131.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AETBJQkXgmifg5Qg8gWgzgc");
	this.shape.setTransform(860.65,228.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-0.5,-0.5,1256.5,263.2), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.frontMountains = new lib.frontMountains();
	this.frontMountains.name = "frontMountains";
	this.frontMountains.setTransform(566.75,181.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgFgNQAFANAGAN");
	this.shape.setTransform(1152.025,117.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgCgGIAFAMIgCABg");
	this.shape_1.setTransform(542.75,148.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.frontMountains}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.5,-0.5,1154.2,364.1), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.backMountains();
	this.instance.setTransform(521.3,272.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EA1mgJ2QALgBAIgGAeNjSQAGACAHAAQARABALgJEAqLgJcQANAAALAAAHXnzQAIgEAEgIABPmhQADgBAEgCA7JJ+QADgCADgCEgj8AJtQAEADAEAEEguQAEiQAEgBAEgBEg14AD/QAHAEAIAF");
	this.shape.setTransform(657.825,178.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-0.5,-0.5,1043.7,546.2), null);


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
	this.instance = new lib.sunstatic();
	this.instance.setTransform(-1077.2,-115.9,1,1,0,0,0,191.9,171.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-1059.7,y:-126.5},0).wait(1).to({x:-1042.3,y:-136.95},0).wait(1).to({x:-1024.85,y:-147.2},0).wait(1).to({x:-1007.45,y:-157.25},0).wait(1).to({x:-990.1,y:-167.1},0).wait(1).to({x:-972.75,y:-176.8},0).wait(1).to({x:-955.4,y:-186.35},0).wait(1).to({x:-938.05,y:-195.65},0).wait(1).to({x:-920.8,y:-204.8},0).wait(1).to({x:-903.5,y:-213.75},0).wait(1).to({x:-886.25,y:-222.5},0).wait(1).to({x:-869,y:-231.1},0).wait(1).to({x:-851.8,y:-239.55},0).wait(1).to({x:-834.6,y:-247.8},0).wait(1).to({x:-817.45,y:-255.85},0).wait(1).to({x:-800.3,y:-263.7},0).wait(1).to({x:-783.15,y:-271.45},0).wait(1).to({x:-766.05,y:-278.95},0).wait(1).to({x:-749,y:-286.35},0).wait(1).to({x:-731.9,y:-293.5},0).wait(1).to({x:-714.9,y:-300.55},0).wait(1).to({x:-697.85,y:-307.4},0).wait(1).to({x:-680.85,y:-314.05},0).wait(1).to({x:-663.9,y:-320.55},0).wait(1).to({x:-646.95,y:-326.9},0).wait(1).to({x:-630,y:-333.05},0).wait(1).to({x:-613.1,y:-339.05},0).wait(1).to({x:-596.2,y:-344.9},0).wait(1).to({x:-579.35,y:-350.55},0).wait(1).to({x:-562.5,y:-356.05},0).wait(1).to({x:-545.7,y:-361.4},0).wait(1).to({x:-528.9,y:-366.6},0).wait(1).to({x:-512.1,y:-371.6},0).wait(1).to({x:-495.35,y:-376.45},0).wait(1).to({x:-478.6,y:-381.15},0).wait(1).to({x:-461.9,y:-385.7},0).wait(1).to({x:-445.2,y:-390.05},0).wait(1).to({x:-428.55,y:-394.3},0).wait(1).to({x:-411.9,y:-398.35},0).wait(1).to({x:-395.25,y:-402.25},0).wait(1).to({x:-378.65,y:-406},0).wait(1).to({x:-362.1,y:-409.6},0).wait(1).to({x:-345.55,y:-413.05},0).wait(1).to({x:-329,y:-416.35},0).wait(1).to({x:-312.5,y:-419.5},0).wait(1).to({x:-296,y:-422.5},0).wait(1).to({x:-279.55,y:-425.3},0).wait(1).to({x:-263.1,y:-428},0).wait(1).to({x:-246.65,y:-430.55},0).wait(1).to({x:-230.25,y:-432.95},0).wait(1).to({x:-213.9,y:-435.2},0).wait(1).to({x:-197.55,y:-437.3},0).wait(1).to({x:-181.2,y:-439.25},0).wait(1).to({x:-164.9,y:-441.05},0).wait(1).to({x:-148.6,y:-442.7},0).wait(1).to({x:-132.35,y:-444.25},0).wait(1).to({x:-116.1,y:-445.6},0).wait(1).to({x:-99.9,y:-446.85},0).wait(1).to({x:-83.7,y:-447.95},0).wait(1).to({x:-67.5,y:-448.9},0).wait(1).to({x:-51.35,y:-449.75},0).wait(1).to({x:-35.25,y:-450.4},0).wait(1).to({x:-19.15,y:-450.95},0).wait(1).to({x:-3.05,y:-451.35},0).wait(1).to({x:13,y:-451.65},0).wait(1).to({x:29.05,y:-451.8},0).wait(1).to({x:45.05},0).wait(1).to({x:61.05,y:-451.65},0).wait(1).to({x:77,y:-451.4},0).wait(1).to({x:92.95,y:-451},0).wait(1).to({x:108.85,y:-450.45},0).wait(1).to({x:124.75,y:-449.8},0).wait(1).to({x:140.6,y:-449.05},0).wait(1).to({x:156.45,y:-448.1},0).wait(1).to({x:172.3,y:-447.05},0).wait(1).to({x:188.1,y:-445.9},0).wait(1).to({x:203.85,y:-444.6},0).wait(1).to({x:219.6,y:-443.2},0).wait(1).to({x:235.3,y:-441.65},0).wait(1).to({x:251,y:-439.95},0).wait(1).to({x:266.7,y:-438.15},0).wait(1).to({x:282.35,y:-436.25},0).wait(1).to({x:298,y:-434.2},0).wait(1).to({x:313.6,y:-432.05},0).wait(1).to({x:329.2,y:-429.75},0).wait(1).to({x:344.75,y:-427.35},0).wait(1).to({x:360.3,y:-424.85},0).wait(1).to({x:375.8,y:-422.2},0).wait(1).to({x:391.3,y:-419.45},0).wait(1).to({x:406.75,y:-416.55},0).wait(1).to({x:422.2,y:-413.55},0).wait(1).to({x:437.65,y:-410.45},0).wait(1).to({x:453.05,y:-407.25},0).wait(1).to({x:468.4,y:-403.9},0).wait(1).to({x:483.75,y:-400.45},0).wait(1).to({x:499.1,y:-396.9},0).wait(1).to({x:514.4,y:-393.25},0).wait(1).to({x:529.65,y:-389.45},0).wait(1).to({x:544.9,y:-385.55},0).wait(1).to({x:560.1,y:-381.55},0).wait(1).to({x:575.35,y:-377.45},0).wait(1).to({x:590.5,y:-373.25},0).wait(1).to({x:605.65,y:-368.9},0).wait(1).to({x:620.8,y:-364.45},0).wait(1).to({x:635.9,y:-359.95},0).wait(1).to({x:650.95,y:-355.3},0).wait(1).to({x:666.05,y:-350.55},0).wait(1).to({x:681.05,y:-345.7},0).wait(1).to({x:696.05,y:-340.75},0).wait(1).to({x:711.05,y:-335.7},0).wait(1).to({x:726,y:-330.5},0).wait(1).to({x:740.95,y:-325.25},0).wait(1).to({x:755.85,y:-319.9},0).wait(1).to({x:770.7,y:-314.45},0).wait(1).to({x:785.55,y:-308.9},0).wait(1).to({x:800.4,y:-303.2},0).wait(1).to({x:815.2,y:-297.45},0).wait(1).to({x:830,y:-291.6},0).wait(1).to({x:844.75,y:-285.65},0).wait(1).to({x:859.5,y:-279.6},0).wait(1).to({x:874.2,y:-273.5},0).wait(1).to({x:888.85,y:-267.25},0).wait(1).to({x:903.55,y:-260.95},0).wait(1).to({x:918.15,y:-254.5},0).wait(1).to({x:932.75,y:-248},0).wait(1).to({x:947.35,y:-241.4},0).wait(1).to({x:961.9,y:-234.7},0).wait(1).to({x:976.45,y:-227.95},0).wait(1).to({x:990.95,y:-221.05},0).wait(1).to({x:1005.4,y:-214.1},0).wait(1).to({x:1019.85,y:-207.05},0).wait(1).to({x:1034.3,y:-199.9},0).wait(1).to({x:1048.7,y:-192.7},0).wait(1).to({x:1063.05,y:-185.4},0).wait(1).to({x:1077.45,y:-178},0).wait(1).to({x:1091.75,y:-170.5},0).wait(1).to({x:1106.05,y:-162.95},0).wait(1).to({x:1120.3,y:-155.35},0).wait(1).to({x:1134.6,y:-147.6},0).wait(1).to({x:1148.8,y:-139.8},0).wait(1).to({x:1163,y:-131.9},0).wait(1).to({x:1177.15,y:-123.95},0).wait(1).to({x:1191.35,y:-115.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1274.6,-629.2,2663.3999999999996,690.8000000000001);


// stage content:
(lib.loberger_Midterm2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,189];
	// timeline functions:
	this.frame_0 = function() {
		this.linker_mc.addEventListener("click", link.bind(this));
		
		function link(e) {
		
		var url = "https://www.nps.gov/zion/index.htm";
			
		var win = window.open(url, "_blank");
			
		win.focus();
		
		}
	}
	this.frame_189 = function() {
		this.stop();
		
		createjs.Touch.enable(stage);
		stage.mouseMoveOutside = true;
		
		var root = this;
		var midpoint = this.stage.canvas.width / 2;
		var mountainRestX = this.frontMountains.x;
		
		this.stage.on("stagemousemove", function(e) {
		    var newX = 0;
			if (e.stageX < midpoint) {
				newX = (midpoint - e.stageX) / 20;
			} else if (e.stageX > midpoint) {
				newX = (e.stageX - midpoint) / 20;
				newX *= -1;
			}
			createjs.Tween.get(root.frontMountains, {override:true}).to({x: mountainRestX + newX}, 1000, createjs.Ease.quintOut);
			createjs.Tween.get(root.backMountains, {override:true}).to({x: mountainRestX + (newX / 2)}, 1000, createjs.Ease.quintOut);
		
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(189).call(this.frame_189).wait(1));

	// text
	this.linker_mc = new cjs.Text("Zion National Park", "74px 'Silom'", "#FFFFFF");
	this.linker_mc.name = "linker_mc";
	this.linker_mc.textAlign = "center";
	this.linker_mc.lineHeight = 96;
	this.linker_mc.lineWidth = 839;
	this.linker_mc.parent = this;
	this.linker_mc.setTransform(488.05,38.9);

	this.timeline.addTween(cjs.Tween.get(this.linker_mc).wait(190));

	// bushes
	this.instance = new lib.Symbol3();
	this.instance.setTransform(517.15,631.9,1,1,0,0,0,627.8,131.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:629.3},0).wait(1).to({y:626.75},0).wait(1).to({y:624.15},0).wait(1).to({y:621.6},0).wait(1).to({y:619.05},0).wait(1).to({y:616.45},0).wait(1).to({y:613.9},0).wait(1).to({y:611.3},0).wait(1).to({y:608.75},0).wait(1).to({y:606.2},0).wait(1).to({y:603.6},0).wait(1).to({y:601.05},0).wait(1).to({y:598.5},0).wait(177));

	// frontMountains
	this.frontMountains = new lib.Symbol2();
	this.frontMountains.name = "frontMountains";
	this.frontMountains.setTransform(520,574.8,1,1,0,0,0,576.3,181.5);

	this.timeline.addTween(cjs.Tween.get(this.frontMountains).wait(1).to({y:572.15},0).wait(1).to({y:569.5},0).wait(1).to({y:566.85},0).wait(1).to({y:564.2},0).wait(1).to({y:561.55},0).wait(1).to({y:558.95},0).wait(1).to({y:556.3},0).wait(1).to({y:553.65},0).wait(1).to({y:551},0).wait(1).to({y:548.35},0).wait(1).to({y:545.7},0).wait(1).to({y:543.1},0).wait(1).to({y:540.45},0).wait(1).to({y:537.8},0).wait(1).to({y:535.15},0).wait(1).to({y:532.5},0).wait(1).to({y:529.85},0).wait(1).to({y:527.25},0).wait(1).to({y:524.6},0).wait(1).to({y:521.95},0).wait(1).to({y:519.3},0).wait(1).to({y:516.65},0).wait(1).to({y:514.05},0).wait(167));

	// backMountains
	this.backMountains = new lib.Symbol1();
	this.backMountains.name = "backMountains";
	this.backMountains.setTransform(444.55,412.25,1.1539,1,0,0,0,521.3,272.6);

	this.timeline.addTween(cjs.Tween.get(this.backMountains).wait(1).to({scaleX:1.154,x:445.75,y:410.3},0).wait(1).to({x:446.95,y:408.35},0).wait(1).to({x:448.1,y:406.4},0).wait(1).to({x:449.3,y:404.45},0).wait(1).to({x:450.45,y:402.5},0).wait(1).to({x:451.65,y:400.55},0).wait(1).to({x:452.8,y:398.6},0).wait(1).to({x:454,y:396.65},0).wait(1).to({x:455.2,y:394.7},0).wait(1).to({x:456.35,y:392.75},0).wait(1).to({x:457.55,y:390.8},0).wait(1).to({x:458.7,y:388.85},0).wait(1).to({x:459.9,y:386.9},0).wait(1).to({x:461.05,y:384.95},0).wait(1).to({x:462.25,y:383},0).wait(1).to({x:463.45,y:381.05},0).wait(1).to({x:464.6,y:379.1},0).wait(1).to({x:465.8,y:377.15},0).wait(1).to({x:466.95,y:375.2},0).wait(1).to({x:468.15,y:373.25},0).wait(1).to({x:469.3,y:371.3},0).wait(1).to({x:470.5,y:369.35},0).wait(1).to({x:471.65,y:367.45},0).wait(167));

	// birds
	this.instance_1 = new lib.bird();
	this.instance_1.setTransform(458.4,236.6,0.9567,1.2373,0,0,0,-150.1,-201.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-150.9,regY:-202.3,scaleX:0.9457,scaleY:1.2193,x:457.6,y:235.5},0).wait(1).to({scaleX:0.9346,scaleY:1.2013,y:235.55},0).wait(1).to({scaleX:0.9236,scaleY:1.1833,x:457.65,y:235.5},0).wait(1).to({scaleX:0.9126,scaleY:1.1653,y:235.55},0).wait(1).to({scaleX:0.9016,scaleY:1.1474},0).wait(1).to({scaleX:0.8905,scaleY:1.1294,y:235.6},0).wait(1).to({scaleX:0.8795,scaleY:1.1114,x:457.7},0).wait(1).to({scaleX:0.8685,scaleY:1.0934},0).wait(1).to({scaleX:0.8574,scaleY:1.0754,y:235.65},0).wait(1).to({scaleX:0.8464,scaleY:1.0575,y:235.6},0).wait(1).to({scaleX:0.8354,scaleY:1.0395,y:235.65},0).wait(1).to({scaleX:0.8244,scaleY:1.0215},0).wait(1).to({scaleX:0.8133,scaleY:1.0035,y:235.7},0).wait(1).to({scaleX:0.8023,scaleY:0.9856,x:457.75},0).wait(1).to({scaleX:0.7913,scaleY:0.9676},0).wait(1).to({scaleX:0.7802,scaleY:0.9496,y:235.75},0).wait(1).to({scaleX:0.7692,scaleY:0.9316,x:457.8},0).wait(1).to({scaleX:0.7582,scaleY:0.9136},0).wait(1).to({scaleX:0.7472,scaleY:0.8957,x:457.75,y:235.8},0).wait(1).to({scaleX:0.7361,scaleY:0.8777},0).wait(1).to({scaleX:0.7251,scaleY:0.8597,x:457.8,y:235.85},0).wait(1).to({scaleX:0.7141,scaleY:0.8417,y:235.8},0).wait(1).to({scaleX:0.703,scaleY:0.8237,y:235.85},0).wait(1).to({scaleX:0.692,scaleY:0.8058},0).wait(1).to({scaleX:0.681,scaleY:0.7878,x:457.85,y:235.9},0).wait(1).to({scaleX:0.67,scaleY:0.7698},0).wait(1).to({scaleX:0.6589,scaleY:0.7518},0).wait(1).to({scaleX:0.6479,scaleY:0.7338,x:457.9,y:235.95},0).wait(1).to({scaleX:0.6369,scaleY:0.7159,x:457.85},0).wait(1).to({scaleX:0.6258,scaleY:0.6979},0).wait(1).to({scaleX:0.6148,scaleY:0.6799,x:457.9},0).wait(1).to({scaleX:0.6038,scaleY:0.6619,y:236},0).wait(1).to({scaleX:0.5928,scaleY:0.6439,y:236.05},0).wait(1).to({scaleX:0.5817,scaleY:0.626,y:236},0).wait(1).to({scaleX:0.5707,scaleY:0.608,x:457.95,y:236.05},0).wait(1).to({scaleX:0.5597,scaleY:0.59},0).wait(1).to({scaleX:0.5487,scaleY:0.572,y:236.1},0).wait(1).to({scaleX:0.5376,scaleY:0.5541,x:457.9},0).wait(1).to({scaleX:0.5266,scaleY:0.5361,x:457.95},0).wait(1).to({scaleX:0.5156,scaleY:0.5181,y:236.15},0).wait(1).to({scaleX:0.5045,scaleY:0.5001},0).wait(1).to({scaleX:0.4935,scaleY:0.4821,x:458},0).wait(1).to({scaleX:0.4825,scaleY:0.4642},0).wait(1).to({scaleX:0.4715,scaleY:0.4462,y:236.2},0).wait(1).to({scaleX:0.4604,scaleY:0.4282,y:236.25},0).wait(1).to({scaleX:0.4494,scaleY:0.4102,x:458.05,y:236.2},0).wait(1).to({scaleX:0.4384,scaleY:0.3922,x:458,y:236.25},0).wait(143));

	// sun
	this.instance_2 = new lib.sun();
	this.instance_2.setTransform(-100.95,292.4,0.4793,0.4793,0,0,0,-1081.2,-7.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41).to({_off:false},0).wait(149));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAAAgysIAAAAMAAABlZIAAAA");
	this.shape.setTransform(965.875,320.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0000FF","#429FFF"],[0,1],0,-487.3,0,487.4).s().p("EhMJBMKMAAAiYTMCYTAAAIAAZdMAAABlZIAAZdg");
	this.shape_1.setTransform(478.45,320.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(190));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(286.4,153.4,859.5000000000001,654.7);
// library properties:
lib.properties = {
	id: 'C70AF95A0406448A8773EDC598FB019D',
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
an.compositions['C70AF95A0406448A8773EDC598FB019D'] = {
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