import styled from 'styled-components';

interface Project {
    imageSrc: string;
    title: string;
    tools: string[];
    projectLink: string;
    githubLink: string;
}

interface Props {
    projectDetails: Project;
}

function Project({ projectDetails }: Props) {
    const { imageSrc, title, tools, projectLink, githubLink } = projectDetails;
    return (
        <ProjectElement>
            <TabletDownwards>
                <img src={imageSrc} alt={title} />
                <div className='title'>{title}</div>
                <ul>
                    {tools.map((v, i) => (
                        <li key={i}>{v}</li>
                    ))}
                </ul>
                <a href={projectLink}>VIEW PROJECT</a>
                <a href={githubLink}>VIEW CODE</a>
            </TabletDownwards>
            <Desktop>
                <div className='image'>
                    <img src={imageSrc} alt={title} />
                    <div>
                        <div>
                            <a
                                href={projectLink}
                                style={{ marginBottom: '48px' }}>
                                VIEW PROJECT
                            </a>
                            <a href={githubLink}>VIEW CODE</a>
                        </div>
                    </div>
                </div>
                <div className='title'>{title}</div>
                <ul>
                    {tools.map((v, i) => (
                        <li key={i}>{v}</li>
                    ))}
                </ul>
            </Desktop>
        </ProjectElement>
    );
}

export default Project;

const ProjectElement = styled.div`
    margin-bottom: 40px;
`;

const TabletDownwards = styled.div`
    img {
        width: 100%;
        max-width: 100vw;
    }

    .title {
        margin-top: 20px;
        margin-bottom: 7px;
        font-size: 24px;
        line-height: 32px;
        font-weight: bold;
    }

    ul {
        list-style: none;
        margin-bottom: 20px;

        li {
            display: inline;
            margin-right: 18px;
            font-size: 18px;
            font-weight: medium;
            line-height: 28px;
        }
    }

    a {
        margin-right: 30px;
        display: inline-flex;
        flex-direction: column;
        font-size: 16px;
        font-weight: bold;
        line-height: 26px;
        letter-spacing: 2.29px;
        color: white;
        text-decoration: none;

        &::after {
            content: ' ';
            margin-top: 10px;
            width: 100%;
            height: 2px;
            background-color: #4ee1a0;
        }
    }

    @media (min-width: 1110px) {
        display: none;
    }
`;

const Desktop = styled.div`
    display: none;

    .image {
        position: relative;
        width: fit-content;
        height: fit-content;

        & > img {
            width: 100%;
        }

        & > div {
            position: absolute;
            display: none;
            width: 0;
            height: 0;
        }

        &:hover > div {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.75);
            display: flex;
            justify-content: center;
            align-items: center;

            & > div {
                text-align: center;

                a {
                    display: block;
                    text-decoration: none;
                    color: white;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 26px;
                    letter-spacing: 2.29px;
                    display: flex;
                    flex-direction: column;

                    &:hover {
                        color: #4ee1a0;
                    }

                    &::after {
                        content: '';
                        width: 100%;
                        margin-top: 10px;
                        height: 2px;
                        background-color: #4ee1a0;
                    }
                }
            }
        }
    }

    .title {
        margin-top: 20px;
        margin-bottom: 7px;
        font-size: 24px;
        line-height: 32px;
        font-weight: bold;
    }

    ul {
        list-style: none;
        margin-bottom: 20px;

        li {
            display: inline;
            margin-right: 18px;
            font-size: 18px;
            font-weight: medium;
            line-height: 28px;
        }
    }

    @media (min-width: 1110px) {
        display: block;
    }
`;
