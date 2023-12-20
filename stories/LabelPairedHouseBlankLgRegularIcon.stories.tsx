import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHouseBlankLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHouseBlankLgRegularIcon',
  component: LabelPairedHouseBlankLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedHouseBlankLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHouseBlankLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
