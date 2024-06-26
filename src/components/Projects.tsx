import styled from 'styled-components';
import Project1 from '../assets/projects/connect-four.png';
import Project2 from '../assets/projects/hangman-game.png';
import Project3 from '../assets/projects/cats-vs-dogs.png';

interface Project {
    imageSrc: string;
    title: string;
    tools: string[];
    githubLink: string;
    projectLink?: string;
    description?: string;
}

function Projects() {
    const projectDescriptions: Project[] = [
        {
            githubLink: 'https://github.com/GhoulKingR/connect-four',
            imageSrc: Project1,
            tools: [
                'TYPESCRIPT',
                'JEST',
                'NEXT.JS',
                'TAILWIND',
                'STYLED COMPONENTS',
            ],
            projectLink: 'https://ghoulkingr.github.io/connect-four/',
            title: 'CONNECT FOUR',
        },
        {
            githubLink: 'https://github.com/GhoulKingR/hangman-game',
            imageSrc: Project2,
            tools: [
                'TYPESCRIPT',
                'BOOTSTRAP',
                'NEXT.JS',
                'TAILWIND',
                'STYLED COMPONENTS',
            ],
            projectLink:
                'https://github.com/GhoulKingR/hangman-game/settings/pages',
            title: 'HANGMAN GAME',
        },
        {
            imageSrc: Project3,
            tools: ['PYTHON', 'TENSORFLOW', 'KERAS'],
            githubLink: 'https://github.com/GhoulKingR/cat-dog-classifier/',
            title: 'CAT-DOG IMAGE CLASSIFIER',
            description:
                'This project consists of a DNN that can distinguish between images of a cat and images of a Dog with 87% accuracy',
        },
    ];

    return (
        <Section className='md:mx-[30px]'>
            <div className='w-full flex justify-between mb-[40px] items-center'>
                <h1 className='font-bold text-[40px] leading-[40px] tracking-[-1.14px] md:text-[72px] md:leading-[72px] md:tracking-[-2.05px]'>
                    Projects
                </h1>
                <a
                    href='#contact-me'
                    className='font-bold text-[16px] leading-[26px] tracking-[2.29px] my-underline hover:text-[#4ee1a0]'>
                    CONTACT ME
                </a>
            </div>

            <div className='mb-[80px] md:grid grid-cols-2 gap-x-6 gap-y-5'>
                {projectDescriptions.map((project, i) => {
                    return (
                        <div key={i} className='mb-[40px]'>
                            <div className='relative'>
                                <img
                                    src={project.imageSrc}
                                    alt='sample look'
                                    className='mb-[20px]'
                                />
                                <div className='font-bold hidden xl:flex text-center absolute opacity-0 hover:opacity-100 cursor-pointer bg-black/50 top-0 left-0 w-full h-full justify-center items-center'>
                                    <div>
                                        {project.projectLink !== undefined && (
                                            <>
                                                <a
                                                    href={project.projectLink}
                                                    target='_blank'
                                                    className='my-underline mb-[48px] hover:text-[#4ee1a0]'>
                                                    VIEW PROJECT
                                                </a>
                                                <br />
                                            </>
                                        )}
                                        <a
                                            href={project.githubLink}
                                            target='_blank'
                                            className='my-underline hover:text-[#4ee1a0]'>
                                            VIEW CODE
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold text-[24px] leading-[32px] mb-[7px]'>
                                {project.title}
                            </div>

                            {project.description !== undefined && (
                                <p className='mb-[20px]'>
                                    {project.description}
                                </p>
                            )}

                            <div className='mb-[20px]'>
                                {project.tools.map((tool, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className='inline-block mr-[18px] text-[18px] leading-[28px]'>
                                            {tool}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className='flex text-[16px] leading-[26px] tracking-[2.29px] font-bold xl:hidden'>
                                {project.projectLink !== undefined && (
                                    <a
                                        href={project.projectLink}
                                        target='_blank'
                                        className='mr-[30px] my-underline hover:text-[#4ee1a0]'>
                                        VIEW PROJECT
                                    </a>
                                )}
                                <a
                                    href={project.githubLink}
                                    target='_blank'
                                    className='my-underline hover:text-[#4ee1a0]'>
                                    VIEW CODE
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}

export default Projects;

const Section = styled.section`
    margin-top: 80px;
    max-width: 1110px;

    @media (min-width: 1110px) {
        margin-left: auto;
        margin-right: auto;
    }
`;
