var HoneyMakerBee = function(age, color, food) {
	Bee.call(this, age, color, food);
	this.job = 'make honey';
	this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype); //set inheritance
HoneyMakerBee.prototype.constructor = HoneyMakerBee; 

HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;

}

HoneyMakerBee.prototype.giveHoney = function () {
  if (this.honeyPot < 1) {
  	return "no more honey";
  }
  this.honeyPot--;



}