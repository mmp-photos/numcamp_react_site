import CAMPSITES from "../../app/shared/CAMPSITES.js";
import CampsitesDirectoryPage from "../../pages/CampsitesDirectoryPage.js";

export const selectAllCampsites = () => {
    return CAMPSITES;
};

//  export const selectRandomCampsite = () => {
//      return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
//  };

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite)
}