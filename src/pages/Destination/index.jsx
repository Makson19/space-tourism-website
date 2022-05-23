import { useState, useEffect } from 'react';

import { Container, Wrapper, Main } from './styles';
import Navbar from '../../components/Navbar';
import Spin from '../../components/Spin';
import path from '../../services/path';

export default function Destination() {
    const tab = 2;
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadJSON() {
            const response = await path.get();
            // console.log(response.data['destinations']);
            setData(response.data["destinations"]);
            setLoading(false);
        }

        loadJSON();

        return () => console.log('Page "Destination" Unmounted');
    }, [])


    function movieTab(n) {
        setIndex(n);
    }


    if(loading) {
        return <Spin />
    }

    return (
        <Container>
            <Wrapper>
                <Navbar active={tab} />
                <Main active={index}>
                    <div className="title">
                        <span>01</span>
                        <p>Pick your destination</p>
                    </div>

                    <div className="image">
                        <img src={data[index].images.png} alt={data[index].name} />
                    </div>

                    <div className="content">
                        <div className="content__tabs">
                            {data.map((e, i) => {
                                return (
                                    <span key={i} onClick={() => movieTab(i)}>{e.name}</span>
                                )
                            })}
                        </div>

                        <h1 className="content__title">{data[index].name}</h1>
                        <p className="content__description">
                            See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>

                        <div className="content__data">
                            <div className="content__data-distance">
                                <p>Avg. Distance</p>
                                <p>{data[index].distance}</p>
                            </div>

                            <div className="content__data-travel">
                                <p>Est. Travel Time</p>
                                <p>{data[index].travel}</p>
                            </div>
                        </div>
                    </div>
                </Main>
            </Wrapper>
        </Container>
    );
}