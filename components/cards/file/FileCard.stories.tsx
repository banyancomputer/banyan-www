import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileCard, { IFileCard } from './FileCard';
import { mockFileCardProps } from './FileCard.mocks';

// An Example of a Storybook Story - Minimum Required to get a story to show up

export default {
  title: 'components/templates/file/FileCard',
  component: FileCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FileCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FileCard> = (args: IFileCard) => (
  <FileCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFileCardProps.base,
} as IFileCard;
