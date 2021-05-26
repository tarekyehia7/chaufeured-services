
import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import { Theme } from '../../../theme';

export const useStyles = makeStyles(
    createStyles({
        root: {
            color: ({ color: { white } }: Theme) => white,
            backgroundColor: ({ color: { orange } }: Theme) => orange,
            border: `2px solid ${({ color: { orange } }: Theme) => orange}`,
            width: '100%',
            height: '50px',
            fontSize: '18px',
            lineHeight: '18px',
            letterSpacing: '4px',
            fontWeight: 700,
            textTransform: 'uppercase',
            '&:hover': {
                backgroundColor: ({ color: { orange } }: Theme) => orange,
            }
        }
    })
);

export const Container = styled.div`
    grid-area: CTAButton;
`;