// CAMPSITE LIST COMPONENT FOR NUCAMP SITE //
  // USES the CAMPSITECARE COMPONENT TO ITERATE THROUGH ALL CAMPSITES //

// IMPORTS //
import React from 'react';
import { Row, Col } from 'reactstrap';
import CampsiteCard from './CampsiteCard.js';
import { selectAllCampsites, selectCampsiteById} from './campsitesSlice.js'

// LIST CODE START //
const CampsiteList = () => {
    const campsites = selectAllCampsites();
    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};
// LIST CODE END //

// EXPORT STATEMENT //
export default CampsiteList;