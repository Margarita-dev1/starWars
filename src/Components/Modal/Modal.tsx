import React, {useState} from "react";
import {Info, ModalHeader, ModalMain, Photo, PhotoBlock, SvgClose, Wrapper} from "./style";
import {createPortal} from "react-dom";
import {TPersonItem} from "../PersonsMain/PersonsMain";
import {ModalHomeWorld} from "../ModalHomeWorld/ModalHomeWorld";


type TModalProps = {
    obj: TPersonItem;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    findImage:string;
}

export const Modal:React.FC<TModalProps> = ({obj, setModalOpen,findImage}) => {

    const [planetModalOpen, setPlanetModalOpen] = useState(false)

    const{birth_year, eye_color, films, gender, hair_color, height, homeworld, mass, name, skin_color, species, starships, vehicles} = obj

    const handleModalClose = () => {
        setModalOpen(false)
    }

    return createPortal(
        <Wrapper>
            {planetModalOpen && <ModalHomeWorld setModalOpen={setModalOpen} setPlanetModalOpen={setPlanetModalOpen} planetUrl={homeworld}/>}
            <ModalHeader>
                <p>{name}</p>
                <SvgClose onClick={handleModalClose} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#e8eaed">
                    <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </SvgClose>
            </ModalHeader>
            <ModalMain>
                <PhotoBlock>
                    <Photo src={findImage}/>
                </PhotoBlock>
                <Info>
                    <ul>
                        <li>Birth Year : {birth_year}</li>
                        <li>Gender : {gender}</li>
                        <li>Eye color : {eye_color}</li>
                        <li>Hair color : {hair_color}</li>
                        <li>Height : {height}</li>
                        <li>Mass : {mass}</li>
                        <li>Skin Color : {skin_color}</li>
                        <li onClick={()=>setPlanetModalOpen(true)}><p>HomeWorld (click to see)</p></li>
                        </ul>
                </Info>
            </ModalMain>
        </Wrapper>, document.body
    )
}
