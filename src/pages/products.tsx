// Packages Import
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components Import
import Card from "@/components/Card";
import CardSlider from "@/components/CardSlider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Types Import
import { Product, ApiResponse } from "@/types/type";

// Styles Import
import styles from "@/styles/Products.module.scss";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    // Fetch categories if you want to fetch them form api
    // axios.get('https://dummyjson.com/products/categories')
    //   .then(response => setCategories(response.data))
    //   .catch(error => console.error('Error fetching categories:', error));

    // Fetch products
    axios
      .get<ApiResponse>("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filterProducts = () => {
    if (selectedCategory === "all") {
      return products;
    } else {
      return products.filter(
        (product) => product.category === selectedCategory
      );
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = filterProducts();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.heroSection}>
        <Header />
        <img
          className={styles.productHeader}
          src="https://res.cloudinary.com/dkjn33zdf/image/upload/v1702705191/Products_upoiy2.png"
          alt=""
        />
      </div>

      {/* Category Filter */}
      <div className={styles.upperContainer}>
        <img
          src="https://res.cloudinary.com/dkjn33zdf/image/upload/v1702711087/___all_PRODUCT_prfv1l.png"
          alt=""
        />
        <div className={styles.categoryContainer}>
          <select onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="all">All Products</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product List */}
      <div className={styles.productsContainer}>
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default ProductsPage;
