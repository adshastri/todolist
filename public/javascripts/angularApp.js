var app = angular.module('todolist', []);

app.controller('MainCtrl', [
'$scope',
'$http',
function($scope, $http){
  $scope.notesleft = [
  	{title: "Grocery"},
  	{title: "Laundry"}
  ];
  $scope.notesright = [
  	{title: "Water the Plants"},
  	{title: "Clean room"}
  ];
  $scope.addNote = function(){
  	console.log("u suck");
  	$http({
		method: 'GET',
		url: '/users'
	}).then(function successCallBack(response){
		alert("success");
	}, function errorCallback(response){

	});
  }

  $scope.displayNoteInputBox = function(){
	var inputBox = document.getElementById("createNoteBox");
	inputBox.setAttribute("style", "visibility: visible;");
  }

  $scope.cancelShowNote = function(){
	var displayBox = document.getElementById("showNoteBox");
	var children = displayBox.childNodes;
	var i;
	for (i = 0; i < children.length; i++){
		if (children[i].tagName == "H4"){
			displayBox.removeChild(children[i]);
		}
	}

	displayBox.setAttribute("style", "visibility: hidden;");
  }

  $scope.cancelCreateNote = function(){
	var inputBox = document.getElementById("createNoteBox");
	inputBox.setAttribute("style", "visibility: hidden;");
	var x = document.getElementById("title-input");
	x.innerHTML = "";
	var y = document.getElementById("main-input");
	y.innerHTML = "";
  }

  $scope.displayLargeNoteBox = function(){
	var x = document.getElementById("showNoteBox");
	
	var y = document.getElementById("noteToShow").innerHTML;

	var heading = document.createElement("H4");
	heading.innerHTML = y;
	heading.setAttribute("style", "font-size: 24px;");
	x.appendChild(heading);

	x.setAttribute("style", "visibility: visible;");
  }
}]);






