import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.whiteTwo};
  border: 0;
  padding: 1rem 2rem;
  margin-top: 2rem;
  cursor: pointer;
  text-transform: uppercase;
`;
