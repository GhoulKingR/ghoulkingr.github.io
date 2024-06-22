import styled from 'styled-components';
import PatternRings from '../assets/images/pattern-rings.svg';

function Experience() {
    return (
        <Section>
            <Rings src={PatternRings} alt='rings pattern' />
            <Container>
                <div>
                    <h2>Technical writing</h2>
                </div>
                <div>
                    <h2>API Development</h2>
                </div>
                <div>
                    <h2>Machine Learning & AI</h2>
                </div>
                <div>
                    <h2>Web Development</h2>
                </div>
                <div>
                    <h2>Web3</h2>
                </div>
            </Container>
        </Section>
    );
}

export default Experience;

const Section = styled.section`
    position: relative;
    margin-top: 40px;
    margin-bottom: 40px;
    max-width: 1110px;

    @media (min-width: 768px) {
        margin-top: 0px;
        margin-right: 32px;
        margin-left: 32px;
    }

    @media (min-width: 1110px) {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 140px;
    }
`;

const Rings = styled.img`
    position: absolute;
    top: 253px;
    right: -404px;
    width: 530px;
    height: 129px;
    display: none;

    @media (min-width: 1110px) {
        display: block;
    }
`;

const Container = styled.div`
    text-align: center;

    div {
        margin-top: 24px;

        h2 {
            font-size: 32px;
            font-weight: bold;
            line-height: 40px;
            letter-spacing: -1px;
        }
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: auto auto;

        div {
            text-align: left;
            margin-top: 54px;

            h2 {
                font-size: 48px;
                line-height: 56px;
                letter-spacing: -1.5px;
                margin-bottom: 14px;
            }
        }
    }

    @media (min-width: 1110px) {
        grid-template-columns: auto auto auto;

        div {
            margin-top: 72px;
        }
    }
`;
