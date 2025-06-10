const VenueCard = ({ title, image }) => {
  return (
    <>
          <div className="space-y-3 bg-white rounded-lg p-1 pb-2">
            <img alt="logo" src={image} className="rounded-lg w-full"/>
          <h4 className="font-medium md:text-2xl text-center">{title}</h4>
        </div>
    </>
  );
};

export default VenueCard;
