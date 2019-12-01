import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Form from './index';

describe('<Form />', () => {
  describe('UI Snapshot', () => {
    test('renders correctly', () => {
      const labelText = 'Test Label';
      const labelFor = 'for-input-id';
      const component = renderer.create(
        <Form title={labelText}>
          <Form.Field
            label={labelText}
            labelFor={labelFor}
            value=""
            onChange={() => {}}
          />
        </Form>,
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('onChange callback', () => {
    test('should be invoked onChange', () => {
      const spy = jest.fn();
      const form = mount(
        <Form.Field
          label=""
          labelFor=""
          value=""
          onChange={spy}
        />,
      );

      form.find('input').simulate('change');
      expect(spy).toHaveBeenCalled();
    });
  });
});
