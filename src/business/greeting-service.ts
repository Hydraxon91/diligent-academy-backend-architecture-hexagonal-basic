
export interface ProvideNamePrimaryPort {
  greet: (name: string) => string;
}

export interface StoreGreetingSecondaryPort {
  save: (greeting: string) => void;
}

export interface ProvideNamePromptPrimaryPort {
  greet: (name: string) => string;
}

export interface HttpGreetingPrimaryPort {
  greet: (name: string) => { greeting: string };
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

export class FastifyService implements HttpGreetingPrimaryPort {
  constructor(private readonly store: StoreGreetingSecondaryPort){}
  greet(name: string) {
    if (!name) {
      throw new Error('Please provide a name')
    }
    const greeting = `Hello, ${name}`;
    this.store.save(greeting);
    return {greeting};
  }
}