import '@testing-library/jest-dom'
import {getElementError, render, screen} from '@testing-library/react'
import Home from '../src/app/page'

describe('Testing Home page Text',() => {
    beforeAll(()=>{
        render(<Home/>);
    })
    it('Testing correct test' ,() => {
        const tableValue = screen.getByText('head1');
        console.log(tableValue);
        expect(tableValue).toBeVisible();
    })
})