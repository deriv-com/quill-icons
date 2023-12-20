import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLaptopMobileXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLaptopMobileXlRegularIcon',
  component: LabelPairedLaptopMobileXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedLaptopMobileXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLaptopMobileXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
