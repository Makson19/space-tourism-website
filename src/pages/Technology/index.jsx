import {useState, useEffect} from 'react';

import {Container, Wrapper, Main} from './styles';
import Navbar from '../../components/Navbar';
import Spin from '../../components/Spin';
import path from '../../services/path';

export default function Technology() {
    const tab = 4;
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadJSON() {
            const response = await path.get();
            // console.log(response.data['technology'])
            setData(response.data['technology']);
            setLoading(false);
        }

        loadJSON();

        return () => console.log('Page "Technology" Unmounted!');
    }, [])


    const moveSlide = (n) => {
        setIndex(n);
    }


    if(loading) {
        return <Spin/>
    }

    return(
        <Container>
            <Wrapper>
                <Navbar active={tab} />
                <Main slide={index} img={data[index].images.portrait}>
                    <div className="title">
                        <span>03</span>
                        <p>Space launch 101</p>
                    </div>

                    <div className="image">
                        <img src={data[index].images.landscape} alt={data[index].name} />
                    </div>

                    <div className="dots">
                        {data.map((e,i) => {
                            return (
                                <span key={i} onClick={() => moveSlide(i)}>{i + 1}</span>
                            )
                        })}
                    </div>

                    <div className="content">
                        <p className="content__subtitle">
                            The terminology...
                        </p>

                        <h1 className="content__name">{data[index].name}</h1>
                        <p className="content__description">{data[index].description}</p>
                    </div>
                </Main>
            </Wrapper>
        </Container>
    );
}