import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components';

import { Theme } from '../../../theme';

export const useStyles = makeStyles(
    createStyles({
      inputLabelRoot: {
        color: ({ color: { white } }: Theme) => white,
        '&::placeholder': {
          color: ({ color: { white } }: Theme) => white
        },
        
      },
      notchedOutline: {
        color: ({ color: { white } }: Theme) => white,
        border: 'none',
      },
      root: {
        color: ({ color: { white } }: Theme) => white,
        background: 'transparent',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        '& .PrivateNotchedOutline-root-1': {
          border: 'none',
        },
      },
      popper: {
        '& .MuiAutocomplete-listbox': {
          border: '1px solid grey',
          minHeight: 400,
          color: ({ color: { black } }: Theme) => black,
          fontSize: 18,
          backgroundColor: ({ color: { white } }: Theme) => white,
          "& li:hover": {
            color: ({ color: { orange } }: Theme) => orange,
            backgroundColor: ({ color: { white } }: Theme) => white,
          },
        },
      }
    })
);
  
export const TextFieldContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid ${({ theme: { color: { orange } } }) => orange};
    position: relative;
    width: 100%;
    .MuiFormHelperText-root {
      color: ${({ theme: { color: { orange } } }) => orange};
      position: absolute;
      bottom: -22px;
      left: -27px;
    }
    .MuiIconButton-label {
      color: ${({ theme: { color: { white } } }) => white};
    }
`;
  
export const Container = styled.div`
    position: relative;
    grid-area: Autocompleter;
`;
  
export const Label = styled.div`
    position: absolute;
    top: 7px;
    left: 19px;
    text-transform: uppercase;
    color: ${({ theme: { color: { orange } } }) => orange};
    font-weight: 700;
    margin-bottom: 0;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: .4px;
`;
  
export const SearchIcon = styled(FaSearch)`
    color: ${({ theme: { color: { orange } } }) => orange};
`;