import { restaurants } from "../../../fixtures";
import RestaurantPreview from "../../RestaurantPreview";
import FriendFeed from "../../FriendFeed";
import Greeting from "../../Greeting";

const Home = () => {
  return (
    <div>
      <Greeting />
      <FriendFeed />
      {restaurants.map((restaurant) => (
        <RestaurantPreview key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default Home;
