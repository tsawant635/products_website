// Package Imports
import { useRouter } from "next/router";

// Types Imports
import { SingleProduct } from "@/types/type";

// Styles Imports
import styles from "@/styles/Card.module.scss";

interface CardProps {
  product: SingleProduct;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const router = useRouter();

  const handleViewClick = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <p>{product.brand.split(" ").slice(0, 1)}</p>
        <div className={styles.svgContainer}>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='31' height='31' viewBox='0 0 31 31' fill='none'%3E%3Cpath d='M1.66124 7.37455C4.93894 0.163628 11.4943 3.55058 14.3623 6.14542C16.9572 3.414 23.2121 -0.164165 27.4731 7.37455C31.7341 14.9133 20.508 23.8996 14.3623 27.4504C8.76291 23.763 -1.61645 14.5855 1.66124 7.37455Z' stroke='%23040404' stroke-width='1.63885'/%3E%3C/svg%3E"
            alt="SVG Image"
          />
        </div>
      </div>
      <div className={styles.content}>
        <img src={product.images[0]} alt="headphone" width={200} />
        <p>{product.title.split(" ").slice(0, 2)}</p>
      </div>
      <div className={styles.btn}>
        <button onClick={handleViewClick}>
          VIEW
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='39' height='39' viewBox='0 0 39 39' fill='none'%3E%3Cpath d='M19.5724 27.1992L27.3147 19.457L19.5724 11.7148L16.8627 14.4246L19.9595 17.5214H11.8302V21.3926H19.9595L16.8627 24.4894L19.5724 27.1992ZM19.5724 38.8126C16.8949 38.8126 14.3787 38.3042 12.0238 37.2873C9.66884 36.2705 7.62038 34.8918 5.87838 33.1511C4.13637 31.4091 2.75761 29.3606 1.74209 27.0057C0.72657 24.6507 0.218164 22.1345 0.216873 19.457C0.216873 16.7795 0.725279 14.2633 1.74209 11.9083C2.7589 9.55341 4.13766 7.50494 5.87838 5.76294C7.62038 4.02094 9.66884 2.64218 12.0238 1.62666C14.3787 0.611137 16.8949 0.102731 19.5724 0.10144C22.25 0.10144 24.7662 0.609847 27.1211 1.62666C29.476 2.64347 31.5245 4.02223 33.2665 5.76294C35.0085 7.50494 36.3879 9.55341 37.4047 11.9083C38.4215 14.2633 38.9293 16.7795 38.928 19.457C38.928 22.1345 38.4196 24.6507 37.4028 27.0057C36.386 29.3606 35.0072 31.4091 33.2665 33.1511C31.5245 34.8931 29.476 36.2725 27.1211 37.2893C24.7662 38.3061 22.25 38.8139 19.5724 38.8126ZM19.5724 34.9414C23.8952 34.9414 27.5566 33.4414 30.5567 30.4413C33.5568 27.4412 35.0569 23.7797 35.0569 19.457C35.0569 15.1343 33.5568 11.4728 30.5567 8.47272C27.5566 5.47261 23.8952 3.97255 19.5724 3.97255C15.2497 3.97255 11.5883 5.47261 8.58815 8.47272C5.58804 11.4728 4.08799 15.1343 4.08799 19.457C4.08799 23.7797 5.58804 27.4412 8.58815 30.4413C11.5883 33.4414 15.2497 34.9414 19.5724 34.9414Z' fill='black'/%3E%3C/svg%3E"
            alt="SVG Image"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
