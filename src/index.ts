import { buyerFactory, priorityBuyerFactory } from "./entities/Clients";
import { dodgeViperFactory, multiPlaFactory, miniCooperFactory, offerFactory } from "./entities/Factory";
import { VehicleManager } from "./entities/VehicleManager";

//Création des acheteurs
let johnDoe = buyerFactory.create("John Doe");
let janeDoe = priorityBuyerFactory.create("Jane Doe");

//Création des offres
let miniCooperOffer = offerFactory.createOffer(miniCooperFactory.create(29_583.33));
VehicleManager.getInstance().registerOffer(miniCooperOffer);
miniCooperOffer.subscribe(johnDoe);
miniCooperOffer.subscribe(janeDoe);

let multiPlaOffer = offerFactory.createOffer(multiPlaFactory.create(4_000));
VehicleManager.getInstance().registerOffer(multiPlaOffer);
multiPlaOffer.subscribe(janeDoe)

let dodgeViperOffer = offerFactory.createOffer(dodgeViperFactory.create(69_990));
VehicleManager.getInstance().registerOffer(dodgeViperOffer);
dodgeViperOffer.subscribe(johnDoe)

//Changement de prix
miniCooperOffer.changePrice(30_000);
multiPlaOffer.changePrice(3_000);
dodgeViperOffer.changePrice(70_000);