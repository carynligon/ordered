import { useRouter } from "next/router";

const RestaurantDetailsPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <p>Restaurant details for {query.restaurant}</p>
    </div>
  );
};

export default RestaurantDetailsPage;
