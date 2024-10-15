import React from "react";
import {NavBtn, Wrapper} from "./style";

type TPaginationProps = {
    fetchCharacters: (page:number) => Promise<void>;
    currentPage:number;
    setCurrentPage:  React.Dispatch<React.SetStateAction<number>>;
    pages:number;
}

export const Pagination:React.FC <TPaginationProps> = ({fetchCharacters,currentPage,setCurrentPage,pages}) => {

    const handleOnPageClick = (page:number) => {
        setCurrentPage(page)
        fetchCharacters(page)
    }
    const handlePrevClick = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
            fetchCharacters(currentPage-1)
        }
    }
    const handleNextClick = () =>{
        if(currentPage < pages){
            setCurrentPage(currentPage + 1)
            fetchCharacters(currentPage + 1)
        }
    }

    return (
        <Wrapper>
            <NavBtn disabled={currentPage===1} onClick={handlePrevClick}> prev </NavBtn>
            {[...Array(pages)].map((_,idx)=>(
                <NavBtn active={currentPage===idx+1} onClick={() => handleOnPageClick(idx+1)} key={idx}>{idx+1}</NavBtn>
            )   )}
            <NavBtn disabled={currentPage===pages} onClick={handleNextClick}> next </NavBtn>
        </Wrapper>

    );
}