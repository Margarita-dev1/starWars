import {Characters, Wrapper} from "./style"
import axios from "axios";
import React, {useEffect, useState} from "react";
import {Header} from "../Header/Header";
import {PersonItem} from "../PersonItem/PersonItem";
import {Pagination} from "../Pagination/Pagination";
import {Sort} from "../Sort/Sort";

export type TPersonItem = {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string,
}

type TImages = {
    name:string,
    image:string,
}[]
export type TSortItem = {
    name: string,
    value: string,
    id: number,
}

export const PersonsMain = () =>{
    const [characters, setCharacters] = useState<TPersonItem[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [charactersLength, setCharactersLength] = useState(0);
    const pages = Math.round(charactersLength / 10);
    const [currentPage, setCurrentPage] = useState(1);
    const [images, setImages] = useState<TImages>([])
    const [activeSort, setActiveSort] = useState({name: 'По весу(по возрастанию)', value: 'mass', id: 1})

    const fetchCharacters = async(page:number) =>{
        try {
            setIsLoading(true)
            const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
            setCharacters(response.data.results)
            setCharactersLength(response.data.count)
            setIsLoading(false)
        } catch (err) {
            console.error(err.toJSON())
        }
    }
    const fetchImages = async() =>{
        try {
            const response = await axios.get(`https://akabab.github.io/starwars-api/api/all.json`)
            const data = response.data.map((el:any) => ({name:el.name, image:el.image}))
            setImages(data)
        } catch (err) {
            console.error(err.toJSON())
        }
    }

    useEffect(() => {
        fetchCharacters(1)
        fetchImages()
    }, [])

    return(
        <>
        <Header/>
        <Wrapper>

            {isLoading? <div style={{color: 'white'}}>Loading...</div>:(
                <>
                    <Sort characters={characters} setCharacters={setCharacters} activeSort={activeSort} setActiveSort={setActiveSort}/>
                <Characters>
                {characters?.map((el, i) => (
                    <PersonItem images={images} key={i} obj={el}/>
                ))}
                </Characters>
                    <Pagination fetchCharacters={fetchCharacters} currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages}/>
</>
                )}
        </Wrapper>
        </>
    )
}