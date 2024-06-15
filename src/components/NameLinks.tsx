import styled from 'styled-components';

export default function NameLinks() {
    return (
        <Navigation>
            <Name>GhoulKingR</Name>
            <Links>
                <li>
                    <a
                        href='https://ghoulkingr.github.io/articles/'
                        target='_blank'>
                        <svg width='25px' height='24px' viewBox='0 0 24 24'>
                            <g id='roll_brush' data-name='roll brush'>
                                <line
                                    className='cls-1'
                                    x1='5.24'
                                    y1='11.08'
                                    x2='18.66'
                                    y2='11.08'
                                />

                                <line
                                    className='cls-1'
                                    x1='5.24'
                                    y1='18.76'
                                    x2='18.66'
                                    y2='18.76'
                                />

                                <line
                                    className='cls-1'
                                    x1='5.24'
                                    y1='14.92'
                                    x2='18.66'
                                    y2='14.92'
                                />

                                <rect
                                    className='cls-1'
                                    x='1.4'
                                    y='1.49'
                                    width='21.1'
                                    height='21.1'
                                />

                                <polygon
                                    className='cls-1'
                                    points='22.5 7.25 16.23 7.25 14.31 7.25 1.4 7.25 1.4 1.49 22.5 1.49 22.5 7.25'
                                />

                                <line
                                    className='cls-1'
                                    x1='4.28'
                                    y1='4.37'
                                    x2='6.2'
                                    y2='4.37'
                                />

                                <line
                                    className='cls-1'
                                    x1='8.11'
                                    y1='4.37'
                                    x2='10.03'
                                    y2='4.37'
                                />

                                <line
                                    className='cls-1'
                                    x1='11.95'
                                    y1='4.37'
                                    x2='13.87'
                                    y2='4.37'
                                />
                            </g>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/GhoulKingR' target='_blank'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='25'
                            height='24'>
                            <path
                                fill='#FFF'
                                fillRule='evenodd'
                                d='M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z'
                            />
                        </svg>
                    </a>
                </li>
                <li>
                    <a
                        href='https://www.linkedin.com/in/chigozie-o/'
                        target='_blank'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='25'
                            height='24'>
                            <path
                                fill='#FFF'
                                fillRule='evenodd'
                                d='M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z'
                            />
                        </svg>
                    </a>
                </li>
            </Links>
        </Navigation>
    );
}

const Navigation = styled.div`
    max-width: 1110px;

    * {
        z-index: 3;
    }

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        width: calc(100vw - 60px);
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 30px;
    }

    @media (min-width: 1110px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Name = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.33px;

    @media (min-width: 768px) {
        width: unset;
        margin-top: 0px;
    }
`;

const Links = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 20px;

    li {
        margin-left: 12.8px;
        margin-right: 12.8px;
        cursor: pointer;

        &:hover svg path {
            fill: #4ee1a0 !important;
        }

        &:hover svg .cls-1 {
            stroke: #4ee1a0 !important;
        }
    }

    @media (min-width: 768px) {
        margin-top: 0px;
        width: unset;
    }

    .cls-1 {
        fill: none;
        stroke: #ffffff;
        stroke-miterlimit: 10;
        stroke-width: 1.92px;
    }
`;
