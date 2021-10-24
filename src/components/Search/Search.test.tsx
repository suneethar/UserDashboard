import React, { useDebugValue } from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Table from './Search';
import { useSelector, useDispatch } from 'react-redux'; 
import Search from '.';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

Enzyme.configure({ adapter: new Adapter() })
describe('Test search component' , () => {
    let wrapper;

    let filteredText = 'admin';

    beforeEach(() => {
        wrapper = shallow(<Search filteredText={filteredText} />);
    });
    
    it('should render search box', () => {
        const inputBox  = wrapper.find('.gt__searchbar');
        expect(inputBox.get(0).props.value).toEqual(filteredText);
    })
})