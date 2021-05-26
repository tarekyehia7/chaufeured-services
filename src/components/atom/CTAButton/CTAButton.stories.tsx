import React from 'react';
import { CTAButton } from './CTAButton';
import { Meta } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'atom/CTAButton',
  component: CTAButton,
  decorators: [withKnobs],
} as Meta;

export const Primary = () => <CTAButton value={text('Label', 'Search')} onClick={() => {}} />;