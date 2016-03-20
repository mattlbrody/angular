app.controller('mainController', ['$scope', function($scope) {
  $scope.cars = [
  {
    make: "honda",
    model: "civic",
    year: 2015,
    color: "blue",
    fulltank: false,
    img: "img/honda.jpg"
  },
  {
    make: "toyota",
    model: "camry",
    year: 2010,
    color: "red",
    fulltank: true,
    img: "img/toyota.jpg"
  },
  {
    make: "ford",
    model: "explorer",
    year: 2005,
    color: "black",
    fulltank: false,
    img: "img/ford.jpg"
  }
]
}]);