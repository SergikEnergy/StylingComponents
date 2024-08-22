import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledErrorAlert = styled.div`
    position: fixed;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 800px;
    width: 95%;
    box-shadow: var(--error-box-shadow);

    //можно использовать сразу здесь через пропс - доступен глобально
    animation: ${slideDown} 0.3s ease-out;

    & .content {
        display: flex;
        align-items: center;
    }

    & .icon {
        font-size: 20px;
        margin-right: 10px;
    }

    & .message {
        color: #721c24;
        font-size: 20px;
        margin: 0;
    }

    & .close {
        background: none;
        border: none;
        color: #721c24;
        font-size: 32px;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;

        &:hover {
            color: #474747;
        }
    }
`;
