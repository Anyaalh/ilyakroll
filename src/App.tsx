import './App.css';
import styled from 'styled-components';
import {Header} from './layout/header/Header';
import {Main} from "./layout/sections/main/Main";
import {AboutUs} from "./layout/sections/aboutUs/AboutUs";
import {Track} from "./layout/sections/track/Track";
import {HowItsWork} from "./layout/sections/howItsWork/HowItsWork";
import {Gallery} from "./layout/sections/gallery/Gallery";
import {Testymony} from "./layout/sections/testimony/Testymony";
import {Information} from "./layout/sections/information/Information";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutUs/>
            {/*<Track/>*/}
            {/*<HowItsWork/>*/}
            {/*<Gallery/>*/}
            {/*<Testymony/>*/}
            {/*<Information/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;