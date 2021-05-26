import { AppRestServices } from '../AppRestServices';
import { OffersRequestBody, Offer, ErrorObject } from '../../types/offers';

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
};

/**
 * Post offers
 *
 * @param {Object} { searchString }
 * @returns {Promise}
 */
export const postOffers = async (body: OffersRequestBody): Promise<Offer[] | ErrorObject> => {
    const { myDriverOffers } = AppRestServices;
	return await fetch(myDriverOffers, {
        ...requestOptions,
        body: JSON.stringify(body)
    }).then(response => response.json());
};