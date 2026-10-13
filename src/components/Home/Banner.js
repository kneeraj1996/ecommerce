import { useRef, useState } from 'react';

let data = [
    {
        img: 'https://www.adilqadri.com/cdn/shop/files/Aadil_Qadri_---_Perfume_Bundle_List_copy_94ee4bb2-42f3-402a-9842-f706ed62780b.jpg?v=1759288281',
    },
    {
        img: 'https://www.adilqadri.com/cdn/shop/files/discovery_set_4.png?v=1741091030',
    },

]
const Banner = () => {
    const bannerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (event) => {
        const { scrollLeft, clientWidth } = event.currentTarget;
        if (clientWidth > 0) {
            setActiveIndex(Math.round(scrollLeft / clientWidth));
        }
    };

    const scrollToIndex = (index) => {
        bannerRef.current?.scrollTo({
            left: index * bannerRef.current.clientWidth,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <div
                ref={bannerRef}
                className="hide-scrollbar flex w-full min-w-0 snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
                onScroll={handleScroll}
                aria-label="Promotional banners"
            >
                {data.map((item, index) => (
                    <img
                        key={index}
                        src={item.img}
                        alt={`Promotional banner ${index + 1}`}
                        className="h-1/4 w-full shrink-0 snap-start object-fill"
                    />
                ))}
            </div>
            <div className="flex justify-center gap-2 py-3" aria-label="Choose banner">
                {data.map((item, index) => (
                    <button
                        key={item.img}
                        type="button"
                        onClick={() => scrollToIndex(index)}
                        aria-label={`Show banner ${index + 1}`}
                        aria-current={activeIndex === index ? 'true' : undefined}
                        className={`h-2 w-2 rounded-full ${
                            activeIndex === index ? 'bg-blue-700' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    )

}

export { Banner };