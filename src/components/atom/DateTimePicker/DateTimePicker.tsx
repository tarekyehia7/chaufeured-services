import React from 'react';
import TextField from '@material-ui/core/TextField';

import {
  TextFieldContainer,
  Label,
  useStyles,
} from './DateTimePicker.styled';
import { theme } from '../../../theme';

type DateTimePickerProps = {
  value: string;
  onChange: (event: any) => void;
}


export const DateTimePicker = ({ value, onChange }: DateTimePickerProps) => {
  const classes = useStyles(theme);

  return (
    <TextFieldContainer>
      <Label>Pick up date and time</Label>
      <TextField
        id="datetime-local"
        type="datetime-local"
        className={classes.textField}
        InputProps={{
          className: classes.multilineColor,
        }}
        value={value}
        onChange={onChange}
        error={!value.length}
        helperText={value.length ? '' : 'please, select a duration'}
      />
    </TextFieldContainer>
  );
}