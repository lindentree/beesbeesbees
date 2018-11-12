var RetiredForagerBee = function(age, color, food) {
	ForagerBee.call(this, age, color, food);
	this.job = "gamble";
	this.canFly = false;
	this.color = "grey";
	
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype); //set inheritance
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function () {
	return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.gamble = function () {
	this.treasureChest.push('treasure');
}