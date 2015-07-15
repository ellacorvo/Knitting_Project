

	var yarns = [];
	var projects = [];
	var yarnCount = 0;
	var projectCount = 0;


	var Yarn = function(weight, yards, needlesize, color, yarnId) {
		this.weight      = weight;
		this.yards       = yards;
		this.needlesize  = needlesize;
		this.color       = color;
		this.id 		 = yarnId;
	}

	var Project = function(name, weight, yards, needlesize, projectId) {
		this.name       = name;
		this.weight     = weight;
		this.yards      = yards;
		this.needlesize = needlesize;
		this.id         = name || projectId;
	}

	Yarn.prototype.create = function() {
		var newYarn = $('<div class="newDiv margin10"></div>');
		newYarn.text("Weight: "  + this.weight + " Yards: " + this.yards + " Needle Size: " + this.needlesize + " Color: " + this.color);
		return newYarn;
	}

	Project.prototype.create = function() {
		var newProject = $('<div id=' + this.name + ' class="newDiv margin10"></div>');
		newProject.text("Name: "  + this.name + " Weight: " + this.weight + " Yards: " + this.yards + " Needle Size: " + this.needlesize);
		return newProject;
	}

	$('.yarn-form').on('submit', function() {
		yarnCount++;

		var yarnId = yarnCount;
		var newWeight = $("#weight").val();
		var newYards = $("#yards").val();
		var newNeedles = $("#needles").val();
		var newColor = $("#color").val();
		var photo = $('#yarnPic').val();

		var newYarnEntry = new Yarn(newWeight, newYards, newNeedles, newColor, yarnId);

		if (photo = " ") {
			photo = "http://cdn.surfnetkids.com/coloring/images/ball_of_yarn.jpg";
		}

		var yarnPic = $('<img src= "' + photo + ' "alt="..." class="img-circle img-responsive center-block" height="100px", width="100px">');
		var deleteButton = $('<button class="delete btn btn-primary btn-xs">Delete</button>');
		yarns.push(newYarnEntry);
		$('.stash-container').append(newYarnEntry.create().append(yarnPic).append(deleteButton));

		return false;

	});

	$('.project-form').on('submit', function() {
		projectCount++;

		var projectId = projectCount;
		var projectName = $('#p-name').val();
		var pWeight = $("#p-weight").val();
		var pYards = $("#p-yards").val();
		var pNeedles = $("#p-needles").val();
		var pPhoto = $('#projectPic').val();

		var newProjectEntry = new Project(projectName, pWeight, pYards, pNeedles, projectId);

		if (pPhoto = " ") {
			pPhoto = "http://thumbs.dreamstime.com/x/sheep-knitted-sweater-hand-drawn-illustration-46213087.jpg";
		}
		else {
			pPhoto = $('#projectPic').val();
		}

		var projectPic = $('<img src= "' + pPhoto + ' "alt="..." class="img-circle img-responsive center-block" height="100px", width="100px">');
		var deleteButton = $('<button class="margin10 delete btn btn-primary btn-xs">Delete</button>');
		var searchButton = $('<button class="margin10 search btn btn-success btn-xs">Search your yarns!</button>');
		projects.push(newProjectEntry);

		$('.projects-container').append(newProjectEntry.create().append(projectPic).append(deleteButton).append(searchButton));

		return false;

	});

	$('body').on('click', '.delete', function( event ) {
		$(this).parent().remove();
	});

	$('body').on('click', '.search', function( event ) {
		console.log('button works');

		var thisProjectId = $(this).parent().attr('id');
		console.log(thisProjectId);
		
		var yardsNeeded = function(array) {
			var result = 0;
			for (i=0; i<array.length; i++) { 
				if (array[i].id === thisProjectId) {
					result = array[i].yards;
				}
			}
			return result;
		};

		var yards = yardsNeeded(projects);
		console.log(yards);

		var yarnSearch = function(yards) {
			
		}

	});



