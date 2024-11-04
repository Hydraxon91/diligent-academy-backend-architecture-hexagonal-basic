import { StoreGreetingSecondaryPort } from "../business/greeting-service";

export class FakeStoreSecondaryAdapter implements StoreGreetingSecondaryPort {
    
    save(name: string){
        if (!name) {
            throw new Error('Please provide a name')
          }
        console.log(`Saved: ${name}`);
    }
}