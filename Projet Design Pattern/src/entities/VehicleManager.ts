import { Offer } from "./Vehicles";

export class VehicleManager {
    private static instance:VehicleManager;
    public static getInstance() {
        if (!this.instance)
            this.instance = new VehicleManager();
        return this.instance;
    }
    offers:Offer[] = [];
    registerOffer(offer:Offer) {
        this.offers.push(offer);
    } 
}

