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


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiQmoQAAADAAADQgBABABABQgBAZACAPQAFAaAQANQAPANAeAHQAIABAPAEQAbAIAZACQAZABAdgIQAUgGAhgOQAhgQAFgTQABgFAAgPQgBgMADgHAhTFQQAAAFgFAJQgFAJgBAEQgCAEABAGQABAHAAADQgCANAAAGQAAALAHAHQAHAHASgCQAGAAABgDQABgCAAgHQACgFAHgHQADgFAAgKIAAgdQAAgIgEgEQgFgEgIAFQgCABgDACQgDADgDAEQgEAGgBAIQAAAFADAFQACAFAEABQABAAAAAAQAEAAAHgFQAHgEADgHQADgIgEgGIgFAAQgGAJgHAGQACgLgDgLQAAgCgBgBQgBgBgEAAQgOAqAAAYQAGgHAFgFQABgCACgCAhEGCQACgGABgGQAAgCAAgBQgBABgBAAQgFAEgBACQgBABAAABQgCADABAGQAAAGAAAEQAAABgBABQACgDACgDQACgEACgFg");
	this.shape.setTransform(56.8857,42.9222);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990000").ss(1,1,1).p("AgU1wQgagEgbABQgQAAgQABQhrALhNBEQhZBNglCQQgYBegJCrIgeJJQgIC1ARBnQAaCcBZBYQBwBvC0gQQCrgPB6hzQBuhnBAijQAziGAXi3QAUiogCi/QgBijgRjFQgHhVgNgzQgUhKgnguQg+hIh0gSQgHgBgHgBQhXgLiNAUgABb1KQg1geg6gIAmyHIQAvA9BTAnQBBAfBfAUQCyAmC7gKQAzgDAhgIQAsgMAbgaAm6DPQAIBhgOCBQgDAZgcDJQgSCGABBdQABB8AgBjQAkBxBSBQQBXBWBtAQQBvAOBsg+QBng6BAhnQA5hZAgh7QAZhdAPiIQAllPgNlXAnZLqQCcCMDaAfQDZAgC9haAm7QqQBkBIB5AkQB5AjB6gFQBJgFApgUQAwgZAmg8");
	this.shape_1.setTransform(49.7276,140.6423);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEA/QgZgCgcgIIgWgFQgfgHgOgNQgQgNgFgZQgDgPABgZIAAgCQAbgBAaAEQCNgUBXALIAOACIgFATQgDAHABAMQABAPgBAEQgGATghAQQggAOgVAGQgbAHgXAAIgDAAgAARgLQg0geg7gIQA7AIA0Aeg");
	this.shape_2.setTransform(57.1107,6.3313);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#993300").s().p("AlqMZQhZhYgaicQgRhoAIi0IAepIQAJirAYhfQAliQBZhNQBNhDBrgLQAQgCAQAAIAAACQgBAZADAPQAFAaAQAOQAOAMAfAIIAVAFQAcAIAZACQAZAAAdgIQAVgGAggOQAhgPAGgUQABgFgBgOQgBgNADgHIAFgTQB0ASA+BJQAnAuAUBKQANAyAHBWQARDFABCiQACC/gUCoQgXC3gzCGQhACkhuBmQh6B0irAPQgWACgVAAQiWAAhjhigAgIgpIADAAIABAAIADgBQAFAAACgCIABgJQABgFAIgIQACgFAAgKIAAgcQAAgJgEgEQgFgDgHAEIgEAEIgBgEIgFgBQgOAqAAAYIAKgMIAAACIADgFIAFgKIABAAQADAAAHgFQAGgEAEgHIABgGQAAgEgCgEIgFAAQgGAKgGAFIAAgIQAAgHgBgGIAEgEQAHgEAFADQAEAEAAAJIAAAcQAAAKgCAFQgIAIgBAFIgBAJQgCACgFAAIgDABIgBAAIgDAAIAAAAIAAAAQgMAAgFgFIgBgBQgGgGAAgLIABgTIgBgKIAAgDIABgHQABgEAGgKQAEgIAAgGQAAAGgEAIQgGAKgBAEIgBAHIAAADIABAKIgBATQAAALAGAGIABABQAFAFAMAAIAAAAIAAAAgAgIh6IAFABIABAEQgEACgCAEQgEAHgBAHQAAAFACAFQgBADAAADIAAAEIABAFIgBAEIgKAMQAAgYAOgqgAgMhEIADgDIgDADIABgEIgBgFIAAgEQAAgDABgDQADAFAEABIgFAKIgDAFIAAgCgAgMhEIAAAAgAgEhRIACgMIABgDIgCACQgFADgCADIgBABQgCgFAAgFQABgHAEgHQACgEAEgCQABAGAAAHIAAAIQAGgFAGgKIAFAAQACAEAAAEIgBAGQgEAHgGAEQgHAFgDAAIgBAAgAgEhRQgEgBgDgFIABgBQACgDAFgDIACgCIgBADIgCAMIAAAAg");
	this.shape_3.setTransform(50.5136,89.67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1,-1,101.5,283.3), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("AiEk5IDxmRQA7DcAyDdQAkCeAgCcQABAEABAFQBDFLAzFOQkfj2kRkFQhehYhbhaIDPlXIFeAoIIOA9QjRCkj5BZQgfAMggAKQh6Aig8AUQhoAhhEArQgLAHgMAIQgrAeg2AxQhkBZgPAMQiHBth4gBQgMAAgMgCQgKgaATgZQAUgZAlAIIDwmMQjOjLjGjTgAptHwIAqhG");
	this.shape.setTransform(74.425,71.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AiaDQIAXgQQBEgqBoghQA8gUB6giIBBgOQBDFMAzFOQkfj2kRkFgAptHwIAqhGIDwmNQBbBbBeBYQgrAeg2AxIhzBlQiFBsh3AAIgDAAgAiaDQIAAAAgAlTAdIDPlWIDxmRQA7DcAyDeQAkCcAgCdQggidgkicIIOA8QjRCkj5BZQgfALggALQh6Aig8AUQhoAhhEAqIgXAQQhehYhbhbgADakQIlegpgAlTAdQjOjKjGjTIJjBHIjPFWIAAAAg");
	this.shape_1.setTransform(74.425,71.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-2,-2,152.9,147), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("AiEk5IDxmRQA7DcAyDdQAkCeAgCcQgfAMggAKQh6Aig8AUQhoAhhEArQgLAHgMAIQhehYhbhaIDPlXIFeAoIIOA9QjRCkj5BZQABAEABAFQBDFLAzFOQkfj2kRkFQgrAeg2AxQhkBZgPAMQiHBth4gBIAqhGIDwmMQjOjLjGjTgAptHwQgMAAgMgCQgKgaATgZQAUgZAlAI");
	this.shape.setTransform(74.425,71.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AiaDQQgrAeg2AxIhzBlQiHBth4gBIAqhGIDwmNQjOjKjGjTIJjBHIjPFWQBbBbBeBYQhehYhbhbIDPlWIFeApQAkCcAgCdQgfALggALQh6Aig8AUQhoAhhEAqIgXAQIAXgQQBEgqBoghQA8gUB6giIBBgOQBDFMAzFOQkfj2kRkFgAEeApIAAAAgADakQIIOA8QjRCkj5BZQggidgkicgAiEk5IDxmRQA7DcAyDegAiEk5g");
	this.shape_1.setTransform(74.425,71.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-2,-2,152.9,147), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("AiEk5IDxmRQA7DcAyDdQAkCeAgCcQABAEABAFQBDFLAzFOQkfj2kRkFQhehYhbhaIDPlXIFeAoIIOA9QjRCkj5BZQgfAMggAKQh6Aig8AUQhoAhhEArQgLAHgMAIQgrAeg2AxQhkBZgPAMQiHBth4gBQgMAAgMgCQgKgaATgZQAUgZAlAIIDwmMQjOjLjGjTgAptHwIAqhG");
	this.shape.setTransform(74.425,71.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AiaDQIAXgQQBEgqBoghQA8gUB6giIBBgOQBDFMAzFOQkfj2kRkFgAptHwIAqhGIDwmNQjOjKjGjTIJjBHIjPFWQBbBbBeBYQgrAeg2AxIhzBlQiFBsh3AAIgDAAgAiaDQIAAAAgAlTAdIDPlWIDxmRQA7DcAyDeQAkCcAgCdQggidgkicIIOA8QjRCkj5BZQgfALggALQh6Aig8AUQhoAhhEAqIgXAQQhehYhbhbgADakQIlegpg");
	this.shape_1.setTransform(74.425,71.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-2,-2,152.9,147), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("AiEk5IDxmRQA7DcAyDdQAkCeAgCcQABAEABAFQBDFLAzFOQkfj2kRkFQhehYhbhaQjOjLjGjTIJjBHIFeAoIIOA9QjRCkj5BZQgfAMggAKQh6Aig8AUQhoAhhEArQgLAHgMAIQgrAeg2AxQhkBZgPAMQiHBth4gBQgMAAgMgCQgKgaATgZQAUgZAlAIIDwmMgAptHwIAqhG");
	this.shape.setTransform(74.425,71.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AiaDQQhehYhbhbQBbBbBeBYQgrAeg2AxIhzBlQiHBth4gBIAqhGIDwmNIDPlWIDxmRQA7DcAyDeQAkCcAgCdQggidgkicIIOA8QjRCkj5BZQgfALggALQh6Aig8AUQhoAhhEAqIgXAQIAXgQQBEgqBoghQA8gUB6giIBBgOQBDFMAzFOQkfj2kRkFgADakQIlegpgArnmAIJjBHIjPFWQjOjKjGjTgAiEk5g");
	this.shape_1.setTransform(74.425,71.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-2,-2,152.9,147), null);


(lib.picture = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF9900").ss(7,1,1).p("ArTggQgNgDgNgNQgHgHgMgPQgggjgtgRAEyklQAKgLAAgYIAAhBAkRk5QAAgJgHgOQgJgQgCgGQgCgJAAgUQAAgTgKglAL0gNQASgWAbgVQATgOAEgFQAIgIAEgKAPuG8QAQAAAXgCQAagDANgBQAqgFASgJAuvGUQgTAAgjgKQgZgHgBAAQgNgDgTgCQgJgBhPgJ");
	this.shape.setTransform(-210.425,-34.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAwgZQAAAAABAAQAAAAABgBQgBABgBAAQgOAIgNAKQACAAACgBQACAAABgBQAFgBAEgCQABAAACgBIgBAAQgGAKgIAHIgBAAQgBAAgBABQgEACgKAIQgEADgEABQAAABgCABQgBABgCAAQgCABgCAAQAAAAAAAAQgDABAAACQABgBABAAQgBAAAAABQABAAABAAQADABADAAQAHABAJgDQAIgCAMgIQgHACgJABQgEACgKABQgBAAgCAAQAAAAAAAAQgCABgEABQAAAAgBAAQABAAABgBAAhgVQADgBADAAQADgCADgDQgEACgIAEQgLAFgWAJQgQAGgGgBQgFAAgKACQgKAEgFgCQAAAEgCABAgEgCQARgKAWgJQACAAACgBQAEgBAFgCAAcgJQALgGAKgKQABAAACgBAAHgFQAKgFADgCIgUAJIgEACQgDABgCAAQACAAADgCQACAAACgBQADgBAEgBQACAAABgBQAFAAAGgBQgCACgCACQABgBACAAQAEgCAEgDAg0gHQACAAACAAQAIADAKgCQAGAAARgFQAKgCAHgDIAPgDQACgBAGgBAATAJQAEgCACgCQAAgBAAAAQgDACgDADQgIAHgLAEQAAABgCAAQgCABgCABAARgDQgDACgCABQAAAAgBABQgDAFgGAEQgCABgGAEQgCAAgEACQAAAAgBAAQgDAAgDgBQABgBAAgBQADgIAOgHQAEgCAEgCAgTAQQABgBABAAQAFgDAIgGQAGgGAPgDAgKAZIABAAQAAgBABAAQABAAAAgBQAEAAADgBQABgBACAAQAjgJARgGQgIAFgOAEAgcAKQADAAADgBQAGgEAHgFQgHADgFgBQAGgCALgC");
	this.shape_1.setTransform(-116.55,40.7531);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(7,1,1).p("Aorj7Qg3hVghhZQgSgtgDgfAtgCUQgigchEgfQhPgkgcgSQgUgNgKgDQgRgHgNAHAOSK0QgDkLiWjnQiij3kAhWQhZgdhugNQhWgJh0gBQhaAAg1AGQhPAJg6AbQg5Abg6A1QgjAgg/BGQhuB6gwBGQg/BcgaBYAA3lfIAAlUAIhjdQAshRBBiBAOnC9QBqgxBdg3");
	this.shape_2.setTransform(-210.375,-32.6375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000099").ss(5,1,1).p("AA9keQAHAoAeAiQAbAeApASQA/AcBmgDQBegDBJgdQBWgkAmhEQAMAqAmAhQAjAeAuAOQAoALA0ADQAfABA+gDQBagDA3gRQBNgYAgg4AMFIoQAYAjASAMQAMAJATAEQAKADAZAEQBIAJAzgDQBDgFAygZQAagNAQgUQATgYgCgZAyno+QB0BDBtgHQA8gCA1gcQA3gcAggwQgLAhAPAkQAPAiAeAWQAsAhBYARQBMAQA3ACQBHADA5gSQBAgUAvgxQAwg0AEg+AwjDyQBZBDB2ABQB4AABXhDQBaBHB7gJQB8gIBNhTQAGArAfAkQAeAhArARQBPAcBfggQBhgfA4hF");
	this.shape_3.setTransform(-204.8,132.574);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("ANxCCQABgBABAAQADgCADgBQBpg0AnhkQAmBzB7A3QB7A3BvgxAMdCcQAJgBAJgCAHRijQABgJABgJAHRijQgKBhA6BYQBABjBoAdQAzAOA0gGAuChpQAXBPA8BAQBKBRBlAaQBmAZBngjQBpgjBAhSQBKBiB5AqQB5AqB2ghQB2ggBUhiQBOhZARhvA2TCTQCfAaCWhUQCOhQA9iI");
	this.shape_4.setTransform(-200.925,26.5089);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(14,1,1).p("A2p/8MAtTAAAMAAAAlQIAAapMgtTAAAIAA6sg");
	this.shape_5.setTransform(-201.975,7.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AgeHLQh6gqhJhiQhBBShoAjQhoAjhlgZQhlgahLhRQg7hBgYhPQAGgGAEgHIADgGIgDgGIgBgJQgCgIgOgGQgNgHgFAGIgGgBQACgGAGgEQAGgEAGAAQAHAAARAFIgHgVQAahYA/hcQAwhFBuh7QA/hGAjggQA6g2A5gaQA6gbBPgJQA1gHBaAAQB0ABBWAKQBuAMBZAeQEABVCiD4QCWDnADELIgFAIIgBAAIgcAEQgJABgIACIAQAAIgFAIIAKgBQAEgHAEAAIAVgCIAAAAQAJgEAMABIgBACQABAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBIAJABQgDAHgGAEQgBAAAAABQAAAAAAABQgBAAAAABQABAAAAAAIgPAAIAAAAQgMAAgDAKIgPAAIgEAAQgWgBgZgDIgBACIgJAQIAFAAIAAAAIADAAIAoABQACADAAAFQgzAGg0gOQhogdg/hjQg6hZAJhhIACgSIgCASQgRBvhNBaQhUBih2AgQg0APg0AAQhDAAhEgYgANLHGIASgCIAAAAIgFACIgSADIAFgDg");
	this.shape_6.setTransform(-204.975,-3.5911);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066CC").s().p("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");
	this.shape_7.setTransform(-201.975,111.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#0067FF","#FFF84F"],[0,1],0.1,-128.9,0.1,129.1).s().p("A2LUKMAAAgoTMAsXAAAMAAAAoTg");
	this.shape_8.setTransform(-199.05,-68);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.picture, new cjs.Rectangle(-353.9,-203.9,303.9,422.9), null);


(lib.person = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.gotoAndPlay("walking");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// standing
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Al1gTIHcgEQBVAAAoALQAYAHAwATQArAPAfgG");
	this.shape.setTransform(1286.225,370.2988);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("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");
	this.shape_1.setTransform(1274.1377,303.6455);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(1280.7565,-2.3085);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#533E33").s().p("ACOGMQnugJpog4QlxgirkhVQg7gHgfgJQgwgOgegaQhAg5AQhmQAPhbBBhOQBkh2CVg7QCAgzCEAGIAsADIA9AGIgHBOQNtBQN6B4IAXADQBGAJAsALIAeAIQA3AQAqAYQA+AkAlA7QAgA0AAA2QAAALgBAMQgIA8gvAzIgIAHIgIAIIhCgDQgTgvgZAKQgaAKgGAYIBMADIBCADQgnAigzAUQg2AUhGAFQgiADg0AAIgqAAgA5GkzIhmgJIBmAJgAH0E6IgIgIIAIgHQAvgzAIg8QABgMAAgLQAAg2ggg0Qglg7g+gkIAAhZQFogKG4APIBcADQEhALH1AcQBAAEAlALQA2ASAWAmQAXAogRAyQgQAwgoAeQgiAag0AOQgfAJhBAKQqyBhp8AAQhyAAhwgDgAHkE6IAAAAg");
	this.shape_3.setTransform(1274.1377,1280.7921);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("EAG5A7QQgrgLhGgJIgXgDQt6h4tthQIAHhOIACgTIBe1PQAZlzALiLQAWkeAYjfQAYjgBIomQBAntAakZQBFrVgLuPQgGocgyxLIAvhGQELBCFUAXQDXAPGSAEQGpAEDBAMQFXAUEKA6IABABQg8GxAII5QACDCAoM5QAxQTgBYaIgEUXQgDMRAFIHQAAAmARAMIgCBIIhdgDQm3gPlpALIhTACIgNAuIgfgIgEAFKA6oQgnzqAAznQAA2NAy2MQAGilAGhkQAIiRAOh2QAmlXBrlSQhrFSgmFXQgOB2gICRQgGBkgGClQgyWMAAWNQAATnAnTqg");
	this.shape_4.setTransform(1259.7625,893.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FF00").s().p("EAIdAoyQjBgLmogEQmTgEjXgPQlUgYkLhBQgKnDBIqYQBcrlAgl0QA3p5gHscQgEnignu3IAlgoIGkAAIAugtQBZBdArAlQA8AyA6AcIACABIADACQARAIARAGQAbAKAlAIIBCAOIA2AKIA4AJQAxAGBBAEIB1AEQAqAAAegBIACAAIACAAIAWgCQA1gFAngTQAjgQBCg4QAcgYAYgQIAKAOIFoAAIAqBJQAkANA1gBIBdgIQBzgJAsAwQAVAWAKAmQAHAXAFAuQAVDxgUFLQgLC/ghF+QgdGcAAIhQgBCAAKM9QAHJGgLF3QgQIDg5GpIgCALQkKg7lXgUgAk8fHQAyB9B0AgQAgAKAfgBQAigBAagPQAjgVATgsQANgfAKg8QAMhIAHgXQAPg0AcgdQgYBIAQBKQAPBNA1AyQA2AzBOAGQBQAHA5gtQAqgiAbg9QARgnAUhMQgOBEAdA+QAgBDA+ADQAyACAngsQAkgpAHg4QAGgpgHhBQgKhWAAgTQAAgPAJh3QAHhSgOgzQgbhjhvhGQg+gohrgmIgwgQIAwAQIgGAOIhLgKIAAiVIgMAAQgeAFgrgPQgwgTgZgHQgogMhVAAInbAEIgGAAQAZh9ARiaQALhqAPjWQBLxaAcxoQgcRohLRaQgPDWgLBqQgRCagZB9IgCAKIggAoQi5Boh6C2Qh6C3gZDSQgDAhABAUQABAcALAVQAOAYAcATQAUAOAiAPQB4A4B9A5QAkARAZAFQAjAGAYgPQASgMALgYQAIgRAHgeIANgzQAFAcAMAegAGQtwQgJEAAAIAIAASqIAAyqQAAoAAJkAQAPmqAwlTQgwFTgPGqgAHYTLIAAAAg");
	this.shape_5.setTransform(1285.6655,264.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiVK4IgEszQAAh0AEg6QAHhgAXhLIAmhvQAUhBgIgxIAFgJIAUAMQAsAXAUAXIArgPQBhEggGDsQgFCvhADbQhEDuhjDOg");
	this.shape_6.setTransform(1359.3933,-314.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.person, new cjs.Rectangle(1041.9,-715.6,464.5,2038.5), null);


(lib.monitortwo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("A6AX/IAAjmIVQAAIAAqeI/4AAMAAAgh5MBJRAAAMAAAAh5MghSAAAIAAKeIWMAAIAADmg");
	this.shape.setTransform(-287.925,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.monitortwo, new cjs.Rectangle(-522.4,-204,469,307), null);


(lib.monitorone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhAgPQAAgKACgHIAEgKQACgHgBgDAg/AGQABgEgCgOQAAgCAAgBQAmAKAnAMQABgCABgCQADgLgCgXABQAdQABgEACgFIAAgPQAAgDAHgOABQAdQAZAIAZAJABMA8QgCgHADgNQABgEACgHAAKAhQgCgGACgJQABgEACgHQAhAKAiAMAiBghQAKACAKADQAWAGAXAHAhtgNQgDgHADgIQAAgCABgCQACgFAIgLQAHgEAAgH");
	this.shape.setTransform(-234.1,-149.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4D3400").ss(4,1,1).p("Ak3iJQBtgQB2AHQCWANBhA2QA8AfAtAuQAuAwAXA8AlVh3QAeBaBTBBQBMA+BlAbQBUAWBvACQBEABCCgJ");
	this.shape_1.setTransform(-234.05,-149.8372);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("AimgrQgbgsgIgPQgSgigJgdQgZhMAcg5QAXgvA3ggQAhgTArgNQAcgJA0gMQA2gNAggBQAxgDAiATQAbAOATAdQARAaAHAhQALA3gUBHQgVBLgqAXQgOAHgUAEQgLABgZACQiPAIhzgDAAnllQAEAAAFgCQAFgCADgBQACgBAPAAAlLAWQAVAfAMAQQAMAVABANQgBAJAAAGQBBhYBLhQAhukCQgJAJgGANQgEAQAHAKQAGAMATAFQAlAMBEgCQAIgBADgBQAGgCAEgDQAGgFACgIQAEgOgCgKQgBgPgTgPQgigegvgHQgaAMgWAYgAkeB2QAAABAAABQgBAKACAHQAEgBC1gqAowIKQAqgwAuhBQAVBlAzBZQAWAmAEAJQAOAbAAAXAnKGFQBMiOBgiBADlmnQABgHAAgGQAIhugOh1QAAgEgBgEADbm0QAGAAAFAAQAogCAlgTQAUgMALgEQAVgIAOAFAB3kOIAUAAADvnJQCLiNC3hh");
	this.shape_2.setTransform(-335.175,-115.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#009900").ss(14,1,1).p("EgiQgBEQAlAcAsANQAgAJAlACQBBACBmgZQB0ggA7gOQBngZBIAEQCAAGC8B1QB9BOAaAOQBXAxBJAUQDFA1D+hvQBYgmCChJQDRh1AEgCQBjg2BOgTQBlgYBRAcQAvARBMA4QBPA5AqASQBTAgBlgSQBHgOB0gxQCTg+ArgOQBtgkBVAIQA0AFBJAZQBSAeApANQCBAoCqgBQBSgBCTgNQAkgEAngE");
	this.shape_3.setTransform(-277.8,-59.3823);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(14,1,1).p("EghCgNlMBCFAAAIAAUvIAAGcMhCFAAAIAAlgg");
	this.shape_4.setTransform(-277.475,-113.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("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");
	this.shape_5.setTransform(-277.475,-113.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("A6AX/IAAjmIVQAAIAAqeI/4AAMAAAgh5MBJRAAAMAAAAh5MghSAAAIAAKeIWMAAIAADmgEgg4AA1IAAFgMBCFAAAIAAmbIBLgHIhLAHIAA0wMhCFAAAgEgg4AA1QgsgNglgcQAlAcAsANg");
	this.shape_6.setTransform(-278.475,-67.45);

	this.text = new cjs.Text("hello.", "96px 'Phosphate'");
	this.text.textAlign = "center";
	this.text.lineHeight = 117;
	this.text.lineWidth = 471;
	this.text.parent = this;
	this.text.setTransform(-271.25,-171.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("A6AX/IAAjmIVQAAIAAqeI/4AAMAAAgh5MBJRAAAMAAAAh5MghSAAAIAAKeIWMAAIAADmgEgg4AGVMBCFAAAIAA7LMhCFAAAg");
	this.shape_7.setTransform(-278.575,-66.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-513,-220.9,479.1,470.20000000000005);


(lib.lamp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(14,1,1).p("A3QMOIARAAITaAAIFIAAIVnAAIAHAAA2/L6IKQxuQBGh3AfhEQAyhqARheAqHsNQJ+AIIkgGAXKL5Qljnjigj6QkNmkiSlx");
	this.shape.setTransform(-132.925,-124.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABeMOIAAgBIlIAAIAAABIzaAAIAAgUIKQxuQBGh3AfhEQAyhqARhdIAAgXQJ+AIIkgFIANARQCSFxENGjQCgD7FjHjIAAAVg");
	this.shape_1.setTransform(-132.425,-124.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A0800").s().p("AuhLwQmBgmAAg2QAAg2GBgmQE7gfGkgGIAA0nIFIAAIAAUnQHLAEFRAhQGBAmAAA2QAAA2mBAmQmCAmogAAQofAAmCgmgACGsUgAjCsUIAAgBIFIAAIAAABg");
	this.shape_2.setTransform(-136.45,33.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(14,1,1).p("A3QMOIARAAITaAAIFIAAIVnAAIAHAAA2/L6IKQxuQBGh3AfhEQAyhqARheAXKL5Qljnjigj6QkNmjiSlyAqHsNQJ+AIIkgG");
	this.shape_3.setTransform(-132.975,-127.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("ABeMOIAAgBIlIAAIAAABIzaAAIAAgUIKQxuQBGh3AfhEQAyhqARheIAAgWQJ+AIIkgFIANARQCSFyENGiQCgD7FjHjIAAAVg");
	this.shape_4.setTransform(-132.475,-127.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A0800").s().p("AuhLwQmBgmAAg2QAAg2GBgmQE7gfGkgFIAA0oIFJAAIAAUnQHKAEFQAhQGCAmAAA2QAAA2mCAmQmAAmohAAQofAAmCgmgACHsUgAjCsUIAAgBIFJAAIAAABg");
	this.shape_5.setTransform(-136.5,29.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288.9,-212.6,311.9,324.7);


(lib.dresser = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFF00").s().p("AipWCQhGhHAAhjQAAhjBGhHQBGhGBjAAQBkAABFBGQBHBHAABjQAABjhHBHQhFBGhkAAQhjAAhGhGgAipC0QhGhGAAhkQAAhjBGhGQBGhGBjAAQBkAABFBGQBHBGAABjQAABkhHBGQhFBGhkAAQhjAAhGhGgAipwuQhGhGAAhjQAAhkBGhGQBGhGBjAAQBkAABFBGQBHBGAABkQAABjhHBGQhFBHhkAAQhjAAhGhHg");
	this.shape.setTransform(-241.95,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B1A00").s().p("A5JZ0IAAs9MAyTAAAIAAM9gAizQ6QhGBHAABjQAABkBGBGQBGBGBkAAQBiAABGhGQBHhGAAhkQAAhjhHhHQhGhGhiAAQhkAAhGBGgA5JGrIAAs8MAyTAAAIAAM8gAiziTQhGBHAABiQAABkBGBGQBGBGBkAAQBiAABGhGQBHhGAAhkQAAhihHhHQhGhGhiAAQhkAAhGBGgA5Js2IAAs9MAyTAAAIAAM9gAiz11QhGBHAABjQAABkBGBGQBGBGBkAAQBiAABGhGQBHhGAAhkQAAhjhHhHQhGhGhiAAQhkAAhGBGg");
	this.shape_1.setTransform(-240.925,21.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C0E00").s().p("EgfFAhDMAAAhCFMA+LAAAMAAABCFgA5Jc/MAyTAAAIAAs+MgyTAAAgA5JJ2MAyTAAAIAAs9MgyTAAAgA5JprMAyTAAAIAAs+MgyTAAAg");
	this.shape_2.setTransform(-240.925,1.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dresser, new cjs.Rectangle(-439.9,-209.9,398,422.9), null);


(lib.door = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#011700").ss(1,1,1).p("AC0AAQAABLg1A0Qg0A1hLAAQhJAAg2g1Qg0g0AAhLQAAhKA0g1QA2g0BJAAQBLAAA0A0QA1A1AABKg");
	this.shape.setTransform(-128,-10.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Awe7zMAg9AAAMAAAA3nMgg9AAAg");
	this.shape_1.setTransform(-195.475,-14.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah/B/Qg0g0AAhLQAAhJA0g1QA1g1BKAAQBKAAA1A1QA1A1AABJQAABLg1A0Qg1A1hKAAQhKAAg1g1g");
	this.shape_2.setTransform(-128,-10.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#001800").s().p("Aweb0MAAAg3nMAg9AAAMAAAA3ngAIjhWQg0A1AABJQAABLA0A0QA1A1BLAAQBKAAA1g1QA1g0AAhLQAAhJg1g1Qg1g1hKAAQhLAAg1A1g");
	this.shape_3.setTransform(-195.475,-14.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.door, new cjs.Rectangle(-301.9,-193.9,212.89999999999998,357.9), null);


(lib.desk = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#371D00").ss(7,1,1).p("Egi5gZDIAAFeMAAAArGEAi6AQpMAAAgkOIAAleEAibgZiUgXEAABguGAAAEgibgTlMBE3AAAEgiSgIBMBEvAAAEAi6AZZIAAowAN9X1QABiKAAhnQAAhlAAhEAN9X1IUfAAAvNXrIAAmaEgi5AZjIAAhuAuvUGQMlAAPpgCEgivAQpMBFpAAAEgivAX1MAwsAAA");
	this.shape.setTransform(-317.375,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#371D00").s().p("EAicAC/MhE3AAAIgeAAIAAldIAKgeUAuGAAAAXEgACIAfAgIAAFdg");
	this.shape_1.setTransform(-317.375,-127.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.desk, new cjs.Rectangle(-544.3,-150.5,453.9,334), null);


(lib.brocave = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Bro Cave", "96px 'Phosphate'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 117;
	this.text.lineWidth = 779;
	this.text.parent = this;
	this.text.setTransform(29.5,-162.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#371D00").s().p("EhRAAOnIAA9NMCiBAAAIAAdNg");
	this.shape.setTransform(11.525,-107.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.brocave, new cjs.Rectangle(-506.9,-200.9,1036.9,187), null);


(lib.bedbutton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#4E2600").ss(5,1,1).p("AxUk1IAAJrARTk1QADEXgCFI");
	this.shape.setTransform(-72.9479,223);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("Axp68MAjTAAAMAAAA15IgXAAMginAAAIgVAAg");
	this.shape_1.setTransform(-72.975,19.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAViOQgIgFgGgGQgSgSABghQAAgrAcgbQAagWApgLQAdgIAvgEQC2gODggCQAmAAAsAAQCEAADAAEQAhABAKACQAYADAPAKQArAaAKBQQAEAeAAAhQABAhgCAkQgEAwgMBUQgKBOgPAsQgXBBgqAkQgoAkhDAMQgpAIhQABQjgAEnEAFQgzACgTgSQgUgSABgqQABglAAgSQACgDACgDQArhJAGhRQAHhVglhFQgNgZgUgXQg0g+higwQiIhAi6gaQhdgNicgFQgXgBgZAAQgTgCgUABQgjACgkANQhPAcg1BBQheBugJC/QgBAWABAVQACCTBOBJQAyAtBTAPQA4AKBggDIG4gHQA7AAAlgFQA1gGAogSQBOgiA0hXQAAgNgBgD");
	this.shape_2.setTransform(-72.1839,-112.5005);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AuCFrQhTgPgygtQhOhJgCiTQgBgVABgWQAJi/BehuQA1hBBPgcQAkgNAjgCQAUgBATACIAwABQCcAFBdANQC6AaCIBAQBiAwA0A+IAEgEQgSgSABghQAAgrAcgbQAagWApgLQAdgIAvgEQC2gODggCIBSAAQCEAADAAEQAhABAKACQAYADAPAKQArAaAKBQQAEAeAAAhQABAhgCAkQgEAwgMBUQgKBOgPAsQgXBBgqAkQgoAkhDAMQgpAIhQABQjgAEnEAFQgzACgTgSQgUgSABgqIABg3IAEgGQArhJAGhRIABgaQAAhGgfg6QgNgZgUgXQAUAXANAZQAfA6AABGIgBAaQgGBRgrBJIgEAGIgBgQIABAQQg0BXhOAiQgoASg1AGQglAFg7AAIm4AHIglABQhGAAgtgIgAAViOQgIgFgGgGQAGAGAIAFgAANDVIAAAAg");
	this.shape_3.setTransform(-72.1839,-112.5005);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#330066").s().p("ARTa9MginAAAIgVAAMAAAg15MAjTAAAMAAAA15gAse6ZQgiACgkANQhPAcg1BAQheBvgJDAQgBAWAAAVQADCTBOBIQAyAuBTAOQA4AKBggCIG4gIQA7AAAlgEQA1gHAogRQBOgiA0hXIgBA2QgBAqAUASQATATAzgCQHEgFDggEQBQgBApgIQBDgNAogkQAqgjAXhBQAPgsAKhOQAMhVAEgwQACglgBghQgBghgDgdQgKhRgrgZQgPgKgYgEQgKgBghgCQjAgDiEAAIhSAAQjgACi2AOQgvAEgdAHQgpALgaAXQgcAbAAArQgBAhASASIgEAEQg0g+higwQiIhAi6gaQhdgNicgFIgwgCIgYgBIgQABg");
	this.shape_4.setTransform(-72.975,19.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.9,-153.9,228.5,410.4);


(lib.stars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.Symbol1();
	this.instance.setTransform(613,134.95,1,1,0,0,0,74.4,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:583.7,y:115.6},0).wait(1).to({x:554.45,y:97.15},0).wait(1).to({x:525.25,y:79.55},0).wait(1).to({x:496.1,y:62.8},0).wait(1).to({x:467,y:46.9},0).wait(1).to({x:438,y:31.8},0).wait(1).to({x:409,y:17.55},0).wait(1).to({x:380.05,y:4.1},0).wait(1).to({x:351.2,y:-8.45},0).wait(1).to({x:322.35,y:-20.2},0).wait(1).to({x:293.55,y:-31.1},0).wait(1).to({x:264.85,y:-41.15},0).wait(1).to({x:236.15,y:-50.35},0).wait(1).to({x:207.5,y:-58.75},0).wait(1).to({x:178.95,y:-66.3},0).wait(1).to({x:150.4,y:-73},0).wait(1).to({x:121.9,y:-78.85},0).wait(1).to({x:93.45,y:-83.9},0).wait(1).to({x:65.15,y:-88.05},0).wait(1).to({x:36.8,y:-91.4},0).wait(1).to({x:8.5,y:-93.95},0).wait(1).to({x:-19.75,y:-95.6},0).wait(1).to({x:-47.95,y:-96.45},0).wait(1).to({x:-76.05},0).wait(1).to({x:-104.15,y:-95.6},0).wait(1).to({x:-132.2,y:-93.95},0).wait(1).to({x:-160.2,y:-91.4},0).wait(1).to({x:-188.15,y:-88.05},0).wait(1).to({x:-216.1,y:-83.9},0).wait(1).to({x:-243.95,y:-78.85},0).wait(1).to({x:-271.75,y:-73},0).wait(1).to({x:-299.5,y:-66.3},0).wait(1).to({x:-327.25,y:-58.75},0).wait(1).to({x:-354.9,y:-50.35},0).wait(1).to({x:-382.55,y:-41.15},0).wait(1).to({x:-410.1,y:-31.1},0).wait(1).to({x:-437.65,y:-20.2},0).wait(1).to({x:-465.15,y:-8.45},0).wait(1).to({x:-492.55,y:4.1},0).wait(1).to({x:-519.95,y:17.5},0).wait(1).to({x:-547.3,y:31.8},0).wait(1).to({x:-574.6,y:46.85},0).wait(1).to({x:-601.9,y:62.8},0).wait(1).to({x:-629.1,y:79.55},0).wait(1).to({x:-656.25,y:97.15},0).wait(1).to({x:-683.4,y:115.6},0).wait(1).to({x:-710.5,y:134.95},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(-529.8,122.95,1,1,0,0,0,74.4,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-499.95,y:102.55},0).wait(1).to({x:-470.15,y:83.05},0).wait(1).to({x:-440.45,y:64.5},0).wait(1).to({x:-410.8,y:46.85},0).wait(1).to({x:-381.2,y:30.1},0).wait(1).to({x:-351.7,y:14.25},0).wait(1).to({x:-322.25,y:-0.7},0).wait(1).to({x:-292.9,y:-14.7},0).wait(1).to({x:-263.55,y:-27.8},0).wait(1).to({x:-234.35,y:-40.05},0).wait(1).to({x:-205.15,y:-51.3},0).wait(1).to({x:-176.05,y:-61.7},0).wait(1).to({x:-147,y:-71.2},0).wait(1).to({x:-118.05,y:-79.75},0).wait(1).to({x:-89.15,y:-87.4},0).wait(1).to({x:-60.3,y:-94.15},0).wait(1).to({x:-31.5,y:-100},0).wait(1).to({x:-2.8,y:-104.95},0).wait(1).to({x:25.85,y:-108.95},0).wait(1).to({x:54.4,y:-112.1},0).wait(1).to({x:82.85,y:-114.3},0).wait(1).to({x:111.3,y:-115.6},0).wait(1).to({x:139.7,y:-116},0).wait(1).to({x:168,y:-115.5},0).wait(1).to({x:196.25,y:-114.1},0).wait(1).to({x:224.45,y:-111.75},0).wait(1).to({x:252.55,y:-108.5},0).wait(1).to({x:280.65,y:-104.4},0).wait(1).to({x:308.6,y:-99.35},0).wait(1).to({x:336.55,y:-93.4},0).wait(1).to({x:364.4,y:-86.5},0).wait(1).to({x:392.2,y:-78.75},0).wait(1).to({x:419.95,y:-70.05},0).wait(1).to({x:447.65,y:-60.45},0).wait(1).to({x:475.25,y:-49.95},0).wait(1).to({x:502.8,y:-38.55},0).wait(1).to({x:530.3,y:-26.25},0).wait(1).to({x:557.7,y:-13.05},0).wait(1).to({x:585.05,y:1.1},0).wait(1).to({x:612.35,y:16.15},0).wait(1).to({x:639.6,y:32.1},0).wait(1).to({x:666.8,y:48.95},0).wait(1).to({x:693.9,y:66.75},0).wait(1).to({x:720.95,y:85.4},0).wait(1).to({x:747.95,y:105},0).wait(1).to({x:774.85,y:125.5},0).wait(1).to({x:801.75,y:146.95},0).wait(1));

	// Layer_2
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(551.85,-177,1,1,0,0,0,74.4,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:526.45,y:-192.05},0).wait(1).to({x:501.1,y:-206.5},0).wait(1).to({x:475.75,y:-220.3},0).wait(1).to({x:450.45,y:-233.5},0).wait(1).to({x:425.2,y:-246},0).wait(1).to({x:399.95,y:-257.9},0).wait(1).to({x:374.75,y:-269.2},0).wait(1).to({x:349.55,y:-279.85},0).wait(1).to({x:324.45,y:-289.85},0).wait(1).to({x:299.3,y:-299.2},0).wait(1).to({x:274.25,y:-307.95},0).wait(1).to({x:249.2,y:-316.05},0).wait(1).to({x:224.15,y:-323.5},0).wait(1).to({x:199.15,y:-330.35},0).wait(1).to({x:174.2,y:-336.55},0).wait(1).to({x:149.25,y:-342.1},0).wait(1).to({x:124.35,y:-347.05},0).wait(1).to({x:99.5,y:-351.35},0).wait(1).to({x:74.65,y:-355.05},0).wait(1).to({x:49.9,y:-358.05},0).wait(1).to({x:25.1,y:-360.45},0).wait(1).to({x:0.35,y:-362.25},0).wait(1).to({x:-24.4,y:-363.4},0).wait(1).to({x:-49.1,y:-363.9},0).wait(1).to({x:-73.75,y:-363.8},0).wait(1).to({x:-98.4,y:-363.05},0).wait(1).to({x:-123.05,y:-361.65},0).wait(1).to({x:-147.6,y:-359.6},0).wait(1).to({x:-172.2,y:-356.95},0).wait(1).to({x:-196.7,y:-353.7},0).wait(1).to({x:-221.2,y:-349.75},0).wait(1).to({x:-245.7,y:-345.2},0).wait(1).to({x:-270.15,y:-340.05},0).wait(1).to({x:-294.55,y:-334.25},0).wait(1).to({x:-318.95,y:-327.8},0).wait(1).to({x:-343.35,y:-320.7},0).wait(1).to({x:-367.7,y:-313},0).wait(1).to({x:-392,y:-304.65},0).wait(1).to({x:-416.3,y:-295.65},0).wait(1).to({x:-440.55,y:-286.05},0).wait(1).to({x:-464.8,y:-275.8},0).wait(1).to({x:-489,y:-264.9},0).wait(1).to({x:-513.2,y:-253.4},0).wait(1).to({x:-537.35,y:-241.25},0).wait(1).to({x:-561.5,y:-228.45},0).wait(1).to({x:-585.6,y:-215.05},0).wait(1).to({x:-609.7,y:-201},0).wait(1));

	// Layer_1
	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(-380.95,-210,1,1,0,0,0,74.4,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-356.2,y:-224.65},0).wait(1).to({x:-331.55,y:-238.6},0).wait(1).to({x:-306.95,y:-251.95},0).wait(1).to({x:-282.35,y:-264.6},0).wait(1).to({x:-257.8,y:-276.55},0).wait(1).to({x:-233.3,y:-287.85},0).wait(1).to({x:-208.8,y:-298.5},0).wait(1).to({x:-184.35,y:-308.5},0).wait(1).to({x:-159.95,y:-317.8},0).wait(1).to({x:-135.6,y:-326.45},0).wait(1).to({x:-111.3,y:-334.4},0).wait(1).to({x:-87,y:-341.7},0).wait(1).to({x:-62.75,y:-348.35},0).wait(1).to({x:-38.55,y:-354.3},0).wait(1).to({x:-14.35,y:-359.6},0).wait(1).to({x:9.8,y:-364.25},0).wait(1).to({x:33.9,y:-368.2},0).wait(1).to({x:57.95,y:-371.5},0).wait(1).to({x:81.9,y:-374.1},0).wait(1).to({x:105.9,y:-376.1},0).wait(1).to({x:129.9,y:-377.4},0).wait(1).to({x:153.8,y:-378},0).wait(1).to({x:177.7},0).wait(1).to({x:201.55,y:-377.3},0).wait(1).to({x:225.35,y:-375.9},0).wait(1).to({x:249.15,y:-373.9},0).wait(1).to({x:272.85,y:-371.2},0).wait(1).to({x:296.6,y:-367.8},0).wait(1).to({x:320.25,y:-363.75},0).wait(1).to({x:343.9,y:-359.05},0).wait(1).to({x:367.5,y:-353.7},0).wait(1).to({x:391.05,y:-347.65},0).wait(1).to({x:414.6,y:-340.95},0).wait(1).to({x:438.1,y:-333.6},0).wait(1).to({x:461.6,y:-325.55},0).wait(1).to({x:485,y:-316.85},0).wait(1).to({x:508.4,y:-307.5},0).wait(1).to({x:531.8,y:-297.45},0).wait(1).to({x:555.1,y:-286.75},0).wait(1).to({x:578.4,y:-275.35},0).wait(1).to({x:601.65,y:-263.3},0).wait(1).to({x:624.9,y:-250.6},0).wait(1).to({x:648.1,y:-237.2},0).wait(1).to({x:671.25,y:-223.15},0).wait(1).to({x:694.4,y:-208.45},0).wait(1).to({x:717.5,y:-193.05},0).wait(1).to({x:740.6,y:-177},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-786.9,-451.5,1665.1,672);


(lib.hat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(142.35,8.35,1,1,0,0,0,49.7,140.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:138.85,y:22.9},0).wait(1).to({x:135.7,y:39.15},0).wait(1).to({x:132.85,y:57.1},0).wait(1).to({x:130.35,y:76.85},0).wait(1).to({x:128.15,y:98.3},0).wait(1).to({x:126.25,y:121.45},0).wait(1).to({x:124.65,y:146.3},0).wait(1).to({x:123.4,y:172.95},0).wait(1).to({x:122.45,y:201.3},0).wait(1).to({x:121.85,y:231.4},0).wait(1).to({x:121.5,y:263.2},0).wait(1).to({y:296.75},0).wait(1).to({x:121.85,y:332.05},0).wait(1).to({x:122.45,y:369.1},0).wait(1).to({x:123.4,y:407.85},0).wait(1).to({x:124.65,y:448.3},0).wait(1).to({x:126.25,y:490.55},0).wait(1).to({x:128.15,y:534.5},0).wait(1).to({x:130.35,y:580.25},0).wait(1).to({x:132.85,y:627.7},0).wait(1).to({x:135.7,y:676.9},0).wait(1).to({x:138.85,y:727.85},0).wait(1).to({x:142.35,y:780.55},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-132.7,193.1,1054.9);


(lib.bed = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bedbutton();
	this.instance.setTransform(87,-72.45);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bed, new cjs.Rectangle(-99.9,-226.4,228.5,410.5), null);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// person
	this.hat_mc = new lib.hat();
	this.hat_mc.name = "hat_mc";
	this.hat_mc.setTransform(4989.15,-513.65,1,1,0,0,0,142.3,323.9);

	this.instance = new lib.bed();
	this.instance.setTransform(4562,-394.45,1.9338,1.9338,0,0,0,14.7,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.hat_mc}]}).wait(1));

	// lamp
	this.lamp_mc = new lib.lamp();
	this.lamp_mc.name = "lamp_mc";
	this.lamp_mc.setTransform(2128.55,-516.75,0.5435,0.5435,0,0,0,-132.9,-48.6);

	this.timeline.addTween(cjs.Tween.get(this.lamp_mc).wait(1));

	// dresser
	this.instance_1 = new lib.dresser();
	this.instance_1.setTransform(2036.45,-220.45,1.027,1.027,0,0,0,-241,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// monitorTwo
	this.instance_2 = new lib.monitortwo();
	this.instance_2.setTransform(3696.6,-563.1,0.8176,0.8176,0,0,0,-288,-50.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// monitorOne
	this.monitor_mc = new lib.monitorone();
	this.monitor_mc.name = "monitor_mc";
	this.monitor_mc.setTransform(3264.65,-572.8,0.8806,0.8806,0,0,0,-278.6,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.monitor_mc).wait(1));

	// desk
	this.instance_3 = new lib.desk();
	this.instance_3.setTransform(3488.85,-235.6,1.7879,1.4209,0,0,0,-317.4,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// broCave
	this.instance_4 = new lib.brocave();
	this.instance_4.setTransform(1576.4,-840.2,1,1,0,0,0,11.5,-107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// door
	this.instance_5 = new lib.door();
	this.instance_5.setTransform(1144.2,-305.45,1.6971,1.6971,0,0,0,-195.5,-15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// picture
	this.instance_6 = new lib.picture();
	this.instance_6.setTransform(2656.6,-677.1,1.2545,1.2545,0,0,0,-202,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ElmEBUYMAAAiovMLMJAAAMAAACovg");
	this.shape.setTransform(2879.875,-543.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(588.2,-1083.1,4583.400000000001,1085), null);


// stage content:
(lib.loberger_final = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		document.addEventListener("keydown" , handleKeyDown);
		
		var root = this;
		var speed = 30;
		
		function handleKeyDown(event) {
			console.log(root.background_mc.x);
			if (root.person_mc.currentFrame == 0){
				root.person_mc.gotoAndPlay("walking");
			}
		
			if (event.keyCode == 39 && root.background_mc.x > -1060) {
				root.person_mc.scaleX = .33
				root.background_mc.x = root.background_mc.x - speed;
			}
		
			if (event.keyCode == 37 && root.background_mc.x < 2300) {
				root.person_mc.scaleX = -.33
				root.background_mc.x = root.background_mc.x + speed;
			}
		}
		
		this.background_mc.hat_mc.addEventListener("click",handleClickHat);
		
		function handleClickHat(event){
			var music_snd = createjs.Sound.play("pop")
			root.background_mc.hat_mc.play();
		}
		
		this.background_mc.monitor_mc.addEventListener("click",handleClickMonitor);
		
		function handleClickMonitor(event){
			var music_snd = createjs.Sound.play("static")
			root.background_mc.monitor_mc.play();
		}
		
		this.background_mc.lamp_mc.addEventListener("click",handleClickLamp);
		
		function handleClickLamp(event){
			var music_snd = createjs.Sound.play("birds")
			root.background_mc.lamp_mc.play();
		}
		
		this.play_btn.addEventListener("click",handleClickPlayButton);
		
		function handleClickPlayButton(event){
			var music_snd = createjs.Sound.play("music")
			root.play();
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// buttons
	this.play_btn = new lib.bedbutton();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(1092.25,616.05,1.8265,1.8265);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({_off:true},1).wait(1));

	// stars
	this.instance = new lib.stars();
	this.instance.setTransform(961.25,398.1,1.3642,1.3642,0,0,0,41.7,-37.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// text
	this.text = new cjs.Text("The Room", "96px 'Phosphate'");
	this.text.textAlign = "center";
	this.text.lineHeight = 117;
	this.text.lineWidth = 1403;
	this.text.parent = this;
	this.text.setTransform(960,76.65);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(1));

	// person
	this.person_mc = new lib.person();
	this.person_mc.name = "person_mc";
	this.person_mc.setTransform(558.7,743.9,0.3306,0.3306,0,0,0,1274.1,303.7);
	this.person_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.person_mc).wait(1).to({_off:false},0).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AhthtIDbAAIAADbIjbAAg");
	this.shape.setTransform(-1327.3,-495.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFF97D","#FFFCCC"],[0,1],0,-562.3,0,562.1).s().p("EiaYBX2MAAAivrME0xAAAMAAACvrg");
	this.shape_1.setTransform(962,544.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFF97D","#FFFCCC"],[0,1],-11,0,11,0).s().p("AhtBuIAAjbIDbAAIAADbg");
	this.shape_2.setTransform(-1327.3,-495.1);

	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(2291.65,540.05,1,1,0,0,0,2879.8,-543.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.background_mc}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-379.3,32.9,4962.8,1073.5);
// library properties:
lib.properties = {
	id: 'E145A36E6C8E4A69992AF859076A6B63',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/music.mp3", id:"music"},
		{src:"sounds/birds.mp3", id:"birds"},
		{src:"sounds/pop.mp3", id:"pop"},
		{src:"sounds/_static.mp3", id:"_static"}
	],
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
an.compositions['E145A36E6C8E4A69992AF859076A6B63'] = {
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