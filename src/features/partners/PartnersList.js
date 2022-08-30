// IMPORT NEEDED COMPONENTS //
import { Col } from 'reactstrap';
import { selectAllPartners } from './partnersSlice';
import Partner from './Partner.js';

// PARTNERS LIST FUNCTION //
const PartnerList = () => {
    const partners = selectAllPartners();
    return(
        <Col classname='mt-4'>
            { partners.map((partner) => {
                return(
                    <div className='d-flex mb-5' key={partner.id}>
                        <Partner partner={partner} />
                    </div>
                )
            })
        }        
        </Col>
    )
};

// EXPORT STATEMENT //
export default PartnerList;
