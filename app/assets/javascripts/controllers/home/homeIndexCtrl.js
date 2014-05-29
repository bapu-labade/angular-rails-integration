function IndexCtrlController($scope, $location, $http, $routeParams) {

	// $scope.posts = [{title: 'My first post', contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
	// {title: 'My first post', contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'} ]

  // $scope.postId = $routeParams.postId
  // console.log(postId);
  $scope.posts =  [ {title: 'Loading posts...', contents: ''} ]

  function loadPosts() {
  	$http({method: 'GET', url: './posts.json'}).
      success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.posts = data;
      console.log("Successfully loaded posts...");
    }).error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log("Error while loading posts...");
    });
  }

  loadPosts();

  $scope.showPost = function (id){
  	$location.url('/posts/'+id)
  }
};