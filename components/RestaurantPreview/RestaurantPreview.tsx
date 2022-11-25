import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import { restaurants } from "../../fixtures";
import styles from "./RestaurantPreview.module.scss";

type Props = {};

const RestaurantPreview: FunctionComponent<Props> = () => {
  return (
    <>
      <h2 className={styles.title}>Recently Reviewed in Austin, TX</h2>
      <div className={styles.carousel}>
        <div className={styles.carouselContent}>
          {restaurants.map((restaurant) => (
            <div className={styles.restaurantItem} key={restaurant.id}>
              <Link href={`/restaurants/${restaurant.name}`}>
                <h3>{restaurant.name}</h3>
                <div className={styles.preview}>
                  <Image alt={restaurant.name} fill src={restaurant.image} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantPreview;
