import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { data } from './constants';
import { OfferCard } from './OfferCard';
import { generatePrice } from '../../helpers';
import { theme } from '../../theme';

beforeEach(cleanup);

const renderComponent = () => {
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
            <OfferCard offer={data} />
        </ThemeProvider>
    ); 

    return {
        getByTestId
    };
};

test('renders offerCard with all data', () => {
    const { getByTestId } = renderComponent();

    const card = getByTestId('offer-card');
    expect(card).toBeInTheDocument();
});

test('render offerCard with correct vehicle title', () => {
    const { getByTestId } = renderComponent();

    const title = getByTestId('vehicle-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(data.vehicleType.title);
});

test('render offerCard with correct vehicle description', () => {
    const { getByTestId } = renderComponent();

    const desc = getByTestId('vehicle-desc');
    expect(desc).toBeInTheDocument();
    expect(desc).toHaveTextContent(data.vehicleType.description);
});

test('render offerCard with correct vehicle passengers', () => {
    const { getByTestId } = renderComponent();
    
    const passengers = getByTestId('vehicle-passengers');
    expect(passengers).toBeInTheDocument();
    expect(passengers).toHaveTextContent(data.vehicleType.nrOfPassengers.toString());
});

test('render offerCard with correct vehicle buggage', () => {
    const { getByTestId } = renderComponent();

    const buggage = getByTestId('vehicle-buggage');
    expect(buggage).toBeInTheDocument();
    expect(buggage).toHaveTextContent(data.vehicleType.nrOfBaggage.toString());
});

test('render offerCard with correct vehicle image', () => {
    const { getByTestId } = renderComponent();
    
    const image = getByTestId('vehicle-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', data.vehicleType.images.web);
});

test('render offerCard with correct vehicle price', () => {
    const { getByTestId } = renderComponent();

    const price = getByTestId('vehicle-price');
    expect(price).toBeInTheDocument();
    const totalPrice = generatePrice(data.amount, data.amountMin);
    expect(price).toHaveTextContent(totalPrice);
});

test('render offerCard with correct vehicle benefits', () => {
    const { getByTestId } = renderComponent();

    const benefits = getByTestId('vehicle-benefits');
    expect(benefits).toBeInTheDocument();
    benefits.querySelectorAll('div').forEach((benefit, id) => {
        expect(benefit).toHaveTextContent(data.vehicleType.benefits[id]);
    })
});
  