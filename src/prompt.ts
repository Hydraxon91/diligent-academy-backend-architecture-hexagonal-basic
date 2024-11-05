import { runPromptApp } from "./primary-adapters/prompt-input-primary-adapter";
import { TxtStoreSecondaryAdapter } from "./secondary-adapters/txt-store-secondary-adapter";
import { PromptService } from "./business/greeting-service";

const storeAdapter = new TxtStoreSecondaryAdapter();
const promptService = new PromptService(storeAdapter);
runPromptApp(promptService)