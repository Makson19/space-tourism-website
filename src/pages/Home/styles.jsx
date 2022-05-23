import styled, {keyframes} from 'styled-components';
import {bounceInLeft, rotateIn} from 'react-animations';

const backMobile = './assets/home/background-home-mobile.jpg';
const backTablet = './assets/home/background-home-tablet.jpg';
const backDesktop = './assets/home/background-home-desktop.jpg';

// Create animations
const bounceLeft = keyframes`${bounceInLeft}`;
const rotate = keyframes`${rotateIn}`;

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
    display: flex;
    flex-direction: column;
    align-items: center;

    .text {
        text-align: center;
        margin-inline: 2.4rem;  
        max-width: 45rem;  
        animation: ${bounceLeft} 0.6s;  

        &__subtitle {
            font-family: ${props => props.theme.fontSecondary};
            font-size: 1.6rem;
            line-height: 1.9rem;
            letter-spacing: 0.27rem;
            color: ${props => props.theme.grayish};
            text-transform: uppercase;
            padding-top: 4.8rem; 
            margin-bottom: 1.6rem;
        }

        &__title {
            font-family: ${props => props.theme.fontPrimary};
            font-weight: 400;
            font-size: 8rem;
            line-height: 10rem;
            color: ${props => props.theme.white};
            text-transform: uppercase;
            margin-bottom: 1.6rem;
        }

        &__content {
            font-family: ${props => props.theme.fontText};
            font-size: 1.5rem;
            line-height: 2.5rem;
            color: ${props => props.theme.grayish};
        }
    }

    .button {
        display: flex;
        justify-content: center;
        padding-top: 8.1rem;

        a {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 15rem;
            height: 15rem;
            border-radius: 50%;
            background-color: ${props => props.theme.white};
            color: ${props => props.theme.darkBlue};
            font-family: ${props => props.theme.fontPrimary};
            font-size: 2rem;
            line-height: 2.3rem;
            text-transform: uppercase;
            letter-spacing: 0.125rem;
            animation: ${rotate} 0.8s;
        }
    }

    @media (min-width: 768px) {
        .text {
            &__subtitle {
                font-size: 2rem;
                line-height: 2.4rem;
                letter-spacing: 0.3375rem;
                padding-top: 10.6rem;
                margin-bottom: 2.4rem;
            }

            &__title {
                font-size: 15rem;
                line-height: 15rem;
                margin-bottom: 2.4rem;
            }

            &__content {
                font-size: 1.6rem;
                line-height: 2.8rem;
            }
        }

        .button {
            padding-top: 15.6rem;

            a {
                width: 24.2rem;
                height: 24.2rem;
                font-size: 3.2rem;
                line-height: 3.7rem;
                letter-spacing: 0.2rem;
            }
        }
    }


    @media (min-width: 1440px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-end;
        padding-top: 25.1rem;

        .text {
            text-align: left;

            &__subtitle {
                padding-top: 0;
                font-size: 2.8rem;
                line-height: 3.4rem;
                letter-spacing: 0.4725rem;
            }

            &__title {
                line-height: 17.2rem;
            }

            &__content {
                font-size: 1.8rem;
                line-height: 3.2rem;
            }
        }

        .button {
            padding-top: 0;

            a {
                width: 27.4rem;
                height: 27.4rem;
                transition: box-shadow 0.3s ease-in-out;

                &:hover {
                    box-shadow: 0 0 0 60px hsla(0, 0%, 100%, 0.23);
                }
            }
        }
    }

`;