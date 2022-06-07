import React from "react";
import useReview from "../../Hooks/Hooks";
import product from "../../Image/product.png";
import CLink from "../Custom/CLink";
import Homes from "../Homes/Homes";
import "./Home.css";

const Home = () => {
  const [reviews] = useReview();
  //setReviews
  return (
    <div className="p-3">
      <div className="xl:flex">
        <div className="xl:w-2/3 xl:my-auto">
          <img src={product} alt="" />
        </div>

        <div className="xl:w-full">
          <h1 className="pb-5 text-xs text-[#758283] xl:text-2xl xl:font-semibold mt-36 ">
            Skytech Prism II Gaming PC Desktop <br /> Intel Core i9 12900K 3.2
            GHz, RTX 3090,
            <br /> 1TB NVME Gen4 SSD, 32G DDR5 RGB, 850W Gold PSU, 360mm AIO, AC
            Wi-Fi, Windows 10 Home 64-bit
          </h1>
          <h1 className="text-xs text-orange-400 xl:font-bold xl:text-2xl">
            About this item{" "}
          </h1>
          <hr />
          <hr />
          <ul className="pt-4 text-sm text-[#758283s] xl:text-md">
            <li>
              ✔INTEL Core i9 12900K 3.2GHz (5.1GHz Max Boost) CPU Processor |
              1TB NVME Gen4 SSD – Up to 30x Faster Than Traditional HDD | 360mm
              AIO
            </li>
            <br />
            <li>
              ✔ RTX 3090 24GB GDDR6X Graphics Card (Brand may vary) | 32G DDR5
              RGB Gaming Memory with Heat Spreader | Windows 10 Home 64-bit
            </li>
            <br />
            <li>
              ✔ 802.11AC | No Bloatware | Graphic output options include 1 x
              HDMI, and 1 x Display Port Guaranteed, Additional Ports may vary |
              USB Ports Including 2.0, 3.0, and 3.2 Gen1 Ports | HD Audio and
              Mic | Free Gaming Keyboard and Mouse
            </li>
            <br />
            <li>
              ✔ Maintain Higher Boost Speed with 360mm AIO Cooler and 9 ARGB
              Fans for Maximum Cooling Performance | Showcase Your PC with the
              Stunning Phanteks MetallicGear Neo Qube Case - Black/White | 1
              Year Warranty on Parts and Labor | Lifetime Free Technical Support
              | Assembled in the USA
            </li>
            <br />
            <li className="pb-5">
              This powerful gaming PC is capable of running all your favorite
              games such as Call of Duty Warzone, Fornite, Escape from Tarkov,
              Grand Theft Auto V, Valorant, World of Warcraft, League of
              Legends, Apex Legends, Roblox, PLAYERUNKNOWN's Battlegrounds,
              Overwatch, Counter-Strike: Global Offensive, Battlefield V, New
              World, Minecraft, Elden Ring, Rocket League, The Division 2, and
              more at Ultra settings, detailed 4K Ultra HD resolution, and
              smooth 60+ FPS gameplay. › See more product details Note: Products
              with electrical plugs are designed for use in the US. Outlets and
              voltage differ internationally and this product may require an
              adapter or converter for use in your destination. Please check
              compatibility before purchasing.
            </li>
          </ul>
        </div>
      </div>
      <a
        href="https://www.amazon.com/vdp/0922f3bf9d1b4cbf9d7ecd021eda37c0?ref=dp_vse_rvc_0"
        target="_blank"
      >
        <button className="font-mono button button-1 button-2 xl:my-auto">
          See Video
        </button>
      </a>
      <div className="mx-auto mb-5 font-sans text-3xl font-extrabold text-center text-orange-400 xl:w-1/2 xl:text-5xl mt-28">
        <h2>All Customer Reviews</h2>
      </div>
      <div className="text-white grid grid-cols-3">
        {reviews.slice(0, 3).map((review) => (
          <Homes review={review} key={review.id}></Homes>
        ))}
      </div>
      <CLink to="/reviews" className="pl-44">
        <button className="review-position button-review button-1 button-2 text-white">
          See All Review
        </button>
      </CLink>
    </div>
  );
};

export default Home;
