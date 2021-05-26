import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 33rem;
    justify-content: center;
    grid-auto-rows: auto;
    grid-gap: 1rem;
`;

export const GoBackLink = styled(Link)`
    display: inline-block;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: .5px;
    color: #111119;
    font-weight: 700;
    text-decoration: none;
    padding: 1rem;
`;

export const rotate = keyframes`
    from {
    transform: rotate(0deg);
    }

    to {
    transform: rotate(360deg);
    }
`;

export const Spinner = styled(FaSpinner)`
    animation: ${rotate} infinite 5s linear;
    width: 100%;
    height: 12rem;
`;