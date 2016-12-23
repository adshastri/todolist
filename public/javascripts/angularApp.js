var app = angular.module('todolist', []);

app.controller('MainCtrl', [
'$scope',
'$http',
function($scope, $http){
  	$scope.notesleft = [

  	];
  	$scope.notesright = [

  	];
  	$scope.currentNote = "xyz";
  
  $scope.notes = function getNotes(){
  		$scope.notesleft = [

  	];
  	$scope.notesright = [

  	];
  	$http.get("/getNotes").success(function(response){
  		var i;
		  for (i = 0; i < response.length; i++){
		  	if (i%2==0){
		  		$scope.notesleft.push(response[i]);
		  	} else {
		  		$scope.notesright.push(response[i]);
		  	}
		  }
	});
}  

  $scope.addNote = function(){
  	var title = document.getElementById("title-input").value;
  	var content = document.getElementById("main-input").value;
  	var note = {title: title, content: content};
  	$http.post('/addNote', note).success(function(response){
  		var q = {title: response.title, content: response.content};
  		if ($scope.notesleft.length > $scope.notesright.length) {
  			$scope.notesright.push(q);
  		} else {
  			$scope.notesleft.push(q);
  		}
	});
	$scope.cancelCreateNote();
  }

  $scope.displayNoteInputBox = function(){
	var inputBox = document.getElementById("createNoteBox");
	inputBox.setAttribute("style", "visibility: visible;");
  }

  $scope.cancelShowNote = function(){
	var displayBox = document.getElementById("showNoteBox");
	var heading = document.getElementById("note-title");
	var content = document.getElementById("note-content");
	heading.innerHTML = "";
	content.innerHTML = "";
	$scope.currentNote = "";
	displayBox.setAttribute("style", "visibility: hidden;");
  }

  $scope.cancelCreateNote = function(){
	var inputBox = document.getElementById("createNoteBox");
	inputBox.setAttribute("style", "visibility: hidden;");
	var x = document.getElementById("title-input");
	x.value = "";
	var y = document.getElementById("main-input");
	y.value = "";
  }

  $scope.displayLargeNoteBox = function(noteToShow){
  	$scope.currentNote = noteToShow.note.title;
	var x = document.getElementById("showNoteBox");
	var heading = document.getElementById("note-title");
	var content = document.getElementById("note-content");
	heading.innerHTML = noteToShow.note.title;
	content.innerHTML = noteToShow.note.content;

	x.setAttribute("style", "visibility: visible;");
  }

  $scope.deleteNote = function(noteToDelete) {
  	$http.put("/deleteNote", {title: noteToDelete}).success(function(response) {
  		$scope.notes();
  		$scope.cancelShowNote();
  	});
  }
}]);






