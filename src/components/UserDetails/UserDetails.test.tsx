import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Table from './UserDetails';
import * as reactRedux from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'; 
import UserDetails from '.';

Enzyme.configure({ adapter: new Adapter() })

let data = [
    { "id": "1", "name": "Aaron Miles", "email": "aaron@mailinator.com", "role": "member" },
    { "id": "2","name": "Aishwarya Naik", "email": "aishwarya@mailinator.com","role": "member"},
    {"id": "3","name": "Arvind Kumar","email": "arvind@mailinator.com", "role": "admin"
    }
]

const mockDispatch = jest.fn(() => {
    return data;
});

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
  .mockReturnValueOnce({data: data, pageNumber: 1, selectedData: []}),
  useDispatch: () => mockDispatch
}));


describe('Test userDetails component' , () => {
    let wrapper;

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    // Mock state with useSelector
    useSelectorMock.mockReturnValue({data: data, pageNumber: 1, selectedData: []})
    wrapper = shallow(<UserDetails />);

    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
      })
    
    it('should render userDetails', () => {
        expect(wrapper).toBeDefined();
    })

    it('should render table', () => {
        const tableWrapper = wrapper.find('Table').dive();
        expect(tableWrapper).toBeDefined();
    })
})