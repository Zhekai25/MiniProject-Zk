var app = angular.module("app", []);
var MyCtrl = /** @class */ (function () {
    function MyCtrl() {
        this.color = "#ffdbdb";
        this.setBgColor();
        this.maxDate = new Date().toISOString().split("T")[0];
    }
    MyCtrl.prototype.setBgColor = function () {
        this.bgColor = { "background-color": this.color };
    };
    return MyCtrl;
}());
app.controller("MyCtrl", MyCtrl);
//# sourceMappingURL=test.js.map