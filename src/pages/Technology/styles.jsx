import styled, {keyframes} from 'styled-components';
import {bounceInLeft, bounceInRight, bounceInUp, rotateIn} from 'react-animations';

const backMobile = './assets/technology/background-technology-mobile.jpg';
const backTablet = './assets/technology/background-technology-tablet.jpg';
const backDesktop = './assets/technology/background-technology-desktop.jpg';

// Create animations
const bounceLeft = keyframes`${bounceInLeft}`;
const bounceRight = keyframes`${bounceInRight}`;
const bounceTop = keyframes`${bounceInUp}`;
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
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(3, auto);
    grid-template-areas: "title title title"
                         "img img img"
                         "dots dots dots"
                         "content content content";

    .title {
        grid-area: title;
        font-family: ${props => props.theme.fontSecondary};
        font-size: 1.6rem;
        line-height: 1.9rem;
        letter-spacing: 0.27rem;
        text-transform: uppercase;
        color: ${props => props.theme.white};
        display: flex;
        justify-content: center;
        gap: 1.6rem;
        padding-top: 2.4rem;
        padding-bottom: 3.2rem;
        animation: ${bounceLeft} 0.6s;

        span {
            opacity: 0.25;
            font-weight: 700;
        }
    }

    .image {
        grid-area: img;
        max-width: 76.8rem;
        text-align: center;
        margin-inline: auto;
        animation: ${bounceRight} 0.8s;

        img {
            width: 100%;
            min-height: 17rem;
        }
    }

    .dots {
        grid-area: dots;
        display: flex;
        justify-content: center;
        gap: 1.6rem;
        margin-top: 3.4rem;
        margin-bottom: 2.6rem;

        span {
            cursor: pointer;
            width: 4rem;
            height: 4rem;
            background-color: inherit;
            color: ${props => props.theme.white};
            border: 0.1rem solid #4C4D55;
            border-radius: 50%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-family: ${props => props.theme.fontPrimary};
            font-size: 1.6rem;
            line-height: 1.8rem;
            letter-spacing: 0.1rem;
            transition: border-color 0.3s ease-in-out;
            animation: ${rotate} 1.2s;

            &:nth-child(${props => props.slide + 1}) {
                background-color: ${props => props.theme.white};
                color: inherit;
            }

            &:hover {
                border-color: ${props => props.theme.white};
            }
        }
    }

    .content {
        grid-area: content;
        text-align: center;
        padding-inline: 2.4rem;
        margin-inline: auto;
        max-width: 45.8rem;
        animation: ${bounceTop} 1s;

        &__subtitle {
            font-family: ${props => props.theme.fontSecondary};
            font-size: 1.4rem;
            line-height: 1.7rem;          
            letter-spacing: 0.23625rem;
            text-transform: uppercase;
            color: ${props => props.theme.grayish};
            margin-bottom: 0.9rem;
        }

        &__name {
            font-family: ${props => props.theme.fontPrimary};
            font-size: 2.4rem;
            font-weight: 400;
            line-height: 2.8rem;
            text-transform: uppercase;
            color: ${props => props.theme.white};
            margin-bottom: 1.6rem;
        }

        &__description {
            font-family: ${props => props.theme.fontText};
            font-size: 1.5rem;
            line-height: 2.5rem;
            color: ${props => props.theme.grayish};
        }
    }


    @media (min-width: 768px) {

        .title {
            font-size: 2rem;
            line-height: 2.4rem;
            letter-spacing: 0.3375rem;
            justify-content: flex-start;
            padding: 4rem 0 6rem 3.85rem; 
        }

        .dots {
            margin-top: 5.6rem;
            margin-bottom: 4.4rem;

            span {
                width: 6rem;
                height: 6rem;
                font-size: 2.4rem;
                line-height: 2.8rem;
                letter-spacing: 0.15rem;
            }
        }

        .content {
            padding-inline: 0;

            &__subtitle {
                font-size: 1.6rem;
                line-height: 1.9rem;
                letter-spacing: 0.27rem;
                margin-bottom: 1.6rem;
            }

            &__name {
                font-size: 4rem;
                line-height: 4.6rem;
            }

            &__description {
                font-size: 1.6rem;
                line-height: 2.8rem;
            }
        }
    }


    @media (min-width: 1440px) {
        grid-template-areas: "title title title"
                             "dots content img"
                             "dots content img"
                             "dots content img";

        .title {
            padding: 7.6rem 0 2.6rem 16.65rem;
            font-size: 2.8rem;
            line-height: 3.4rem;
            letter-spacing: 0.4725rem;
        }

        .image {
            margin-inline: 0;
            img {
                content: url(${props => props.img});
                object-position: 5rem;
            }
        }

        .dots {
            flex-direction: column;
            justify-content: flex-start;
            gap: 3.2rem;
            align-items: center;
            margin-block: 0;
            margin-left: 16.5rem;
            width: 8rem;
            padding-top: 13.7rem;

            span {
                width: 8rem;
                height: 8rem;
                font-size: 3.2rem;
                line-height: 3.7rem;
                letter-spacing: 0.2rem;
            }
        }

        .content {
            max-width: 47rem;
            text-align: left;
            margin-right: 5rem;
            padding-top: 13.7rem;
    

            &__subtitle {
                margin-bottom: 1.1rem;
            }

            &__name {
                font-size: 5.6rem;
                line-height: 6.4rem;
                margin-bottom: 1.7rem;
            }

            &__description {
                font-size: 1.8rem;
                line-height: 3.2rem;
            }
        }
    }
`;