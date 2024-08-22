import styled, { keyframes } from 'styled-components';

type ErrorAlertProps = {
    small?: boolean;
    customradius?: string | number;
};

const slideDown = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledErrorAlert = styled.div<ErrorAlertProps>`
    position: fixed;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    ${({ customradius }) => {
        if (!customradius) return 'border-radius: 10px;';
        return `border-radius: ${typeof customradius === 'number' ? customradius + 'px' : customradius}`;
    }};
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // использование пропсов для кастомной стилизации
    max-width: ${({ small }) => (small ? 600 : 800)}px;
    width: 95%;
    box-shadow: var(--error-box-shadow);

    //можно использовать сразу здесь через пропс - доступен глобально
    animation: ${slideDown} 0.3s ease-out;

    & .content {
        display: flex;
        align-items: center;
    }

    & .icon {
        font-size: 36px;
        margin-right: 8px;
    }

    & .message {
        color: #721c24;
        font-size: 32px;
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
