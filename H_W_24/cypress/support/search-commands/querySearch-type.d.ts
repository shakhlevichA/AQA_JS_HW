declare global {
    namespace Cypress {
        interface Chainable {
            querySearch(text: string): void;
        }
    }
}

export {};