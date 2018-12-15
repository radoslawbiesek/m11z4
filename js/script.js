'use strict';
(function() {
    function Phone(brand, price, color) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    };
    Phone.prototype.printInfo = function() {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " zl.");
    };
    Phone.prototype.isBetterThanXiaomi = function() {
        if (this.brand == "Xiaomi") {
            console.log('This is Xiaomi!');
        } else {
            console.log('Xiaomi is better!');
        }
    };
    
    var iPhone6s = new Phone("Apple", 2250, 'silver');
    var galaxyS6 = new Phone("Samsung", 1899, 'black');
    var redmi4x = new Phone("Xiaomi", 400, 'black'); 

})();