import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileCertificateCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileCertificateCaptionBoldIcon',
  component: LabelPairedFileCertificateCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileCertificateCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileCertificateCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
