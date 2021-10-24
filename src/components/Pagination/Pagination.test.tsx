import React, { useDebugValue } from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Pagination from './Pagination';
import { useSelector, useDispatch } from 'react-redux'; 
import Search from '.';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

Enzyme.configure({ adapter: new Adapter() })
describe('Test pagination component' , () => {
    let wrapper;

    let totalPages = 5;
    let selectedPage = 2;

    beforeEach(() => {
        wrapper = shallow(<Pagination totalPages={totalPages} selectedPage={selectedPage} />);
    });
    
    it('should render pagination', () => {
        const pages  = wrapper.find('.pagination__lists');
        // totalpages plus prev and next button
        expect(pages.find('li')).toHaveLength(7);
    })

    it('should select the page based on selectedpage props', () => {
        const pages = wrapper.find('.pagination__lists');
        expect(pages.find('.btn--primary').find('button').text()).toEqual("2");
    })
})