import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2.4rem;
    padding-inline: 2.4rem;

    .logo {
        display: inline-block;
        width: 4rem;
        height: 4rem;

        img {
            width: 100%;
            height: 100%;
        }
    } 

    .menu__navigation {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        background-color: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(81.5485px);
        height: 100%;
        width: 25.4rem;
        padding-top: 11.8rem;
        padding-left: 3.2rem;
        transform: ${props => props.active ? 'scaleX(1)' : 'scaleX(0)'};
        transform-origin: right;
        transition: transform 0.3s linear;

        li {
            font-family: ${props => props.theme.fontSecondary};
            font-size: 1.6rem;
            line-height: 1.92rem;
            letter-spacing: 0.27rem;
            cursor: pointer;

            span {
                font-weight: 700;
                color: ${props => props.theme.white};
                margin-right: 1.2rem;
            }

            a {
                color: ${props => props.theme.white};
                text-transform: uppercase;
            }

            &:nth-child(${props => props.activeTab}) {
                border-right: 0.3rem solid ${props => props.theme.white};
            }
        }

    }

    .btn__menu {
        width: 2.4rem;
        height: 2.1rem;
        background-color: inherit;
        border: none;
        outline: none;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .open {
        position: absolute;
        top: 3.3rem;
        right: 2.4rem;
        z-index: 1;

        img {
            content: url("./assets/shared/icon-close.svg");
            object-fit: contain;
        }
    }


    @media (min-width: 768px) {
        padding: 0;
        height: 9.6rem;
        margin-left: 3.9rem;
        position: relative;

        .logo {
            width: 4.8rem;
            height: 4.8rem;
        }

        .menu__navigation {
            transform: scaleX(1);
            flex-direction: row;
            padding: 0;
            right: 0;
            z-index: 0;
            width: auto;
            padding-left: 4.8rem;
            padding-right: 4.6rem;
            
            li {
                display: flex;
                align-items: center;
                font-size: 1.4rem;
                line-height: 1.68rem;
                letter-spacing: 0.236rem;
                transition: border 0.3s ease-in-out;

                &:nth-child(${props => props.activeTab}) {
                    border-right: 0;
                    border-bottom: 3px solid #FFF;
                }

                &:hover {
                    border-bottom: 0.3rem solid rgba(255, 255, 255, 0.5);
                }

                span {
                    display: none;
                }
            }
        }

        .btn__menu {
            display: none;
        }
    }


    @media (min-width: 1440px) {
        &::before {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 11.2rem;
            z-index: 5;
            width: 47.3rem;
            height: 0.1rem;
            background-color: ${props => props.theme.white};
            opacity: 0.25;
        }

        margin-top: 4rem;
        margin-left: 5.5rem;

        .menu__navigation {
            padding-right: 16.5rem;
            padding-left: 12.3rem;
            width: 83rem;
            gap: 4.8rem;

            li {
                font-size: 1.6rem;
                line-height: 1.92rem;
                letter-spacing: 0.27rem;

                span {
                    display: inline-block;
                }
            }
        }
    }
`;

