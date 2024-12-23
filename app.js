angular.module('pharmacyApp', [])
  .controller('PharmacyController', function($scope) {
    $scope.medicineInventory = {
      'Ayurvedic': [],
      'Homeopathic': [],
      'Allopathic': []
    };

    $scope.newMedicine = {
      name: '',
      quantity: 0,
      category: 'Ayurvedic'
    };

    $scope.addMedicine = function() {
      $scope.medicineInventory[$scope.newMedicine.category].push({
        name: $scope.newMedicine.name,
        quantity: $scope.newMedicine.quantity
      });
      $scope.newMedicine.name = '';
      $scope.newMedicine.quantity = 0;
    };

    $scope.incrementQuantity = function(medicine) {
      medicine.quantity++;
    };

    $scope.decrementQuantity = function(medicine) {
      if (medicine.quantity > 0) {
        medicine.quantity--;
      }
    };

    $scope.removeMedicine = function(category, index) {
      $scope.medicineInventory[category].splice(index, 1);
    };
  });
