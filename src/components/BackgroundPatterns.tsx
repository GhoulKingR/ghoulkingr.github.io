import styled from 'styled-components';
import PatternRings from '../assets/images/pattern-rings.svg';
import PatternCircle from '../assets/images/pattern-circle.svg';

export default function BackgroundPatterns() {
    return (
        <div style={{ width: '100vw', height: 0, position: 'relative' }}>
            <Rings src={PatternRings} alt='rings pattern' />
            <Circle src={PatternCircle} alt='circle pattern' />
            <SecondRings src={PatternRings} alt='rings pattern' />
        </div>
    );
}

const Rings = styled.img`
    position: absolute;
    top: 124px;
    left: -342px;
    width: 530px;
    height: 129px;

    @media (min-width: 768px) {
        top: 86px;
    }

    @media (min-width: 1110px) {
        display: none;
    }
`;

const SecondRings = styled.img`
    position: absolute;
    top: 1287px;
    right: -344px;
    z-index: 1;
    width: 530px;
    height: 129px;

    @media (min-width: 768px) {
        top: 1047px;
        right: -332px;
    }

    @media (min-width: 1110px) {
        display: none;
    }
`;

const Circle = styled.img`
    position: absolute;
    top: 254px;
    right: -64px;
    z-index: 1;

    @media (min-width: 768px) {
        top: 471px;
    }

    @media (min-width: 1110px) {
        display: none;
    }
`;
