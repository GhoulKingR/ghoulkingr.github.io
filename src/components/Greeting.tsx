import styled from 'styled-components';
import ImageProfileMobile from '../assets/images/image-profile-mobile.webp';
import ImageProfileTablet from '../assets/images/image-profile-tablet.webp';
import ImageProfileDesktop from '../assets/images/image-profile-desktop.webp';
import PatternRings from '../assets/images/pattern-rings.svg';
import PatternCircle from '../assets/images/pattern-circle.svg';

function Greeting() {
    return (
        <Section>
            <IntroTexts>
                <Container>
                    <GreetingText>
                        Nice to meet you! I'm <Underline>Adam Keyes</Underline>.
                    </GreetingText>
                    <Description>
                        Based in the UK, I'm a front-end developer passionate
                        about building accessible web apps that users love.
                    </Description>
                    <Contact>
                        <a href='#contact-me'>CONTACT ME</a>
                    </Contact>
                </Container>
                <Rings src={PatternRings} alt='rings pattern' />
                <Circle src={PatternCircle} alt='circle pattern' />
            </IntroTexts>
            <Images>
                <DesktopImage src={ImageProfileDesktop} alt='profile desktop' />
                <TabletImage src={ImageProfileTablet} alt='profile tablet' />
                <MobileImage src={ImageProfileMobile} alt='profile mobile' />
            </Images>
        </Section>
    );
}

export default Greeting;

const IntroTexts = styled.div`
    position: relative;
`;

const Circle = styled.img`
    position: absolute;
    top: 521px;
    left: 601px;
    z-index: 1;
    display: none;

    @media (min-width: 1110px) {
        display: block;
    }
`;

const Rings = styled.img`
    position: absolute;
    top: 133px;
    left: -265px;
    width: 530px;
    height: 129px;
    display: none;

    @media (min-width: 1110px) {
        display: block;
    }
`;

const Images = styled.div`
    grid-row: 1;

    @media (min-width: 768px) {
        grid-row: unset;
        display: flex;
        justify-content: right;
    }
`;

const MobileImage = styled.img`
    width: 174px;
    height: 383px;
    position: relative;
    z-index: 2;

    @media (min-width: 768px) {
        display: none;
    }
`;

const Container = styled.div`
    @media (min-width: 768px) {
        margin-top: 151px;
        position: relative;
        z-index: 3;
        width: 445px;
        padding-left: 32px;
    }

    @media (min-width: 1110px) {
        padding-left: 0px;
    }
`;

const TabletImage = styled.img`
    position: relative;
    z-index: 0;
    width: 322px;
    height: 600px;
    display: none;

    @media (min-width: 768px) {
        display: block;
    }

    @media (min-width: 1110px) {
        display: none;
    }
`;

const DesktopImage = styled.img`
    position: relative;
    z-index: 0;
    width: 445px;
    height: 720px;
    display: none;

    @media (min-width: 1110px) {
        display: block;
    }
`;

const Section = styled.section`
    margin-bottom: 80px;
    text-align: center;
    display: grid;
    grid-template-columns: auto;
    max-width: 1110px;

    @media (min-width: 768px) {
        grid-template-columns: auto auto;
        text-align: unset;
        position: relative;
        z-index: 0;

        & > div {
            min-height: 0;
            min-width: 0;
            overflow: visible;
        }
    }

    @media (min-width: 1110px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const GreetingText = styled.h1`
    margin-top: 40px;
    font-size: 40px;
    font-weight: bold;
    line-height: 40px;
    letter-spacing: -1.14px;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
        margin-top: 0px;
        line-height: 72px;
        font-size: 72px;
        letter-spacing: -2.05px;
    }

    @media (min-width: 1110px) {
        width: 708px;
        font-size: 88px;
        line-height: 88px;
        letter-spacing: -2.5px;
    }
`;

const Underline = styled.span`
    display: inline-flex;
    flex-direction: column;

    &::after {
        content: ' ';
        width: 100%;
        height: 4px;
        background-color: #4ee1a0;
    }
`;

const Contact = styled.div`
    text-align: center;

    & > a {
        display: inline-flex;
        flex-direction: column;
        font-size: 16px;
        font-weight: bold;
        line-height: 26px;
        letter-spacing: 2.29px;
        color: white;
        text-decoration: none;

        &:hover {
            color: #4ee1a0;
        }

        &::after {
            content: ' ';
            margin-top: 10px;
            width: 100%;
            height: 2px;
            background-color: #4ee1a0;
        }
    }

    @media (min-width: 768px) {
        text-align: left;
    }
`;

const Description = styled.p`
    font-size: 16px;
    font-weight: medium;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    margin-bottom: 24px;
    margin-top: 20px;
    color: #d9d9d9;

    @media (min-width: 768px) {
        text-align: left;
        margin-top: 60px;
        margin-bottom: 34px;
        font-size: 18px;
        line-height: 28px;
    }

    @media (min-width: 1110px) {
        margin-top: 43px;
        margin-bottom: 66px;
    }
`;
