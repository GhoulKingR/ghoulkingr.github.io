import styled from 'styled-components';
import NameLinks from './NameLinks';

function NameLinksHead() {
    return (
        <Section>
            <NameLinksCover>
                <NameLinks />
            </NameLinksCover>
        </Section>
    );
}

export default NameLinksHead;

const NameLinksCover = styled.div`
    width: 100%;
    height: 0px;
    padding-top: 20px;
`;

const Section = styled.header`
    text-align: center;
    background-color: transparent;
    margin-top: -20px;
`;
