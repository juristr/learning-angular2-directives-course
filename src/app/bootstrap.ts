var Person = function (name) {
	this.name = name;	
}

Person.prototype.registerSayHello = function() {
	document.getElementById('someButton').addEventListener('click', function() {
		console.log('Hi, I am a ' + this + ' and my name is ' + this.name);
	});
}

var p = new Person('Juri');
p.registerSayHello();

document.getElementById('someButton').click();
