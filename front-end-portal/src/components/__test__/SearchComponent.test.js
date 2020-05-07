import React from 'react';
import SearchComponent from '../SearchComponent';
import  {render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from 'react-router-dom';
/*  Testing basic functionality of the LSearchComponent using 'Jest' and 'React Testing Library'  */
//  Test suite to check rendering of component
describe("Rendering", () => {
    it("render correctly", () => {
        //  Must wrap SearchComponent with Router as a childComponent uses withRouter!
        const {queryByTestId, queryByPlaceholderText} = render(<Router><SearchComponent /></Router>)

        expect(queryByTestId("search-button")).toBeTruthy()
        expect(queryByPlaceholderText("SAP")).toBeTruthy()
    })
})
//  Test suite to check the textbox updates when given a value
describe("Input variable", () => {
    it("updates on change", () => {
        const {queryByPlaceholderText} = render(<Router><SearchComponent /></Router>)
        const searchInput = queryByPlaceholderText('SAP')
        //  Method to 'fire' a DOM event
        fireEvent.change(searchInput, {target: {value: "test"}})
        expect(searchInput.value).toBe("test")
    })
})
//  Test suite to check a search does not go through if the query is empty
describe("Search button", () => {
    describe("with empty query", () =>
    it("does not trigger search function", () => {
        //  A mock function
        const requestSearch = jest.fn();
        const {queryByTestId} = render(<Router><SearchComponent requestSearch = {requestSearch} /></Router>)
        
        fireEvent.click(queryByTestId('search-button'))
        expect(requestSearch).not.toHaveBeenCalled()
    }))
})
//  Test suite to check the search does happen when a quer is given
describe("with data inside query", () => {
    it("triggers requestSearch function", () => {
        const requestSearch = jest.fn();
        const {queryByTestId, queryByPlaceholderText} = render(<Router><SearchComponent requestSearch = {requestSearch} /></Router>)
        const searchInput = queryByPlaceholderText('SAP')
        
        fireEvent.change(searchInput, {target: {value: "test"}})
        fireEvent.click(queryByTestId('search-button'))
        expect(requestSearch).not.toHaveBeenCalled()
    })
})