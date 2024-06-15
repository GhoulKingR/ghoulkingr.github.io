import styled from 'styled-components';
import Project1 from '../assets/projects/cats-vs-dogs.png';

interface Project {
    imageSrc: string;
    title: string;
    tools: string[];
    projectLink: string;
    description: string;
}

function Projects() {
    const projectDescriptions: Project[] = [
        {
            imageSrc: Project1,
            tools: ['PYTHON', 'TENSORFLOW', 'KERAS'],
            projectLink: 'https://github.com/GhoulKingR/cat-dog-classifier/',
            title: 'CAT-DOG IMAGE CLASSIFIER',
            description:
                'This project consists of a DNN that can distinguish between images of a cat and images of a Dog with 87% accuracy',
        },
    ];

    return (
        <Section className='md:mx-[30px]'>
            <div className='w-full flex justify-between mb-[40px] items-center'>
                <h1 className='font-bold text-[40px] leading-[40px] tracking-[-1.14px] md:text-[72px] md:leading-[72px] md:tracking-[-2.05px]'>
                    AI & ML Projects
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
                                        <a
                                            href={project.projectLink}
                                            target='_blank'
                                            className='my-underline hover:text-[#4ee1a0]'>
                                            VIEW PROJECT
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold text-[24px] leading-[32px] mb-[7px]'>
                                {project.title}
                            </div>

                            <p className='mb-[20px]'>{project.description}</p>

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
                                <a
                                    href={project.projectLink}
                                    target='_blank'
                                    className='my-underline hover:text-[#4ee1a0]'>
                                    VIEW PROJECT
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
