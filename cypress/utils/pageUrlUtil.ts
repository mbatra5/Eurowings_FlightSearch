
class UrlUtils {
    static getUrlFromJson(environment: string, urlKey: string): Cypress.Chainable<string> {
      return cy.fixture('env.json').then((jsonData) => {
        return jsonData[environment].env[urlKey];
      })
    }
   
    static gethomePageUrl() {
      return this.getUrlFromJson(Cypress.env('environment'), 'homePage').then((url) =>{
        cy.visit(url)
      })
    }
  
    static getPanhomePageUrl() {
      return this.getUrlFromJson(Cypress.env('environment'), 'panhomePage').then((url) =>{
        cy.visit(url)
      })
    }
  }
  export default UrlUtils