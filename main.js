// $(document).on('ready', function() {

	//for futire functionality
	// var roundImg  = $('<img src="..." alt="..." class="img-circle img-responsive">');
	// var squareImg = $('<img src="..." alt="..." class="img-rounded img-responsive">');

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

	Yarn.prototype.create = function() {
		var newYarn = $('<div class="newYarn margin10"></div>');
		newYarn.text("Brand: " + this.brand + "Weight: "  + this.weight + " Yardage: " + this.yards + " Needle Size: " + this.needlesize + " Color: " + this.color + ". ");
		return newYarn;
	}

	$('.yarn-form').on('submit', function() {
		var newBrand = $("#brand").val();
		var newWeight = $("#weight").val();
		var newYards = $("#yards").val();
		var newNeedles = $("#needles").val();
		var newColor = $("#color").val();				
		var newYarnEntry = new Yarn(newBrand, newWeight, newYards, newNeedles, newColor);
		var photo = $('#yarnPic').val();

		var yarnPic = $('<img src= "' + photo + ' "alt="..." class="img-circle img-responsive center-block">');

		$('#stash-container').append(newYarnEntry.create().append(yarnPic));

		return false;

	});

  
// });


