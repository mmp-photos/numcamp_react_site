import { useState } from 'react';
import CampsiteDetail from '../features/campsites/CampsiteDetail.js';
import CampsitesList from '../features/campsites/CampsitesList.js'
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';


const CampsitesDirectoryPage = () => {
   return (
        <Container>
            <SubHeader />
            <CampsitesList />
        </Container>
   )
}

// EXPORT STATEMENT //
export default CampsitesDirectoryPage;