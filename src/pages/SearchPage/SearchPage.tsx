import React from 'react';

import { Search } from '../../components/Search/Search';
import {
    Benefits,
    BenefitsTitle,
    Benefit,
    CarIcon,
    BenefitTitle,
    BenefitWording,
    MoneyIcon,
    CrashIcon,
    ChartIcon,
} from './SearchPage.styled';

const SearchPage = () => {
    return (
        <>
        <Search />
        <Benefits>
            <BenefitsTitle>
                OVER 1 MILLION DRIVERS WORLDWIDE BOOKABLE WITH ONLY ONE APP.
            </BenefitsTitle>
            <Benefit>
                <CarIcon />
                <div>
                    <BenefitTitle>PRE-ORDER OR DRIVE NOW</BenefitTitle>
                    <BenefitWording>With SIXT ride you can pre-order a limousine or have a taxi pick you up immediately. Mobility tailored to your needs.</BenefitWording>
                </div>
            </Benefit>
            <Benefit>
                <MoneyIcon />
                <div>
                    <BenefitTitle>NO CASH NECESSARY</BenefitTitle>
                    <BenefitWording>Your journey is billed conveniently via the app. So you don't have to carry cash in local currency with you and still stay mobile around the world.</BenefitWording>
                </div>
            </Benefit>
            <Benefit>
                <CarIcon />
                <div>
                    <BenefitTitle>TAXI OR LIMOUSINE</BenefitTitle>
                    <BenefitWording>Whether taxi or luxury limousine, with SIXT Ride you always have the right vehicle at your disposal. Choose from different booking classes according to your personal preferences.</BenefitWording>
                </div>
            </Benefit>
            <Benefit>
                <CrashIcon />
                <div>
                    <BenefitTitle>SAFE AND COMFORTABLE</BenefitTitle>
                    <BenefitWording>Licensed drivers Live tracking and the driver's contact details even before the ride - with SIXT ride you can reach your destination safely and conveniently anywhere in the world.</BenefitWording>
                </div>
            </Benefit>
            <Benefit>
                <ChartIcon />
                <div>
                    <BenefitTitle>TRANSPARENT</BenefitTitle>
                    <BenefitWording>In your customer account you can keep track of all your rentals and journeys with SIXT. If you also want to use SIXT ride for business, you can easily add a company profile. So you can easily differentiate between business and private trips.</BenefitWording>
                </div>
            </Benefit>
        </Benefits>
        </>
    );
};

export default SearchPage;