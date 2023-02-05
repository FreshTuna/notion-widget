import {css} from "@emotion/react";

export const pageWrapper = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const carouselWrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    /* 컨테이너의 내용물이 컨테이너 크기(width, height)를 넘어설 때 보이지 않도록 하기 위해 hidden을 준다. */
    
    /* position */
    /* slide_button의 position absolute가 컨테이너 안쪽에서 top, left, right offset이 적용될 수 있도록 relative를 준다. (기본값이 static인데, static인 경우 그 상위 컨테이너로 나가면서 현재 코드에선 html을 기준으로 offset을 적용시키기 때문) */
    position: relative;
    
    /* size */
    width: 500px;
    height: 300px;
    
    overflow: hidden;
    
    /* slide drag를 위해 DOM요소가 드래그로 선택되는것을 방지 */
    user-select: none;
`;

export const itemContainer = css`
    display:flex;
    
    width: 500px;
    height: 300px;
    
    /* transition */
    transform: translate(0px);
    transition: transform 0.15s;
`;

export const carouselItem = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const imageInCarousel = css`
    /* size */
    width: 500px;
    height: 300px;
    
    /* flex item의 flex-shrink는 기본값이 1이므로 컨테이너 크기에 맞게 줄어드는데, 슬라이드를 구현할 것이므로 줄어들지 않도록 0을 준다. */
    flex-shrink: 0;
    
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`;
