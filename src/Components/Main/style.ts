import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 50px 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  background: black;
  @media screen and (max-width: 750px) {
    padding: 0 50px;
  };
  @media screen and (max-width: 1030px) {
    gap: 30px;
  };
  @media screen and (max-height: 639px) {
    height: 100%;
  };
`;
export const SoldierImg = styled.img`
  color: #fff;
  opacity: 0.9;
  font-size: 70px;
  width: 160px;
  @media screen and (max-width: 380px) {
    width: 80px;
    padding-top: 10px;
  };
  @media screen and (max-width: 415px) {
    width: 110px;
    padding-top: 25px;
  };
`;
export const Title = styled.div`
  color: #fff;
  opacity: 0.9;
  font-size: 70px;
  text-align: center;
  @media screen and (max-width: 1580px) {
    font-size: 40px;
  }
  @media screen and (max-width: 380px) {
    font-size: 25px;
  };
  @media screen and (max-height: 845px) and (max-width: 380px){
    font-size: 35px;
  };
`;
export const Subtitle = styled.div`
  color: #fff;
  opacity: 0.9;
  font-size: 50px;
    text-align: center;
    @media screen and (max-width: 1580px) {
      font-size: 30px;
    };
  @media screen and (max-width: 380px) {
    font-size: 15px;
  };
  @media screen and (max-height: 845px) {
    font-size: 25px;
  };
`;
export const ButtonChoose = styled.button`
  width: 200px;
  cursor: pointer;
  height: 65px;
  border-radius: 10px;
  padding: 5px;
  background: yellow;
  color: black;
  font-size: 20px;
  &:hover {
    background: #414102;
    color: #fff;
    transform: translateY(2px);
    box-shadow: 1px 1px 5px white;
  }
  @media screen and (max-width: 380px) {
    height: 45px;
    font-size: 15px;
  };
  @media screen and (max-height: 639px) {
    margin-bottom: 10px;
  };
`;