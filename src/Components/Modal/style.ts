import styled from "styled-components";

export const Wrapper = styled.div`
    width: 600px;
    height: 600px;
    font-size: 30px;
    border: 10px solid #fff;
    border-radius: 20px;
    padding: 15px;
    background: black ;
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  @media screen and (max-width: 655px) {
    width: 400px;
    height: 400px;
    font-size: 20px;
  };
  @media screen and (max-height: 630px) {
    width: 400px;
    height: 400px;
    font-size: 20px;
  };
  @media screen and (max-width: 391px) {
    width: 300px;
    height: 300px;
  };
`;
export const ModalHeader = styled.div`
    width: calc(600px - 15);
    height: 40px;
    border-bottom: 3px solid #fff;
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
    position: relative;
`;
export const SvgClose = styled.svg`
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 5px;
    &:hover{
        fill: yellow;
    }
`;
export const ModalMain = styled.div`
   display: flex;
    height: 530px;
`;
export const PhotoBlock = styled.div`
    width: 300px;
    height: 530px;
    display: flex;
    align-items: center;
  @media screen and (max-width: 655px) {
    height: 300px;
  };
  @media screen and (max-height: 630px) {
    height: 300px;
  };
  @media screen and (max-width: 391px) {
    height: 200px;
  };
`;
export const Photo = styled.img`
   width: 250px;
    height: 250px;
    object-fit: contain;
  padding-right: 5px;
  @media screen and (max-width: 655px){
    width: 180px;
    height: 180px;
  };
  @media screen and (max-height: 630px) {
    width: 180px;
    height: 180px;
  };
  @media screen and (max-width: 391px) {
    width: 130px;
    height: 130px;
  };
`;
export const Info = styled.div`
    scrollbar-width: thin;          
    scrollbar-color: yellow transparent;
    width: 300px;
    height: 500px;
    overflow-wrap: break-word;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-top: 10px;
    ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
        li p{
            text-decoration: underline;
            cursor: pointer;
        }
    }
  @media screen and (max-width: 655px){
    height: 300px;
  };
  @media screen and (max-height: 630px) {
    height: 300px;
  };
  @media screen and (max-width: 391px) {
    height: 200px;
    font-size: 10px;
  };
`;