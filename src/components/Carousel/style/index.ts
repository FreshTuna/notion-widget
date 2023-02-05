import {css} from "@emotion/react";

export const carouselWrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    position: relative;
    
    overflow: hidden;
    user-select: none;
`;

export const itemContainer = css`
    display:flex;
    
    width: 600px;
    height: 400px;
    
    /* transition */
    transform: translate(0px);
    transition: transform 0.15s;
`;

export const carouselItem = css`
    width: 600px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const imageInCarousel = css`
    height: 100%;
    width: auto;
    
    margin: 0 auto;
    flex-shrink: 0;
    
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`;
