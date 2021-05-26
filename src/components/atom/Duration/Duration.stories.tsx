import React, { useState } from 'react';
import { Duration } from './Duration';
import { Meta } from '@storybook/react';

export default {
  title: 'atom/Duration',
  component: Duration,
} as Meta;

const DurationComponent = () => {
  const [value, setValue] = useState('1');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
  };

  return <Duration value={value} onChange={onChange} />;
};

export const Primary = () => <DurationComponent />;