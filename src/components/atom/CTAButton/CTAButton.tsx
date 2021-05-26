import React from 'react';
import Button from '@material-ui/core/Button';

import { theme } from '../../../theme';
import { 
    Container,
    useStyles,
} from './CTAButton.styled';

type CTAButtonType = {
    value: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const CTAButton = ({ value, onClick }: CTAButtonType) => {
    const classes = useStyles(theme);
    return (
        <Container>
            <Button
                onClick={onClick}
                variant="contained"
                className={classes.root}
            >
                {value}
            </Button>
        </Container>
    );
}