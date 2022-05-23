import { useState, useEffect } from 'react';

import { Container, Wrapper, Main } from './styles';
import Navbar from '../../components/Navbar';
import Spin from '../../components/Spin';
import path from '../../services/path';

export default function Crew() {
    const tab = 3;
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadJSON() {
            const response = await path.get();
            // console.log(response.data['crew'])
            setData(response.data['crew']);
            setLoading(false);
        }

        loadJSON();

        return () => console.log('Page "Crew" Unmounted!')
    }, [])


    const movieSlide = (n) => {
        setIndex(n);
    }

    
    if(loading) {
        return <Spin />
    }

    return(
        <Container>
            <Wrapper>
                <Navbar active={tab} />
                <Main slide={index}>
                    <div className="title">
                        <span>02</span>
                        <p>Meet your crew</p>
                    </div>

                    <div className="image">
                        <img src={data[index].images.png} alt={data[index].name} />
                    </div>

                    <div className="dots">
                        {data.map((e,i) => {
                            return (
                                <span key={i} onClick={() => movieSlide(i)}></span>
                            )
                        })}
                    </div>

                    <div className="content">
                        <p className="content__role">{data[index].role}</p>
                        <h1 className="content__name">{data[index].name}</h1>
                        <p className="content__bio">{data[index].bio}</p>
                    </div>
                </Main>
            </Wrapper>
        </Container>
    );
}