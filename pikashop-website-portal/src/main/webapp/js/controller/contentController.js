app.controller("contentController", function($scope, contentService){

    $scope.pageContents = [];
    $scope.findByCategoryId = function (cid) {
        contentService.findByCategoryId(cid).success(
            function(response){
                $scope.pageContents[1] = response;
            }
        )
    }
    $scope.pageInit = function () {
        $scope.findByCategoryId(1);
    }
});