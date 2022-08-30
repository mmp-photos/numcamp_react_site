import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList.js'
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    return (
        <Container>
            <SubHeader />
            <DisplayList />
        </Container>
    );
};

export default HomePage;