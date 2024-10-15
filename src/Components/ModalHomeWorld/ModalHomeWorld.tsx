import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import planetPicture from './planetPicture.jpg'
import {SvgBack, Wrapper} from "./style";
import axios from "axios";
import {Info, ModalHeader, ModalMain, Photo, PhotoBlock, SvgClose} from "./style";

type TModalPlanet = {
    planetUrl:string,
    setPlanetModalOpen:  React.Dispatch<React.SetStateAction<boolean>>,
    setModalOpen:React.Dispatch<React.SetStateAction<boolean>>,
}

export const ModalHomeWorld:React.FC<TModalPlanet> = ({planetUrl, setPlanetModalOpen, setModalOpen}) =>{

    const [isLoading, setIsLoading] = useState(false)
    type TPlanetInfo = {
        climate:string,
        created:string,
        diameter:string,
        edited:string,
        films:string[],
        gravity:string,
        name:string,
        orbital_period:string,
        population:string,
        residents:string[],
        rotation_period:string,
        surface_water:string,
        terrain:string,
        url:string,
    } | undefined
    const [planetInfo, setPlanetInfo]=useState<TPlanetInfo>(Object)

    const fetchHomeWorld = async(planet:string) =>{
        try {
            setIsLoading(true)
            const response = await axios.get(`${planet}`)
            setPlanetInfo(response.data)
            setIsLoading(false)
        } catch (err) {
            console.error(err.toJSON())
        }
    }
    useEffect(() => {
        fetchHomeWorld(planetUrl)
    }, []);

        console.log(planetInfo)


    const handlePlanetModalClose = () => {
        setPlanetModalOpen(false)
        setModalOpen(false)
    }
    const handleBackClick = () => {
        setPlanetModalOpen(false)
    }



    return createPortal(
        <Wrapper>
            {isLoading ? <div style={{color: 'white'}}>Loading...</div> : (
                <>
                    <ModalHeader>
                        <p>{planetInfo?.name} </p>

                        <SvgBack onClick={handleBackClick} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                             fill="#e8eaed">
                            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
                        </SvgBack>
                        <SvgClose onClick={handlePlanetModalClose} xmlns="http://www.w3.org/2000/svg" height="24px"
                                  viewBox="0 -960 960 960" width="24px"
                                  fill="#e8eaed">
                            <path
                                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </SvgClose>
                    </ModalHeader>
                    <ModalMain>
                        <PhotoBlock>
                            <Photo src={planetPicture}/>
                        </PhotoBlock>
                        <Info>
                        <ul>
                            <li>Population : {planetInfo?.population}</li>
                            <li>Created : {planetInfo?.created}</li>
                            <li>Diameter : {planetInfo?.diameter}</li>
                            <li>Edited : {planetInfo?.edited}</li>
                            <li>gravity : {planetInfo?.gravity}</li>
                            <li>Rotation period : {planetInfo?.rotation_period}</li>
                            <li>Surface water : {planetInfo?.surface_water}</li>
                            <li>Terrain : {planetInfo?.terrain}</li>
                        </ul>
                    </Info>
                </ModalMain>
                </>
                )}
        </Wrapper>, document.body
    )
}