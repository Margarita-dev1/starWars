import {ButtonChoose, Title, Subtitle, SoldierImg, Wrapper} from "./style"
import soldierImg from './soldier.png'
import {useNavigate} from "react-router-dom";
import {Header} from "../Header/Header";
import React from "react";

export const Main = () => {

    const navigate = useNavigate()
    const handlePersonsClick = () =>{
        navigate('/persons')
    }


    return (
        <>
        <Header/>
        <Wrapper>
            <SoldierImg src={soldierImg}/>
            <Title>Find all your favorite character character</Title>
            <Subtitle>You can find out all the information about your favorite characters</Subtitle>
            <ButtonChoose onClick={handlePersonsClick} >Choose my person</ButtonChoose>
        </Wrapper>
        </>
    )
}