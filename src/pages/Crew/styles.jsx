import styled, {keyframes} from 'styled-components';
import {bounceInLeft, bounceInRight} from 'react-animations';

const backMobile = './assets/crew/background-crew-mobile.jpg';
const backTablet = './assets/crew/background-crew-tablet.jpg';
const backDesktop = './assets/crew/background-crew-desktop.jpg';

// Create animations
const bounceLeft = keyframes`${bounceInLeft}`;
const bounceRight = keyframes`${bounceInRight}`;

export const Container = styled.div`
    min-height: 100vh;
    background: url(${backMobile});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    

    @media (min-width: 376px) {
        background-image: url(${backTablet});
    }

    @media (min-width: 769px) {
        background-image: url(${backDesktop});
    }

    @media (min-width: 1440px) {
        overflow: hidden;
    }
`;


export const Wrapper = styled.div`
    position: relative;
    max-width: 144rem;
    min-height: 100vh;
    margin-inline: auto;
    padding-bottom: 2rem;

    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`;


export const Main = styled.main`
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(2, auto);
    grid-template-areas: "title title" 
                         "img img" 
                         "dots dots" 
                         "content content";

    .title {
        grid-area: title;
        font-family: ${props => props.theme.fontSecondary};
        font-size: 1.6rem;
        line-height: 1.9rem;
        letter-spacing: 0.27rem;
        text-transform: uppercase;
        color: ${props => props.theme.white};
        display: flex;
        gap: 1.6rem;
        justify-content: center;
        padding-top: 2.4rem;
        padding-bottom: 3.2rem;
        animation: ${bounceLeft} 0.6s;

        span {
            font-weight: 700;
            opacity: 0.25;
        }
    }

    .image {
        grid-area: img;
        text-align: center;
        margin-inline: 2.4rem;
        border-bottom: 0.1rem solid #383B4B;
        animation: ${bounceRight} 1.2s;

        img {
            height: 22.2rem;
        }
    }

    .dots {
        grid-area: dots;
        display: flex;
        justify-content: center;
        gap: 1.6rem;
        margin-block: 3.2rem;
        animation: ${bounceLeft} 1s;

        span {
            width: 1rem;
            height: 1rem;
            background-color: ${props => props.theme.white};
            opacity: 0.17;
            border-radius: 50%;
            cursor: pointer;
            transition: opacity 0.3s ease-in-out;

            &:nth-child(${props => props.slide + 1}) {
                opacity: 1;
            }

            &:hover {
                opacity: 0.5;
            }
        }
    }

    .content {
        grid-area: content;
        text-align: center;
        margin-inline: 2.4rem;
        animation: ${bounceLeft} 0.8s;

        &__role {
            font-family: ${props => props.theme.fontPrimary};
            font-size: 1.6rem;
            line-height: 1.8rem;
            color: ${props => props.theme.white};
            opacity: 0.5;
            text-transform: uppercase;
            margin-bottom: 0.8rem;
        }

        &__name {
            font-family: ${props => props.theme.fontPrimary};
            font-weight: 400;
            font-size: 2.4rem;
            line-height: 2.8rem;
            color: ${props => props.theme.white};
            text-transform: uppercase;
            margin-bottom: 1.6rem;
        }

        &__bio {
            font-family: ${props => props.theme.fontText};
            font-size: 1.5rem;
            line-height: 2.5rem;
            color: ${props => props.theme.grayish};
        }
    }


    @media (min-width: 768px) {
        grid-template-areas: "title title"
                             "content content"
                             "dots dots"
                             "img img";

        .title {
            font-size: 2rem;
            line-height: 2.4rem;
            letter-spacing: 0.3375rem;
            justify-content: flex-start;
            padding: 4rem 0 6rem 3.85rem;
        }

        .image {
            border-bottom: 0;

            img {
                height: 53.2rem;
                object-position: ${props => 
                    props.slide === 0 ? "0 3rem"
                    : "0 0"
                };
            }
        }

        .dots {
            margin-block: 4rem;
        }

        .content {
            max-width: ${props => 
                props.slide === 0 ? "45.8rem"
                : props.slide === 1 ? "52rem"
                : props.slide === 2 ? "59.2rem"
                : "53.6rem"
            };
            margin-inline: auto;
            
            &__role {
                font-size: 2.4rem;
                line-height: 2.8rem;
            }

            &__name {
                font-size: 4rem;
                line-height: 4.6rem;
            }

            &__bio {
                font-size: 1.6rem;
                line-height: 2.8rem;
            }
        }
    }


    @media (min-width: 1440px){
        grid-template-areas: "title img"
                             "content img"
                             "content img"
                             "dots img";

        .title {
            font-size: 2.8rem;
            line-height: 3.4rem;
            letter-spacing: 0.4725rem;
            padding: 7.6rem 0 15.4rem 16.65rem;
        }

        .image {
            margin-inline: 0;
            padding-top: ${props => 
                props.slide === 0 ? "6.2rem"
                : props.slide === 1 ? "11rem"
                : props.slide === 2 ? "11rem"
                : "15.8rem"
            };

            img {
                height: ${props => 
                    props.slide === 0 ? "71.2rem"
                    : props.slide === 1 ? "65.4rem"
                    : props.slide === 2 ? "68.1rem"
                    : "60.7rem"
                };

                object-position: ${props => 
                    props.slide === 0 ? "0 1rem"
                    : props.slide === 2 ? "0 2.7rem"
                    : "0 0"
                };
            }
        }

        .dots {
            height: 3.9rem;
            gap: 2.4rem;
            justify-content: flex-start;
            margin-left: 16.7rem;
            margin-bottom: 9.4rem;
            margin-top: ${props => 
                props.slide === 2 ? "8.8rem"
                : "12rem"
            };

            span {
                width: 1.5rem;
                height: 1.5rem;
            }
        }

        .content {
            max-width: 61.4rem;
            text-align: left;
            margin-left: 16.55rem;
            margin-rigth: 0;

            &__role {
                font-size: 3.2rem;
                line-height: 3.7rem;
                margin-bottom: 1.5rem;
            }

            &__name {
                font-size: 5.6rem;
                line-height: 6.4rem;
                margin-bottom: 2.7rem;
            }

            &__bio {
                max-width: 44.4rem;
                font-size: 1.8rem;
                line-height: 3.2rem;
            }
        }
    }
`;