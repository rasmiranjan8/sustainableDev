import ShowProduct from "./ShowProduct";
import PropTypes from "prop-types";

function ProductItem({ products }) {
  return (
    <div className="container">
      <div className="row">
        {products.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.name}>
            <ShowProduct
              pName={item.name}
              pImg={item.img}
              pRating={item.rating}
              pPrice={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductItem;
