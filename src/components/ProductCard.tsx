import React from "react";
import "./ProductCard.css";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  description,
}) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-price">{formattedPrice}</div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
