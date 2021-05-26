import styled from 'styled-components';
import { 
    FaCarAlt,
    FaMoneyBillAlt,
    FaChartBar,
    FaCarCrash
} from 'react-icons/fa';

const iconsStyle = {
    width: '3rem',
    height: '2rem',
    minWidth: '3rem',
    paddingRight: '25px',
}

export const Benefits = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme: { color: { orange } } }) => orange};
    margin: 4rem;
    padding: 3rem;
    align-items: center;
    @media ${({ theme }) => theme.screens.tablet} {
        margin: 0;
    }
`;

export const Benefit = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${({ theme: { color: { lightBlack } } }) => lightBlack};
    padding: 2rem;
    max-width: 69%;

`;

export const BenefitsTitle = styled.div`
    font-size 40px;
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 4rem;
`;

export const BenefitWording = styled.div`
    font-size: 18px;
    line-height: 1.44;
    font-weight: 400;
    color: ${({ theme: { color: { lightBlack } } }) => lightBlack};
`;

export const BenefitTitle = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    color: ${({ theme: { color: { lightBlack } } }) => lightBlack};
    text-transform: uppercase;
`;

export const CarIcon = styled(FaCarAlt)`
    ${iconsStyle}
`;

export const MoneyIcon = styled(FaMoneyBillAlt)`
    ${iconsStyle}
`;

export const ChartIcon = styled(FaChartBar)`
    ${iconsStyle}
`;

export const CrashIcon = styled(FaCarCrash)`
    ${iconsStyle}
`;