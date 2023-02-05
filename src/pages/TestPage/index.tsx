import {useState} from "react";
import {flexDirectionColumnAlignCenter, justifyCenter} from "../../style/alignTemplete";
import Carousel from "../../components/Carousel";
import {pageWrapper} from "../../components/Carousel/style";

interface CarouselItem {
    id: number,
    url: string
}

const TestPage = () => {
    const [data, setData] = useState<CarouselItem[]>(
        [
            {
                id: 1,
                url: "https://notion-widget.s3.ap-northeast-2.amazonaws.com/carousel/Home_product_cleaner.png"
            },{
                id: 2,
                url: "https://notion-widget.s3.ap-northeast-2.amazonaws.com/carousel/Home_product_package.png"
            },{
                id: 3,
                url: "https://notion-widget.s3.ap-northeast-2.amazonaws.com/carousel/Home_product_refill.png"
            }
        ]
    )

    return(
        <div css={pageWrapper}>
            <Carousel data={data} />
        </div>
    )

}

export default TestPage;