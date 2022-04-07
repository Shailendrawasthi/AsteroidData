import { shallow } from "enzyme";
import React from "react";
import AsteroidDetail from "./AsteroidDetail";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => ({
      navigate: jest.fn().mockImplementation(() => ({})),
    }),
  }));

describe("<AsteroidDetail />",()=>{

    it('checking Back button content', () => {
        const wrapper = shallow(<AsteroidDetail />);
        expect(wrapper.find('div').text()).toContain('Name');
    });
    it('checking Back button content', () => {
        const wrapper = shallow(<AsteroidDetail />);
        expect(wrapper.find('div').text()).toContain('Nasa Jpl Url');
    });
    it('checking Back button content', () => {
        const wrapper = shallow(<AsteroidDetail />);
        expect(wrapper.find('div').text()).toContain('Is Potentially Hazardous Asteroid');
    });
    it('checking Back button content', () => {
        const wrapper = shallow(<AsteroidDetail />);
        expect(wrapper.find('#back').text()).toContain('Back');
    });

    it('Link is working', () => {
        const wrapper = shallow(<AsteroidDetail />);
        const result = wrapper.find('Link').prop('to');
        expect(result).toEqual('/');

    });
    // it('checking Back button', () => {
    //     const wrapper = shallow(<AsteroidDetail />);
    //     expect(wrapper.containsMatchingElement('Back')).toBeTruthy();
    // });
    it('renders snapshot for Asteroid Details component', () => {
        const wrapper = shallow(<AsteroidDetail />);
        expect(wrapper).toMatchSnapshot();
    });

});