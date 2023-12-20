import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLanguageSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLanguageSmRegularIcon',
  component: LabelPairedLanguageSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedLanguageSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLanguageSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
