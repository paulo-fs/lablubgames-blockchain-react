import {Header, Footer} from "components";
import { Main } from "pages";
import { Background, LayoutContainer } from "./styles";

import backgroundImg from 'shared/assets/background.png';

export default function Layout(){
    return (
        <>
            <Background src={backgroundImg} />
            <LayoutContainer>
            <Header />
            <Main />
            <Footer />
            </LayoutContainer>
        </>
    );
}