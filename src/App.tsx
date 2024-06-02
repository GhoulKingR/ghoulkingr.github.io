import Projects from './components/Projects';
import BackgroundPatterns from './components/BackgroundPatterns';
import Greeting from './components/Greeting';
import NameLinksHead from './components/NameLinksHead';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';
import styled from 'styled-components';

function App() {
    return (
        <Main>
            <BackgroundPatterns />
            <NameLinksHead />
            <Greeting />
            <GreetingLine />
            <Experience />
            <LineDisappears />
            <Projects />
            <ContactMe />
        </Main>
    );
}

export default App;

const LineDisappears = styled.hr`
    @media (min-width: 768px) {
        display: none;
    }
`;

const GreetingLine = styled.hr`
    max-width: 1110px;

    @media (min-width: 768px) {
        margin-left: 32px;
        margin-right: 32px;
    }

    @media (min-width: 1110px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Main = styled.main`
    padding-left: 16px;
    padding-right: 16px;
    overflow: hidden;

    @media (min-width: 768px) {
        padding-left: 0;
        padding-right: 0;
    }
`;
