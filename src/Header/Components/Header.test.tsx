import { mount, render, shallow } from 'enzyme';
import Header from './Header';

it('renders the right components', () => {
  let wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});
