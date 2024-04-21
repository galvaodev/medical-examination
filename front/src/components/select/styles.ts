import styled from "styled-components";

export const Select = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
    height: 4.312rem;
    background: #ffffff;
    margin-top: 2.25rem;
    padding: 1.5rem;

    > div:first-child {
      width: 100%;
      background: transparent;
      border: 0;
      outline: none;

      > div {
        border: 0;

        input {
          outline: none;
        }
      }
    }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red100};
  font-weight: 700;
  margin-left: auto;
  font-size: 0.875rem;
  white-space: nowrap;

  @media screen and (max-width: ${({theme}) => theme.screens.md}){
    font-size: 0.75rem;
  }
`;

