import styled,{keyframes} from 'styled-components';
import clouds from "../../assets/images/clouds2.png"
import solo from "../../assets/images/solo.png"
import moon from "../../assets/images/moon_pixel.gif"

const move = keyframes`
    0%{
        background-position-x:-200%;
    }
    100%{
        background-position-x:450%;
    }
`;
const pisca2 = keyframes`
    0%,100%{
        opacity:1;
    }
    50%{
        opacity:0;
       
    }
`

export default styled.section`
    background: linear-gradient( #FF9D51 0%,#FFB070 100%);
    display:${props=>props.show?"block":"none"};

    #container-experience{
        min-height:calc(100vh - 136px);
       
        padding:32px;

        background-image:url(${clouds});
        background-repeat:no-repeat;
        background-size:73vw;
        background-position-y:20%;
        animation-name:${move};
        animation-duration:120s;
        animation-timing-function:linear;
        animation-iteration-count:infinite;

        #title-experience{
            z-index:3;
            display:flex;
            justify-content:center;
            margin-bottom:32px;
            h1{
                font-family:'Press Start 2P';
                background: -webkit-linear-gradient(#050938 50%, #303887 50%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;

                @media (min-width: 1px) {
                    font-size:18px;
                } 
                @media (min-width: 576px) {
                    font-size:28px;
                }      
                @media (min-width: 768px) {
                    font-size:36px;
                }
            }
            span.pointer{
                width:15px;
                background-color: #fff;
                margin-left:5px;
                animation-name:${pisca2};
                animation-duration:.7s;
                animation-iteration-count:infinite;
            }
        }
        #container-display{
            width:100%;
            display:flex;
            justify-content:center;
            flex-direction:column;
            @media (min-width: 576px) {
                max-width: 540px;
            }
            @media (min-width: 768px){
                max-width: 720px;
            }
            @media (min-width: 992px){
                max-width: 960px;
            }
            @media (min-width: 1200px){
                max-width: 1140px;
            }
            .display-xp{
                width:100%;
                margin:32px;
                padding:32px;
                background-color:rgba(253, 253, 253, 0.5);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                .imgs{
                    width:100%;
                    
                    display:flex;

                    flex-direction:column;
                    overflow:hidden;
                    justify-content:center;
                    position:relative;
                    img{
                        width:100%;
                    }
                }
            }
        }
    }
    #moon{
        background-image:url(${moon});
        background-repeat:no-repeat;
        background-position: 10% calc(10% - 72px);
        background-size:18vw;
    }
    footer{
        /* position:absolute;
        top:100%; */
        width:100%;
        
        height:72px;
        background-image:url(${solo});
        background-repeat:repeat-x;
    }
`;