import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import MultipleItemsCarousel from "../../components/MultiItemCarousel/MultiItemCarousel";
import RestaurantCard from "../../components/RestarentCard/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../../../State/Customers/Restaurant/restaurant.action";

const HomePage = () => {
  const { auth, restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user) {
      dispatch(getAllRestaurantsAction(localStorage.getItem("jwt")));
    }
  }, [auth.user, dispatch]);

  return (
    <div className="" style={{ paddingTop: "5px" }}>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 offset-lg-3"
              style={{ height: "90%", transform: "translateY(-30px)" }}
            >
              <p
                className="animated fadeInDown text-4xl text-[#ffc529] lg:text-7xl font-bold z-10 py-5 text-3d"
                style={{
                  fontFamily: "cursive",
                  fontSize: "90px",
                }}
              >
                Gourmet Go
              </p>
              <p
                className="animated fadeInUp z-10 text-white text-xl lg:text-4xl text-3d"
                style={{ fontSize: "30px" }}
              >
                Taste the Convenience
                <br />
              </p>
              <p className="animated fadeInUp" style={{ fontSize: "20px" }}>
                Food, Fast and Delivered.
              </p>
              <div className="text-center">
                <button
                  className="order-now-btn animated fadeInUp"
                  style={{
                    backgroundColor: "#ffc529",
                    color: "#fff",
                    padding: "10px 20px",
                    fontSize: "18px",
                    border: "none",
                    borderRadius: "5px",
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/account/login")}
                >
                  {auth.user ? "View Menu" : "Order Now"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="animated-background">
          <div className="bg-layer">
            <img src="/images/homewp.webp" alt="Background Image 1" />
          </div>
          <div className="bg-layer">
            <img src="/images/homewp2.webp" alt="Background Image 2" />
          </div>
          <div className="bg-layer">
            <img src="/images/homewp3.webp" alt="Background Image 3" />
          </div>
          <div className="bg-layer">
            <img src="/images/homewp6.webp" alt="Background Image 1" />
          </div>
          <div className="bg-layer">
            <img src="/images/homewp5.webp" alt="Background Image 2" />
          </div>
          <div className="bg-layer">
            <img src="/images/homewp4.webp" alt="Background Image 3" />
          </div>
        </div>
      </section><br/><br/><br/>

      <section className="how-it-works p-10 lg:py-10 lg:px-20">
  <h2 className="text-3xl font-semibold text-white py-3">How It Works</h2><br/><br/>
  <div className="flowchart-container">
    <div className="flowchart-step animated fadeInLeft">
      <img src="/images/pick_ur_restaurant.jpg" alt="Pick Restaurant" />
      <div className="flowchart-text">Step 1: Pick your Restaurant</div>
    </div>
    <div className="flowchart-arrow">&darr;</div>
    <div className="flowchart-step animated fadeInLeft">
      <img src="/images/choose_dishes_icon.jpg" alt="Choose Dishes" />
      <div className="flowchart-text">Step 2: Choose Your Favorite Dishes</div>
    </div>
    <div className="flowchart-arrow">&darr;</div>
    <div className="flowchart-step animated fadeInRight">
      <img src="/images/place_order_icon.jpg" alt="Place Order" />
      <div className="flowchart-text">Step 3: Place Your Order</div>
    </div>
    <div className="flowchart-arrow">&darr;</div>
    <div className="flowchart-step animated fadeInRight">
      <img src="/images/enjoy_meal_icon.jpg" alt="Enjoy Meal" />
      <div className="flowchart-text">Step 4: Enjoy Your Meal</div>
    </div>
  </div>
</section>


      <section className="p-10 lg:py-10 lg:px-20">
        <div className="">
          <p className="text-4xl font-semibold text-[#fdc401] py-3 pb-10 ">
            Top Meals
          </p><br/>
          <MultipleItemsCarousel />
        </div>
      </section><br/><br/>

      <section className="px-5 lg:px-20">
        <div className="">
          <h1 className="text-4xl font-semibold text-[#fdc401] py-3">
            Order From Our Handpicked Favorites
          </h1><br/>
          <div className="flex flex-wrap items-center justify-around text-[#fdc401]">
            {restaurant.restaurants.map((item, i) => (
              <RestaurantCard data={item} index={i} key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
