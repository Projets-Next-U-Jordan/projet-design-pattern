import { DodgeViper, MiniCooper, MultiPla, Offer, Vehicle } from "./Vehicles";

interface VehicleFactory{
    create(price:number):Vehicle;
}

class DodgeViperFactory implements VehicleFactory {
    create(price: number): Vehicle { return new DodgeViper(price); }
}

class MiniCooperFactory implements VehicleFactory {
    create(price: number): Vehicle { return new MiniCooper(price); }
}

class MultiPlaFactory implements VehicleFactory {
    create(price: number): Vehicle { return new MultiPla(price); }
}

class OfferFactory {
    createOffer(vehicle:Vehicle):Offer {
        return new Offer(vehicle);
    }
} 

export const dodgeViperFactory = new DodgeViperFactory();
export const miniCooperFactory = new MiniCooperFactory();
export const multiPlaFactory = new MultiPlaFactory();
export const offerFactory = new OfferFactory();