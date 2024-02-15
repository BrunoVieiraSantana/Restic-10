import styles from "./page.module.css";
import utils from "@/components/utils.module.css";
import ProductGallery from "@/components/productGallery";
import AddToCart from "@/components/addToCart";
import { product } from "@/public/data";

export default function RootPage() {
  return (
    <main className="">
      <h1 className={utils.srOnly}>
        E-Rede
      </h1>

      <ProductGallery images={product.images} />

      <div className={styles.productDetail}>
        <span
          className="text-blue-900 font-semibold text-xl py-6 pl-7  w-full"
        >
          {product.company}
        </span>
        <h1 className={`${utils.textNeutral700} ${utils.fs800}`}>
          {product.title}
        </h1>
        <p>{product.description}</p>
        <div className={`${styles.productPrice} ${utils.flex}`}>
          <div className={`${styles.newPrice} ${utils.flex} ${utils.fw700}`}>
            <span className={`${utils.textNeutral700} ${utils.fs500}`}>
              ${product.currentPrice.toFixed(2)}
            </span>
  
          </div>

        </div>
        <AddToCart
          name={product.title}
          price={product.currentPrice}
          thumbnail={product.images.thumbnails[0].src}
        />
      </div>
    </main>
  );
}
