import React from 'react';

import { OfferProps } from '../../types/offers';
import { CTAButton } from '../atom';
import { generatePrice } from '../../helpers';
import {
    Card,
    Row,
    VehicleTitle,
    DivWithIcon,
    UserIcon,
    LuggageIcon,
    CarImage,
    BoldText,
    Benefits,
    Benefit,
    CheckIcon,
} from './OfferCard.styled';

export const OfferCard = ({ offer }: OfferProps) => {

    return (
        <Card data-testid="offer-card">
            <Row>
                <div>
                    <VehicleTitle data-testid="vehicle-title">{offer.vehicleType.title}</VehicleTitle>
                    <div data-testid="vehicle-desc">{offer.vehicleType.description}</div>
                </div>
                <div>
                    <DivWithIcon data-testid="vehicle-passengers"><UserIcon /><span>Passengers: {offer.vehicleType.nrOfPassengers}</span></DivWithIcon>
                    <DivWithIcon data-testid="vehicle-buggage"><LuggageIcon /><span>Buggage: {offer.vehicleType.nrOfBaggage}</span></DivWithIcon>
                </div>
            </Row>
            <Row>
                <CarImage src={offer.vehicleType.images.web} data-testid="vehicle-image"></CarImage>
                <BoldText data-testid="vehicle-price">{offer.currency} {generatePrice(offer.amount, offer?.amountMin)}</BoldText>
            </Row>
            <Benefits data-testid="vehicle-benefits">
                {offer.vehicleType.benefits.map((benifit, id) => (
                <DivWithIcon key={id}>
                    <CheckIcon /><Benefit>{benifit}</Benefit>
                </DivWithIcon>
                ))}
            </Benefits>
            <CTAButton value='Choose' onClick={() => {}} />
        </Card>
    );
}