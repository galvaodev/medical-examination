import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;
`;

export const Form = styled.form`
  width: 100%;

  button {
    margin-left: auto;
    width: auto;
    display: block;
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.whiteTwo};

    @media screen and (max-width: ${({theme}) => theme.screens.sm}){
      width: 100%;
    }
  }
`;

export const Information = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  > button {
    margin-top: 0;
  }
`

