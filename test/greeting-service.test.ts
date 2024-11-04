import { GreetingService } from "../src/business/greeting-service";
import { FakeStoreSecondaryAdapter } from "../src/secondary-adapters/fake-store-secondary-adapter";

let app: GreetingService | undefined;
let fakeStore: FakeStoreSecondaryAdapter | undefined

beforeEach(() => {
    fakeStore = new FakeStoreSecondaryAdapter();
    app = new GreetingService(fakeStore)
  })

it('responds with correct response', () => {
    const response = app?.greet("Michael");

    expect(response).toStrictEqual("Hello, Michael")
});

it('FakeStoreSecondaryAdapter save() gets called', () => {
    const saveSpy = jest.spyOn(fakeStore!, 'save');
    const response = app?.greet("Michael");

    expect(saveSpy).toHaveBeenCalled();
    expect(saveSpy).toHaveBeenCalledWith("Hello, Michael");
    expect(response).toStrictEqual("Hello, Michael");
});

it('throws error when called with undefined', () => {
    expect(()=>  app?.greet(undefined as unknown as string)).toThrow('Please provide a name');
});

it('throws error when called with empty string', () => {
    expect(()=>  app?.greet('')).toThrow('Please provide a name');
});