import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
    min-height: 100vh;
  box-sizing: border-box;
  padding: 50px 150px;
  background: black;
    display: flex;
  align-items: center;
    flex-direction: column;
  @media screen and (max-width: 1750px) {
    padding: 50px 40px;
  };
  @media screen and (max-width: 1573px) {
    padding: 50px 20px;
  };
`;
export const Characters = styled.div`
    padding: 50px 0px;
    display: flex;
  justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
  @media screen and (max-width: 1750px) {
    gap: 90px;
  };
`;


