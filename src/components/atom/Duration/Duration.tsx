import React from 'react';

import {
    Wrapper,
    Label,
    Input,
    ErrorMessage,
} from './Duration.styled';
import { isValidDuration } from '../../../helpers';

type DurationProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Duration = ({ value, onChange }: DurationProps) => {
    const valid = isValidDuration(Number(value));
    
    return (
        <Wrapper error={!valid}>
            <Label>Duration</Label>
            <Input
                type="number"
                value={value}
                min="1"
                max="1440"
                onChange={onChange}
            />
            {!valid &&
                <ErrorMessage>please, specify value between 1 and 1440</ErrorMessage>
            }
        </Wrapper>
    );
};