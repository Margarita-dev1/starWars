import styled from "styled-components";

export const Wrapper = styled.div`
  width: 350px;
  height: 430px;
  color: #fff;
  border: #fff 1px solid;
    border-radius: 8px;
  padding: 15px;
  display: flex;
    flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1750px) {
    width: 300px;
    height: 380px;
  };
`;
export const PersonName = styled.div`
  font-size: 27px;
    padding-bottom: 35px;
  width: inherit;
  height: 25px;
  border-bottom: 1px #fff solid;
  display: flex;
  justify-content: center;
`;
export const PersonImg = styled.img`
    padding:15px 20px;
  font-size: 20px;
  width: 280px;
    height: 280px;
    object-fit: contain;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1750px) {
    width: 220px;
    height: 220px;
  };
`;
export const PersonInfo = styled.div`
    font-size: 20px;
    width: 300px;
    height: 25px;
    display: flex;
    flex-direction: column;
    gap:10px;
    padding-left: 10px;
    padding-top: 20px;
`;
