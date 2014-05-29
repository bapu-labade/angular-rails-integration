function showCtrlController($http, $scope, $routeParams) {

	function findPost(id){
		$http({method: 'GET', url: './posts/'+id+'.json'}).
      success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.post = data;
      
    }).error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log("Error while loading posts...");
    });
	}

  // Make Ajax call to find post based on post id

	findPost($routeParams.id);

	// $scope.post = { title: 'My first post', contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit' };
};