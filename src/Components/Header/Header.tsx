import {Logo, Page, Pages, Wrapper} from "./style"
import logo from './img/Star_Wars_Logo.png'
import {useNavigate} from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate()

    const onClickPersons = () =>{
        navigate('/persons')
    }
    const onClickMainPage = () =>{
        navigate('*')
    }

    return(
        <Wrapper>
                <Logo onClick={onClickMainPage} src={logo}/>
                <Pages>
                    <Page onClick={onClickMainPage}>Главная</Page>
                    <Page onClick={onClickPersons} >Персонажи</Page>
                </Pages>
        </Wrapper>
    )
}