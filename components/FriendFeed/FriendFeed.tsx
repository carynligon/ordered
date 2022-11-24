import { restaurants, users } from "../../fixtures";

const FriendFeed = () => {
  const currentUser = users[0];
  return (
    <div>
      <h2>Friends</h2>
      {currentUser.friends.map((f) => {
        const friend = users.find((user) => user.id === f.user_id);
        const mostRecentlyRatedRestaurantID =
          friend?.recommendations[0].restaurant_id;
        const mostRecentlyRatedRestaurant = restaurants.find(
          (restaurant) => restaurant.id === mostRecentlyRatedRestaurantID
        );
        return (
          <div key={f.user_id}>
            <h4>
              {friend?.name} recently rated something from{" "}
              {mostRecentlyRatedRestaurant?.name}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default FriendFeed;
