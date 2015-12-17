class Person {
	
	constructor(name) {
		this.name = name;
	}
	
	registerSayHello() {
		document.getElementById('someButton').addEventListener('click', () => {
			console.log('Hi, I am a ' + this + ' and my name is ' + this.name);
		});
	}
	
}

var p = new Person('Juri');
p.registerSayHello();

document.getElementById('someButton').click();
