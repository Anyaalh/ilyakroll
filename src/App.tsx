import './App.css';
import styled from 'styled-components';
import {Header} from './layout/header/Header';
import {Main} from "./layout/sections/main/Main";
import {AboutUs} from "./layout/sections/aboutUs/AboutUs";
import {Track} from "./layout/sections/track/Track";
import {Gallery} from "./layout/sections/gallery/Gallery";
import {Testymony} from "./layout/sections/testimony/Testymony";
import {Information} from "./layout/sections/information/Information";
import {Footer} from "./layout/footer/Footer";
import {Serveses} from "./layout/sections/serveses/Serveses";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutUs/>
            <Track/>
            <Serveses/>
            <Gallery/>
            <Testymony/>
            <Information/>
            <Footer/>
        </div>
    );
}

export default App;

