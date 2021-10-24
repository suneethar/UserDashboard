import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Table from './Table';
import TableBody from './TableBody';
import { useSelector, useDispatch } from 'react-redux'; 
import TableHead from './TableHead';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

Enzyme.configure({ adapter: new Adapter() })
describe('Test table component' , () => {
    let wrapper;
    let tableBodyWarapper;
    let tableHeaderWrapper;

    let data = [
        { "id": "1", "name": "Aaron Miles", "email": "aaron@mailinator.com", "role": "member" },
        { "id": "2","name": "Aishwarya Naik", "email": "aishwarya@mailinator.com","role": "member"},
        {"id": "3","name": "Arvind Kumar","email": "arvind@mailinator.com", "role": "admin"
        }
    ]
    let selecteditems = [];
    let columns = ["name", "email", "role"]

    beforeEach(() => {
        wrapper = shallow(<Table data={data} selectedItems={selecteditems}/>);
        tableHeaderWrapper = shallow(<TableHead columns={columns} data={data} isAllRowSelected={false}></TableHead>)
        tableBodyWarapper = shallow(<TableBody data={data} columns={columns} selectedItems={selecteditems}></TableBody>)
    });
    
    
    it('should render table', () => {
        const tableElement  = wrapper.find('table');
        expect(tableElement).toBeDefined();
    })

    it('should render table body', () => {
        const tableBody = tableBodyWarapper.find('.table__body__row');
        expect(tableBody).toHaveLength(3);
    })

    it('should render table header', () => {
        const tableHeader = tableHeaderWrapper.find('.table__header');
        const columns = tableHeader.find('th');
        // 3 columns plus checkbox and actions
        expect(columns).toHaveLength(5); 
    })
})