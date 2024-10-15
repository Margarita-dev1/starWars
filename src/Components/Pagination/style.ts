import styled from "styled-components";

export const NavBtn = styled.button<{active?:boolean, disabled?:boolean}>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${({active})=> active ? 'yellow' : 'transparent'};
    color: ${({active})=> active ? 'black' : 'yellow'};
    border: 1px solid yellow;
    opacity: ${({disabled})=> disabled ? '0.5' : '1'};
`;
export const Wrapper = styled.button`
    display: flex;
    background: transparent;
    gap: 15px;
  @media screen and (max-width: 580px) {
    flex-wrap: wrap;
    justify-content: center;
  };
`;