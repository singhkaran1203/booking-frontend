import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/508802610.webp?k=c7908b5df66e26d620b62ccd9f659df39d1777585407e896a1b9c17d5b656916&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free airpot taxi</span>
        <span className="siSubtitle">
            Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
            {item.desc}
        </span>
        <span className="siCancelOp">
            Free Cancellation
        </span>
        <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
            <span className="siPrice">₹{item.cheapestPrice}</span>
            <span className="siTaxOp">Includes Taxes and fees</span>
            <Link to={`/hotels/${item._id}`}>
              <button className="siCheckButton">See availability</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
