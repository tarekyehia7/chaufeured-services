
type AppliedPromotions = {
    promotionHeadline: string;
    promotionUsageMessage: string;
    promotionMarketingMessage: string;
    couponCode: string;
    promotionName: string;
};

type CancellationPolicy = {
    id: number;
    name: string;
    rideType: string;
    parameters: {
        fee: number;
        time: number;
    }[];
};

type ReservationAmounts = {
    finalRidePriceNet: number;
    finalRidePriceGross: number;
};

export enum OfferType {
    Duration = 'DURATION'
}

export type OffersRequestBody = {
    originPlaceId: string;
    selectedStartDate: string;
    duration: string;
    type: OfferType;
};

type Image = {
    hdpi: string;
    mdpi: string;
    native: string;
    web: string;
    x1: string;
    x2: string;
    x3: string;
    xhdpi: string;
    xxhdpi: string;
}

type VehicleType = {
    id: number;
    airportFreeWaitingTime: number;
    benefits: string[];
    brand: string;
    brandTermsAndConditions: unknown;
    category: string;
    class: string;
    code: string;
    defaultFreeWaitingTime: number;
    description: string;
    imageType: string;
    images: Image;
    logo: Image;
    marketingImages: Image[];
    milesRedemption: boolean;
    mobileLogo: string | null;
    name: string;
    nrOfBaggage: number;
    nrOfPassengers: number;
    onDemand: boolean;
    onDemandCapability: string;
    priceVary: boolean;
    roamingType: string;
    title: string;
}

export type Offer = {
    amount: number;
    amountMin: number;
    amountNet: number;
    reservationAmounts?: ReservationAmounts;
    vat: number;
    currency: string;
    cancellationPolicy: CancellationPolicy;
    voucherCode: string | null;
    appliedPromotions: AppliedPromotions[];
    distance: number | null;
    duration: number;
    companyId: number | null;
    reversed: boolean;
    isReturnRideAvailable: boolean;
    estimatedArrivalTime: number | null;
    offerIdentifier: string;
    onDemand: boolean;
    priceVary: boolean;
    fixed: boolean;
    provider: string;
    sixtCustomerNumber: number | null;
    group: string;
    isPreselected: boolean;
    vehicleType: VehicleType;
}

enum ErrorCode {
    TooEarlyBookingTime = 'tooEarlyBookingTime'
}

export type ErrorObject = {
    data: unknown;
    errorCode: ErrorCode;
    errorDetailsMessage: string;
    exception: unknown;
    message: string;
    requestId: string;
    retriable: boolean;
    statusText: string;
    title: string;
};

export type OfferProps = {
    offer: Offer;
}