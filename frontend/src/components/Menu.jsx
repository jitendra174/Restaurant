import React from "react";
import "../styles/style.css";
import { useCart } from './CartContext';
import { toast } from "react-toastify";

import chickenBriyaniImage from "../Assets/briyani.jpg";
import fishCurryImage from "../Assets/fish.jpg";
import paneerMasalaImage from "../Assets/paneer.jpg";
import chickenGravyImage from "../Assets/chickengravy.jpg";
import butterNaanImage from "../Assets/naan.jpg";
import mojitoImage from "../Assets/drinks.jpg";
import eggGravyImage from "../Assets/Egg.jpg";
import friedRiceImage from "../Assets/fried.jpg";

function Menu() {
  const { addToCart } = useCart();

  const menuItems = [
    { 
      id: 1,
      image: chickenBriyaniImage, 
      name: "Chicken Briyani", 
      price: 250,
      description: "Fragrant basmati rice cooked with tender chicken and aromatic spices"
    },
    { 
      id: 2,
      image: fishCurryImage, 
      name: "Fish Curry", 
      price: 150,
      description: "Fresh fish simmered in a rich and tangy coconut curry"
    },
    { 
      id: 3,
      image: paneerMasalaImage, 
      name: "Paneer Masala", 
      price: 120,
      description: "Soft paneer cubes in a creamy tomato and onion gravy"
    },
    { 
      id: 4,
      image: chickenGravyImage, 
      name: "Chicken Gravy", 
      price: 150,
      description: "Juicy chicken pieces in a flavorful onion-tomato masala"
    },
    { 
      id: 5,
      image: butterNaanImage, 
      name: "Butter Naan", 
      price: 100,
      description: "Soft leavened bread brushed with butter, perfect with curries"
    },
    { 
      id: 6,
      image: mojitoImage, 
      name: "Mojito", 
      price: 150,
      description: "Refreshing mint-lime mocktail with soda and crushed ice"
    },
    { 
      id: 7,
      image: eggGravyImage, 
      name: "Egg Gravy", 
      price: 100,
      description: "Boiled eggs in a spicy and tangy masala gravy"
    },
    { 
      id: 8,
      image: friedRiceImage, 
      name: "Fried Rice", 
      price: 150,
      description: "Stir-fried rice with vegetables and aromatic seasonings"
    },
  ];

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image
    });
    toast.success(`${item.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-heading">
      <div className="titles">
        <h2 className="title" id="menu-heading">Our Dishes</h2>
        <p className="title-text">
          Our Dishes, a Fusion of Passion and Precision
        </p>
      </div>

      <div className="card-section" role="list">
        {menuItems.map((item) => (
          <article 
            className="card" 
            key={item.id}
            role="listitem"
            aria-labelledby={`item-${item.id}-title`}
          >
            <div className="cardimg-layer">
              <div className="card-img">
                <img
                  src={item.image}
                  alt={item.name}
                  width="200"
                  height="200"
                  className="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="card-details">
              <h3 className="card-title" id={`item-${item.id}-title`}>
                {item.name}
              </h3>
              <p className="card-description">{item.description}</p>
              <p className="card-rate">Price: ₹{item.price}</p>
            </div>
            <div className="cardbtn-layer">
              <button 
                className="card-btn" 
                onClick={() => handleAddToCart(item)}
                aria-label={`Add ${item.name} to cart`}
              >
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Menu;