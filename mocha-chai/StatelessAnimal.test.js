import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import StatelessAnimal from '../things-to-test/StatelessAnimal';

const testSound = 'Woof!';

describe('<StatelessAnimal />', () => {
    it('it should display my text', () => {
        const wrapper = shallow(<StatelessAnimal sound={testSound} />);
        expect(wrapper.text()).to.contain(testSound);
    });

    it('it should have an animal class', () => {
        const wrapper = shallow(<StatelessAnimal sound={testSound} />);
        expect(wrapper.find('div').first().props().className).to.equal('animal');
    });
});
