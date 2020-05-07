import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from '../LoginComponent';
import  {render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
/*  Testing basic functionality of the LoginComponent using 'Jest' and 'React Testing Library'  */
//  Test suite to check rendering of component and login button
describe("Rendering", () => {
    //  'it' is a test spec inside a test suite
    it("Login renders correctly", () => {
        const div = document.createElement("div");
        ReactDOM.render(<LoginComponent></LoginComponent>, div)
    }) 
    
    it("Button renders correctly", () => {
        const {getByTestId} =  render(<LoginComponent></LoginComponent>)
       expect(getByTestId('button')).toHaveTextContent('Login');
    })
})
//  Test suite to check the textbox updates when given a value
describe("Input variable", () => {
    it("Textbox updates on change", () => {
        const {queryByPlaceholderText} = render(<LoginComponent></LoginComponent>)
        const searchInput = queryByPlaceholderText('Neil')
        
        fireEvent.change(searchInput, {target: {value: "test"}})
        expect(searchInput.value).toBe("test")
    })
})