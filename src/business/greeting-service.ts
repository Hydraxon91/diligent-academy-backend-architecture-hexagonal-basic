
export interface ProvideNamePrimaryPort {
  greet: (name: string) => string;
}

export interface StoreGreetingSecondaryPort {
  save: (greeting: string) => void;
}

export interface ProvideNamePromptPrimaryPort {
  greet: (name: string) => string;
}

export interface StoreGreetingInTxtSecondaryPort {
  save: (greeting: string) => void;
}

export class GreetingService implements ProvideNamePrimaryPort{

  constructor(private readonly store: StoreGreetingSecondaryPort){}

  greet(name: string) {
    if (!name) {
      throw new Error('Please provide a name')
    }
    const greeting = `Hello, ${name}`;
    this.store.save(greeting);
    return greeting;
  }
}

export class PromptService implements ProvideNamePromptPrimaryPort{
  constructor(private readonly store: StoreGreetingInTxtSecondaryPort){}

  greet(name: string) {
    if (!name) {
      throw new Error('Please provide a name')
    }
    const greeting = `Hello, ${name}`;
    this.store.save(greeting);
    return greeting;
  }
}