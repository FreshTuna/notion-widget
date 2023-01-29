import {useState} from "react";
import {flexDirectionColumnAlignCenter, justifyCenter} from "../../style/alignTemplete";
import {Carousel} from "antd";

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

    const CarouselItemFactory = (data: CarouselItem) => {
        console.log(data);
        return <div key={data.id}>
            <div css={[flexDirectionColumnAlignCenter, justifyCenter]}>
                <img src={data.url} alt={`${data.id}`}/>
            </div>
        </div>
    }

    return(
        <div>
            <Carousel >
                {
                    data && data.map(CarouselItemFactory)
                }
            </Carousel>
        </div>
    )

}

export default TestPage;