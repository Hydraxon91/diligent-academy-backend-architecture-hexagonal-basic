import { existsSync, writeFileSync, appendFileSync, readFileSync } from "fs";
import { StoreGreetingSecondaryPort } from "../business/greeting-service";

export class JsonStoreSecondaryAdapter implements StoreGreetingSecondaryPort{
    save(message: string){
        if (!message) {
            throw new Error('Please provide a name')
        }

        const filePath = './greetings.json';

        try {
            if(!existsSync(filePath)){

                writeFileSync(filePath, JSON.stringify([`message: ${message}`]), 'utf-8')
            }
            else{
                const fileContent = readFileSync(filePath, 'utf-8');
                let data = JSON.parse(fileContent);
                if (!Array.isArray(data)) {
                    throw new Error('Json is not an array');
                }


                data.push({ message });
                
                writeFileSync(filePath, JSON.stringify(data), 'utf-8')

                return { greeting: `Hello, ${message}` };
            }
            console.log(`Saved: ${message}`); 
        } catch (error) {
            console.error('something went wrong saving the file:', error);
            throw new Error('something went wrong saving the file')
        }
    }
}