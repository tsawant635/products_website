// Packages Import
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Types Import
import { Product, SingleProduct } from "@/types/type";

// Styles Import
import styles from "@/styles/Product.module.scss";

const ProductPage = () => {
  const router = useRouter();
  const { product } = router.query;
  const [productData, setProductData] = useState<Product | null>(null);

  useEffect(() => {
    if (product) {
      // Fetch product details based on the product ID
      axios
        .get<SingleProduct>(`https://dummyjson.com/products/${product}`)
        .then((response) => setProductData(response.data))
        .catch((error) =>
          console.error("Error fetching product details:", error)
        );
    }
  }, [product]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const ratingImages = Array(4)
    .fill(null)
    .map((_, index) => (
      <img
        key={index}
        src={
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='23' viewBox='0 0 28 23' fill='none'%3E%3Cpath d='M13.8512 0L16.9833 8.43456H27.1189L18.919 13.6474L22.0511 22.082L13.8512 16.8691L5.65138 22.082L8.78345 13.6474L0.5836 8.43456H10.7192L13.8512 0Z' fill='url(%23paint0_linear_47_2675)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_47_2675' x1='-0.0991821' y1='12.2061' x2='27.8014' y2='12.2061' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.02' stop-color='%23A8620A'/%3E%3Cstop offset='0.2' stop-color='%23E09519'/%3E%3Cstop offset='0.48' stop-color='%23FFE581'/%3E%3Cstop offset='0.52' stop-color='%23FCDC75'/%3E%3Cstop offset='0.6' stop-color='%23F6C755'/%3E%3Cstop offset='0.71' stop-color='%23ECA522'/%3E%3Cstop offset='0.75' stop-color='%23E8980F'/%3E%3Cstop offset='1' stop-color='%23FEB838'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
        }
        alt={`Rating Star ${index + 1}`}
      />
    ));

  return (
    <div className={styles.mainContainer}>
      <div className={styles.heroSection}>
        <Header />
        <img
          className={styles.productHeader}
          src="https://res.cloudinary.com/dkjn33zdf/image/upload/v1702712974/Group_1_1_vcfw6m.png"
          alt=""
        />
      </div>
      <h1>{productData.title}</h1>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.img} src={productData.images[0]} alt="" />
        </div>
        <div className={styles.contentContainer}>
          {" "}
          <p className={styles.title}>{productData.title}</p>
          <p className={styles.rating}>
            {ratingImages}
            {productData.rating}
          </p>
          <p className={styles.description}>{productData.description}</p>
          <p className={styles.price}>Price : {productData.price}</p>
          <p className={styles.discount}>
            Discount : {productData.discountPercentage}
          </p>
        </div>
      </div>

      <div className={styles.cardImages}>
        {productData.images.map((image, index) => (
          <img key={index} className={styles.singleImg} src={image} alt="" />
        ))}
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
