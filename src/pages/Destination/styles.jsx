import styled, {keyframes} from 'styled-components';
import {bounceInLeft, bounceInRight, bounceInUp} from 'react-animations';

const backMobile = './assets/destination/background-destination-mobile.jpg';
const backTablet = './assets/destination/background-destination-tablet.jpg';
const backDesktop = './assets/destination/background-destination-desktop.jpg';

// Create animations
const bounceLeft = keyframes`${bounceInLeft}`;
const bounceRight = keyframes`${bounceInRight}`;
const bounceTop = keyframes`${bounceInUp}`;

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
`;


export const Main = styled.main`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: auto;
    grid-template-areas: "title" "image" "content";


    .title {
        grid-area: title;
        display: flex;
        gap: 1.8rem;
        justify-content: center;
        padding-top: 2.4rem;
        font-family: ${props => props.theme.fontSecondary};
        font-size: 1.6rem;
        line-height: 1.9rem;
        letter-spacing: 0.27rem;
        text-transform: uppercase;
        color: ${props => props.theme.white};
        animation: ${bounceLeft} 0.6s;

        span {
            font-weight: 700;
            opacity: 0.25;
        }
    }

    .image {
        grid-area: image;
        padding-top: 3.2rem;
        padding-bottom: 2.6rem;
        text-align: center;
        animation: ${bounceLeft} 0.8s;

        img {
            width: 17rem;
            height: 17rem;
        }
    }

    .content {
        grid-area: content;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__tabs {
            display: flex;
            justify-content: center;
            gap: 2.7rem;
            font-family: ${props => props.theme.fontSecondary};
            font-size: 1.4rem;
            line-height: 1.7rem;
            letter-spacing: 0.23625rem;
            color: ${props => props.theme.white};
            text-transform: uppercase;
            margin-bottom: 2rem;
            animation: ${bounceRight} 0.8s;

            span {
                padding-bottom: 0.8rem;
                cursor: pointer;
                transition: all 0.3s ease-in-out, border-bottom 0.3s ease-in-out;

                &:nth-child(${props => props.active + 1}) {
                    border-bottom: 3px solid ${props => props.theme.white};
                }

                &:hover {
                    border-bottom: 3px solid ${props => props.theme.white}; 
                    opacity: 0.5;
                }
            }
        }

        &__title {
            font-family: ${props => props.theme.fontPrimary};
            font-weight: 400;
            font-size: 5.6rem;
            line-height: 6.4rem;
            color: ${props => props.theme.white};
            text-transform: uppercase;
            // padding-top: 2rem;
            padding-bottom: 0.1rem;
            animation: ${bounceTop} 1s;
        }

        &__description {
            font-family: ${props => props.theme.fontText};
            font-size: 1.5rem;
            line-height: 2.5rem;
            color: ${props => props.theme.grayish};
            margin-inline: 2.4rem;
            max-width: 57.3rem;
            padding-bottom: 3.2rem;
            border-bottom: 0.1rem solid #383B4B;
            animation: ${bounceTop} 1s;
        }

        &__data {
            display: flex;
            flex-direction: column;
            gap: 3.2rem;
            padding-top: 3.2rem;
            animation: ${bounceTop} 1s;

            &-distance, 
            &-travel {
                p:first-child {
                    font-family: ${props => props.theme.fontSecondary};
                    font-size: 1.4rem;
                    line-height: 1.7rem;
                    text-align: center;
                    letter-spacing: 0.23625rem;
                    color: ${props => props.theme.grayish};
                    text-transform: uppercase;
                    margin-bottom: 1.2rem;
                }

                p:last-child {
                    font-family: ${props => props.theme.fontPrimary};
                    font-size: 2.8rem;
                    line-height: 3.2rem;
                    color: ${props => props.theme.white};
                    text-transform: uppercase;
                }
            }
        }
    }


    @media (min-width: 768px) {
        .title {
            justify-content: flex-start;
            padding-left: 3.85rem;
            padding-top: 4rem;
            font-size: 2rem;
            line-height: 2.4rem;
            letter-spacing: 0.3375rem;
        }

        .image {
            padding-top: 6rem;
            padding-bottom: 5.3rem;

            img {
                width: 30rem;
                height: 30rem;
            }
        }

        .content {
            &__tabs {
                font-size: 1.6rem;
                line-height: 1.9rem;
                letter-spacing: 0.27rem;
                gap: 3.6rem;
                margin-bottom: 3.2rem;

                span {
                    padding-bottom: 1.2rem;
                }
            }

            &__title {
                font-size: 8rem;
                line-height: 9.2rem;
                padding-bottom: 0.8rem;
            }

            &__description {
                font-size: 1.6rem;
                line-height: 2.8rem;
                padding-bottom: 4.9rem;
            }

            &__data {
                flex-direction: row;
                padding-top: 2.9rem;
                gap: 6.5rem;
            }
        }
    }


    @media (min-width: 1440px) {
        grid-template-rows: auto auto;
        grid-template-columns: auto auto;
        grid-template-areas: "title title"
                             "image content";

        .title {
            font-size: 2.8rem;
            line-height: 3.4rem;
            letter-spacing: 0.4725rem;
            padding-left: 16.65rem;
            padding-top: 7.6rem;
        }

        .image {
            padding: 9.7rem 15rem 0 23rem;

            img {
                width: 44.5rem;
                height: 44.5rem;
            }
        }

        .content {
            padding-top: 6.4rem;
            padding-right: 16.3rem;
            align-items: flex-start;
            text-align: left;

            &__tabs {
                margin-bottom: 3.7rem;
            }

            &__title {
                font-size: 10rem;
                line-height: 11.5rem;
                padding-bottom: 1.4rem;
            }

            &__description {
                max-width: 44.4rem;
                margin-inline: 0;
                font-size: 1.8rem;
                line-height: 3.2rem;
                padding-bottom: 5.4rem;
            }

            &__data {
                gap: 8.5rem;

                &-distance,
                &-travel {
                    p:first-child {
                        text-align: left;
                    }
                }
            }
        }
    }
`;