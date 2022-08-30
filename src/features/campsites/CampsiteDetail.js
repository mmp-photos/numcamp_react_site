// IMPORT NEEDED FILES AND COMPONENTS //
import { Card, CardImg, CardBody, CardText, Col } from "reactstrap";

// CREATE CAMPSITE DETAIL COMPONENT //
 const CampsiteDetail = ( {campsite} ) => {
    const { image, name, description } = campsite;
    
    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>
                        {description}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    )
};

// EXPORT STATEMENT //
export default CampsiteDetail;