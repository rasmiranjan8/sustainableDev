import PropTypes from "prop-types";
import "./ShowProduct.css"; // Import the CSS file

function ShowProduct({ pName, pImg, pRating, pPrice }) {
  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="img-container">
        <img src={pImg} className="card-img-top" alt={pName} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{pName}</h5>
        <div style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
          <p className="card-text">Price: &#8377;{pPrice}</p>
          <p className="card-text">Rating: {pRating}</p>
        </div>
        <a href="#" className="btn btn-primary">
          Buy Now
        </a>
      </div>
    </div>
  );
}

ShowProduct.propTypes = {
  pName: PropTypes.string.isRequired,
  pImg: PropTypes.string.isRequired,
  pRating: PropTypes.number.isRequired,
  pPrice: PropTypes.number.isRequired,
};

export default ShowProduct;
