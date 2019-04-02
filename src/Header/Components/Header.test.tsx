import Header from './Header';

it('renders the right components', () => {
  let wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});
