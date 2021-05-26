import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-areas: "Autocompleter DateTimePicker Duration CTAButton";
    grid-template-columns: repeat(4,auto);
    justify-content: space-evenly;
    gap: 1.6rem;

    @media ${({ theme }) => theme.screens.tablet} {
        grid-template-areas: 'Autocompleter'
                             'DateTimePicker'
                             'Duration'
                             'CTAButton';
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4,auto);
        justify-items: center;
        height: 35rem;
    }
    align-items: center;
    background: ${({ theme: { color: { lightBlack } } }) => lightBlack};
    height: 8rem;
`;

export const ButtonContainer = styled.div`
    width: 100%;
`;