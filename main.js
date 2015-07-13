$(document).on('ready', function() {

	var roundImg  = $('<img src="..." alt="..." class="img-circle img-responsive">');
	var squareImg = $('<img src="..." alt="..." class="img-rounded img-responsive">');

	var yarns = [];

	var Yarn = function(brand, weight, yards, needlesize, color) {
		this.brand      = brand;
		this.weight     = weight;
		this.yards      = yards;
		this.needlesize = needlesize;
		this.color      = color;
	}

	var Project = function(name, weight, yards, needlesize) {
		this.name       = name;
		this.weight     = weight;
		this.yards      = yards;
		this.needlesize = needlesize;
	}

	

  
});

