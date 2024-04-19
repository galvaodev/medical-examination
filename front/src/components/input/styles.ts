import styled from 'styled-components';

type SearchButtonProps = {
  isLoading: boolean;
};


export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  height: 4.312rem;
  background: #ffffff;
  margin-top: 2.25rem;
`

export const WrapperInput = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    color: ${({ theme }) => theme.colors.primary}
  }

  @media screen and (max-width: ${({theme}) => theme.screens.sm}){
    margin-left: 1rem;
  }
`

export const InputStyled = styled.input.attrs(({ type }) => ({
  type: type || 'text',
}))`
  background: transparent;
  font-size: 1.125rem;
  width: 100%;
  padding-right: 1.5rem;
  outline: none;
  color: ${({ theme }) => theme.colors.background};

  &::placeholder {
    color: ${({ theme }) => theme.colors.background};
  }

  @media screen and (max-width: ${({theme}) =>theme.screens.md}){
    font-size: 0.875rem;
  }

  @media screen and (max-width: ${({theme}) =>theme.screens.sm}){
    font-size: 0.75rem;
    margin-left: 0.5rem;
  }
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red100};
  font-weight: 700;
  margin-left: auto;
  font-size: 0.875rem;
  margin-right: 1.5rem;
  white-space: nowrap;

  @media screen and (max-width: ${({theme}) => theme.screens.md}){
    font-size: 0.75rem;
  }
`

export const SearchButton = styled.button<SearchButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.125rem;
  width: 6.625rem;
  border: 0;
  outline: none;
  cursor: ${({ isLoading }) => isLoading ? 'not-allowed': 'pointer'};;
  background: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.buttonText};
  border-radius: 10px;
  transition: filter 0.2s ease-in;
  margin-right: 0.625rem;

  &:hover {
    filter: brightness(0.9)
  }

  @media screen and (max-width: ${({theme}) => theme.screens.md}){
    font-size: 0.75rem;
  }

  @media screen and (max-width: ${({theme}) => theme.screens.sm}){
    width: 5.25rem;
    height: 2.875rem;
  }
`
