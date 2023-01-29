import {ReactNode} from "react";

interface CarouselProps {
    children?: ReactNode;
}

const Carousel = ({children}: CarouselProps) => {

    return(
        <div>
            {children}
        </div>
    )
}

export default Carousel;