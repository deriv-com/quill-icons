import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHouseBlankXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHouseBlankXlRegularIcon',
  component: LabelPairedHouseBlankXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedHouseBlankXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHouseBlankXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
