import React, { useState } from 'react';
import { DateTimePicker } from './DateTimePicker';
import { Meta } from '@storybook/react';

export default {
  title: 'atom/DateTimePicker',
  component: DateTimePicker,
} as Meta;

const DateTimePickerComponent = () => {
  const [value, setValue] = useState(new Date().toISOString());
  const onChange = (e: any) => {
    setValue(e.target.value);
  }

  return <DateTimePicker value={value} onChange={onChange} />
};

export const Primary = () => <DateTimePickerComponent />;