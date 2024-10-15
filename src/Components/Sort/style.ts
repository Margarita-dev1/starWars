import styled from "styled-components";

export const Wrapper = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 12px;
  background: rgba(234, 239, 44, 0.9);
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 15px;
  position: relative;
`;
export const SortText = styled.div`
  color: black;
  font-size: 20px;
`;
export const SortList = styled.div<{disabled?:boolean}>`
  color: black;
  font-size: 20px;
  background: rgba(234, 239, 44, 0.9);
  width: 200px;
  border-radius: 5px;
  position: absolute;
  top:255px;
  display: ${({disabled}) => disabled ? 'block' : 'none'}
`;
export const SortList_Item = styled.div`
  color: black;
  font-size: 20px;
  padding: 4px 7px 4px 7px;
  cursor: pointer;
  border-top: black 1px solid;
  &:hover{
    color: #fff;
  }
`;