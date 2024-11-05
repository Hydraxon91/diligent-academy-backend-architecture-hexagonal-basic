import { existsSync, writeFileSync, appendFileSync } from "fs";

export class TxtStoreSecondaryAdapter implements TxtStoreSecondaryAdapter{

    save(message: string){
        if (!message) {
            throw new Error('Please provide a name')
        }

        const filePath = './greetings.txt';

        try {
            if(!existsSync(filePath)){                
                writeFileSync(filePath, `${message}\n`, 'utf-8')
            }
            else{
                appendFileSync(filePath, `${message}\n`, 'utf-8');
            }
            console.log(`Saved: ${message}`); 
        } catch (error) {
            throw new Error('something went wrong saving the file')
        }
    }
}