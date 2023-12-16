//Packages Import
import React, { useState, useEffect } from "react";

// Component Import
import Header from "@/components/Header";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import CardSlider from "@/components/CardSlider";
import { useRouter } from 'next/router';

// Import Types
import {Product , ApiResponse} from "@/types/type"

// Styles Import
import styles from "@/styles/Home.module.scss";


const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);


  const router = useRouter();

  const handleViewAllProducts = () => {
    router.push('/products');
  };

  useEffect(() => {
    // Fetch data from the API
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data : ApiResponse) => setProducts(data.products));
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, 6);

  return (
    <div className={styles.homeContainer}>
    <div className={styles.heroSection}>
    <Header/>
      <img src="https://res.cloudinary.com/dkjn33zdf/image/upload/v1702698748/Group_1_usum2v.png" alt="" />
      <img src="https://res.cloudinary.com/dkjn33zdf/image/upload/v1702698820/Group_1261152764_hn1tmh.png" alt="" />

      <button onClick={handleViewAllProducts}>
      View All Products
      <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='34' viewBox='0 0 34 34' fill='none'%3E%3Cpath d='M10.5948 16.5706C10.5948 17.0376 10.7531 17.4294 11.0695 17.7458C11.3849 18.0612 11.7761 18.2189 12.2431 18.2189L17.5177 18.2189L16.0342 19.7024C15.732 20.0045 15.5809 20.3891 15.5809 20.8562C15.5809 21.3232 15.732 21.7078 16.0342 22.01C16.3364 22.3122 16.721 22.4633 17.188 22.4633C17.655 22.4633 18.0396 22.3122 18.3418 22.01L22.6274 17.7244C22.7922 17.5596 22.9093 17.381 22.9785 17.1887C23.0466 16.9964 23.0807 16.7904 23.0807 16.5706C23.0807 16.3508 23.0466 16.1448 22.9785 15.9525C22.9093 15.7602 22.7922 15.5816 22.6274 15.4168L18.3418 11.1312C18.0396 10.829 17.655 10.6779 17.188 10.6779C16.721 10.6779 16.3364 10.829 16.0342 11.1312C15.732 11.4334 15.5809 11.818 15.5809 12.285C15.5809 12.752 15.732 13.1366 16.0342 13.4388L17.5177 14.9223L12.2431 14.9223C11.7761 14.9223 11.3849 15.0805 11.0695 15.397C10.7531 15.7124 10.5948 16.1036 10.5948 16.5706ZM0.705028 16.5706C0.705028 14.2904 1.13798 12.1477 2.00389 10.1422C2.8687 8.1368 4.04283 6.39235 5.5263 4.90888C7.00977 3.42541 8.75422 2.25127 10.7596 1.38647C12.7651 0.520561 14.9079 0.0876075 17.188 0.0876076C19.4682 0.0876077 21.6109 0.520561 23.6164 1.38647C25.6218 2.25127 27.3662 3.42541 28.8497 4.90888C30.3332 6.39235 31.5079 8.1368 32.3738 10.1422C33.2386 12.1477 33.671 14.2904 33.671 16.5706C33.671 18.8507 33.2386 20.9935 32.3738 22.999C31.5079 25.0044 30.3332 26.7488 28.8497 28.2323C27.3662 29.7158 25.6218 30.8899 23.6164 31.7547C21.6109 32.6206 19.4682 33.0536 17.188 33.0536C14.9079 33.0536 12.7651 32.6206 10.7596 31.7547C8.75422 30.8899 7.00977 29.7158 5.5263 28.2323C4.04283 26.7488 2.8687 25.0044 2.00389 22.999C1.13798 20.9935 0.705028 18.8507 0.705028 16.5706ZM4.00162 16.5706C4.00162 20.2243 5.28565 23.3358 7.8537 25.9049C10.4228 28.473 13.5343 29.757 17.188 29.757C20.8417 29.757 23.9532 28.473 26.5223 25.9049C29.0904 23.3358 30.3744 20.2243 30.3744 16.5706C30.3744 12.9169 29.0904 9.80597 26.5223 7.23793C23.9532 4.66878 20.8417 3.3842 17.188 3.3842C13.5343 3.3842 10.4228 4.66878 7.8537 7.23792C5.28565 9.80597 4.00162 12.9169 4.00162 16.5706Z' fill='url(%23paint0_linear_1995_757)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1995_757' x1='17.1887' y1='0.0876076' x2='17.1887' y2='33.0533' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.02' stop-color='%23920AA8'/%3E%3Cstop offset='0.2' stop-color='%23E019CC'/%3E%3Cstop offset='0.48' stop-color='%23FF81E3'/%3E%3Cstop offset='0.52' stop-color='%23FC75D6'/%3E%3Cstop offset='0.6' stop-color='%23DF55F6'/%3E%3Cstop offset='0.71' stop-color='%23E822EC'/%3E%3Cstop offset='0.75' stop-color='%23E80F91'/%3E%3Cstop offset='0.8125' stop-color='%23EE19D8'/%3E%3Cstop offset='1' stop-color='%23FE3873'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
          alt="SVG Image"
        />
      </button>

    </div>

    <img className={styles.productTitle} src="https://res.cloudinary.com/dkjn33zdf/image/upload/v1702705191/Products_upoiy2.png" alt="" />
      <div className={styles.productContainer}>
    
        {displayedProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "View Less Products" : "View All Products"}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='34' viewBox='0 0 34 34' fill='none'%3E%3Cpath d='M10.5948 16.5706C10.5948 17.0376 10.7531 17.4294 11.0695 17.7458C11.3849 18.0612 11.7761 18.2189 12.2431 18.2189L17.5177 18.2189L16.0342 19.7024C15.732 20.0045 15.5809 20.3891 15.5809 20.8562C15.5809 21.3232 15.732 21.7078 16.0342 22.01C16.3364 22.3122 16.721 22.4633 17.188 22.4633C17.655 22.4633 18.0396 22.3122 18.3418 22.01L22.6274 17.7244C22.7922 17.5596 22.9093 17.381 22.9785 17.1887C23.0466 16.9964 23.0807 16.7904 23.0807 16.5706C23.0807 16.3508 23.0466 16.1448 22.9785 15.9525C22.9093 15.7602 22.7922 15.5816 22.6274 15.4168L18.3418 11.1312C18.0396 10.829 17.655 10.6779 17.188 10.6779C16.721 10.6779 16.3364 10.829 16.0342 11.1312C15.732 11.4334 15.5809 11.818 15.5809 12.285C15.5809 12.752 15.732 13.1366 16.0342 13.4388L17.5177 14.9223L12.2431 14.9223C11.7761 14.9223 11.3849 15.0805 11.0695 15.397C10.7531 15.7124 10.5948 16.1036 10.5948 16.5706ZM0.705028 16.5706C0.705028 14.2904 1.13798 12.1477 2.00389 10.1422C2.8687 8.1368 4.04283 6.39235 5.5263 4.90888C7.00977 3.42541 8.75422 2.25127 10.7596 1.38647C12.7651 0.520561 14.9079 0.0876075 17.188 0.0876076C19.4682 0.0876077 21.6109 0.520561 23.6164 1.38647C25.6218 2.25127 27.3662 3.42541 28.8497 4.90888C30.3332 6.39235 31.5079 8.1368 32.3738 10.1422C33.2386 12.1477 33.671 14.2904 33.671 16.5706C33.671 18.8507 33.2386 20.9935 32.3738 22.999C31.5079 25.0044 30.3332 26.7488 28.8497 28.2323C27.3662 29.7158 25.6218 30.8899 23.6164 31.7547C21.6109 32.6206 19.4682 33.0536 17.188 33.0536C14.9079 33.0536 12.7651 32.6206 10.7596 31.7547C8.75422 30.8899 7.00977 29.7158 5.5263 28.2323C4.04283 26.7488 2.8687 25.0044 2.00389 22.999C1.13798 20.9935 0.705028 18.8507 0.705028 16.5706ZM4.00162 16.5706C4.00162 20.2243 5.28565 23.3358 7.8537 25.9049C10.4228 28.473 13.5343 29.757 17.188 29.757C20.8417 29.757 23.9532 28.473 26.5223 25.9049C29.0904 23.3358 30.3744 20.2243 30.3744 16.5706C30.3744 12.9169 29.0904 9.80597 26.5223 7.23793C23.9532 4.66878 20.8417 3.3842 17.188 3.3842C13.5343 3.3842 10.4228 4.66878 7.8537 7.23792C5.28565 9.80597 4.00162 12.9169 4.00162 16.5706Z' fill='url(%23paint0_linear_1995_757)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1995_757' x1='17.1887' y1='0.0876076' x2='17.1887' y2='33.0533' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.02' stop-color='%23920AA8'/%3E%3Cstop offset='0.2' stop-color='%23E019CC'/%3E%3Cstop offset='0.48' stop-color='%23FF81E3'/%3E%3Cstop offset='0.52' stop-color='%23FC75D6'/%3E%3Cstop offset='0.6' stop-color='%23DF55F6'/%3E%3Cstop offset='0.71' stop-color='%23E822EC'/%3E%3Cstop offset='0.75' stop-color='%23E80F91'/%3E%3Cstop offset='0.8125' stop-color='%23EE19D8'/%3E%3Cstop offset='1' stop-color='%23FE3873'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
          alt="SVG Image"
        />
      </button>

      <div className={styles.footer}>
      <Footer />
      </div>
     
    </div>
  );
};

export default Home;
