import { Link } from "react-router-dom";

const BestSellerBanner = () => {
    return (
        <div className="mx-3 md:mx-10">
            <Link to={'https://www.themancompany.com/?utm_source=google&utm_medium=cpc&utm_campaign=HO_Search_Brand_Key_Exact_S&utm_content=169842353965&gad_source=1&gad_campaignid=21969793574&gbraid=0AAAAAqCq9ttKnhvxEYYQST7femKUlm7NO&gclid=CjwKCAjwotzWBhBFEiwA1JhPoN9ltwV_DiJyiRC3byjKQLZJlmROBJfWyJImpxy0IgRsQIqR5HqLgBoCsEgQAvD_BwE'}>
                <img 
                    src={'https://www.adilqadri.com/cdn/shop/files/Group_1_d4369b6d-0a82-42f3-aba3-d35afecf87ec.png?v=1694410079&width=1800'}
                />
            </Link>
        </div>
    )
}

export {BestSellerBanner};