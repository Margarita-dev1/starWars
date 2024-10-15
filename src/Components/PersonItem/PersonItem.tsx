import {PersonImg, PersonName, Wrapper,PersonInfo} from "../PersonItem/style";
import React, {useState} from "react";
import {TPersonItem} from "../PersonsMain/PersonsMain";
import {Modal} from "../Modal/Modal";

export type TProps = {
    obj: TPersonItem,
    images:{
        name:string,
        image:string,
    }[]
}

export const PersonItem:React.FC <TProps> = ({obj,images}) => {

    const {name, height, mass} = obj || {}
    const[modalOpen, setModalOpen] = useState(false);

    const findImage = images.find(el => el.name===name)?.image ?? ''

    return(
        <>
            {modalOpen && <Modal findImage={findImage} setModalOpen={setModalOpen} obj={obj}/>}
            <Wrapper onClick={()=>setModalOpen(true)}>
            <PersonName>{name}</PersonName>
            <PersonImg src={findImage}/>
            <PersonInfo>
                <p>Height : {height}</p>
                <p>Mass : {mass}</p>
            </PersonInfo>
        </Wrapper>
        </>
    )
}