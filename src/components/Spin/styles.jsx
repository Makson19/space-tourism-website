import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
    0% {
        transform: scale(1) rotate(360deg);
    }

    50% {
        transform: scale(0.8) rotate(-360deg);
    }

    100% {
        transform: scale(1) rotate(360deg);
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #0B0D19;

    .container {
        width: 60px;
        height: 60px;

        .loader {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            border: 10px solid #162534;
            border-top-color: #4bc8eb;
            border-bottom-color: #f13a8f;
            border-radius: 50%;
            animation: ${rotate} 5s linear infinite;
        }
    
        .loader-inner {
            border-top-color: #36f372;
            border-bottom-color: #fff;
            animation-duration: 2.5s;
        }
    }


`;