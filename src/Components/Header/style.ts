import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 150px;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0 150px;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 750px) {
    padding: 0 50px;
  };
\` ;
`;

export const Logo = styled.img`
  width: 160px;
    cursor: pointer;
  @media screen and (max-width: 850px) {
    width: 100px;
  };
  
`;
export const Pages = styled.div`
  color: #fff;
  opacity: 0.7;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    font-size: 15px;
    flex-direction: column;
    gap: 15px;
  };
`;
export const Page = styled.div`
  &:hover{
    color: yellow;
  }
  @media screen and (max-width: 750px) {
    font-size: 20px;
  };
`;
