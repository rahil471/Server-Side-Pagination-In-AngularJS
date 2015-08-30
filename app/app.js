var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);

app.controller('listdata',function($http){
	var vm = this;
	vm.users = []; //declare an empty array
	vm.pageno = 1; // initialize page no to 1
	vm.total_count = 0;
	vm.itemsPerPage = 10; //this could be a dynamic value from a drop down
	
	vm.getData = function(pageno){ // This would fetch the data on page change.
		//In practice this should be in a factory.
		vm.users = [];
		$http.get("http://code.ciphertrick.com/api/list/page/"+vm.itemsPerPage+"/"+pageno).success(function(response){ 
			vm.users = response.data;  //ajax request to fetch data into vm.data
			vm.total_count = response.total_count;
		});
	};
	vm.getData(vm.pageno); // Call the function to fetch initial data on page load.
});