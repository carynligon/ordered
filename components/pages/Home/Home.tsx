import { restaurants } from "../../../fixtures";
import RestaurantPreview from "../../RestaurantPreview";
import FriendFeed from "../../FriendFeed";
import Greeting from "../../Greeting";
import AddReviewBtn from "../../RestaurantLookupBtn";

const Home = () => {
  return (
    <div>
      <Greeting />
      <AddReviewBtn />
      <FriendFeed />
      <RestaurantPreview />
    </div>
  );
};

export default Home;
