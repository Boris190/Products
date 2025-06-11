import React from "react";
import ProductCard from "./ProductCard";
import "./ProductCard.css";

const sampleProducts = [
  {
    id: 1,
    title: "Premium Coffee Beans",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    description: "High-quality Arabica coffee beans, freshly roasted",
  },
  {
    id: 2,
    title: "Organic Green Tea",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5",
    description: "Organic Japanese green tea, rich in antioxidants",
  },
  {
    id: 3,
    title: "Herbal Tea Collection",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    description: "Assorted herbal tea collection with 5 different flavors",
  },
  {
    id: 4,
    title: "Earl Grey Tea",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5",
    description: "Classic Earl Grey tea with bergamot flavor",
  },
  {
    id: 5,
    title: "Coffee Maker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1517663154410-3d881b7e1e7d",
    description: "Automatic drip coffee maker with timer",
  },
  {
    id: 6,
    title: "Tea Infuser",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    description: "Stainless steel tea infuser with fine mesh",
  },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="products-grid">
      {sampleProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
