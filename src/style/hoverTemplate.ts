import {css} from "@emotion/react";

const hoverOpacity = (opacity: string) => css`
    &:hover{
        opacity:${opacity}
    }
    
    transition: 0.3s opacity;
`;

export {
    hoverOpacity,
}