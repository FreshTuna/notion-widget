import {useState} from "react";
import Carousel from "../../components/Carousel";
import {pageWrapper} from "./style";
import {alignCenterJustifyCenter} from "../../style/alignTemplete";

interface CarouselItem {
    id: number,
    url: string
}

const TestPage = () => {
    const [data, setData] = useState<CarouselItem[]>(
        [
            {
                id: 1,
                url: "https://notion-widget.s3.ap-northeast-2.amazonaws.com/carousel/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2022-12-28+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+10.07.18.png"
            },{
                id: 2,
                url: "https://notion-widget.s3.ap-northeast-2.amazonaws.com/carousel/Home_product_package.png"
            },{
                id: 3,
                url: "https://notion-widget.s3.ap-northeast-2.amazonaws.com/carousel/Home_product_refill.png"
            }, {
                id: 4,
                url: "https://notion-widget.s3.ap-northeast-2.amazonaws.com/carousel/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-01-05+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.09.27.png"
            },{
                id: 5,
                url: "https://notion-widget.s3.ap-northeast-2.amazonaws.com/carousel/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-01-30+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+1.27.43.png"
            }
        ]
    )

    return(
        <div css={[pageWrapper, alignCenterJustifyCenter]}>
            <Carousel data={data} />
        </div>
    )

}

export default TestPage;