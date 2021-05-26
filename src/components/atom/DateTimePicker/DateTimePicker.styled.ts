import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '../../../theme';

export const useStyles = makeStyles((theme) => ({
    multilineColor:{
      color:({ color: { white } }: Theme) => white
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      color: ({ color: { white } }: Theme) => white,
    },
    textField: {
      color: ({ color: { white } }: Theme) => white,
      width: 200,
      fontSize: 24,
      fontWeight: 700,
    },
  
  }));
  
export const TextFieldContainer = styled.div`
    grid-area: DateTimePicker;
    display: flex;
    align-items: center;
    position: relative;
    @media ${({ theme }) => theme.screens.tablet} {
        width: 22rem;
    }
    .MuiInputBase-root {
        @media ${({ theme }) => theme.screens.tablet} {
            width: 22rem;
        }
    }
    .MuiInput-input {
      height: 2.8rem;
    }
    .MuiFormHelperText-root {
      color: ${({ theme: { color: { orange } } }) => orange} !important;
      position: absolute;
      bottom: -1.3125rem;
    }
    .MuiInput-underline:before {
      border-bottom: 2px solid ${({ theme: { color: { orange } } }) => orange};
    }
    .MuiInput-underline:after {
      border-bottom: 2px solid ${({ theme: { color: { orange } } }) => orange} !important;
    }
    .MuiInput-underline:hover {
      border: none;
    }
`;
  
export const Label = styled.div`
    position: absolute;
    top: -9px;
    left: 0;
    text-transform: uppercase;
    color: ${({ theme: { color: { orange } } }) => orange};
    font-weight: 700;
    margin-bottom: 0;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: .4px;
`;