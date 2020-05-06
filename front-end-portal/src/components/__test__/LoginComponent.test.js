import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from '../LoginComponent';
import  {render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

describe("Rendering", () => {
    it("Login renders correctly", () => {
        const div = document.createElement("div");
        ReactDOM.render(<LoginComponent></LoginComponent>, div)
    }) 
    
    it("renders button correctly", () => {
        const {getByTestId} =  render(<LoginComponent></LoginComponent>)
       expect(getByTestId('button')).toHaveTextContent('Login');
    })
})

describe("Input variable", () => {
    it("updates on change", () => {
        const {queryByPlaceholderText} = render(<LoginComponent></LoginComponent>)
        const searchInput = queryByPlaceholderText('Neil')
        fireEvent.change(searchInput, {target: {value: "test"}})

        expect(searchInput.value).toBe("test")
    })
})