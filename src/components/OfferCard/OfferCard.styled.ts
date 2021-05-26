import styled from 'styled-components';
import { FaUserAlt, FaSuitcase, FaCheck } from 'react-icons/fa';

const padding = {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
};

export const Card = styled.div`
    border: 2px solid ${({ theme: { color: { lightGrey } } }) => lightGrey};
    border-radius: 4px;
    padding: .5rem;
`;

export const CarImage = styled.img`
    width: 100%;
    max-width: 10rem;
    height: auto;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${padding}
`;

export const Benefits = styled.div`
    ${padding}
`;

export const Benefit = styled.span`
    ${padding}
    margin: 0;
`;

export const BoldText = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
`;

export const DivWithIcon = styled.div`
    display: flex;
    align-items: center;
`;

export const UserIcon = styled(FaUserAlt)`
    padding-right: 0.5rem;
`;

export const LuggageIcon = styled(FaSuitcase)`
    padding-right: 0.5rem;
`;

export const CheckIcon = styled(FaCheck)`
    color: ${({ theme: { color: { orange } } }) => orange};
    width: 0.8rem;
    padding-right: 0.5rem;
`;

export const VehicleTitle = styled.h4`
    margin: 0;
`;