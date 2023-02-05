import {ReactNode, useEffect, useLayoutEffect, useRef, useState} from "react";
import {carouselItem, carouselWrapper, imageInCarousel, itemContainer} from "./style";
import {flexDirectionColumnAlignCenter, justifyCenter} from "../../style/alignTemplete";

interface CarouselProps {
    children?: ReactNode;
    data: CarouselItem[];
}

interface CarouselItem {
    id: number,
    url: string
}

const Carousel = ({data}: CarouselProps) => {
    const carouselWrapperRef = useRef<HTMLDivElement>(null);
    const itemContainerRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [startPoint, setStartPoint] = useState<number>(0);
    const [endPoint, setEndPoint] = useState<number>(0);

    const mouseDownEvent = (e: MouseEvent) => {
        console.log("mouseDown!", e.pageX);
        setStartPoint(e.pageX);
    }

    const mouseUpEvent = (e: MouseEvent) => {
        console.log("mouseUp!", e.pageX);
        setEndPoint(e.pageX);
    }

    useEffect(() => {
        carouselWrapperRef.current?.addEventListener('mousedown', mouseDownEvent);
        carouselWrapperRef.current?.addEventListener('mouseup', mouseUpEvent);

        return () => {
            carouselWrapperRef.current?.removeEventListener('mousedown', mouseDownEvent);
            carouselWrapperRef.current?.removeEventListener('mouseup', mouseUpEvent);
        }
    },[]);

    // useLayoutEffect( () => {
    //     itemContainerRef?.current && setWidth(itemContainerRef?.current?.clientWidth);
    // },[]);
    //
    // useEffect(() => {
    //     const handleResize = () => {
    //         itemContainerRef?.current && setWidth(itemContainerRef?.current?.clientWidth);
    //     }
    //
    //     window.addEventListener('resize', handleResize);
    //
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     }
    // },[]);

    useEffect(() => {
        if(startPoint < endPoint){
            console.log("prev move!");
            prevPage();
        } else if(startPoint > endPoint) {
            console.log("next move!");
            nextPage();
        }
    },[endPoint]);

    const nextPage = () => {
        if(itemContainerRef?.current == undefined) return;
        if(currentPage + 1 <= data.length - 1) {
            itemContainerRef.current.style.transform = `translate(-${(currentPage + 1) * 600}px)`;
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if(itemContainerRef?.current == undefined) return;
        if(currentPage > 0) {
            itemContainerRef.current.style.transform = `translate(-${(currentPage - 1) * 600}px)`;
            setCurrentPage(currentPage - 1);
        }
    }

    const CarouselItemFactory = (data: CarouselItem) => {
        return <div key={data.id}>
            <div css={[flexDirectionColumnAlignCenter, justifyCenter, carouselItem]}>
                <img src={data.url} alt={`${data.id}`} css={imageInCarousel}/>
            </div>
        </div>
    }


    return(
        <div className={"carousel-wrapper"} ref={carouselWrapperRef} css={carouselWrapper}>
            <div css={itemContainer} ref={itemContainerRef}>
                {data && data.map(CarouselItemFactory)}
            </div>
        </div>
    )
}

export default Carousel;