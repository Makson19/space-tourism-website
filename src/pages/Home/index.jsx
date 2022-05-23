import { Container, Wrapper, Main } from './styles';
import Navbar from '../../components/Navbar';

import { Link } from 'react-router-dom';


export default function Home() {
    const tab = 1;

    return (
        <Container>
            <Wrapper>
                <Navbar active={tab} />
                <Main>
                    <div className="text">
                        <p className="text__subtitle">
                            So, you want to travel to
                        </p>

                        <h1 className="text__title">
                            Space
                        </h1>

                        <p className="text__content">
                            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
                        </p>
                    </div>

                    <div className="button">
                        <Link to='/destination'>Explore</Link>
                    </div>
                </Main>
            </Wrapper>
        </Container>
    );
}