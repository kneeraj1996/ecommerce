import { useState } from "react";
const data = [
  "https://www.adilqadri.com/cdn/shop/files/WhatsApp_Image_2025-07-27_at_12.25.44_AM.jpg?v=1761140681",

  "https://www.adilqadri.com/cdn/shop/files/1_14c7b4cf-a682-4796-bed9-9aaf729b7daa.jpg?v=1761140681",

  "https://www.adilqadri.com/cdn/shop/files/Group_7659.png?v=1760901968",

  "https://www.adilqadri.com/cdn/shop/files/Group_7698.png?v=1760901968",

  "https://www.adilqadri.com/cdn/shop/files/Group_7729.png?v=1760901968",

  "https://www.adilqadri.com/cdn/shop/files/Group_7748.png?v=1760901968",

  "https://www.adilqadri.com/cdn/shop/files/Group_7720.png?v=1760901968",

  "https://www.adilqadri.com/cdn/shop/files/Group_7708.png?v=1760901968",

  "https://www.adilqadri.com/cdn/shop/files/Frame_19.png?v=1760901968",

  "https://www.adilqadri.com/cdn/shop/files/Frame_20.png?v=1760901968",
];

const ProductPhotos = (props) => {
  const { images } = props;

  const updatedData = [...images, ...data];
  const [selectedPhoto, setSelectedPhoto] = useState(updatedData[0]);

  const handlePhotoClick = (item) => {
    setSelectedPhoto(item);
  };

  return (
    <div className="w-1/2 min-w-0">
      <div className="h-[600px] w-full rounded-md border-[0.5px] border-black bg-yellow-400">
        <img
          src={selectedPhoto}
          alt="Perfume"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="mt-3 flex w-full gap-3 overflow-x-auto pb-2">
        {updatedData.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Perfume view ${index + 1}`}
            onClick={() => handlePhotoClick(item)}
            className="h-20 w-20 flex-none rounded-sm object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPhotos;
