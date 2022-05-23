import {Container} from './styles';

function Spin() {
    return (
        <Container>
            <div className="container">
                <div className="loader">
                    <div className="loader loader-inner"></div>
                </div>
            </div>
        </Container>
    );
}

export default Spin;