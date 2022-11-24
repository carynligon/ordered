import { FunctionComponent } from "react";
import Image from "next/image";

import styles from "./RestaurantPreview.module.scss";

type Props = {
  restaurant: {
    image: string;
    name: string;
  };
};

const RestaurantPreview: FunctionComponent<Props> = ({ restaurant }) => {
  console.log("??", restaurant);
  return (
    <div className={styles.preview}>
      <Image
        alt={restaurant.name}
        fill
        // sizes="(max-width: 768px) 500px,
        //       (max-width: 1200px) 25px,
        //       33vw"
        src={restaurant.image}
        // width="300"
        // height="300"
      />
      <h3>{restaurant.name}</h3>
    </div>
  );
};

export default RestaurantPreview;
