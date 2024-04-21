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

export const Information = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  > button {
    margin-top: 0;
  }
`

export const Body = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  border-radius: 20px 20px 0px 0px;
  margin-top: 1rem;
  background: ${({ theme }) => theme.colors.whiteTwo};
`;

export const Card = styled.div`
  color: ${({ theme }) => theme.colors.gray100};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0px;
  border-bottom: 1px solid #f2f2f2;
`;

export const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  flex-wrap: wrap;
`;


export const Thumbnail = styled.div`
  width: 150px;

  img {
    padding-right: 10px;
    width: 100%;
  }
`;
export const Name = styled.div`
  flex: 1;
`;
export const Exam = styled.div`
  flex: 1;
`;
export const Date = styled.div`
  flex: 1;
`;
export const Description = styled.div`
  word-break: break-all;
  width: 33%;
`;
