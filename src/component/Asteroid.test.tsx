import { shallow } from "enzyme";
import React from "react";
import Asteroid from "./Asteroid";


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => ({
      navigate: jest.fn().mockImplementation(() => ({})),
    }),
  }));

describe('<Asteroid />', () => {
    test("render the astroid",()=>{
        const wrapper = shallow(<Asteroid />);
        expect(wrapper.find("Typography").text()).toContain("Asteriod");
    });
    
    test("render the astroid",()=>{
        const wrapper = shallow(<Asteroid />);
        expect(wrapper.find("input").text()).toContain("Enter Asteroid ID");
    });
test("render a submit button",()=>{
    const wrapper = shallow(<Asteroid />);
    expect(wrapper.find("#submit").text()).toBe("Submit");
});

it('checking Button disabled or not for Submit', () => {
    const wrapper = shallow(<Asteroid />);
    expect(wrapper.find('#submit').at(0).prop('disabled')).toBeTruthy();
});
it('should render a <div />', () => {
    const wrapper = shallow(<Asteroid />);
    const result = wrapper.find('div').length;
    expect(result).toEqual(1);
});

it('renders snapshot for NasaApi component', () => {
    const wrapper = shallow(<Asteroid />);
    expect(wrapper).toMatchSnapshot();
});


test("render a randomsubmit button",()=>{
    const wrapper = shallow(<Asteroid />);
    expect(wrapper.find("#random-asteroid").text()).toBe("Random Asteroid");
});
});
