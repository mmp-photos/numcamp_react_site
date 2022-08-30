// IMPORT THE ARRAY OF PARTNERS //
import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectAllPartners = () => {
    return PARTNERS;
};

export const selectFeaturedPartner = () => {
    return  PARTNERS.find((partner) => partner.featured);
}
