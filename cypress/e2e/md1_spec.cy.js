const { selectablePage } = require("../pageObjects/selectablePage");

describe('MD_1 spec', () => {

  context('Selectable interactions tests', () => {
    beforeEach(() => {
      selectablePage.visit();
    })
    it('Selectable interaction tests', () => {
      selectablePage.gridNav.click();

      selectablePage.twoButton.click();
      selectablePage.fourButton.click();
      selectablePage.sixButton.click();
      selectablePage.eightButton.click();

      selectablePage.twoButton.should("have.class", "active");
      selectablePage.fourButton.should("have.class", "active");
      selectablePage.sixButton.should("have.class", "active");
      selectablePage.eightButton.should("have.class", "active");

      selectablePage.oneButton.should("not.have.class", "active");
      selectablePage.threeButton.should("not.have.class", "active");
      selectablePage.fiveButton.should("not.have.class", "active");
      selectablePage.sevenButton.should("not.have.class", "active");
      selectablePage.nineButton.should("not.have.class", "active");

    })

  });
})
