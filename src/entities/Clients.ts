interface ClientFactory {
    create(name:string):Client;
}

class BuyerFactory implements ClientFactory {
    constructor() {}
    create(name:string) { return new Buyer(name); }
}

class PriorityBuyerFactory implements ClientFactory {
    constructor() {}
    create(name:string) { return new PriorityBuyer(name); }
}

export interface Client {
    name:string;
    notify(info:string):void;
}

class Buyer implements Client {
    name: string;
    constructor(name:string) { this.name = name; }
    notify(info: string): void {
        console.log(`${info}`);
    }
}

class PriorityBuyer extends Buyer {
    name: string;
    constructor(name:string) { super(name); }
    notify(info: string): void {
        super.notify(`!!IMPORTANT!! ${info}`)
    }
}

export const buyerFactory = new BuyerFactory();
export const priorityBuyerFactory = new PriorityBuyerFactory();