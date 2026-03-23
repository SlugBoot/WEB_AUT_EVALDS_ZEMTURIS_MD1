import { BasePage } from "./basePage";

export class selectablePage extends BasePage {

  static get url() {
    return "/selectable";
  }

  static get gridNav() {
    return cy.get("#demo-tab-grid");
  }

  static get oneButton() {
    return cy.get(".list-group-item").contains(/^One$/);
  }

  static get twoButton() {
    return cy.get(".list-group-item").contains(/^Two$/);
  }

  static get threeButton() {
    return cy.get(".list-group-item").contains(/^Three$/);
  }

  static get fourButton() {
    return cy.get(".list-group-item").contains(/^Four$/);
  }

  static get fiveButton() {
    return cy.get(".list-group-item").contains(/^Five$/);
  }

  static get sixButton() {
    return cy.get(".list-group-item").contains(/^Six$/);
  }

  static get sevenButton() {
    return cy.get(".list-group-item").contains(/^Seven$/);
  }

  static get eightButton() {
    return cy.get(".list-group-item").contains(/^Eight$/);
  }

  static get nineButton() {
    return cy.get(".list-group-item").contains(/^Nine$/);
  }

}
