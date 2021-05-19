//Define a circular object circular such that the following are true:
// circular.value === "Hello World"
// circular === circular.self
// circular.self === circular.self.self
function Circular() {
	this.value = "Hello World";
	this.self = this;
}

let circular = new Circular();
