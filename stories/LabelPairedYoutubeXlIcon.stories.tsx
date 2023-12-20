import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedYoutubeXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedYoutubeXlIcon',
  component: LabelPairedYoutubeXlIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LabelPairedYoutubeXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedYoutubeXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
