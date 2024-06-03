import styled from 'styled-components';
import NameLinks from './NameLinks';
import PatternRings from '../assets/images/pattern-rings.svg';
import { useRef } from 'react';

function ContactMe() {
    const name = useRef<HTMLInputElement | null>(null);
    const email = useRef<HTMLInputElement | null>(null);
    const message = useRef<HTMLTextAreaElement | null>(null);

    return (
        <Section id='contact-me'>
            <FormSection>
                <div className='text'>
                    <ThirdRings src={PatternRings} alt='rings pattern' />
                    <h1>Contact</h1>
                    <p>
                        I would love to hear about your project and how I could
                        help. Please fill in the form, and I'll get back to you
                        as soon as possible.
                    </p>
                </div>
                <div className='form'>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (
                                email.current !== null &&
                                name.current !== null &&
                                message.current !== null
                            )
                                window.open(
                                    `mailto:oduahchigozie46@gmail.com?cc=${email.current.value}&subject=Portfolio email form&body=${message.current.value}%0A%0A${name.current.value}`,
                                );
                        }}>
                        <input type='text' placeholder='NAME' ref={name} />
                        <input
                            type='email'
                            placeholder='EMAIL'
                            name='cc'
                            ref={email}
                        />
                        <div>Sorry, invalid format</div>
                        <textarea
                            placeholder='MESSAGE'
                            ref={message}></textarea>
                        <button type='submit'>SEND MESSAGE</button>
                    </form>
                </div>
            </FormSection>
            <Line />
            <NameLinks />
        </Section>
    );
}

export default ContactMe;

const FormSection = styled.div`
    width: 100%;
    max-width: 1110px;
    display: grid;
    grid-template-columns: auto;

    @media (min-width: 1110px) {
        grid-template-columns: auto auto;

        .form {
            display: flex;
            justify-content: right;
        }
    }
`;

const ThirdRings = styled.img`
    position: absolute;
    top: 436px;
    left: -343px;
    z-index: 1;
    width: 530px;
    height: 129px;

    @media (min-width: 1110px) {
        top: 243px;
        left: -370px;
    }
`;

const Section = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: -16px;
    margin-right: -16px;
    background-color: #242424;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 16px;
    padding-right: 16px;

    .text {
        position: relative;
    }

    @media (min-width: 768px) {
        margin-top: 60px;
        padding-bottom: 40px;
    }

    p {
        text-align: center;
        font-size: 16px;
        font-weight: medium;
        line-height: 26px;
        letter-spacing: 0px;
        color: #d9d9d9;
        margin-bottom: 50px;

        margin-left: auto;
        margin-right: auto;
        max-width: 445px;

        @media (min-width: 1110px) {
            text-align: left;
            font-size: 18px;
            line-height: 28px;
            margin-left: 0;
            margin-right: 0;
            padding-left: 0;
            padding-right: 0;
        }
    }

    h1 {
        font-weight: bold;
        font-size: 40px;
        line-height: 40px;
        letter-spacing: -1.14px;
        text-align: center;
        margin-bottom: 20px;

        margin-left: auto;
        margin-right: auto;
        max-width: 445px;

        @media (min-width: 768px) {
            font-size: 72px;
            line-height: 72px;
            letter-spacing: -2.05px;
        }

        @media (min-width: 1110px) {
            text-align: left;
            font-size: 88px;
            line-height: 88px;
            letter-spacing: -2.5px;
            margin-bottom: 36px;
            margin-left: 0;
            margin-right: 0;
            padding-left: 0;
            padding-right: 0;
        }
    }

    form {
        text-align: right;
        margin-left: auto;
        margin-right: auto;
        max-width: 445px;

        input {
            margin-bottom: 32px;
            font-size: 16px;
            font-weight: medium;
            line-height: 26px;
            letter-spacing: -0.22px;
            padding-left: 24px;
            padding-bottom: 17px;
            border: none;
            background-color: transparent;
            border-bottom: 1px solid #979797;
            width: calc(100vw - 56px);
            border-radius: 0;
            outline: none;
            color: white;
            max-width: calc(445px - 56px);

            &:focus {
                border-bottom: 1px solid #4ee1a0;
            }

            &:invalid {
                border-bottom: 1px solid #ff6f5b;
                flex-direction: column;
            }
        }

        div {
            visibility: hidden;
            text-align: right;
            color: #ff6f5b;
            margin-top: -27px;
            height: 0px;
            margin-bottom: 32px;
        }

        input:invalid ~ div {
            visibility: visible;
        }

        textarea {
            font-size: 16px;
            font-weight: medium;
            line-height: 26px;
            letter-spacing: -0.22px;
            border-radius: 0;
            width: calc(100vw - 56px);
            height: 107px;
            border: none;
            background-color: transparent;
            border-bottom: 1px solid #979797;
            padding-left: 24px;
            resize: none;
            margin-bottom: 32px;
            outline: none;
            color: white;
            max-width: calc(445px - 56px);

            &:focus {
                border-bottom: 1px solid #4ee1a0;
            }
        }

        button {
            border: none;
            background-color: transparent;
            border-bottom: 2px solid #4ee1a0;
            font-weight: bold;
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 2.29px;
            padding-bottom: 10px;
            color: white;
            cursor: pointer;

            &:hover {
                color: #4ee1a0;
            }
        }

        @media (min-width: 1110px) {
            margin-left: 0;
            margin-right: 0;
            padding-left: 0;
            padding-right: 0;
        }
    }
`;

const Line = styled.div`
    width: calc(100vw - 32px);
    height: 1px;
    background-color: #979797;
    margin-top: 87px;
    margin-bottom: 39px;
    max-width: 1110px;

    @media (min-width: 1110px) {
        margin-left: auto;
        margin-right: auto;
    }
`;
