var Bee = function(age, color, food) {
	Grub.call(this, age, color, food);
	this.job = 'keep on growing'
};

Bee.prototype = Object.create(Grub.prototype); //set inheritance
Bee.prototype.constructor = Bee; 
