import styled from 'styled-components';

export const Input = styled.input`
    border: none;
    background: transparent;
    color: ${({ theme: { color: { white } } }) => white};
    font-size: 17px;
    outline: none;
    width: 15rem;
    height: 2rem;
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
`;

export const Wrapper = styled.div<{ error: boolean }>`
    grid-area: Duration;
    position: relative;
    border-bottom: 2px solid ${({ theme: { color: { orange } } }) => orange};
    height: 2.8rem;
    margin-top: 0.8rem;
    @media ${({ theme }) => theme.screens.tablet} {
        width: 22rem;
    }
`;

export const ErrorMessage = styled.div`
    font-size: 0.75rem;
    color: ${({ theme: { color: { orange } } }) => orange};
    position: absolute;
    bottom: -21px;
`;

export const Label = styled.div`
    position: absolute;
    top: -21px;
    left: 0px;
    text-transform: uppercase;
    color: ${({ theme: { color: { orange } } }) => orange};
    font-weight: 700;
    margin-bottom: 0;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: .4px;
`;