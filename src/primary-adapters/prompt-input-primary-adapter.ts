import PromptSync from 'prompt-sync';
import { ProvideNamePromptPrimaryPort } from '../business/greeting-service';

export function runPromptApp(promptService: ProvideNamePromptPrimaryPort) {
    const prompt = PromptSync()
    console.log('What is your name?\n');
    const result = prompt('');
    promptService.greet(result);
}

// runPromptApp()