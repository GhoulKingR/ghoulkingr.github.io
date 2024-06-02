import styled from 'styled-components';
import Project1 from '../assets/images/thumbnail-project-1-small.webp';
import Project2 from '../assets/images/thumbnail-project-2-small.webp';
import Project3 from '../assets/images/thumbnail-project-3-small.webp';
import Project4 from '../assets/images/thumbnail-project-4-small.webp';
import Project5 from '../assets/images/thumbnail-project-5-small.webp';
import Project6 from '../assets/images/thumbnail-project-6-small.webp';
import ProjectElement from './Project';

interface Project {
    imageSrc: string;
    title: string;
    tools: string[];
    projectLink: string;
    githubLink: string;
}

function Projects() {
    const projectDescriptions: Project[] = [
        {
            githubLink: '/',
            imageSrc: Project1,
            tools: ['HTML', 'CSS'],
            projectLink: '/',
            title: 'DESIGN PORTFOLIO',
        },
        {
            githubLink: '/',
            imageSrc: Project2,
            tools: ['HTML', 'CSS'],
            projectLink: '/',
            title: 'E-LEARNING LANDING PAGE',
        },
        {
            githubLink: '/',
            imageSrc: Project3,
            tools: ['HTML', 'CSS', 'JAVASCRIPT'],
            projectLink: '/',
            title: 'TODO WEB APP',
        },
        {
            githubLink: '/',
            imageSrc: Project4,
            tools: ['HTML', 'CSS', 'JAVASCRIPT'],
            projectLink: '/',
            title: 'ENTERTAINMENT WEB APP',
        },
        {
            githubLink: '/',
            imageSrc: Project5,
            tools: ['HTML', 'CSS', 'JAVASCRIPT'],
            projectLink: '/',
            title: 'MEMORY GAME',
        },
        {
            githubLink: '/',
            imageSrc: Project6,
            tools: ['HTML', 'CSS', 'JAVASCRIPT'],
            projectLink: '/',
            title: 'ART GALLERY SHOWCASE',
        },
    ];

    return (
        <Section>
            <Header>
                <h1>Projects</h1>
                <a href='#contact-me'>CONTACT ME</a>
            </Header>
            <ProjectGrid>
                {projectDescriptions.map((v, i) => (
                    <ProjectElement key={i} projectDetails={v} />
                ))}
            </ProjectGrid>
        </Section>
    );
}

export default Projects;

const ProjectGrid = styled.div`
    display: grid;

    @media (min-width: 768px) {
        grid-template-columns: auto auto;
        column-gap: 24px;
        margin-left: 14px;
        margin-right: 14px;
    }

    @media (min-width: 768px) {
        column-gap: 30px;
    }
`;

const Section = styled.section`
    margin-top: 80px;
    max-width: 1110px;

    @media (min-width: 768px) {
        padding-left: 16px;
        padding-right: 16px;
    }

    @media (min-width: 1110px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    align-items: center;

    h1 {
        font-weight: bold;
        font-size: 40px;
        line-height: 40px;
        letter-spacing: -1.14px;
    }

    a {
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
        margin-bottom: 60px;
        margin-left: 16px;
        margin-right: 16px;

        h1 {
            font-size: 72px;
            line-height: 72px;
            letter-spacing: -2.05px;
        }
    }

    @media (min-width: 1110px) {
        margin-bottom: 80px;

        h1 {
            font-size: 88px;
            line-height: 88px;
            letter-spacing: -2.5px;
        }
    }
`;
