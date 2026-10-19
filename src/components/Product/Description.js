const Description = (props) => {
  const { description } = props;
  return (
    <div className="mt-5">
      <h1 className="text-md font-bold">DESCRIPTION</h1>
      <h1 className="text-sm ">
        {description}:
      </h1>
      <div className="text-md text-black flex">
        <h1 className="font-bold mr-3">TOP:</h1>
        <h1>Lemon, Birch leaves and Cardamom</h1>
      </div>
      <div className="text-md text-black flex">
        <h1 className="font-bold mr-3">MIDDLE:</h1>
        <h1>Lavender, Geranium and Juniper</h1>
      </div>
      <div className="text-md text-black flex">
        <h1 className="font-bold mr-3">BOTTOM:</h1>
        <h1>Amberwood, Musk and Sandalwood</h1>
      </div>
    </div>
  );
};

export default Description;
