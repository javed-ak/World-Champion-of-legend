import Link from "next/link";
import React from "react";

const VenueCard = ({ title, image }) => {
  return (
    <>
        <div className="venue-grid-item">
          <img alt="logo" src={image} />
          <div className="venue-grid-item-footer">
            <h4>{title}</h4>
          </div>
        </div>

      <style jsx>{`
        .venue-grid-item {
          width: 100%;
          display: flex;
          position: relative;
          transition: transform 0.3s ease; /* Smooth transition for scaling */
        } 
          
        .venue-grid-item::after {
          content: "";
          height: 200px;
          width: 100%;
          background: linear-gradient(360deg, #00000099, #ffffff05);
          position: absolute;
          bottom: 0;
          left: 0;
          border-radius: 0 0 15px 15px;
        }

        .venue-grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 15px;
        }

        .venue-grid-item-footer {
          width: 90%;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 1;
          position: absolute;
          left: 50%;
          bottom: 10px;
          transform: translateX(-50%);
        }

        .venue-grid-item-footer .tag {
          width: max-content;
          height: 25px;
          padding: 0 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          align-items: center;
          background-color: #dab072;
          border-radius: 8px;
        }

        .venue-grid-item-footer .tag p {
          color: #212121;
          font-family: "Poppins Light";
          font-size: 12px;
          text-transform: uppercase;
        }

        .venue-grid-item-footer h4 {
          font-family: "Poppins Semibold";
          font-weight: 500;
          font-size: 22px;
          line-height: 1.2rem;
          color: #ffffff;
          @media screen and (max-width: 768px) {
          font-size: 16px
        }
      `}</style>
    </>
  );
};

export default VenueCard;
