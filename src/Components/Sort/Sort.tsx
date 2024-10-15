import {SortList, SortList_Item, SortText, Wrapper } from "./style"
import {useState} from "react";
import React from "react";

import {TPersonItem, TSortItem} from "../PersonsMain/PersonsMain";

type TSortProps = {
    activeSort:{
        name: string,
        value: string,
        id: number,},
    setActiveSort:   React.Dispatch<React.SetStateAction<{name: string, value: string, id: number}>>,
    characters: TPersonItem[],
    setCharacters: React.Dispatch<React.SetStateAction<TPersonItem[]>>,
}

export const Sort:React.FC<TSortProps> = ({activeSort, setActiveSort,characters, setCharacters}) => {

    const sortArray = [
        {name: 'По весу(по возрастанию)', value: 'mass', id: 1},
        {name: 'По весу(по убыванию)', value: '-mass', id: 2},
        {name: 'По росту(по возрастанию)', value: 'height', id: 3},
        {name: 'По росту(по убыванию)', value: '-height', id: 4},
    ] as TSortItem[]

    const[popUpOpen, setPopUpOpen] = useState<boolean>(false)

    const handleSortClick = () =>{
        setPopUpOpen(!popUpOpen)
    }
    const handleChooseSort = (sortObj: TSortItem) =>{
        setActiveSort(sortObj)
        if(sortObj.value.includes('mass')){
            const result = characters.sort((a, b) =>
                sortObj.value.includes('-')
                    ? (+b.mass - +a.mass) :
                    (+a.mass - +b.mass)
            )
            setCharacters(result)}
        if(sortObj.value.includes('height')){
            const result = characters.sort((a, b) =>
                sortObj.value.includes('-')
                    ? (+b.height - +a.height) :
                    (+a.height - +b.height)
            )
            setCharacters(result)}
        setPopUpOpen(false)
    }

    return(
        <>
        <Wrapper onClick={handleSortClick} >
            <SortText>
                {activeSort.name}
            </SortText>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
        </Wrapper>
            <SortList disabled={popUpOpen}>
                {sortArray.map((el)=>(
                    <SortList_Item key={el.id} onClick={()=>handleChooseSort(el)}>{el.name}</SortList_Item>
                ))}
            </SortList>
        </>
    )
}