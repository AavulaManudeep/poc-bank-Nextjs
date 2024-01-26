
import lookupPage from '../../src/app/lookup/page'
describe('ComponentName.cy.tsx', () => {
  it('playground', () => {
    const comp = lookupPage();
    cy.mount(comp);
  })
})