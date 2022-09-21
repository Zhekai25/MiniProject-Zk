let app = angular.module("app", []);

class MyCtrl {
    name: string;
    birthDate: Date;
    color: string;
    bgColor: object;
    maxDate: string;

    constructor() {      
        this.color = "#ffdbdb";
        this.setBgColor();
        this.maxDate = new Date().toISOString().split("T")[0];     
    }
    setBgColor(): void{
        this.bgColor = { "background-color": this.color };
    }
}

app.controller("MyCtrl", MyCtrl);

