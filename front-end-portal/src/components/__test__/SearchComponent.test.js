import React from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from '../SearchComponent';
import  {render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from 'react-router-dom';

it("render correctly", () => {
    const {queryByTestId, queryByPlaceholderText} = render(<Router><SearchComponent /></Router>)
    expect(queryByTestId("search-button")).toBeTruthy()
    expect(queryByPlaceholderText("SAP")).toBeTruthy()
})

describe("Input variable", () => {
    it("updates on change", () => {
        const {queryByPlaceholderText} = render(<Router><SearchComponent /></Router>)
        const searchInput = queryByPlaceholderText('SAP')
        fireEvent.change(searchInput, {target: {value: "test"}})

        expect(searchInput.value).toBe("test")
    })
})

describe("Search button", () => {
    describe("with empty query", () =>
    it("does not trigger search function", () => {
        const requestSearch = jest.fn();
        const {queryByTestId} = render(<Router><SearchComponent requestSearch = {requestSearch} /></Router>)
        fireEvent.click(queryByTestId('search-button'))
        expect
        (requestSearch).not.toHaveBeenCalled()
    }))
})

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