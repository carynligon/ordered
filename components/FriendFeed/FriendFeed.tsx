import Image from "next/image";
import Link from "next/link";
import { dishes, restaurants, users } from "../../fixtures";

import styles from "./FriendFeed.module.scss";

const FriendFeed = () => {
  const currentUser = users[0];
  return (
    <div>
      <h2 className={styles.title}>Friends</h2>
      <div className={styles.carousel}>
        <div className={styles.carouselContent}>
          {currentUser.friends.map((f) => {
            const friend = users.find((user) => user.id === f.user_id);
            const mostRecentlyRatedRestaurantID =
              friend?.recommendations[0].restaurant_id;
            const mostRecentlyRatedRestaurant = restaurants.find(
              (restaurant) => restaurant.id === mostRecentlyRatedRestaurantID
            );
            const reviewedDishId = friend?.recommendations[0].dishes[0].dish_id;
            const reviewedDish = dishes.find(
              (dish) => dish.id === reviewedDishId
            );
            return (
              <div className={styles.friendItem} key={f.user_id}>
                <h4>
                  <Link href={`/profile/${f.user_id}`}>@{friend?.name}</Link>{" "}
                  recently rated something from{" "}
                  {mostRecentlyRatedRestaurant?.name}
                </h4>
                <Link href={`/reviews/${mostRecentlyRatedRestaurantID}`}>
                  {reviewedDish && (
                    <div className={styles.dishImage}>
                      <Image
                        alt={reviewedDish.name}
                        fill
                        src={reviewedDish.image}
                      />
                    </div>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FriendFeed;
