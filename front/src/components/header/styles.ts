import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  svg {
    animation: rotateAnimation 5s linear infinite;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 13rem;
  }

  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }


`;
