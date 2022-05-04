import Card from './Card';
import '../../css/index.css';
import '../../css/App.css';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Deactivated = Template.bind({});

Deactivated.args = {
  card: {
    firstCardNumber: '',
    secondCardNumber: '',
    thirdCardNumber: '',
    fourthCardNumber: '',
    expireMonth: '',
    expireYear: '',
    ownerName: '',
    securityCode: '',
    firstPassword: '',
    secondPassword: '',
  },
};

export const Activated = Template.bind({});

Activated.args = {
  card: {
    firstCardNumber: '1234',
    secondCardNumber: '5678',
    thirdCardNumber: '1111',
    fourthCardNumber: '2222',
    expireMonth: '01',
    expireYear: '23',
    ownerName: 'ahn',
    securityCode: '123',
    firstPassword: '1',
    secondPassword: '2',
  },
};
