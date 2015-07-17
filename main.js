
//initialize arrays and starter counts
	var yarns = [];
	var projects = [];
	var yarnCount = 0;
	var projectCount = 0;

//class constructors for Yarns and Projects
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
//prototype methods to create HTML and text elements
	Yarn.prototype.create = function() {
		var newYarn = $('<div id=' + this.id + ' class="newDiv margin10"><ul><li>Weight: ' + this.weight + ' </li><li> Yards: ' + this.yards + ' </li><li> Needle Size: ' + this.needlesize + '</li><li>Color: ' + this.color + '</li><ul></div>');
		return newYarn;
	}

	Project.prototype.create = function() {
		var newProject = $('<div id=' + this.id + ' class="newDiv margin10"><ul><li>Name: '  + this.name + ' </li><li> Weight: ' + this.weight + ' </li><li> Yards: ' + this.yards + ' </li><li> Needle Size: ' + this.needlesize + '</li><ul></div>');
		return newProject;
	};
//click handler for yarn form that creates new instance of yarn class, pushes it to the array, and appends it to the DOM
	$('.yarn-form').on('submit', function() {
		yarnCount++; //counter creates a unique id for each instance created

		var yarnId = yarnCount;
		var newWeight = $("#weight").val();
		var newYards = $("#yards").val();
		var newNeedles = $("#needles").val();
		var newColor = $("#color").val();
		var photo = $('#yarnPic').val();
		//create yarn instance
		var newYarnEntry = new Yarn(newWeight, newYards, newNeedles, newColor, yarnId);
		//assign defult photo if no link is input in form
		if (photo === "") {
			photo = "http://cdn.surfnetkids.com/coloring/images/ball_of_yarn.jpg";
		}
		//variables to hold html for photo and button
		var yarnPic = $('<img src= "' + photo + ' "alt="..." class="img-circle img-responsive center-block" height="100px", width="100px">');
		var deleteButton = $('<button class="delete btn btn-primary btn-xs">Delete</button>');
		//push new instance to array
		yarns.push(newYarnEntry);
		//append new instance to DOM
		$('.stash-container').append(newYarnEntry.create().append(yarnPic).append(deleteButton));
		//hide form after submitting entry
		$('.yarn-form-container').hide(500);
		return false;
	});

//click handler for project form that creates new instance of yarn class, pushes it to the array, and appends it to the DOM
	$('.project-form').on('submit', function() {
		projectCount++; //counter creates a unique id in case user does not enter project name

		var projectId = projectCount;
		var projectName = $('#p-name').val();
		var pWeight = $("#p-weight").val();
		var pYards = $("#p-yards").val();
		var pNeedles = $("#p-needles").val();
		var pPhoto = $('#projectPic').val();
		//create project instance
		var newProjectEntry = new Project(projectName, pWeight, pYards, pNeedles, projectId);
		//assign defult photo if no link is input in form
		if (pPhoto === "") {
			pPhoto = "http://thumbs.dreamstime.com/x/sheep-knitted-sweater-hand-drawn-illustration-46213087.jpg";
		}
		else {
			pPhoto = $('#projectPic').val();
		}
		//variables to hold html for photo and buttons
		var projectPic = $('<img src= "' + pPhoto + ' "alt="..." class="img-circle img-responsive center-block" height="100px", width="100px">');
		var deleteButton = $('<button class="margin10 delete btn btn-primary btn-xs">Delete</button>');
		var searchButton = $('<button class="margin10 search btn btn-success btn-xs">Search your yarns!</button>');
		//push new instance to array
		projects.push(newProjectEntry);
		//append new instance to DOM
		$('.projects-container').append(newProjectEntry.create().append(projectPic).append(deleteButton).append(searchButton));
		//hide form after submitting entry
		$('.project-form-container').hide(500);
		return false;
	});
	//deletes yarn or project instance from DOM
	$('body').on('click', '.delete', function( event ) {
		$(this).parent().remove();
	});
	//click handler for search functions
	$('body').on('click', '.search', function( event ) {
		console.log('button works');//test
		//find the id of the div clicked
		var thisProjectId = $(this).parent().attr('id');
		console.log(thisProjectId);//test
		//use the unique div id to relate to the project object with the same id
		//search the objects array to return the yards value of the selected object
		var yardsNeeded = function(array) {
			var result = 0;
			for (i=0; i<array.length; i++) { 
				if (array[i].id === thisProjectId) {
					result = array[i].yards;
				}
			}
			return result;
		};
		//assign a nice variable to reference the result of the yardsNeeded function
		var yards = yardsNeeded(projects);
		console.log(yards);//test
		//search through the yarns array to find yarns that have >= the yards specified in the previous search
		var yarnSearch = function(array) {
			var results = [];
			for (i=0; i<array.length; i++) { 
				if (array[i].yards >= yards) {
					results.push(array[i]);
				}
			}
			return results;
		}
		//assign a nice variable to reference the result of the yarnSearch function
		var searchResults = yarnSearch(yarns);
		console.log(searchResults);//test
		//variable to hold the HTML for else display
		var notFound = $('<div class="newDiv margin10">Oh snap! You don\t have enough yarn. Time to go shopping!</div>');
		//function appends search results to DOM
		var toClone = function(searchResults) {
			if (searchResults.length > 0) {
			for (i=0; i<searchResults.length; i++) { 
					$('#' + searchResults[i].id).clone().appendTo('.search-container');
				}
			}
				else {
					$('.search-container').append(notFound);
				}
			
		}
		toClone(searchResults)//call results display and pass in results array


	});

	//clears all search results from DOM
	$('body').on('click', '.clear', function( event ) {
		$('.search-container').empty();
	});
	//show form on click
	$('body').on('click', '.yarn-form-button', function( event ) {
		$('.yarn-form-container').show(500);
	});
	//show form on click
	$('body').on('click', '.project-form-button', function( event ) {
		$('.project-form-container').show(500);
	});
