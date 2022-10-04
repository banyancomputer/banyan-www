import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignIn from '../../pages';

export default {
  title: 'pages/SignIn',
  component: SignIn,
  argTypes: {},
} as ComponentMeta<typeof SignIn>;

const Template: ComponentStory<typeof SignIn> = (args) => <SignIn {...args} />;

export const Base = Template.bind({});
