import React from 'react';
import { Autocompleter } from './Autocompleter';
import { Meta } from '@storybook/react';
import { autocompleterData } from './constants';

export default {
  title: 'atom/Autocompleter',
  component: Autocompleter,
} as Meta;

export const Primary = () => <div style={{ display: 'flex' }}><Autocompleter data={autocompleterData} onInputChange={() => {}}  onChange={() => {}} /></div>;