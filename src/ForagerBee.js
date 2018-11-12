var ForagerBee = function(age, color, food) {
	Bee.call(this, age, color, food);

	this.job = 'find pollen';
	this.canFly = true;
	this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype); //set inheritance
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function (treasure) {
	this.treasureChest.push(treasure);


}

