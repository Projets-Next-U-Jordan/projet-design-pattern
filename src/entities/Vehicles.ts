import { Client } from "./Clients";

export interface Vehicle {
    name:string;
    horse_power:number;
    price:number;
}

export class DodgeViper implements Vehicle {
    name: string;
    horse_power: number;
    price: number;
    constructor(price:number) {
        this.name = "Dodge Viper";
        this.horse_power = 400;
        this.price = price;
    }
}

export class MiniCooper implements Vehicle {
    name: string;
    horse_power: number;
    price: number;
    constructor(price:number) {
        this.name = "Mini Cooper";
        this.horse_power = 189;
        this.price = price;
    }
}

export class MultiPla implements Vehicle {
    name: string;
    horse_power: number;
    price: number;
    constructor(price:number) {
        this.name = "Fiat Multipla";
        this.horse_power = 120;
        this.price = price;
    }
}

export class Offer {
    vehicle:Vehicle;
    buyers:Client[];
    constructor(vehicle:Vehicle) { this.buyers = []; this.vehicle = vehicle;}
    subscribe(client:Client): void {
        this.buyers.push(client);
    }
    changePrice(newPrice:number) {
        this.buyers.forEach((buyer)=>{
            buyer.notify(`[${buyer.name}] Price Change for ${this.vehicle.name}: ${newPrice}`);
        });
    }
}
