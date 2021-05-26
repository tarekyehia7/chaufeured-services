import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { AutocompleteChangeDetails, AutocompleteChangeReason } from '@material-ui/lab/Autocomplete';
import Popper from '@material-ui/core/Popper';

import { theme } from '../../../theme';
import {
  Container,
  Label,
  TextFieldContainer,
  SearchIcon,
  useStyles,
} from './Autocompleter.styled';


const CustomPopper = (props: any) => {
  const classes = useStyles(theme);
  return <Popper {...props} className={classes.popper} placement="bottom" />;
};

type AutocompleterProps = {
  data: any;
  onInputChange: (event: React.ChangeEvent<{}>, value: string) => void;
  onChange: (event: React.ChangeEvent<{}>, value: any, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<any> | undefined) => void;
};

export const Autocompleter = ({ data, onChange, onInputChange }: AutocompleterProps) => {
  const classes = useStyles(theme);
  
  return (
    <Container>
      <Label>Destination</Label>
      <Autocomplete
        id="custom-autocomplete"
        className={classes.root}
        options={data}
        style={{ width: 350, margin: 20 }}
        getOptionLabel={(option: any) => option.label}
        onInputChange={onInputChange}
        onChange={onChange}
        filterOptions={option => option}
        renderInput={(params: any) => (
          <TextFieldContainer>
            <SearchIcon />
            <TextField
              {...params}
              placeholder="Search.."
              helperText={params.inputProps.value.length ? '' : 'please, select a destination'}
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                classes: {
                  notchedOutline: classes.notchedOutline,
                  input: classes.inputLabelRoot
                }
              }}
            />
          </TextFieldContainer>
          )}
        renderOption={(option: any) => (
          <h4>{`${option.label}`}</h4>
        )}
        PopperComponent={CustomPopper}
      />
    </Container>
  );
};